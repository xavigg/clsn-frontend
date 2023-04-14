'use client'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react'

type Params = {
  params: {
    internalCode: string;
  };
};

function CreateProduct() {
  return (
    <FormControl isRequired>
      <FormLabel>Nombre Producto</FormLabel>
      <Input placeholder="Nombre Producto" />
    </FormControl>
  );
}

export default CreateProduct;
