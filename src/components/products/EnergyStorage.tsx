import React from "react";
import Layout from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { batteryProducts } from "@/data/energyStorageData";
import { Battery, Zap, Settings, Shield } from "lucide-react";
import styles from "@/styles/EnergyStorage.module.css";

const EnergyStorage = () => {
  const navigate = useNavigate();

  const handleViewDetails = (systemId: string) => {
    navigate(`/products/energy-storage/${systemId}`);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 bg-ecomotech-dark-blue">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>

        <div className="container relative mx-auto px-4">
          {/* Centered Text Content */}
          <div className="max-w-3xl mx-auto text-center">
            <div className={`text-white space-y-4 ${styles.fadeInDelay}`}>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight animate-fadeIn">
                先进的储能解决方案
              </h1>
              <p className="text-lg opacity-90 leading-relaxed animate-fadeIn animation-delay-200">
                通过我们最先进的电池系统体验可靠的备用电源。
                从住宅到商业应用，我们的储能解决方案
                确保持续供电和能源独立。
              </p>
              {/* Feature List - Centered Grid */}
              <div className="grid sm:grid-cols-2 gap-3 mt-6 max-w-2xl mx-auto animate-fadeIn animation-delay-400">
                <div className="flex items-center gap-2 justify-center">
                  <Battery className="w-5 h-5 text-ecomotech-green" />
                  <span>高容量</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Zap className="w-5 h-5 text-ecomotech-green" />
                  <span>快速充电</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Settings className="w-5 h-5 text-ecomotech-green" />
                  <span>智能管理</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Shield className="w-5 h-5 text-ecomotech-green" />
                  <span>高级保护</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {batteryProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.imageContainer}>
                  <img 
                    src={product.image}
                    alt={product.name}
                    className={styles.productImage}
                  />
                </div>
                <div className={styles.contentContainer}>
                  <h3 className={styles.productTitle}>{product.name}</h3>
                  <p className={styles.capacity}>{product.capacity} 系统</p>
                  <p className={styles.description}>{product.description}</p>
                  <p className={styles.price}>{product.price}</p>
                  
                  <button 
                    onClick={() => handleViewDetails(product.id)}
                    className={styles.viewDetailsButton}
                  >
                    查看详情
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

export default EnergyStorage;


