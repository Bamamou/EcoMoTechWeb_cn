import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const NewSolarPanelSeries = () => {
  return (
    <Layout>
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="mb-6">
              <span className="text-ecomotech-blue font-medium">产品新闻</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                Ecomotech 推出全新高效太阳能电池板系列
              </h1>
              <div className="flex items-center text-gray-600">
                <time dateTime="2024-04-15">2024 年 4 月 15 日</time>
                <span className="mx-2">·</span>
                <span>作者：David Chen</span>
              </div>
            </div>
            
            <img
              src="/EcoMoTechWeb/images/News/Ecomotech Launches New High-Efficiency Solar Panel Series.jpg"
              alt="新太阳能电池板系列"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              {/* Article Content */}
              <p className="lead">
                Ecomotech 隆重推出其突破性的 UltraPower 600W 太阳能电池板系列，
                为效率和性能树立了新的行业标准。
              </p>

              <p>
                新系列实现了前所未有的 21.7% 转换效率，
                标志着太阳能技术的重大进步。这一突破
                使得在更小的表面积上产生更多电力成为可能，使太阳能
                对住宅和商业应用都更易于获取且更具成本效益。
              </p>

              {/* Rest of the article content */}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default NewSolarPanelSeries;


