
import React from "react";
import { Sun, Battery, Award, Clock, Shield, Leaf } from "lucide-react";

const features = [
  {
    icon: <Sun className="w-12 h-12 text-ecomotech-green" />,
    title: "高效率",
    description: "我们的太阳能电池板将更多阳光转化为电能，最大化您的能源产量和节省。"
  },
  {
    icon: <Battery className="w-12 h-12 text-ecomotech-green" />,
    title: "能源存储",
    description: "先进的储能系统，即使在没有阳光的情况下也能确保电力可用。"
  },
  {
    icon: <Award className="w-12 h-12 text-ecomotech-green" />,
    title: "卓越品质",
    description: "采用优质材料和严格测试制造的产品，确保持久性能。"
  },
  {
    icon: <Clock className="w-12 h-12 text-ecomotech-green" />,
    title: "快速安装",
    description: "专业的安装服务，可在最短时间内启动并运行您的系统。"
  },
  {
    icon: <Shield className="w-12 h-12 text-ecomotech-green" />,
    title: "保修保护",
    description: "全面的保修范围，让您的投资无后顾之忧。"
  },
  {
    icon: <Leaf className="w-12 h-12 text-ecomotech-green" />,
    title: "环保",
    description: "清洁能源解决方案，显著减少碳排放和环境影响。"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">为什么选择 Ecomotech</h2>
          <div className="w-24 h-1 bg-ecomotech-green mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            我们致力于提供卓越的太阳能解决方案，为客户带来持久价值，同时保护环境。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-ecomotech-light-gray p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-b-4 hover:border-ecomotech-green group"
            >
              <div className="mb-6 group-hover:transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


