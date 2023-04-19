"use client";
import { Footer, Header } from "@/components";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/local.css";
import ProductLayout from "./products/layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script></script>
      </head>
      <body>
        <CacheProvider>
          <ChakraProvider>
            <Header />
            <main className="container">
              <ProductLayout>{children}</ProductLayout>
            </main>
            <Footer />
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
