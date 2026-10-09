import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={styles.footer}>
      <Link to="/" className={styles.logo}>
        <img src="/img-logo-icons/logo.svg" alt="Nice Gadgets" />
      </Link>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a
              href="https://github.com/Roma-Yamshchikov"
              className={styles.navLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://ua.linkedin.com/"
              className={styles.navLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacts
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Roma-Yamshchikov"
              className={styles.navLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Rights
            </a>
          </li>
        </ul>
      </nav>

      <button className={styles.backToTop} type="button" onClick={scrollToTop}>
        <span className={styles.backToTopText}>Back to top</span>
        <span className={styles.backToTopButton}>
          <img src="/img-logo-icons/icons/arrow-up.svg" alt="" />
        </span>
      </button>
    </footer>
  );
};
