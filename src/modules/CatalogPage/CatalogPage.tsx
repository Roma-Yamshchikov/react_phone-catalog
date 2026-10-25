import React, { useCallback } from 'react';
import { useEffect, useState } from 'react';
import styles from './CatalogPage.module.scss';
import { Category, Product } from '../../types/Product';
import { getProducts } from '../../api/products';
import { NavPath } from '../shared/components/NavPath';
import { Loader } from '../shared/components/Loader';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '../shared/components/Pagination';
import { ProductList } from '../shared/components/ProductList';

type Props = {
  category: Category;
  title: string;
};

export const CatalogPage: React.FC<Props> = ({ category, title }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort') || 'age';
  const perPage = searchParams.get('perPage') || 'all';
  const page = Number(searchParams.get('page')) || 1;

  const handlePerPageChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    if (evt.target.value === 'all') {
      searchParams.delete('perPage');
    } else {
      searchParams.set('perPage', evt.target.value);
    }

    searchParams.delete('page');
    setSearchParams(searchParams);
  };

  const handleSortChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set('sort', evt.target.value);
    searchParams.delete('page');
    setSearchParams(searchParams);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage === 1) {
      searchParams.delete('page');
    } else {
      searchParams.set('page', String(newPage));
    }

    setSearchParams(searchParams);
  };

  const visibleProducts = [...products].sort((a, b) => {
    switch (sort) {
      case 'title':
        return a.name.localeCompare(b.name);

      case 'price':
        return a.price - b.price;

      case 'age':
      default:
        return b.year - a.year;
    }
  });

  const loadProducts = useCallback(() => {
    setIsLoading(true);
    setHasError(false);

    getProducts()
      .then(data => {
        setProducts(data.filter(product => product.category === category));
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  }, [category]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const categoryLabel = category[0].toUpperCase() + category.slice(1);

  const itemsPerPage =
    perPage === 'all' ? visibleProducts.length : Number(perPage);

  const firstIndex = (page - 1) * itemsPerPage;
  const pageProducts = visibleProducts.slice(
    firstIndex,
    firstIndex + itemsPerPage,
  );

  const totalPages = Math.ceil(visibleProducts.length / itemsPerPage);

  return (
    <div className={styles.catalogPage}>
      <NavPath items={[{ label: categoryLabel }]} />
      <h1 className={styles.catalogPageTitle}>{title}</h1>
      <p className={styles.catalogPageCount}>{products.length} models</p>

      <div className={styles.catalogPageFilters}>
        <label className={styles.catalogPageField}>
          <span className={styles.catalogPageLabel}>Sort by</span>

          <select
            className={styles.catalogPageSelect}
            value={sort}
            onChange={handleSortChange}
          >
            <option value="age">Newest</option>
            <option value="title">Alphabetically</option>
            <option value="price">Cheapest</option>
          </select>
        </label>

        <label className={styles.catalogPageField}>
          <span className={styles.catalogPageLabel}>Items on page</span>

          <select
            className={styles.catalogPageSelect}
            value={perPage}
            onChange={handlePerPageChange}
          >
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="all">All</option>
          </select>
        </label>
      </div>

      {isLoading && <Loader />}

      {!isLoading && hasError && (
        <div className={styles.catalogPageMessage}>
          <h2 className={styles.catalogPageMessageTitle}>
            Something went wrong
          </h2>

          <button
            type="button"
            className={styles.catalogPageMessageButton}
            onClick={loadProducts}
          >
            Reload
          </button>
        </div>
      )}

      {!isLoading && !hasError && products.length === 0 && (
        <p className={styles.catalogPageMessage}>There are no {category} yet</p>
      )}

      {!isLoading && !hasError && products.length > 0 && (
        <ProductList products={pageProducts} />
      )}

      {!isLoading && !hasError && totalPages > 1 && (
        <Pagination
          total={totalPages}
          current={page}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
