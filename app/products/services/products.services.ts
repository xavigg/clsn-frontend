import { Routes } from "@/models";
import { Product } from "../models";
import axios from "axios";

export const getProducts = (): Promise<Product[]> => {
    const url = process.env.VERCEL_HOST + Routes.PRODUCTS;
    const productData = fetch(url, { cache: 'no-store' })
        .then((response) => response.json())
    return productData;
};

export const getProductByInternalCode = (internalCode: string): Promise<Product> => {
    const url = process.env.VERCEL_HOST + Routes.PRODUCT_DETAIL + internalCode;
    const productData = fetch(url, { cache: 'no-store' })
        .then((response) => response.json())
    return productData;
};

export async function newProduct( data: any) {
    try {
      const url = "http://localhost:3000/products/"

      const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
      }

      const response = await fetch(url, options);
      const newData = await response.json();
      console.log(newData);
      return newData; 
        
    } catch (error) {
      console.error(error);
    }
  }

