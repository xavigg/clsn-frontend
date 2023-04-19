'use client';
import { Suspense } from "react";
import Loading from "./loading";
import { Box } from "@chakra-ui/react";

export default function ProductsLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode,
  }) {
    return (
      <section>
        <Box p={1} pb={"65px"}>
          {children}
        </Box>
        <nav></nav>
      </section>
    );
  }