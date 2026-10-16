import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Header.module.scss';
import { Menu } from '../Menu';

const getLinkClass = ({ isActive }: { isActive: boolean }) => {
  return classNames(styles.navLink, { [styles.navLinkActive]: isActive });
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img
          src="img-logo-icons/logo.svg"
          alt="Nice Gadgets"
          className={styles.logoImage}
        />
      </Link>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={getLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/phones" className={getLinkClass}>
              Phones
            </NavLink>
          </li>
          <li>
            <NavLink to="/tablets" className={getLinkClass}>
              Tablets
            </NavLink>
          </li>
          <li>
            <NavLink to="/accessories" className={getLinkClass}>
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.action}>
        <Link to="/favorites" className={styles.actionLink}>
          <img
            className={styles.actionItem}
            src="img-logo-icons/icons/icon-favourites-Heart-like.svg"
            alt="Favorites"
          />
        </Link>
        <Link to="/cart" className={styles.actionLink}>
          <img
            className={styles.actionItem}
            src="img-logo-icons/icons/icon-shopping-Cart.svg"
            alt="Cart"
          />
        </Link>
      </div>

      <button
        type="button"
        className={styles.menuButton}
        onClick={() => setIsMenuOpen(true)}
      >
        <img
          src="img-logo-icons/icons/icon-menu-burger.svg"
          alt="Open menu"
          className={styles.menuIcon}
        />
      </button>

      <Menu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
};
