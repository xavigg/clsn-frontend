"use client";
import {
  Button,
  Text,
  ButtonGroup,
  SimpleGrid,
  Flex,
  Image,
  Box,
  Badge,
} from "@chakra-ui/react";
import { SiWhatsapp } from "react-icons/si";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Product } from "@/app/products/models";
import { useEffect, useState } from "react";
import Loading from "@/app/products/loading";
import Link from 'next/link';

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
            <Image
              width={100}
              height={100}
              src={product.avatarUrl}
            />
            <Box ml="3">
              <Text fontWeight="bold">
                <Link href={`products/${product.internalCode}`}>{product.productName}</Link>
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
                  target="_blank"
                  rightIcon={<SiWhatsapp />}
                  textAlign={"center"}
                  size="xs"
                  as={Link}
                  href={`http://wa.me/3364308303?text=${encodeURIComponent(
                    `Hola, necesito info sobre ${product.productName}.`
                  )}`}
                  colorScheme={"whatsapp"}>
                  Consultar
                </Button>

                <Button
                target="_blank"
                  rightIcon={<InfoOutlineIcon />}
                  size="xs"
                  as={Link}
                  href={`http://wa.me/3364308303?text=${encodeURIComponent(
                    `Hola, necesito info sobre ${product.productName}.`
                  )}`}
                  colorScheme={"facebook"}
                  margin={"auto"}>
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
