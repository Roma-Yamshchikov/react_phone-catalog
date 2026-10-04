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
