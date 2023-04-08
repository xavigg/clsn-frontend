import { getProductByInternalCode } from "../services";
import ProductDetailCard from "@/components/products/ProductDetailCard";

type Params = {
  params: {
    internalCode: string;
  };
};

async function fetchProductByInternalCode(internalCode: string) {
  return await getProductByInternalCode(internalCode);
}

 async function ProductDetail({ params: { internalCode } }: Params) {
   const data = await fetchProductByInternalCode(internalCode);

   return (
     <div>
       <ProductDetailCard products={data}></ProductDetailCard>
     </div>
   );
 }

export default ProductDetail;