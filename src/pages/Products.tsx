import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SolarPanels from "@/components/products/SolarPanels";
import SolarInverters from "@/components/products/SolarInverters";
import ElectricMobility from "@/components/products/ElectricMotorcycles";
import EVCharger from "@/components/products/EVChargers";
import HomeSystem from "@/components/products/HomeSystems";
import StreetLights from "@/components/products/StreetLights";
import EnergyStorage from "@/components/products/EnergyStorage";

const ProductsPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-ecomotech-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">我们的产品</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              探索我们全面的可再生能源和电动出行解决方案。
            </p>
          </div>
        </div>
      </section>

      {/* Solar Products Section */}
      <section className="py-16 bg-ecomotech-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">太阳能解决方案</h2>
            <div className="w-24 h-1 bg-ecomotech-blue mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              探索我们全面的太阳能产品系列，旨在实现效率、耐用性和性能。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/products/solar-panels" className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                alt="Solar Panels"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">太阳能电池板</h3>
                <p className="text-gray-600">用于住宅和商业用途的高效太阳能电池板。</p>
              </div>
            </Link>

            <Link to="/products/solar-inverters" className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="/EcoMoTechWeb/images/Inverters/Growatt poducts inv.png"
                alt="Solar Inverters"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">太阳能逆变器</h3>
                <p className="text-gray-600">用于最佳功率转换的先进逆变器技术。</p>
              </div>
            </Link>

            <Link to="/products/home-systems" className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="/EcoMoTechWeb/images/HomeSystem/6kW.jpg"
                alt="Home Systems"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">家用系统</h3>
                <p className="text-gray-600">住宅应用的完整太阳能解决方案。</p>
              </div>
            </Link>

            <Link to="/products/street-lights" className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="/EcoMoTechWeb/images/streetlights/road.jpg"
                alt="Street Lights"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">路灯</h3>
                <p className="text-gray-600">
                  用于城市和农村应用的先进太阳能照明解决方案，具有智能控制和高效率。
                </p>
              </div>
            </Link>

            <Link to="/products/energy-storage" className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="/EcoMoTechWeb/images/BESS/battery system.webp"
                alt="Battery energy storage systems"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">电池储能系统</h3>
                <p className="text-gray-600">用于住宅和商业应用的先进锂电池储能系统。</p>
              </div>
            </Link>

            <Link to="/products/solar-pumbs" className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="/EcoMoTechWeb/images/Solar pumbs/SolarPumbs.jpeg"
                alt="Solar Water Pumps"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">太阳能水泵</h3>
                <p className="text-gray-600">用于农业和灌溉需求的 eficiente 太阳能抽水解决方案。</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Electric Mobility Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">电动出行解决方案</h2>
            <div className="w-24 h-1 bg-ecomotech-green mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              可持续交通解决方案，共创更清洁、更绿色的未来。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/products/electric-motorcycles" className="block bg-ecomotech-gray rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="/EcoMoTechWeb/images/Electric motorcycles/DM green.jpg"
                alt="Electric Motorcycles"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">电动摩托车</h3>
                <p className="text-gray-600">用于城市出行的高性能电动摩托车。</p>
              </div>
            </Link>

            <Link to="/products/ev-chargers" className="block bg-ecomotech-gray rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="/EcoMoTechWeb/images/chargers/charger design.png"
                alt="EV Chargers"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">电动汽车充电器</h3>
                <p className="text-gray-600">用于家庭和商业应用的先进充电解决方案。</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-ecomotech-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">准备好进行转换了吗？</h2>
            <p className="text-lg mb-8">
              联系我们的专家团队，为您的需求找到完美的可再生能源解决方案。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-ecomotech-green font-medium px-8 py-3 rounded-md transition-colors"
              >
                联系我们
              </Link>
              <Link
                to="/about"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-ecomotech-green text-white font-medium px-8 py-3 rounded-md transition-colors"
              >
                了解 Ecomotech
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;


