import React from "react";
import Layout from "@/components/layout/Layout";
import styles from '@/styles/ElectricMotorcyles.module.css';
import { ExternalLink } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export interface Product {
  id: string;
  name: string;
  description: {
    main: string;
    details: string[];
  };
  features: string[];
  specifications: Record<string, string>;
  image: string;
  additionalImages?: string[];
}

// Electric Motorcycle Products
export const electricMotorcycleProducts: Product[] = [
  {
    id: "motorcycle-1",
    name: "EcoMoTech V9",
    description: {
      main: "EcoMoTech V9 将动力和创新融入轻量化设计，是城市和越野探险的理想选择。",
      details: [
        "体验我们 72V 锂离子电池 (50Ah) 和 3kW 无刷电机带来的动力与效率的完美结合。享受 70-85 英里 (130km) 的续航里程，并通过带再生制动的双液压盘式制动器增强安全性。通过 7 英寸 GPS 触摸屏、可定制的骑行模式和无线软件更新保持连接。凭借 ABS 和牵引力控制系统，自信骑行。通过零排放和完全可回收的电池设计支持可持续发展。"
      ]
    },
    features: [
      "带 ABS 的双液压盘式制动器", 
      "快速充电功能",
      "TCS 和再生制动",
      " 无钥匙 NFC/指纹点火",
      "带 7 英寸触摸屏和 GPS 的智能连接",
      " 所有组件均符合 IP67 防风雨标准",
      "针对不同地形的可定制骑行模式",
      "防盗跟踪和 OTA 更新",
    ],
    specifications: {
      "Motor Power": "3000W",
      "Max Speed": "100 km/h",
      "Range": "110 km",
      "Charging Time": "180 minutes",
      "Battery Capacity": "72V 60Ah",
      "Weight": "120 kg",
      "Dimensions": "2100 x 800 x 1200 mm",
      "controller": "72V 800A",
    },
    image: "/EcoMoTechWeb/images/Electric motorcycles/V9 Bleu.png",
    additionalImages: [
      "/EcoMoTechWeb/images/Electric motorcycles/V9 Black.png",
      "/EcoMoTechWeb/images/Electric motorcycles/V9 yellow Black.jpg",
      "/EcoMoTechWeb/images/Electric motorcycles/V9 white.png"
    ]
  },
  {
    id: "EcoMoTech V8",
    name: "EcoMoTech V8",
    description: {
      main: "EcoMoTech_V8 是一款轻巧、技术驱动的杰作，适用于城市和越野探险，由 72V 锂离子电池 (55Ah) 和 3kW 无刷电机提供动力，续航里程为 45-50 英里 (80km)。",
      details: [
        "专为追求性能和可持续性的骑手设计。",
        "先进的空气动力学设计可减少阻力并最大限度地提高续航效率。",
        "优质悬架系统确保在所有条件下均能实现最佳操控。",
        "最先进的电池管理系统，可增强寿命和性能。"
      ]
    },
    features: [
      "先进的再生制动系统",
      " 移动应用程序和智能连接功能 ",
      "优质悬架系统",
      "先进的空气动力学设计",
      "最先进的电池管理系统",
      "三种骑行模式",
      "快速充电功能",
      "LED 照明系统，增强可见度",
      "符合人体工程学的座椅设计，提供舒适性",
    ],
    specifications: {
      "Motor Power": "3000W",
      "Max Speed": "80 km/h",
      "Range": "120 km",
      "Charging Time": "120 minutes",
      "Battery Capacity": "72V 55Ah",
      "Weight": "110 kg",
      "Dimensions": "2100 x 800 x 1200 mm",
      "controller": "72V 800A",
      "Brakes": "前置和后置液压盘式制动器",

    },
    image: "/EcoMoTechWeb/images/Electric motorcycles/small open black.webp",
    additionalImages: [
      "/EcoMoTechWeb/images/Electric motorcycles/small open red.avif",
      "/EcoMoTechWeb/images/Electric motorcycles/small open blueblack.webp",
      "/EcoMoTechWeb/images/Electric motorcycles/small open.avif",
    ]
  },
  {
    id: "EcoMoTech M1",
    name: "EcoMoTech M1",
    description: {
      main: "完美的城市通勤车，性能和舒适性兼具。",
      details: [
        "舒适的直立骑行姿势，适合城市通勤。",
        "集成 LED 照明，增强可见度和安全性。",
        "USB 充电端口，方便随时随地充电。",
        "数字显示屏，提供实时骑行信息。"
      ]
    },
    features: [
      "舒适的直立骑行姿势",
      "集成 LED 照明",
      "通过 ABS 和牵引力控制确保安全",
      "USB 充电端口",
      "TFT 显示屏",
      "高性能轮胎，提供抓地力和稳定性",
      "带再生功能的先进制动系统",
      "智能连接功能",
      "再生制动系统",
      "智能连接功能",  

    ],
    specifications: {
      "Motor Power": "5000W",
      "Max Speed": "100 km/h",
      "Range": "120 km",
      "Charging Time": "3.5 hours",
      "Battery Capacity": "72V 80Ah",
      "Weight": "150 kg",
      "Dimensions": "2200 x 900 x 1300 mm",
      "controller": "72V 800A",
      "Brakes": "前置和后置液压盘式制动器",
    },
    image: "/EcoMoTechWeb/images/Electric motorcycles/KingChe blue.png",
    additionalImages: [
      "/EcoMoTechWeb/images/Electric motorcycles/KingChe red.jpg",
      "/EcoMoTechWeb/images/Electric motorcycles/KingChe red front.jpg",
      "/EcoMoTechWeb/images/Electric motorcycles/KingChe black.webp",
    ]
  },

  {
    id: "EcoMoTech DMG",
    name: "EcoMoTech DMG",
    description: {
      main: "完美的城市通勤车，性能和舒适性兼具。",
      details: [
        "舒适的直立骑行姿势，适合城市通勤。",
        "集成 LED 照明，增强可见度和安全性。",
        "USB 充电端口，方便随时随地充电。",
        "数字显示屏，提供实时骑行信息。"
      ]
    },
    features: [
      "舒适的直立骑行姿势",
      "集成 LED 照明",
      "通过 ABS 和牵引力控制确保安全",
      "USB 充电端口",
      "TFT 显示屏",
      "高性能轮胎，提供抓地力和稳定性",
      "带再生功能的先进制动系统",
      "智能连接功能",
      "再生制动系统",
      "智能连接功能",  

    ],
    specifications: {
      "Motor Power": "5000W",
      "Max Speed": "110 km/h",
      "Range": "160 km",
      "Charging Time": "3.5 hours",
      "Battery Capacity": "72V 100Ah",
      "Weight": "130 kg",
      "Dimensions": "2200 x 900 x 1300 mm",
      "controller": "72V 800A",
      "Brakes": "前置和后置液压盘式制动器",
    },
    image: "/EcoMoTechWeb/images/Electric motorcycles/alrendo dmg.png",
    additionalImages: [
      "/EcoMoTechWeb/images/Electric motorcycles/DMG blue.jpg",
      "/EcoMoTechWeb/images/Electric motorcycles/DMG charging.jpg",
      "/EcoMoTechWeb/images/Electric motorcycles/DMG parking.avif",
    ]
  }
];

const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.productImage}
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.productHeader}>
          <h3 className={styles.productName}>{product.name}</h3>
          <p className={styles.productDescription}>{product.description.main}</p>
        </div>
        <div className={styles.featuresList}>
          {product.features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
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
            </div>
          ))}
        </div>
        <button 
          onClick={() => navigate(`/products/electric-motorcycles/${product.id}`)}
          className={styles.viewDetailsButton}
        >
          <span className={styles.viewDetailsText}>查看规格</span>
          <ExternalLink className={styles.viewDetailsIcon} />
        </button>
      </div>
    </div>
  );
};

const ElectricMobility = () => {
  return (
    <Layout>
      <section className={`py-16 ${styles.fadeInAnimation}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={styles.categoryTitle}>电动出行解决方案</h2>
            <div className="w-24 h-1 bg-ecomotech-blue mx-auto mb-6"></div>
            <p className={styles.categoryDescription}>
              通过我们专为可持续城市出行和卓越骑行体验设计的高性能电动摩托车，体验交通的未来。
            </p>
          </div>

          <div className={styles.productGrid}>
            {electricMotorcycleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ElectricMobility;


