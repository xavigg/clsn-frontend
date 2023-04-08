"use client";
import {
  Image,
  Button,
  Stack,
  Text,
  Divider,
  ButtonGroup,
  Heading,
  Link,
  Card,
  CardBody,
  CardFooter,
  SimpleGrid,
} from "@chakra-ui/react";
import { SiWhatsapp } from "react-icons/si";
import { Product } from "@/app/products/models";
import { useEffect, useState } from "react";
import Loading from "@/app/products/loading";

interface Props {
  products: Product[];
}

export default function ProductCard({ products }: Props) {
  
  const [hasMounted, setHasMounted] = useState(false);
  
  // Hooks
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Render
  if (!hasMounted) return <Loading/>;

  return (
    <div>
      <SimpleGrid minChildWidth="330px" spacing="10px">
        {products.map((product) => (
          <Card key={product.internalCode} maxW="sm">
            <CardBody>
              <Image
                boxSize={"320"}
                src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1679283492.42643816!800x800!85.png"
                alt={product.description}
                borderRadius="lg"
              />

              <Stack mt="6" spacing="3">
                <Heading size="md">{product.productName}</Heading>
                <Text>
                  <b>RAM/MEMORIA: </b>
                  {product.description}
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  ${product.price.toLocaleString()}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup variant="solid" colorScheme="whatsapp" spacing="2">
                <Button
                  isExternal
                  leftIcon={<SiWhatsapp />}
                  as={Link}
                  href={`http://wa.me/3364308303?text=${encodeURIComponent(
                    `Hola, necesito info sobre ${product.productName}.`
                  )}`}
                  colorScheme={"whatsapp"}
                  margin={"auto"}
                >
                  {" "}
                  Pedir Info
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Agregar al carrito
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
}

