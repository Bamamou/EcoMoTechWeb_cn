import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const ElectricMobilityAfrica = () => {
  return (
    <Layout>
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="mb-6">
              <span className="text-ecomotech-blue font-medium">电动出行</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                交通革命：电动出行在非洲扎根
              </h1>
              <div className="flex items-center text-gray-600">
                <time dateTime="2022-10-15">2022 年 10 月 15 日</time>
                <span className="mx-2">·</span>
                <span>作者：Marcus Adebayo</span>
              </div>
            </div>
            
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="非洲的电动摩托车"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                随着 Ecomotech 的电动出行计划取得重大里程碑，超过 1,000 辆电动摩托车和三轮车投入运营，
                一股可持续交通的变革浪潮正在席卷非洲城市。
              </p>

              {/* Add the rest of the article content here */}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ElectricMobilityAfrica;


