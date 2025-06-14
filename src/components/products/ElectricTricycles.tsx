import React from "react";
import Layout from "@/components/layout/Layout";

const ElectricTricycles = () => {
  return (
    <Layout>
      <section className="py-16 bg-ecomotech-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">电动三轮车</h2>
            <div className="w-24 h-1 bg-ecomotech-blue mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              多功能电动三轮车，专为高效的商业和个人交通需求而设计。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Coming Soon Message */}
            <div className="md:col-span-2 text-center p-12 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-ecomotech-blue mb-4">即将推出</h3>
              <p className="text-gray-600">
                我们创新的电动三轮车系列正在开发中。
                这些车辆将为商业和个人用途提供卓越的实用性、舒适性和环保操作。
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ElectricTricycles;


