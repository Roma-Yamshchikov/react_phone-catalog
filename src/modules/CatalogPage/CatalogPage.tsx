import React from 'react';
import { useEffect, useState } from 'react';
import styles from './CatalogPage.module.scss';
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
    <div className={styles.catalogPage}>
      <h1 className={styles.catalogPageTitle}>{title}</h1>
      <p className={styles.catalogPageCount}>{products.length} models</p>
      <div className={styles.catalogPageList}>
        {products.map(product => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
