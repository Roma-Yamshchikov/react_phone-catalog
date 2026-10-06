import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <img
          src="/img-logo-icons/logo.svg"
          alt="logo Nice Gadgets"
          className={styles.logoImage}
        />
      </a>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/phones" className={styles.navLink}>
              Phones
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/tablets" className={styles.navLink}>
              Tablets
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/accessories" className={styles.navLink}>
              Accessories
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.action}>
        <a href="/favorites" className={styles.actionLink}>
          <img
            className={styles.actionItem}
            src="/img-logo-icons/icons/icon-favourites-Heart-like.svg"
            alt="Favorites"
          />
        </a>
        <a href="/cart" className={styles.actionLink}>
          <img
            className={styles.actionItem}
            src="/img-logo-icons/icons/icon-shopping-Cart.svg"
            alt="Cart"
          />
        </a>
      </div>

      <button type="button" className={styles.menuButton}>
        <img
          src="/img-logo-icons/icons/icon-menu-burger.svg"
          alt="Open menu"
          className={styles.menuIcon}
        />
      </button>
    </header>
  );
};
