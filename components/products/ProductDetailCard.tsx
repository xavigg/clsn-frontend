"use client";
import { Product } from "@/app/products";
import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { GiProcessor } from "react-icons/gi";
import { RiCameraFill } from "react-icons/ri";
import { FaMemory } from "react-icons/fa";
import { ImAndroid } from "react-icons/im";
import Image from "next/image";
import {
  MdOutlineBatteryUnknown,
  MdOutlineMemory,
  MdScreenshot,
} from "react-icons/md";
import Loading from "@/app/products/loading";
import "@/styles/test.css";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}

interface Props {
  products: Product;
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function BasicProductDetail({ products }: Props) {
  const [hasMounted, setHasMounted] = useState(false);

  // Hooks
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Render
  if (!hasMounted) return <Loading />;

  return (
    <Box maxW="7xl" mx={"auto"} pt={1} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={1}
        fontWeight={"bold"}
      >
        {products.productName}
        <div className="test">
          <Image
            priority
            alt="asd"
            src={products.avatarUrl}
            width={500}
            height={500}
          />
        </div>
      </chakra.h1>
      <div>{products.description}</div>
      <br />
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Procesador"}
          stat={products.details.processorName}
          icon={<GiProcessor size={"3em"} />}
        />

        <StatsCard
          title={"Almacenamiento Interno"}
          stat={`${products.details.storageSize}GB`}
          icon={<MdOutlineMemory size={"3em"} />}
        />

        <StatsCard
          title={"Memoria RAM"}
          stat={`${products.details.ramSize}GB`}
          icon={<FaMemory size={"3em"} />}
        />

        <StatsCard
          title={"Pantalla"}
          stat={products.details.screenDetail}
          icon={<MdScreenshot size={"3em"} />}
        />

        <StatsCard
          title={`Camara Principal / Cantidad: ${products.details.mainCameraQuantity}`}
          stat={`${products.details.mainCameraResolution}MP`}
          icon={<RiCameraFill size={"3em"} />}
        />

        <StatsCard
          title={"Capacidad de Bateria"}
          stat={`${products.details.batteryCapacity}mAh`}
          icon={<MdOutlineBatteryUnknown size={"3em"} />}
        />

        <StatsCard
          title={"Sistema Operativo"}
          stat={`${products.details.os}`}
          icon={<ImAndroid size={"3em"} />}
        />
      </SimpleGrid>
    </Box>
  );
}
