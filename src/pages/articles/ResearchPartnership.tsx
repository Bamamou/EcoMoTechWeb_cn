import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const ResearchPartnership = () => {
  return (
    <Layout>
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="mb-6">
              <span className="text-ecomotech-blue font-medium">研发</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                Ecomotech 与领先研究型大学合作
              </h1>
              <div className="flex items-center text-gray-600">
                <time dateTime="2023-01-28">2023 年 1 月 28 日</time>
                <span className="mx-2">·</span>
                <span>作者：James Williams 博士</span>
              </div>
            </div>
            
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="研究实验室"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                Ecomotech 宣布与州立大学绿色能源研究所建立开创性合作伙伴关系，
                旨在彻底改变可再生能源系统的储能技术。
              </p>

              <h2>合作伙伴概览</h2>
              <p>
                此次战略合作结合了 Ecomotech 的行业专业知识和
                世界领先的可再生能源研究机构之一的尖端研究能力。为期三年的合作伙伴关系将专注于开发
                专门用于太阳能应用的下一代电池技术。
              </p>

              <h2>研究目标</h2>
              <p>
                该合作伙伴关系将解决当前储能系统中的关键挑战：
              </p>
              <ul>
                <li>将存储容量提高多达 40%</li>
                <li>提高充电/放电效率</li>
                <li>将电池寿命延长至 15 年以上</li>
                <li>将生产成本降低 30%</li>
                <li>开发环保材料</li>
              </ul>

              <blockquote>
                <p>
                  “有效的储能是使可再生能源真正与传统电源竞争的缺失环节。
                  这种伙伴关系汇集了学术创新和行业专业知识的精华。”
                </p>
                <cite>— James Williams 博士，Ecomotech 研究总监</cite>
              </blockquote>

              <h2>创新管道</h2>
              <p>
                研究团队已经确定了几项有希望的技术，这些技术可能导致储能领域的重大突破：
              </p>
              <ul>
                <li>先进的固态电池化学</li>
                <li>新型电极材料</li>
                <li>智能充电管理系统</li>
                <li>耐温储能解决方案</li>
              </ul>

              <h2>资金和资源</h2>
              <p>
                该倡议由私人和公共资金共同支持，包括：
              </p>
              <ul>
                <li>政府可再生能源创新补助金</li>
                <li>Ecomotech 的研发投资</li>
                <li>大学研究资金</li>
                <li>行业合作伙伴贡献</li>
              </ul>

              <h2>时间表和目标</h2>
              <p>
                该合作伙伴关系已为开发制定了积极的时间表：
              </p>
              <ul>
                <li>第一阶段（6 个月）：研究和原型设计</li>
                <li>第二阶段（12 个月）：原型开发和测试</li>
                <li>第三阶段（18 个月）：商业可行性评估和优化</li>
              </ul>

              <div className="bg-ecomotech-gray p-6 rounded-lg mt-8">
                <h3>研究机会</h3>
                <p>
                  我们正在积极寻找有才华的研究人员和工程师加入这项
                  开创性倡议。访问我们的职业页面了解更多可用职位。
                </p>
                <Link 
                  to="/join-us" 
                  className="inline-flex items-center text-ecomotech-blue hover:text-ecomotech-dark-blue font-medium mt-4"
                >
                  查看机会
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ResearchPartnership;


