import { Product } from "../models";

export const getProducts = (): Promise<Product[]> => {
    const url = 'http://localhost:3000/products';

    const productData = fetch(url, { cache: 'no-store' })
        .then((response) => response.json())

    return productData;

};

export const getProductByInternalCode = (internalCode: string): Promise<Product> => {
    const url = `http://localhost:3000/products/${internalCode}`;
    const productData = fetch(url, { cache: 'no-store' })
    .then((response) => response.json())
    return productData;
   
   };

