import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Bike, BatteryCharging } from "lucide-react";

const mobilityProducts = [
  {
    id: "electric-motorcycles",
    title: "电动摩托车",
    description: "用于城市出行的高性能电动摩托车。",
    image: "/EcoMoTechWeb/images/Electric motorcycles/DM green.jpg",
    link: "/products/electric-motorcycles"
  },
  {
    id: "electric-tricycles",
    title: "电动三轮车",
    description: "多功能电动三轮车，适用于商业和个人用途。",
    image: "/EcoMoTechWeb/images/Electric motorcycles/Higo white.webp",
    link: "/products/electric-tricycles"
  },
  {
    id: "ev-chargers",
    title: "电动汽车充电器",
    description: "用于家庭和商业应用的先进充电解决方案。",
    image: "/EcoMoTechWeb/images/chargers/charger design.png",
    link: "/products/ev-chargers"
  }
];

const ElectricMobilitySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">电动出行解决方案</h2>
          <div className="w-24 h-1 bg-ecomotech-green mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            探索我们为现代交通需求设计的可持续电动出行解决方案。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobilityProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-ecomotech-gray rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
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
            to="/products#electric-mobility" 
            className="inline-flex items-center bg-ecomotech-green hover:bg-ecomotech-dark-green text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            <span>查看所有电动出行产品</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ElectricMobilitySection;


