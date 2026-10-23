import React from 'react';
import classNames from 'classnames';
import styles from './Pagination.module.scss';

type Props = {
  total: number;
  current: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
  total,
  current,
  onPageChange,
}) => {
  const pages = Array.from({ length: total }, (_, index) => index + 1);

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <button
        type="button"
        className={classNames(
          styles.paginationButton,
          styles.paginationButtonArrow,
        )}
        aria-label="Previous page"
        disabled={current === 1}
        onClick={() => onPageChange(current - 1)}
      >
        ‹
      </button>

      <ul className={styles.paginationList}>
        {pages.map(pageNumber => (
          <li key={pageNumber}>
            <button
              type="button"
              className={classNames(styles.paginationButton, {
                [styles.paginationButtonActive]: pageNumber === current,
              })}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={classNames(
          styles.paginationButton,
          styles.paginationButtonArrow,
        )}
        aria-label="Next page"
        disabled={current === total}
        onClick={() => onPageChange(current + 1)}
      >
        ›
      </button>
    </nav>
  );
};
