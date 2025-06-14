import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const EVChargingAfrica = () => {
  return (
    <Layout>
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="mb-6">
              <span className="text-ecomotech-blue font-medium">基础设施</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                扩大非洲城市的电动汽车充电基础设施
              </h1>
              <div className="flex items-center text-gray-600">
                <time dateTime="2022-09-28">2022 年 9 月 28 日</time>
                <span className="mx-2">·</span>
                <span>作者：Sarah Okonjo</span>
              </div>
            </div>
            
            <img
              src="/EcoMoTechWeb_cn/images/News/Charging stations.jpg"
              alt="电动汽车充电站"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                在非洲可持续交通领域的一项开创性举措中，
                Ecomotech 宣布计划在主要城市中心安装 200 个太阳能电动汽车充电站。
              </p>

              {/* Add the rest of the article content here */}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default EVChargingAfrica;


