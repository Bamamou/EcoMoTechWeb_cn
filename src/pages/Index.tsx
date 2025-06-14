import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProductsSection from "@/components/home/ProductsSection";
import ElectricMobilitySection from "@/components/home/ElectricMobilitySection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const latestNews = [
  {
    title: "Ecomotech 推出全新高效太阳能电池板系列",
    date: "2024 年 4 月 15 日",
    category: "产品新闻",
    excerpt: "我们最新的太阳能电池板技术实现了创纪录的效率...",
    link: "/news/new-solar-panel-series",
    image: "https://images.unsplash.com/photo-1497440001736-76dde04f31b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "扩大我们的业务范围：新配送中心开业",
    date: "2023 年 3 月 22 日",
    category: "公司新闻",
    excerpt: "Ecomotech 通过新的配送中心扩大业务...",
    link: "/news/distribution-center",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "为偏远社区提供可持续能源解决方案",
    date: "2023 年 2 月 15 日",
    category: "项目",
    excerpt: "首次为社区带来可靠电力...",
    link: "/news/remote-communities",
    image: "https://images.unsplash.com/photo-1534949522533-7c851c1bc891?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  }
];

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <ElectricMobilitySection />
      <StatsSection />
      <TestimonialsSection />
      <section className="py-16 bg-ecomotech-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">最新新闻</h2>
            <p className="text-gray-600">了解我们的最新发展和创新</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <Link 
                key={index} 
                to={news.link}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-ecomotech-blue text-white text-sm px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 hover:text-ecomotech-blue transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {news.excerpt}
                  </p>
                  <span className="text-ecomotech-blue font-medium inline-flex items-center">
                    阅读更多
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/news"
              className="inline-flex items-center text-ecomotech-blue hover:text-ecomotech-dark-blue font-medium"
            >
              查看所有新闻
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;


