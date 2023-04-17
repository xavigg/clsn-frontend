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
import Link from "next/link";
import { Icon } from "@iconify/react";


interface Props {
  products: Product[];
}

const badgeColor = (badgeStatus: string) => {
  const status: any = {
    "NUEVO": "purple",
    "OFERTA": "green",
    "TOPE GAMA": "orange",
    "BESTIA": "blackAlpha"
}
const defaultColor = "red";
return status[badgeStatus] || defaultColor;
}

const badgeCheckColor = (badgeStatus: string) => {
  return (
    <>
        <Badge variant="outline" ml="1" colorScheme={badgeColor(badgeStatus)}>
        {badgeStatus}
        </Badge>
    </>
  );
};

const buttonAction = (productName: string, internalCode: string) => {
  return (
    <>
      <ButtonGroup margin-top={2} variant="solid" spacing="2">
        <Button
          boxShadow={"md"}
          variant={"solid"}
          className={"btn-details"}
          target={"_blank"}
          leftIcon={<SiWhatsapp />}
          textAlign={"center"}
          size={"xs"}
          as={Link}
          href={`http://wa.me/3364194402?text=${encodeURIComponent(`Hola, necesito info sobre ${productName}.`)}`}
          colorScheme={"whatsapp"}>
          Consultar
        </Button>

        <Button
          boxShadow={"md"}
          variant={"outline"}
          className={"btn-details"}
          leftIcon={<FiSmartphone />}
          size={"xs"}
          as={Link}
          href={`products/${internalCode}`}
          colorScheme={"twitter"}
          margin={"auto"}>
          Detalles
        </Button>
      </ButtonGroup>
    </>
  );
};

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
      <HStack>
        <Icon icon="logos:samsung" />
      </HStack>
      
      {products.map((product) => (
        <Flex key={product.internalCode}>
          {product.brand == "SAMSUNG" && ( <>
              <Image width={100} height={100} src={product.avatarUrl} />
              <Box ml="3">
                <Text fontWeight="bold">
                  <Link href={`products/${product.internalCode}`}>
                    {product.productName}
                  </Link>
                  { badgeCheckColor(product.details.condition) }
                </Text>
                
                <Text fontSize="sm">
                  <b>
                    {product.details.ramSize}GB RAM /{" "}
                    {product.details.storageSize}GB MEMORIA
                  </b>
                  <br />
                </Text>
                <Text fontSize="sm" color={"red"}>
                  
                  <b>PRECIO:</b> ${product.price.toLocaleString()}
                </Text>
                
                {buttonAction(product.productName, product.internalCode)}
              </Box>
          </>)}
      </Flex>))}

      <HStack>
        <Icon icon="simple-icons:motorola" color="#5c92fa" />
        <Text fontWeight="bold" fontSize={23} color={"#5c92fa"}>
          MOTOROLA
        </Text>
      </HStack>
      
      {products.map((product) => (
        <Flex key={product.internalCode}>
          {product.brand == "MOTOROLA" && (
            <>
              <Image width={100} height={100} src={product.avatarUrl} />
              <Box ml="3">
                <Text fontWeight="bold">
                  <Link href={`products/${product.internalCode}`}>
                    {product.productName}
                  </Link>

                  {badgeCheckColor(product.details.condition)}
                </Text>
                
                <Text fontSize="sm">
                  <b>
                    {product.details.ramSize}GB RAM /{" "}
                    {product.details.storageSize}GB MEMORIA
                  </b>
                  <br />
                </Text>
                <Text fontSize="sm" color={"red"}>
                  
                  <b>PRECIO:</b> ${product.price.toLocaleString()}
                </Text>
                
                {buttonAction(product.productName, product.internalCode)}
              </Box>
              </>)}
      </Flex>))}

      <HStack>
        <Icon icon="simple-icons:xiaomi" color="#ff6700" />
        <Text fontWeight="bold" fontSize={23} color="#ff6700">
          XIAOMI
        </Text>
      </HStack>
      
      {products.map((product) => (
        <Flex key={product.internalCode}>
          {product.brand == "XIAOMI" && (
            <>
              <Image width={100} height={100} src={product.avatarUrl} />
              <Box ml="3">
                <Text fontWeight="bold">
                  <Link href={`products/${product.internalCode}`}>
                    {product.productName}
                  </Link>

                  {badgeCheckColor(product.details.condition)}
                </Text>
                
                <Text fontSize="sm">
                  <b>
                    {product.details.ramSize}GB RAM /{" "}
                    {product.details.storageSize}GB MEMORIA
                  </b>
                  <br />
                </Text>
                <Text fontSize="sm" color={"red"}>
                  
                  <b>PRECIO:</b> ${product.price.toLocaleString()} 
                </Text>
                {buttonAction(product.productName, product.internalCode)}
              </Box>
          </>)}
      </Flex>))}
    </SimpleGrid>
  );
}
