import React from 'react';
import styles from './ProductOptions.module.scss';
import { ProductDetails } from '../../../../types/ProductDetails';
import { NavLink } from 'react-router-dom';
import { COLORS } from '../../../../constants/colors';
import classNames from 'classnames';

type Props = {
  product: ProductDetails;
};

// Product code is not in the API data, so a placeholder from the design is used
const PRODUCT_CODE = '802390';

export const ProductOptions: React.FC<Props> = ({ product }) => {
  return (
    <div className={styles.productOptions}>
      <div className={styles.productOptionsHeader}>
        <p className={styles.productOptionsLabel}>Available colors</p>
        <p className={styles.productOptionsLabel}>ID: {PRODUCT_CODE}</p>
      </div>

      <ul className={styles.productOptionsColors}>
        {product.colorsAvailable.map(color => {
          const adressID = `${product.namespaceId}-${product.capacity}-${color}`
            .toLowerCase()
            .split(' ')
            .join('-');

          return (
            <li key={color}>
              <NavLink
                to={`/product/${adressID}`}
                aria-label={color}
                className={({ isActive }) =>
                  classNames(styles.productOptionsColor, {
                    [styles.productOptionsColorActive]: isActive,
                  })
                }
                style={{ backgroundColor: COLORS[color] }}
                state={{ keepScroll: true }}
              />
            </li>
          );
        })}
      </ul>

      <div className={styles.productOptionsSection}>
        <p className={styles.productOptionsLabel}>Select capacity</p>
        <ul className={styles.productOptionsCapacities}>
          {product.capacityAvailable.map(capacity => {
            const adressCapacity =
              `${product.namespaceId}-${capacity}-${product.color}`
                .toLowerCase()
                .split(' ')
                .join('-');

            return (
              <li key={capacity}>
                <NavLink
                  to={`/product/${adressCapacity}`}
                  className={({ isActive }) =>
                    classNames(styles.productOptionsCapacity, {
                      [styles.productOptionsCapacityActive]: isActive,
                    })
                  }
                  state={{ keepScroll: true }}
                >
                  {capacity}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <div className={styles.productOptionsPrices}>
          <p className={styles.productOptionsPrice}>${product.priceDiscount}</p>
          <s className={styles.productOptionsFullPrice}>
            ${product.priceRegular}
          </s>
        </div>
        <div className={styles.productOptionsActions}>
          <button type="button" className={styles.productOptionsAddButton}>
            Add to cart
          </button>
          <button type="button" className={styles.productOptionsFavoriteButton}>
            <img
              src="img-logo-icons/icons/icon-favourites-Heart-like.svg"
              alt="Add to favorites"
              className={styles.productOptionsFavoriteButtonImage}
            />
          </button>
        </div>
        <ul className={styles.productOptionsSpecs}>
          <li className={styles.productOptionsSpec}>
            <span className={styles.productOptionsSpecName}>Screen</span>
            <span>{product.screen}</span>
          </li>
          <li className={styles.productOptionsSpec}>
            <span className={styles.productOptionsSpecName}>Resolution</span>
            <span>{product.resolution}</span>
          </li>
          <li className={styles.productOptionsSpec}>
            <span className={styles.productOptionsSpecName}>Processor</span>
            <span>{product.processor}</span>
          </li>
          <li className={styles.productOptionsSpec}>
            <span className={styles.productOptionsSpecName}>RAM</span>
            <span>{product.ram}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
