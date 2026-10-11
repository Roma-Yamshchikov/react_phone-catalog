import React from 'react';
import styles from './ProductCard.module.scss';
import { Product } from '../../../../types/Product';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <article className={styles.productCard}>
      <div className={styles.productCardImageWrapper}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.productCardImage}
        />
      </div>

      <h3 className={styles.productCardTitle}>{product.name}</h3>
      <div className={styles.productCardPrices}>
        <p className={styles.productCardPrice}>${product.price}</p>
        <s className={styles.productCardFullPrice}>${product.fullPrice}</s>
      </div>

      <ul className={styles.productCardSpecs}>
        <li className={styles.productCardSpec}>
          <span className={styles.productCardSpecName}>Screen</span>
          <span className={styles.productCardSpecValue}>{product.screen}</span>
        </li>
        <li className={styles.productCardSpec}>
          <span className={styles.productCardSpecName}>Capacity</span>
          <span className={styles.productCardSpecValue}>
            {product.capacity}
          </span>
        </li>
        <li className={styles.productCardSpec}>
          <span className={styles.productCardSpecName}>RAM</span>
          <span className={styles.productCardSpecValue}>{product.ram}</span>
        </li>
      </ul>

      <div className={styles.productCardActions}>
        <button className={styles.productCardAddButton} type="button">
          Add to cart
        </button>
        <button className={styles.productCardFavoriteButton} type="button">
          <img
            src="/img-logo-icons/icons/icon-favourites-Heart-like.svg"
            alt="Add to favorites"
            className={styles.productCardFavoriteButtonImage}
          />
        </button>
      </div>
    </article>
  );
};
