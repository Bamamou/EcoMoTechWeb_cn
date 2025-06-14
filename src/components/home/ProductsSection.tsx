import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "solar-panels",
    title: "太阳能电池板",
    description: "高效光伏组件，旨在最大限度地捕获能量。",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1332&q=80",
    link: "/products/solar-panels"
  },
  {
    id: "solar-inverters",
    title: "太阳能逆变器",
    description: "先进的逆变器技术，将直流电转换为可用的交流电。",
    image: "/EcoMoTechWeb_cn/images/Inverters/Growatt poducts inv.png",
    link: "/products/solar-inverters"
  },
  {
    id: "home-systems",
    title: "家用太阳能系统",
    description: "完整的住宅解决方案，实现能源独立和节约。",
    image: "/EcoMoTechWeb_cn/images/HomeSystem/6kW.jpg",
    link: "/products/home-systems"
  },
  {
    id: "street-lights",
    title: "太阳能路灯",
    description: "用于道路、人行道和公共空间的自主照明解决方案。",
    image:"/EcoMoTechWeb_cn/images/streetlights/road.jpg",
    link: "/products/street-lights"
  },
  {
    id: "energy-storage",
    title: "储能系统",
    description: "电池解决方案，用于在需要时存储多余的能量。",
    image: "/EcoMoTechWeb_cn/images/BESS/battery system.webp",
    link: "/products/energy-storage"
  },
  {
    id: "solar-pumbs",
    title: "太阳能水泵",
    description: "高效太阳能水泵，满足农业和灌溉需求。",
    image: "/EcoMoTechWeb_cn/images/Solar pumbs/SolarPumbs.jpeg",
    link: "/products/solar-pumbs"
  },
];

const ProductsSection = () => {
  return (
    <section className="py-20 bg-ecomotech-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">我们的产品</h2>
          <div className="w-24 h-1 bg-ecomotech-blue mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            探索我们全面的太阳能产品系列，旨在实现效率、耐用性和性能。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link 
                  to={product.link} 
                  className="inline-flex items-center text-ecomotech-blue hover:text-ecomotech-dark-blue font-medium"
                >
                  <span>了解更多</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/products" 
            className="inline-flex items-center bg-ecomotech-blue hover:bg-ecomotech-dark-blue text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            <span>查看所有产品</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;


