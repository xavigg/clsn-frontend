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
  Divider,
  Kbd,
  HStack,
} from "@chakra-ui/react";
import { SiWhatsapp } from "react-icons/si";
import { FiSmartphone } from "react-icons/fi";
import { Product } from "@/app/products/models";
import { useEffect, useState } from "react";
import Loading from "@/app/products/loading";
import Link from 'next/link';
import '@/styles/test.css';
import { Icon } from '@iconify/react';

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
  if (!hasMounted) return <Loading />;

  return (
    <SimpleGrid columns={1} spacing={2}>

      <HStack><Icon icon="logos:samsung" /></HStack>
      <Divider colorScheme={"whatsapp"} orientation='horizontal' />
      {products.map((product) => (
        <>
          {product.brand == "SAMSUNG" &&
            <Flex key={product._id}>
              <Image
                width={100}
                height={100}
                src={product.avatarUrl}
              />
              <Box ml="3">
                <Text fontWeight="bold">
                  <Link href={`products/${product.internalCode}`}>{product.productName}</Link>
                  {product.details.condition === "NUEVO"
                    ? <Badge variant='outline' ml="1" colorScheme="purple">{product.details.condition}</Badge>
                    : product.details.condition === "OFERTA"
                      ? <Badge variant='subtle' ml="1" colorScheme="green">{product.details.condition}</Badge>
                      : <Badge variant='solid' ml="1" colorScheme="red">{product.details.condition}</Badge>
                  }
                </Text>
                <Divider colorScheme={"whatsapp"} orientation='horizontal' />
                <Text fontSize="sm">
                  <b>{product.details.ramSize}GB RAM / {product.details.storageSize}GB MEMORIA</b>
                  <br />
                </Text>
                <Text fontSize="sm">
                  <Divider colorScheme={"whatsapp"} orientation='horizontal' />
                  <b>PRECIO:</b> ${product.price.toLocaleString()} Efectivo
                </Text>
                <Divider colorScheme={"whatsapp"} orientation='horizontal' />
                <ButtonGroup margin-top={2} variant="solid" spacing="2">

                  <Button
                    className={"btn-details"}
                    target="_blank"
                    leftIcon={<SiWhatsapp />}
                    textAlign={"center"}
                    size="xs"
                    as={Link}
                    href={`http://wa.me/3364194402?text=${encodeURIComponent(
                      `Hola, necesito info sobre ${product.productName}.`
                    )}`}
                    colorScheme={"whatsapp"}>
                    Consultar
                  </Button>

                  <Button
                    className={"btn-details"}
                    leftIcon={<FiSmartphone />}
                    size="xs"
                    as={Link}
                    href={`products/${product.internalCode}`}
                    colorScheme={"yellow"}
                    margin={"auto"}>
                    Especificaciones
                  </Button>
                </ButtonGroup>
              </Box>
            </Flex>
          }</>
      ))}

      <HStack><Icon icon="simple-icons:motorola" color="#5c92fa"/><Text fontWeight="bold" fontSize={23} color={"#5c92fa"}>MOTOROLA</Text></HStack>
      <Divider colorScheme={"whatsapp"} orientation='horizontal' />
      {products.map((product) => (
        <>
          {product.brand == "MOTOROLA" &&
            <Flex key={product._id}>
              <Image
                width={100}
                height={100}
                src={product.avatarUrl}
              />
              <Box ml="3">
                <Text fontWeight="bold">
                  <Link href={`products/${product.internalCode}`}>{product.productName}</Link>
                  {product.details.condition === "NUEVO"
                    ? <Badge variant='outline' ml="1" colorScheme="purple">{product.details.condition}</Badge>
                    : product.details.condition === "OFERTA"
                      ? <Badge variant='subtle' ml="1" colorScheme="green">{product.details.condition}</Badge>
                      : <Badge variant='solid' ml="1" colorScheme="red">{product.details.condition}</Badge>
                  }
                </Text>
                <Divider colorScheme={"whatsapp"} orientation='horizontal' />
                <Text fontSize="sm">
                  <b>{product.details.ramSize}GB RAM / {product.details.storageSize}GB MEMORIA</b>
                  <br />
                </Text>
                <Text fontSize="sm">
                  <Divider colorScheme={"whatsapp"} orientation='horizontal' />
                  <b>PRECIO:</b> ${product.price.toLocaleString()}
                </Text>
                <Divider colorScheme={"whatsapp"} orientation='horizontal' />
                <ButtonGroup margin-top={2} variant="solid" spacing="2">

                  <Button
                    className={"btn-details"}
                    target="_blank"
                    leftIcon={<SiWhatsapp />}
                    textAlign={"center"}
                    size="xs"
                    as={Link}
                    href={`http://wa.me/3364194402?text=${encodeURIComponent(
                      `Hola, necesito info sobre ${product.productName}.`
                    )}`}
                    colorScheme={"whatsapp"}>
                    Consultar
                  </Button>

                  <Button
                    className={"btn-details"}
                    leftIcon={<FiSmartphone />}
                    size="xs"
                    as={Link}
                    href={`products/${product.internalCode}`}
                    colorScheme={"yellow"}
                    margin={"auto"}>
                    Especificaciones
                  </Button>
                </ButtonGroup>
              </Box>
            </Flex>
          }</>
      ))}

      <HStack><Icon icon="simple-icons:xiaomi" color="#ff6700" /><Text fontWeight="bold" fontSize={23}  color="#ff6700">XIAOMI</Text></HStack>
      <Divider colorScheme={"whatsapp"} orientation='horizontal' />
      {products.map((product) => (
        <>
          {product.brand == "XIAOMI" &&
            <Flex key={product._id}>
              <Image
                width={100}
                height={100}
                src={product.avatarUrl}
              />
              <Box ml="3">
                <Text fontWeight="bold">
                  <Link href={`products/${product.internalCode}`}>{product.productName}</Link>
                  {product.details.condition === "NUEVO"
                    ? <Badge variant='outline' ml="1" colorScheme="purple">{product.details.condition}</Badge>
                    : product.details.condition === "OFERTA"
                      ? <Badge variant='subtle' ml="1" colorScheme="green">{product.details.condition}</Badge>
                      : <Badge variant='solid' ml="1" colorScheme="red">{product.details.condition}</Badge>
                  }
                </Text>
                <Divider colorScheme={"whatsapp"} orientation='horizontal' />
                <Text fontSize="sm">
                  <b>{product.details.ramSize}GB RAM / {product.details.storageSize}GB MEMORIA</b>
                  <br />
                </Text>
                <Text fontSize="sm">
                  <Divider colorScheme={"whatsapp"} orientation='horizontal' />
                  <b>PRECIO:</b> ${product.price.toLocaleString()} Efectivo
                </Text>
                <Divider colorScheme={"whatsapp"} orientation='horizontal' />
                <ButtonGroup margin-top={2} variant="solid" spacing="2">

                  <Button
                    className={"btn-details"}
                    target="_blank"
                    leftIcon={<SiWhatsapp />}
                    textAlign={"center"}
                    size="xs"
                    as={Link}
                    href={`http://wa.me/3364194402?text=${encodeURIComponent(
                      `Hola, necesito info sobre ${product.productName}.`
                    )}`}
                    colorScheme={"whatsapp"}>
                    Consultar
                  </Button>

                  <Button
                    className={"btn-details"}
                    leftIcon={<FiSmartphone />}
                    size="xs"
                    as={Link}
                    href={`products/${product.internalCode}`}
                    colorScheme={"yellow"}
                    margin={"auto"}>
                    Especificaciones
                  </Button>
                </ButtonGroup>
              </Box>
            </Flex>
          }</>
      ))}
    </SimpleGrid>


  );
}
