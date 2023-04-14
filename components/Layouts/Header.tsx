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
import { Routes } from '@/models';


interface Props {
  children: React.ReactNode,
}

 const navURLs = [
  { name: "Inicio", 
    path: Routes.HOME,
  },
  {
    name: "Lista",
    path: Routes.PRODUCTS,
  },];

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
      <Box boxShadow='md' px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box color="black">
            <Image width={200} height={37} src={Routes.LOGO} alt="asd"/>
            </Box>
            <HStack
              color="black"
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
      <Box p={4} pb={"60px"}>{children}</Box>
    </>
  );
}