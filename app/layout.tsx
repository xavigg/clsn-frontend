'use client';
import { Footer, Header } from '@/components';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <head></head>
      <body>
        <CacheProvider>
          <ChakraProvider>
          <Header>{children}</Header>
          <Footer/>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}