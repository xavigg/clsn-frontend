import { ProductCardList, ProductCard, ProductBadge } from "@/components";
import { getProductByBrand, getProducts } from "./services";

async function fetchProducts() {
  return await getProducts();
}

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
    color: "#5c92fa"
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
    <>
      <ProductBadge products={samsung} brand={brands.samsung.name} icon={brands.samsung.icon} color={brands.samsung.color}/>
      <ProductBadge products={motorola} brand={brands.motorola.name} icon={brands.motorola.icon} color={brands.motorola.color} />
      <ProductBadge products={xiaomi} brand={brands.xiaomi.name} icon={brands.xiaomi.icon} color={brands.xiaomi.color}/>
    </>
  );
}

export default Products;
