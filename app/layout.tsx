"use client";
import { Footer, Header } from "@/components";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/local.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
      <script>0</script>
      </head>
      <body>
        <CacheProvider>
          <ChakraProvider>
            <div className="container">
              <Header>{children}</Header>
              <Footer />
            </div>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
