import { Product } from '../types/Product';
import { ProductDetails } from '../types/ProductDetails';

export const getProducts = (): Promise<Product[]> => {
  return fetch('api/products.json').then(response => response.json());
};

export const getProductDetails = (
  category: string,
  itemId: string,
): Promise<ProductDetails | undefined> => {
  return fetch(`api/${category}.json`)
    .then(response => response.json())
    .then((data: ProductDetails[]) =>
      data.find(product => itemId === product.id),
    );
};
