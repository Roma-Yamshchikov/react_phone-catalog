import React, { useContext } from 'react';
import styles from './ProductCard.module.scss';
import { Product } from '../../../../types/Product';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../../store/CartContext';
import classNames from 'classnames';
import { FavoritesContext } from '../../../../store/FavoritesContext';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { cartItems, addToCart } = useContext(CartContext);
  const { toggleFavorite, favorites } = useContext(FavoritesContext);

  const isInCart = cartItems.some(item => item.id === product.id);
  const isFavorite = favorites.some(item => item.id === product.id);

  const productLink = `/product/${product.itemId}`;

  return (
    <article className={styles.productCard}>
      <Link to={productLink} className={styles.productCardImageWrapper}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.productCardImage}
        />
      </Link>

      <h3 className={styles.productCardTitle}>
        <Link to={productLink} className={styles.productCardTitleLink}>
          {product.name}
        </Link>
      </h3>
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
        <button
          className={classNames(styles.productCardAddButton, {
            [styles.productCardAddButtonActive]: isInCart,
          })}
          type="button"
          onClick={() => addToCart(product)}
        >
          {isInCart ? 'Added to cart' : 'Add to cart'}
        </button>
        <button
          className={classNames(styles.productCardFavoriteButton, {
            [styles.productCardFavoriteButtonActive]: isFavorite,
          })}
          type="button"
          onClick={() => toggleFavorite(product)}
        >
          <img
            src={
              isFavorite
                ? 'img-logo-icons/icons/favourites-heart-like-red.svg'
                : 'img-logo-icons/icons/icon-favourites-Heart-like.svg'
            }
            alt={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            className={styles.productCardFavoriteButtonImage}
          />
        </button>
      </div>
    </article>
  );
};
