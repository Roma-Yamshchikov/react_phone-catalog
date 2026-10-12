import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavPath.module.scss';

type NavPathItem = {
  label: string;
  to?: string;
};

type Props = {
  items: NavPathItem[];
};

export const NavPath: React.FC<Props> = ({ items }) => {
  return (
    <nav className={styles.navPath}>
      <Link to="/" className={styles.navPathHome}>
        <img
          src="img-logo-icons/icons/icon-home.svg"
          alt="Home"
          className={styles.navPathHomeIcon}
        />
      </Link>

      {items.map(item => {
        return (
          <React.Fragment key={item.label}>
            <img
              src="img-logo-icons/icons/arrow-right.svg"
              alt=""
              className={styles.navPathArrow}
            />

            {item.to ? (
              <Link to={item.to} className={styles.navPathLink}>
                {item.label}
              </Link>
            ) : (
              <span className={styles.navPathCurrent}>{item.label}</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
