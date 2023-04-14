"use client";
import { Footer, Header } from "@/components";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/test.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head></head>
      <body>
        <CacheProvider>
          <ChakraProvider>
            <div className="flex-wrapper">
              <Header>{children}</Header>
              <Footer />
            </div>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
