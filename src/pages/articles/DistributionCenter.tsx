import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const DistributionCenter = () => {
  return (
    <Layout>
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="mb-6">
              <span className="text-ecomotech-blue font-medium">公司新闻</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                扩大我们的业务范围：新配送中心开业
              </h1>
              <div className="flex items-center text-gray-600">
                <time dateTime="2023-03-22">2023 年 3 月 22 日</time>
                <span className="mx-2">·</span>
                <span>作者：Michael Johnson</span>
              </div>
            </div>
            
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="新配送中心"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                Ecomotech 已正式开设一个最先进的 50,000 平方英尺配送中心，
                这标志着我们在卓越客户服务和运营方面迈出了重要一步。
              </p>

              <h2>战略扩张</h2>
              <p>
                该新设施位于中西部中心地带，是我们不断增长的安装商和合作伙伴网络的中心枢纽，
                覆盖美国中部。战略位置可实现更快的交付和更及时的服务，以满足我们不断扩大的客户群。
              </p>

              {/* Continue with the rest of the article content */}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default DistributionCenter;


