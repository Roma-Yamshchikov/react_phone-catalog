import React, { useState } from 'react';
import styles from './ProductGallery.module.scss';

type Props = {
  images: string[];
  name: string;
};

export const ProductGallery: React.FC<Props> = ({ images, name }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = images[selectedIndex];

  return (
    <div className={styles.productGallery}>
      <img
        src={selectedImage}
        alt={name}
        className={styles.productGalleryMainFoto}
      />
      <ul className={styles.productGalleryList}>
        {images.map((image, index) => (
          <li key={index} className={styles.productGalleryItem}>
            <button
              type="button"
              className={styles.productGalleryButton}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={image}
                alt={name}
                className={styles.productGalleryFotos}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
