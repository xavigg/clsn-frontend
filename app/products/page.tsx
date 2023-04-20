import { Suspense } from "react";
import { getProductByBrand } from "./services";
import Loading from "./loading";
import Card from "./components/Card";

async function fechtProductByBrand(brand: string) {
  return await getProductByBrand(brand);
}

const brands = {
  motorola: {
    name: "MOTOROLA",
    icon: "simple-icons:motorola",
    color: "#5c92fa",
  },
  samsung: {
    name: "SAMSUNG",
    icon: "logos:samsung",
    color: "#1428a0"
  },
  xiaomi: {
    name: "XIAOMI",
    icon: "simple-icons:xiaomi",
    color: "#ff6700"
  }
}

async function Products() {
  //const res = await fetchProducts();
  const samsung = await fechtProductByBrand(brands.samsung.name);
  const motorola = await fechtProductByBrand(brands.motorola.name);
  const xiaomi = await fechtProductByBrand(brands.xiaomi.name);
  
   return (
    <Suspense fallback={<Loading />}>
      <Card
        products={samsung}
        brand={brands.samsung.name}
        icon={brands.samsung.icon}
        color={brands.samsung.color}
      />
      <Card
        products={motorola}
        brand={brands.motorola.name}
        icon={brands.motorola.icon}
        color={brands.motorola.color}
      />
      <Card
        products={xiaomi}
        brand={brands.xiaomi.name}
        icon={brands.xiaomi.icon}
        color={brands.xiaomi.color}
      />
      </Suspense>
  );
}

export default Products;
