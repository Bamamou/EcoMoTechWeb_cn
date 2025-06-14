import React from "react";
import Layout from "@/components/layout/Layout";
import styles from "@/styles/SolarPumbs.module.css";

const SolarPumbs = () => {
  return (
    <Layout>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>太阳能水泵</h1>
          <p className={styles.heroDescription}>
            高效太阳能水泵解决方案，适用于农业、灌溉和供水系统。
          </p>
        </div>
      </section>

      <section className="py-16 bg-ecomotech-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Coming Soon Message */}
            <div className="md:col-span-2 text-center p-12 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-ecomotech-blue mb-4">即将推出</h3>
              <p className="text-gray-600">
                我们先进的太阳能水泵解决方案正在最终确定中。
                这些系统将为农业、商业和住宅应用提供高效、可靠和可持续的水泵。
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolarPumbs;


