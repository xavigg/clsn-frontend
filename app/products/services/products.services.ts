import { Routes } from "@/models";
import { Product } from "../models";

export const getProducts = (): Promise<Product[]> => {
    const url = process.env.VERCEL_HOST + Routes.PRODUCTS;
    const productData = fetch(url, { cache: 'no-store' })
        .then((response) => response.json())
    return productData;
};

export const getProductByInternalCode = (internalCode: string): Promise<Product> => {
    const url = process.env.VERCEL_HOST + Routes.PRODUCT_DETAIL + internalCode;
    // const url = `http://localhost:3000/products/${internalCode}`;
    const productData = fetch(url, { cache: 'no-store' })
        .then((response) => response.json())
    return productData;
};



