import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Check } from "lucide-react";
import styles from "@/styles/SolarInverters.module.css";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const SolarInverters = () => {
  const inverters = [
    {
      name: "固德威 MIN 5000TL-X",
      power: "5kW",
      image: "/EcoMoTechWeb_cn/images/Inverters/Growatt MAX 10KTL3-X.jpg",
      features: [
        "最高效率 98.4%",
        "双路 MPPT 跟踪器",
        "通过应用程序智能监控",
        "集成直流开关",
        "宽电压范围",
        "紧凑设计"
      ],
      description: "非常适合住宅安装，5kW 逆变器提供卓越的效率和智能功能，实现最佳太阳能转换。"
    },
    {
      name: "固德威 MAX 10KTL3-X",
      power: "10kW",
      image: "/EcoMoTechWeb_cn/images/Inverters/Growatt MIN 5000TL-X.webp",
      features: [
        "最高效率 98.6%",
        "多路 MPPT 跟踪器",
        "高级电网支持",
        "IP65 防护等级",
        "触摸按键设计",
        "延长保修期"
      ],
      description: "这款 10kW 逆变器是商业应用的理想选择，结合了高性能和高级监控功能。"
    },
    {
      name: "固德威 MAX 15KTL3-X",
      power: "15kW",
      image: "/EcoMoTechWeb_cn/images/Inverters/Growatt MAX 15KTL3-X in.avif",
      features: [
        "最高效率 98.8%",
        "三路 MPPT 跟踪器",
        "增强的安全功能",
        "远程监控",
        "抗 PID 技术",
        "低电压穿越"
      ],
      description: "我们的高级 15kW 逆变器为大型商业安装提供卓越的性能，并具有高级电网支持功能。"
    },
    {
      name: "阳光电源 SG8.0RT",
      power: "8kW",
      image: "/EcoMoTechWeb_cn/images/Inverters/Sungrow SG8.0RT.png",
      features: [
        "最高效率 98.3%",
        "三路 MPPT 通道",
        "内置 Wi-Fi 监控",
        "免触式调试",
        "AI 驱动的产量优化",
        "12 年保修"
      ],
      description: "阳光电源多功能 8kW 逆变器，专为中型住宅和小型商业安装设计。"
    },
    {
      name: "阳光电源 SG10RT",
      power: "10kW",
      image: "/EcoMoTechWeb_cn/images/Inverters/Sungrow SG10RT.webp",
      features: [
        "最高效率 98.5%",
        "四路 MPPT 跟踪",
        "在线固件更新",
        "智能 I-V 曲线诊断",
        "IP66 防护等级",
        "内置 PID 恢复"
      ],
      description: "先进的 10kW 商用逆变器，具有尖端监控和诊断功能。"
    },
    {
      name: "阳光电源 SG12RT",
      power: "12kW",
      image: "/EcoMoTechWeb_cn/images/Inverters/Sungrow SG12RT.webp",
      features: [
        "最高效率 98.7%",
        "五路 MPPT 通道",
        "智能组串监控",
        "集成 AFCI 保护",
        "DC Type II SPD 保护",
        "低电压穿越"
      ],
      description: "高性能 12kW 逆变器，非常适合大型住宅和商业太阳能安装。"
    },
    {
      name: "古瑞瓦特 GW3000-NS",
      power: "3kW",
      image: "/EcoMoTechWeb_cn/images/Inverters/Goodwe GW3000-NS.jpg",
      features: [
        "最高效率 97.8%",
        "单路 MPPT 跟踪器",
        "内置 Wi-Fi/GPRS",
        "紧凑轻巧",
        "现代 OLED 显示屏",
        "10 年保修"
      ],
      description: "紧凑可靠的 3kW 逆变器，非常适合小型住宅太阳能安装，具有出色的监控功能。"
    },
    {
      name: "古瑞瓦特 GW6000-DT",
      power: "6kW",
      image: "/EcoMoTechWeb_cn/images/Inverters/Goodwe GW6000-DT.jpg",
      features: [
        "最高效率 98.2%",
        "双路 MPPT 跟踪器",
        "智能监控系统",
        "电弧故障保护",
        "IP65 防护等级",
        "集成出口控制"
      ],
      description: "多功能 6kW 双 MPPT 逆变器，专为中型住宅太阳能系统设计，具有高级安全功能。"
    },
    {
      name: "古瑞瓦特 GW10K-DT",
      power: "10kW",
      image: "/EcoMoTechWeb_cn/images/Inverters/Goodwe GW10K-DT.webp",
      features: [
        "最高效率 98.4%",
        "双路 MPPT 设计",
        "远程固件更新",
        "集成直流开关",
        "Type II SPD 保护",
        "宽电压范围"
      ],
      description: "高性能 10kW 逆变器，适用于大型住宅和小型商业安装，具有全面的保护功能。"
    },
    {
      name: "Ecoverter5",
      power: "5kW",
      image: "/EcoMoTechWeb_cn/images/Inverters/Ecoverter5.webp",
      features: [
        "最高效率 98.5%",
        "双路 MPPT 通道",
        "智能家居集成",
        "AI 驱动监控",
        "双 AC/DC 保护",
        "15 年保修"
      ],
      description: "我们的旗舰 5kW 逆变器，具有智能家居集成和行业领先的住宅安装效率。"
    },
    {
      name: "Ecoverter8",
      power: "8kW",
      image: "/EcoMoTechWeb_cn/images/Inverters/Ecoverter8.webp",
      features: [
        "最高效率 98.7%",
        "三路 MPPT 系统",
        "云监控平台",
        "零出口控制",
        "高级电网支持",
        "IP66 防护"
      ],
      description: "先进的 8kW 逆变器，具有基于云的监控和卓越的电网集成功能，适用于大型住宅。"
    },
    {
      name: "Ecoverter10",
      power: "10kW",
      image: "/EcoMoTechWeb_cn/images/Inverters/Ecoverter10.avif",
      features: [
        "最高效率 98.9%",
        "四路 MPPT 技术",
        "远程诊断",
        "电池就绪设计",
        "浪涌保护",
        "智能电网就绪"
      ],
      description: "高级 10kW 逆变器，具有电池存储兼容性和智能电网集成等面向未来的功能。"
    }
  ];

  return (
    <Layout>
      <section className={styles.heroSection}>
        <div className="container mx-auto px-4">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>太阳能逆变器</h1>
            <p className={styles.heroDescription} style={{animationDelay: "0.2s"}}>
              先进的逆变器技术，将直流电转换为可用的交流电，旨在实现最高效率和可靠性。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={styles.invertersGrid}>
            {inverters.map((inverter, index) => (
              <div key={index} className={styles.inverterCard}>
                <div className={styles.imageContainer}>
                  <img 
                    src={inverter.image} 
                    alt={inverter.name}
                    className={styles.inverterImage}
                  />
                </div>
                <div className={styles.contentContainer}>
                  <div className={styles.headerContainer}>
                    <div>
                      <h3 className={styles.inverterName}>{inverter.name}</h3>
                      <p className={styles.powerRating}>{inverter.power}</p>
                    </div>
                  </div>
                  <p className={styles.description}>{inverter.description}</p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className={styles.specButton}>
                        <span>查看规格</span>
                        <svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className={styles.specDialog}>
                      <DialogHeader>
                        <DialogTitle className={styles.specTitle}>
                          {inverter.name} 规格
                        </DialogTitle>
                      </DialogHeader>
                      <div className={styles.specGrid}>
                        <div className={styles.specSection}>
                          <h4 className={styles.specSectionTitle}>主要特点</h4>
                          <div className={styles.specList}>
                            {inverter.features.map((feature, idx) => (
                              <div key={idx} className={styles.specItem}>
                                <Check className="w-5 h-5 text-green-500" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className={styles.specSection}>
                          <h4 className={styles.specSectionTitle}>详情</h4>
                          <div className={styles.specList}>
                            <div className={styles.specItem}>
                              <span className="font-medium">额定功率:</span>
                              <span>{inverter.power}</span>
                            </div>
                            {/* Add more specifications here */}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolarInverters;


