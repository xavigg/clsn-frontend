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
  products: Product[],
  icon?: any;
  brand: string,
  color?: string,
}

const badgeColor = (badgeStatus: string) => {
  const status: any = {
    NUEVO: "purple",
    OFERTA: "green",
    "TOPE GAMA": "orange",
    BESTIA: "blackAlpha",
  };
  const defaultColor = "red";
  return status[badgeStatus] || defaultColor;
};

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
          href={`http://wa.me/3364194402?text=${encodeURIComponent(
            `Hola, necesito info sobre ${productName}.`
          )}`}
          colorScheme={"whatsapp"}
        >
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
          margin={"auto"}
        >
          Detalles
        </Button>
      </ButtonGroup>
    </>
  );
};

export default function ProductBadge({ products, icon, brand, color }: Props) {
  const [hasMounted, setHasMounted] = useState(false);

  // Hooks
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Render
  if (!hasMounted) return <Loading />;

  return (
    <SimpleGrid columns={1} spacing={2} mb={2}>
      <HStack mb={0}>
        {brand == "SAMSUNG" ? (
          <Icon icon={icon} color={color} />
        ) : (
          <Icon icon={icon} color={color} width="30" height="30" />
        )}
        <Text fontWeight="bold" fontSize={23} color={color}>
          {brand != "SAMSUNG" ? brand : " "}
        </Text>
      </HStack>
      
      {products.map((product) => (
        <Box key={product.internalCode}>
          {product.brand == brand && (
            <>
              <Flex>
                <Image width={100} height={100} src={product.avatarUrl} />
                <Box ml="3">
                  <Text fontWeight="bold" textDecoration={"dotted"}>
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
                  </Text>
                  <Text fontSize="sm" color={"red"}>
                    <b>PRECIO:</b> ${product.price.toLocaleString()}
                  </Text>
                  {buttonAction(product.productName, product.internalCode)}
                </Box>
              </Flex>
            </>
          )}
          <Divider orientation="horizontal" borderColor={"gray.400"} mt={2}/>
        </Box>
      ))}
    </SimpleGrid>
  );
}
