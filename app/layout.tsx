'use client';
import Header from '@/components/Layouts/Header';
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
          <Header>
          {children}
          </Header>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}