import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Ecomotech 推出全新高效太阳能电池板系列",
    excerpt: "我们最新的太阳能电池板技术实现了创纪录的效率，使太阳能比以往任何时候都更易于获取和负担得起。",
    date: "2023 年 4 月 10 日",
    image: "/EcoMoTechWeb_cn/images/news/solar-panel-series.jpg",
    link: "/news/new-solar-panel-series"
  },
  {
    id: 2,
    title: "扩大我们的业务范围：新配送中心开业",
    excerpt: "Ecomotech 扩大业务，开设新的配送中心，通过更快的交货时间更好地服务该地区的客户。",
    date: "2023 年 3 月 22 日",
    image: "/EcoMoTechWeb/images/news/distribution-center.jpg",
    link: "/news/distribution-center"
  },
  {
    id: 3,
    title: "为偏远社区提供可持续能源解决方案",
    excerpt: "我们的团队已成功为偏远村庄实施了离网太阳能解决方案，首次为社区带来了可靠的电力。",
    date: "2023 年 2 月 15 日",
    image: "/EcoMoTechWeb/images/news/remote-communities.jpg",
    link: "/news/remote-communities"
  }
];

const NewsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">最新新闻</h2>
            <div className="w-24 h-1 bg-ecomotech-green mb-6"></div>
          </div>
          <Link 
            to="/news" 
            className="inline-flex items-center text-ecomotech-blue hover:text-ecomotech-dark-blue font-medium"
          >
            <span>查看所有新闻</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-ecomotech-light-gray rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/EcoMoTechWeb/images/news/solar-panel-series.jpg"; // Fallback image
                    target.onerror = null; // Prevent infinite loop
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 hover:text-ecomotech-green transition-colors">
                  <Link to={item.link}>{item.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link 
                  to={item.link} 
                  className="inline-flex items-center text-ecomotech-blue hover:text-ecomotech-dark-blue font-medium"
                >
                  <span>阅读更多</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;


