import React, { useContext, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Menu.module.scss';
import { CartContext } from '../../../../store/CartContext';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames(styles.navLink, { [styles.navLinkActive]: isActive });

const getBottomLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames(styles.bottomLink, { [styles.bottomLinkActive]: isActive });

export const Menu: React.FC<Props> = ({ isOpen, onClose }) => {
  const { cartItems } = useContext(CartContext);

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Prevent page scrolling behind the open menu
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className={classNames(styles.menu, { [styles.menuOpen]: isOpen })}>
      <div className={styles.top}>
        <Link to="/" className={styles.topLogo} onClick={onClose}>
          <img
            src="img-logo-icons/logo.svg"
            alt="Nice Gadgets"
            className={styles.topLogoImage}
          />
        </Link>
        <button className={styles.topClose} type="button" onClick={onClose}>
          <img
            src="img-logo-icons/icons/icon-close.svg"
            alt="Close menu"
            className={styles.topCloseIcon}
          />
        </button>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink to="/" className={getNavLinkClass} onClick={onClose}>
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/phones" className={getNavLinkClass} onClick={onClose}>
              Phones
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/tablets"
              className={getNavLinkClass}
              onClick={onClose}
            >
              Tablets
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/accessories"
              className={getNavLinkClass}
              onClick={onClose}
            >
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.bottom}>
        <NavLink
          to="/favorites"
          className={getBottomLinkClass}
          onClick={onClose}
        >
          <img
            src="img-logo-icons/icons/icon-favourites-Heart-like.svg"
            alt="Favorites"
            className={styles.bottomIcon}
          />
        </NavLink>
        <NavLink to="/cart" className={getBottomLinkClass} onClick={onClose}>
          <img
            src="img-logo-icons/icons/icon-shopping-Cart.svg"
            alt="Cart"
            className={styles.bottomIcon}
          />
          {totalCount > 0 && (
            <span className={styles.bottomCounter}>{totalCount}</span>
          )}
        </NavLink>
      </div>
    </div>
  );
};
