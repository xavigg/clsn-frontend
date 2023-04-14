"use client";
import {
  Box,
  chakra,
  Container,
  HStack,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaRegHandPointRight,
  FaFacebookF,
  FaStore,
} from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft() {
  return (
    <Box boxShadow={'xs'}>
      <Container
        color={"black"}
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <HStack>
          <FaStore />
          <Text align={"center"}>Nacion 209 - San Nicolas</Text>
        </HStack>
        <Stack align={"center"} direction={"row"} spacing={4}>
          <Text align={"center"}>Seguinos en nuestras redes</Text>
          <FaRegHandPointRight />
          <SocialButton
            label={"Facebook"}
            href={"https://www.facebook.com/celuslibres.sn/"}
          >
            <FaFacebookF />
          </SocialButton>
          <SocialButton
            label={"Instagram"}
            href={"https://www.instagram.com/celuslibres/"}
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
