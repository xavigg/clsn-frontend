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
  const [formProduct, setFormProduct] = useState({});

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormProduct({
      ...formProduct,
      [event.target.name]: event.target.value,
    });
    console.log(formProduct)
  }

  function handleChangeSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setFormProduct({
      ...formProduct,
      [event.target.name]: event.target.value,
    });
    console.log(formProduct)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
            name={"productName"}
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
          <Select name="category" onChange={handleChangeSelect} variant="outline" placeholder="Outline" >
            <option value="option1" >Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </InputGroup>

        <InputGroup size={"sm"}>
          <InputLeftAddon children="Sub-Categoria" />
          <Select name="subCategory" onChange={handleChangeSelect} variant="outline" placeholder="Outline">
            <option value="option1" >Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </InputGroup>

        <InputGroup size={"sm"}>
          <InputLeftAddon children="Marca" />
          <Select name="brand" onChange={handleChangeSelect} variant="outline" placeholder="Outline">
            <option value="option1" >Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
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
            placeholder="Stock minimo del producto"
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup size={"sm"}>
          <InputLeftAddon children="Memoria" />
          <Input
            name="dstorageSize"
            placeholder="Stock minimo del producto"
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup size={"sm"}>
          <InputLeftAddon children="Procesador" />
          <Input
            name="dprocessorName"
            placeholder="Stock minimo del producto"
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup size={"sm"}>
          <InputLeftAddon children="Cantidad Camaras" />
          <Input
            name="dmainCameraQuantity"
            placeholder="Stock minimo del producto"
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup size={"sm"}>
          <InputLeftAddon children="Camara Principal" />
          <Input
            name="mainCameraResolution"
            placeholder="Stock minimo del producto"
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup size={"sm"}>
          <InputLeftAddon children="Selfie Camara" />
          <Input
            name="selfieCameraResolution"
            placeholder="Stock minimo del producto"
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup size={"sm"}>
          <InputLeftAddon children="Pantalla" />
          <Input
            name="dscreenDetail"
            placeholder="Stock minimo del producto"
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup size={"sm"}>
          <InputLeftAddon children="Capacidad Bateria" />
          <Input
            name="dbatteryCapacity"
            type="number"
            placeholder="Stock minimo del producto"
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup size={"sm"}>
          <InputLeftAddon children="OS" />
          <Input
            name="dos"
            placeholder="Stock minimo del producto"
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup size={"sm"}>
          <InputLeftAddon children="Condicion" />
          <Input
            name="dcondition"
            placeholder="Stock minimo del producto"
            onChange={handleChange}
          />
        </InputGroup>

        <button type="submit">Submit</button>
      </form>
    </Stack>
  );
}
