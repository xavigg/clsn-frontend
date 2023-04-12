'use client'
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  useDisclosure,
  useColorModeValue,
  Stack
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const Links = ['Inicio', 'Lista'];
const urlNav = ['http://localhost:3001', 'http://localhost:3001/products'];

interface Props {
  children: React.ReactNode,
}

 const navURLs = [
  { name: "Inicio", 
   path: "/" 
  },
  {
    name: "Lista",
    path: "/products",
  },

];

const NavLink = ({ children }: Props) => (
  <Box
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'underline',
      bg: useColorModeValue('gray.400', 'gray.700'),
    }}>
    {children}
  </Box>
);

export default function withAction({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bgGradient="linear(to-r, gray.600, gray.700, gray.600)" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box color="white"><Image width={200} height={37} src="img/logo3.png" alt="asd"/></Box>
            <HStack
              color="white"
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {navURLs.map((link, index) => (
                <Link href={link.path} key={index}>
                <NavLink><b>{link.name}</b></NavLink>  
                </Link>        
              ))}
            </HStack>
          </HStack>
          
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {navURLs.map((link, index) => (
                <Link href={link.path} key={index}>
                <NavLink><b>{link.name}</b></NavLink>  
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Box p={4}>{children}</Box>
    </>
  );
}