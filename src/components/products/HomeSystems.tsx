import React from "react";
import Layout from "@/components/layout/Layout";
import styles from "@/styles/HomeSystems.module.css";
import { useNavigate } from "react-router-dom";
import { homeSystems } from "@/data/homeSystemsData";
import { ArrowRight } from "lucide-react";

const HomeSystems = () => {
  const navigate = useNavigate();
  
  const handleViewDetails = (systemId: string) => {
    console.log("Navigating to system:", systemId);
    navigate(`/products/home-systems/${systemId}`);
  };

  return (
    <Layout>
      <section className="pt-24 pb-16 bg-ecomotech-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">家用太阳能系统</h1>
            <p className="text-xl opacity-90">
              为能源独立和节约提供完整的住宅解决方案，根据您家庭的独特需求量身定制。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={styles.systemsGrid}>
            {homeSystems.map((system) => (
              <div key={system.id} className={styles.productCard}>
                <div className={styles.imageContainer}>
                  <img 
                    src={system.image}
                    alt={system.name}
                    className={styles.productImage}
                  />
                </div>
                <div className={styles.contentContainer}>
                  <h3 className={styles.productTitle}>{system.name}</h3>
                  <p className={styles.powerRating}>{system.power}</p>
                  <p className={styles.description}>{system.description}</p>
                  <p className="text-ecomotech-blue font-semibold mb-4">{system.price}</p>
                  
                  <button 
                    onClick={() => handleViewDetails(system.id)}
                    className={`${styles.viewDetailsButton} group`}
                  >
                    <span className="relative z-10">查看系统详情</span>
                    <ArrowRight className={styles.buttonIcon} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomeSystems;


