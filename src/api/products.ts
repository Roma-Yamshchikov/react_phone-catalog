import { Product } from '../types/Product';
import { ProductDetails } from '../types/ProductDetails';

export const getProducts = (): Promise<Product[]> => {
  return fetch('api/products.json').then(response => response.json());
};

export const getProductDetails = (
  productId: string,
): Promise<ProductDetails | undefined> => {
  return getProducts().then(products => {
    const product = products.find(prod => prod.itemId === productId);

    if (!product) {
      return undefined;
    }

    return fetch(`api/${product.category}.json`)
      .then(response => response.json())
      .then((data: ProductDetails[]) => {
        return data.find(item => item.id === productId);
      });
  });
};

export const getSuggestedProducts = (): Promise<Product[]> => {
  return getProducts().then(data => {
    return data
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
  });
};
