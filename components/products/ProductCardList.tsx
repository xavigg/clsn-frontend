"use client";
import {
  Image,
  Button,
  ButtonGroup,
  Link,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { SiWhatsapp } from "react-icons/si";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Product } from "@/app/products/models";

interface Props {
  products: Product[];
  state: string;
}

export default function ProductCardList({ products }: Props) {
  return (
    <TableContainer>
      <Table size="sm" variant="striped" colorScheme="blackAlpha">
        <TableCaption color={"blue"} textAlign={"left"} placement={"top"}>
          PRECIOS SUJETO A VARIACIONES SEGÚN COTIZACION DÓLAR<br></br>
          USTED PUEDE ELEGIR ABONAR EN PESOS O DOLARES
        </TableCaption>

        <Thead>
          <Tr>
            <Th width={"5%"}>Foto</Th>
            <Th width={"95%"}>Modelo</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product) => (
            <Tr key={product.internalCode}>
              <Td>
                <Image
                  width={"100px"}
                  height={"40px"}
                  src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1679283492.42643816!800x800!85.png"
                  borderRadius="lg"
                />
              </Td>
              <Td>
                <div>
                  <b>
                    {product.productName} - ${product.price.toLocaleString()}
                  </b>
                </div>
                <div>
                  <ButtonGroup variant="solid" spacing="2">
                    <Button
                      rightIcon={<SiWhatsapp />}
                      textAlign={"center"}
                      size="xs"
                      isExternal
                      as={Link}
                      href={`http://wa.me/3364308303?text=${encodeURIComponent(
                        `Hola, necesito info sobre ${product.productName}.`
                      )}`}
                      colorScheme={"whatsapp"}
                    >
                      Consultar
                    </Button>
                    <Button
                      rightIcon={<InfoOutlineIcon />}
                      size="xs"
                      isExternal
                      as={Link}
                      href={`http://wa.me/3364308303?text=${encodeURIComponent(
                        `Hola, necesito info sobre ${product.description}.`
                      )}`}
                      colorScheme={"facebook"}
                      margin={"auto"}
                    >
                      Info
                    </Button>
                  </ButtonGroup>
                </div>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

