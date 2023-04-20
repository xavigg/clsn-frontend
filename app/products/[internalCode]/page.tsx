import { FaArrowAltCircleLeft } from "react-icons/fa";
import { getProductByInternalCode } from "../services";
import DetailsCard from "@/app/products/components/DetailsCard";
import Link from "next/link";
import { Routes } from "@/models";

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
     <>
       <DetailsCard products={data} />
       <Link href={Routes.PRODUCTS} className="float">
         <FaArrowAltCircleLeft className="my-float" />
       </Link>
     </>
   );
 }

export default ProductDetail;