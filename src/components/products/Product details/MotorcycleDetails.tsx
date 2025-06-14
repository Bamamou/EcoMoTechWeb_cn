import React from 'react';
import Layout from "@/components/layout/Layout";
import styles from '@/styles/MotorcycleDetails.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { electricMotorcycleProducts } from '../ElectricMotorcycles';

const MotorcycleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const motorcycle = electricMotorcycleProducts.find(product => product.id === id);
  const [selectedImage, setSelectedImage] = React.useState(0);

  const handleContactClick = () => {
    // Navigate to contact page with the specific section hash
    navigate('/contact#get-in-touch', {
      state: { 
        productInfo: {
          name: motorcycle?.name,
          id: motorcycle?.id,
          type: '电动摩托车'
        }
      }
    });
  };

  if (!motorcycle) {
    return <div>未找到摩托车</div>;
  }

  const allImages = [motorcycle.image, ...(motorcycle.additionalImages || [])];

  return (
    <Layout>
      <section className={styles.detailsContainer}>
        <div className={styles.productWrapper}>
          {/* Gallery Section */}
          <div className={styles.imageGallery}>
            <img 
              src={allImages[selectedImage]} 
              alt={motorcycle.name}
              className={styles.mainImage} 
            />
            <div className={styles.thumbnailGrid}>
              {allImages.map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`${motorcycle.name} 视图 ${index + 1}`}
                  className={`${styles.thumbnailImage} ${selectedImage === index ? styles.active : ''}`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>

            {/* Call to Action Section - Moved here */}
            <div className={styles.ctaSection}>
              <h3 className={styles.ctaTitle}>对这款车型感兴趣？</h3>
              <p className={styles.ctaDescription}>
                请联系我们的销售团队，了解您所在地区的价格和供货情况。
              </p>
              <button 
                onClick={handleContactClick}
                className={styles.ctaButton}
              >
                请求信息
              </button>
            </div>
          </div>

          {/* Product Info Section */}
          <div className={styles.productInfo}>
            <h1 className={styles.productTitle}>{motorcycle.name}</h1>
            <p className={styles.productDescription}>{motorcycle.description.main}</p>
            <div className={styles.descriptionDetails}>
              {motorcycle.description.details.map((detail, index) => (
                <p key={index} className={styles.descriptionParagraph}>{detail}</p>
              ))}
            </div>

            {/* Specifications Grid */}
            <div className={styles.specificationsGrid}>
              <div className={styles.specSection}>
                <h2 className={styles.sectionTitle}>
                  <span>主要特点</span>
                </h2>
                <ul className={styles.featuresList}>
                  {motorcycle.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <svg
                        className={styles.featureIcon}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className={styles.featureText}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.specSection}>
                <h2 className={styles.sectionTitle}>技术规格</h2>
                <dl className={styles.specificationsList}>
                  {Object.entries(motorcycle.specifications).map(([key, value]) => (
                    <div key={key} className={styles.specItem}>
                      <dt className={styles.specLabel}>{key}</dt>
                      <dd className={styles.specValue}>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MotorcycleDetails;


