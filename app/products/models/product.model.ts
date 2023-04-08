export interface Product {
    _id: string,
    internalCode: string,
    productName: string,
    description: string,
    barCode: number,
    category: string,
    subCategory: string,
    brand: string,
    avatarUrl: string,
    warranty: number,
    price: number,
    aditionals: number,
    tax: number,
    markup: number,
    minStock: number,
    onlineMarket: boolean,
    deleted: boolean,
    serialNumberRequired: boolean,
    details: Details,
}

export interface Details {
    storageSize: string;
    ramSize: string;
    processorName: string;
    mainCameraQuantity: number;
    mainCameraResolution: string;
    selfieCameraResolution: string;
    screenDetail: string;
    batteryCapacity: number;
    os: string;
    condition: string;
}