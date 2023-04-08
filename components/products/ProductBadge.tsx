"use client";
import {
  Button,
  Text,
  ButtonGroup,
  Link,
  SimpleGrid,
  Flex,
  Avatar,
  Box,
  Badge,
} from "@chakra-ui/react";
import { SiWhatsapp } from "react-icons/si";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Product } from "@/app/products/models";
import { useEffect, useState } from "react";
import Loading from "@/app/products/loading";

interface Props {
  products: Product[];
}

export default function ProductBadge({ products }: Props) {

  const [hasMounted, setHasMounted] = useState(false);

  // Hooks
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Render
if (!hasMounted) return <Loading/>;

  return (
    <SimpleGrid columns={1} spacing={2}>
      {products.map((product) => (
        <div key={product._id}>
          <Flex>
            <Avatar
              width={100}
              height={100}
              size="xl"
              src={product.avatarUrl}
            />
            <Box ml="3">
              <Text fontWeight="bold">
                {product.productName}
                <Badge ml="1" colorScheme="green">
                  {product.details.condition}
                </Badge>
              </Text>
              <Text fontSize="sm">
                <b>RAM/MEMORIA: </b>
                {product.details.ramSize}/{product.details.storageSize}GB
                <br />
                <b>EFECTIVO: </b>${product.price.toLocaleString()}
              </Text>
              <ButtonGroup variant="solid" spacing="2">
                <Button
                  rightIcon={<SiWhatsapp />}
                  textAlign={"center"}
                  size="xs"
                  isExternal
                  as={Link}
                  href={`http://wa.me/3364308303?text=${encodeURIComponent(
                    `Hola, necesito info sobre ${product.productName}.`
                  )}`}
                  colorScheme={"whatsapp"}
                >
                  Consultar
                </Button>
                <Button
                  rightIcon={<InfoOutlineIcon />}
                  size="xs"
                  isExternal
                  as={Link}
                  href={`http://wa.me/3364308303?text=${encodeURIComponent(
                    `Hola, necesito info sobre ${product.description}.`
                  )}`}
                  colorScheme={"facebook"}
                  margin={"auto"}
                >
                  Detalles
                </Button>
              </ButtonGroup>
            </Box>
          </Flex>
        </div>
      ))}
    </SimpleGrid>
  );
}
