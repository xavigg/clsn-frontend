"use client";
import { Product, newProduct } from "@/app/products";
import {
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Form() {

  const [formProduct, setFormProduct] = useState<Product>({
    internalCode: "",
    productName: "",
    description: "",
    barCode: 0,
    category: "",
    subCategory: "",
    brand: "",
    warranty: 0,
    price: 0,
    aditionals: 0,
    tax: 0,
    markup: 0,
    minStock: 0,
    details: {
      storageSize: "",
      ramSize: "",
      processorName: "",
      mainCameraQuantity: 0,
      mainCameraResolution: "",
      selfieCameraResolution: "",
      screenDetail: "",
      batteryCapacity: 0,
      os: "",
      condition: "",
    },
    onlineMarket: true,
    deleted: false,
    serialNumberRequired: true,
    avatarUrl: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if(event.target.name = "dramSize") {
    setFormProduct({ ...formProduct, [formProduct.details.ramSize]: event.target.value });
    console.log(formProduct);
  } else { setFormProduct({ ...formProduct, [event.target.value]: event.target.value }); }
  
 }


  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formProduct);
    const response = await newProduct(formProduct);
    return response;
  }

  return (
    <Stack spacing={4}>
      <form onSubmit={handleSubmit}>
        <InputGroup size={"sm"}>
          <InputLeftAddon children="Nombre" />
          <Input
            placeholder="nombre de producto"
            name="productName"
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup size={"sm"}>
          <InputLeftAddon children="Descripcion" />
          <Input
            name="description"
            placeholder="descripcion del producto"
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup size={"sm"}>
          <InputLeftAddon children="Codigo Barra" />
          <Input
            name="barCode"
            type="number"
            placeholder="codigo de barra"
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup size={"sm"}>
          <InputLeftAddon children="Categoria" />
          <Select name="category" variant="outline" placeholder="Outline">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </InputGroup>

        <InputGroup size={"sm"}>
          <InputLeftAddon children="Sub-Categoria" />
          <Select name="subCategory" variant="outline" placeholder="Outline" />
        </InputGroup>

        <InputGroup size={"sm"}>
          <InputLeftAddon children="Marca" />
          <Select name="brand" variant="outline" placeholder="Outline" />
        </InputGroup>

        <InputGroup size={"sm"}>
          <InputLeftAddon children="Avatar Url" />
          <Input
            name="avatarUrl"
            placeholder="direccion del avatar"
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup size={"sm"}>
          <InputLeftAddon children="Garantia Venta" />
          <Input
            name="avatarUrl"
            type="number"
            placeholder="nombre de producto"
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup size={"sm"}>
          <InputLeftAddon children="Precio" />
          <Input
            name="price"
            type="number"
            placeholder="precio del producto"
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup size={"sm"}>
          <InputLeftAddon children="IVA" />
          <Input
            name="tax"
            type="number"
            placeholder="IVA del producto"
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup size={"sm"}>
          <InputLeftAddon children="MKUP" />
          <Input
            name="markup"
            type="number"
            placeholder="MKUP del producto"
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup size={"sm"}>
          <InputLeftAddon children="Stock Minimo" />
          <Input
            name="minStock"
            type="number"
            placeholder="Stock minimo del producto"
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup size={"sm"}>
          <InputLeftAddon children="Memoria Ram" />
          <Input
            name="dramSize"
            type="number"
            placeholder="Stock minimo del producto"
            onChange={handleChange}
          />
        </InputGroup>

        <button type="submit">Submit</button>
      </form>
    </Stack>
  );
}
