import { Product } from '../types/Product';

export const getProducts = (): Promise<Product[]> => {
  return fetch('api/products.json').then(response => response.json());
};
