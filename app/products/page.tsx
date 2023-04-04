
import { ProductCardList, ProductCard, ProductBadge } from '@/components';
import { getProducts } from './services';

async function fetchProducts() {
  return await getProducts();
}

async function Products() {

  const res = await fetchProducts();

  return (
    <div>
        
        <ProductBadge products={res} state='nuevo'></ProductBadge>
    </div>
  )
};

export default Products;
