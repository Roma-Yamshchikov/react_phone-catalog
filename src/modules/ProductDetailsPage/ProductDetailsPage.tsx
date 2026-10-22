import { useParams, useNavigate } from 'react-router-dom';
import styles from './ProductDetailsPage.module.scss';
import { useEffect, useState } from 'react';
import { ProductDetails } from '../../types/ProductDetails';
import { getProductDetails, getSuggestedProducts } from '../../api/products';
import { NavPath } from '../shared/components/NavPath';
import { ProductGallery } from './components/ProductGallery';
import { ProductOptions } from './components/ProductOptions';
import { ProductAbout } from './components/ProductAbout';
import { ProductTechSpecs } from './components/ProductTechSpecs';
import { ProductsSlider } from '../shared/components/ProductsSlider';
import { Product } from '../../types/Product';

export const ProductDetailsPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [suggestedProducts, setSuggestedProducts] = useState<Product[]>([]);
  const [productDetails, setProductDetails] = useState<ProductDetails>();

  useEffect(() => {
    getSuggestedProducts().then(setSuggestedProducts);
  }, []);

  useEffect(() => {
    if (!productId) {
      return;
    }

    getProductDetails(productId).then(setProductDetails);
  }, [productId]);

  if (!productDetails) {
    return <p>Loading...</p>;
  }

  const category = productDetails.category;
  const categoryLabel = category[0].toUpperCase() + category.slice(1);

  return (
    <div className={styles.productDetails}>
      <NavPath
        items={[
          { label: categoryLabel, to: `/${category}` },
          { label: productDetails.name },
        ]}
      />

      <button
        type="button"
        className={styles.productDetailsBack}
        onClick={() => navigate(-1)}
      >
        <span aria-hidden="true" className={styles.productDetailsBackImage} />
        <span className={styles.productDetailsBackText}>Back</span>
      </button>

      <h1 className={styles.productDetailsTitle}>{productDetails.name}</h1>

      <div className={styles.productDetailsTop}>
        <ProductGallery
          images={productDetails.images}
          name={productDetails.name}
          key={productDetails.id}
        />

        <ProductOptions product={productDetails} />
      </div>

      <div className={styles.productDetailsBottom}>
        <ProductAbout descriptions={productDetails.description} />

        <ProductTechSpecs product={productDetails} />
      </div>

      <ProductsSlider title="You may also like" products={suggestedProducts} />
    </div>
  );
};
