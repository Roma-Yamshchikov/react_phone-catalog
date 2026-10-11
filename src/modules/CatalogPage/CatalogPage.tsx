import React from 'react';
import { useEffect, useState } from 'react';
import { Category, Product } from '../../types/Product';
import { getProducts } from '../../api/products';
import { ProductCard } from '../shared/components/ProductCard';

type Props = {
  category: Category;
  title: string;
};

export const CatalogPage: React.FC<Props> = ({ category, title }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(data => {
      const categoryProducts = data.filter(
        product => product.category === category,
      );

      setProducts(categoryProducts);
    });
  }, [category]);

  return (
    <div>
      <h1>{title}</h1>
      {products.map(product => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};
