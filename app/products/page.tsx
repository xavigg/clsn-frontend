import { ProductCardList, ProductCard, ProductBadge } from '@/components';
import { getProducts } from './services';
import { Suspense } from 'react';

async function fetchProducts() {
  return await getProducts();
}

async function Products() {

  const res = await fetchProducts();
  return <ProductBadge products={res} />

};


export default Products;
