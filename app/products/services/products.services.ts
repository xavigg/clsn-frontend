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
    const productData = fetch(url, { cache: 'no-store' })
        .then((response) => response.json())
    return productData;
};

export async function newProduct( data: any) {

  const newP = {
    productName: data.productName,
    description: data.description,
    barCode: data.barCode,
    category: data.category,
    subCategory: data.subCategory,
    brand: data.brand,
    warranty: data.warranty,
    price: data.price,
    aditionals: data.aditionals,
    tax: data.tax,
    markup: data.markup,
    minStock: data.minStock,
    details: {
      storageSize: data.dstorageSize,
      ramSize: data.dramSize,
      processorName: data.dprocessorName,
      mainCameraQuantity: data.dmainCameraQuantity,
      mainCameraResolution: data.dmainCameraResolution,
      selfieCameraResolution: data.dselfieCameraResolution,
      screenDetail: data.dscreenDetail,
      batteryCapacity: data.dbatteryCapacity,
      os: data.dos,
      condition: data.dcondition,
    },
    onlineMarket: true,
    deleted: false,
    serialNumberRequired: true,
    avatarUrl: data.avatarUrl,
  }

    try {
      const url = process.env.NEXT_PUBLIC_LOCAL_BACKEND + Routes.PRODUCTS;
      const options = {
        method: 'POST',
        body: JSON.stringify(newP),
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

