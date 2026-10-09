import { NavLink, Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Menu.module.scss';

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames(styles.navLink, { [styles.navLinkActive]: isActive });

const getBottomLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames(styles.bottomLink, { [styles.bottomLinkActive]: isActive });

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.top}>
        <Link to="/" className={styles.topLogo}>
          <img
            src="/img-logo-icons/logo.svg"
            alt="Nice Gadgets"
            className={styles.topLogoImage}
          />
        </Link>
        <button className={styles.topClose} type="button">
          <img
            src="/img-logo-icons/icons/icon-close.svg"
            alt="Close menu"
            className={styles.topCloseIcon}
          />
        </button>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={getNavLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/phones" className={getNavLinkClass}>
              Phones
            </NavLink>
          </li>
          <li>
            <NavLink to="/tablets" className={getNavLinkClass}>
              Tablets
            </NavLink>
          </li>
          <li>
            <NavLink to="/accessories" className={getNavLinkClass}>
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.bottom}>
        <NavLink to="/favorites" className={getBottomLinkClass}>
          <img
            src="/img-logo-icons/icons/icon-favourites-Heart-like.svg"
            alt="Favorites"
            className={styles.bottomIcon}
          />
        </NavLink>
        <NavLink to="/cart" className={getBottomLinkClass}>
          <img
            src="/img-logo-icons/icons/icon-shopping-Cart.svg"
            alt="Cart"
            className={styles.bottomIcon}
          />
        </NavLink>
      </div>
    </div>
  );
};
