import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const RemoteCommunities = () => {
  return (
    <Layout>
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="mb-6">
              <span className="text-ecomotech-blue font-medium">项目</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                为偏远社区提供可持续能源解决方案
              </h1>
              <div className="flex items-center text-gray-600">
                <time dateTime="2023-02-15">2023 年 2 月 15 日</time>
                <span className="mx-2">·</span>
                <span>作者：Emma Nelson</span>
              </div>
            </div>
            
            <img
              src="/EcoMoTechWeb/images/News/Sustainable Energy Solutions for Remote Communities.jpg"
              alt="偏远村庄太阳能安装"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                在一项开创性举措中，Ecomotech 已成功为五个偏远村庄带来了可持续能源解决方案，
                改变了 2,000 多名以前电力供应有限或没有电力的居民的生活。
              </p>

              <h2>人人享有电力计划</h2>
              <p>
                通过我们的“人人享有电力”计划，我们实施了专门为挑战性环境设计的全面离网太阳能解决方案。
                每个安装都结合了太阳能阵列、先进的电池储能系统和智能微电网技术，以提供可靠、可持续的电力。
              </p>

              <h2>技术创新</h2>
              <p>
                我们的工程团队开发了定制解决方案，以应对偏远地区安装的独特挑战，包括：
              </p>
              <ul>
                <li>具有增强耐用性的耐候太阳能电池板</li>
                <li>用于优化电力分配的智能微电网系统</li>
                <li>具有延长寿命的先进电池储能</li>
                <li>远程监控和维护功能</li>
                <li>社区操作的简单用户界面</li>
              </ul>

              <h2>社区影响</h2>
              <blockquote>
                <p>
                  “可靠电力的到来改变了我们的社区。孩子们可以在天黑后学习，我们的医疗中心可以妥善储存药品，
                  新的小型企业正在涌现。这不仅仅是关于电力——更是关于机会。”
                </p>
                <cite>— 村长，梅萨维德社区</cite>
              </blockquote>

              <p>
                影响超出了基本电气化。社区报告称：
              </p>
              <ul>
                <li>教育设施的运营时间延长</li>
                <li>通过供电设备改善医疗服务</li>
                <li>新的小型商业机会</li>
                <li>通过可靠照明增强安全性</li>
                <li>减少对昂贵且污染的柴油发电机的依赖</li>
              </ul>

              <h2>未来扩展</h2>
              <p>
                在此成功的基础上，Ecomotech 准备在未来一年将该计划扩展到另外十二个村庄。
                此次扩展将包括根据初始实施中吸取的经验教训而增强的功能。
              </p>

              <div className="bg-ecomotech-gray p-6 rounded-lg mt-8">
                <h3>参与其中</h3>
                <p>
                  了解更多关于我们的人人享有电力计划以及您如何支持偏远社区的可持续能源获取。
                  联系我们的团队以获取合作机会或为这项倡议做出贡献。
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-ecomotech-blue hover:text-ecomotech-dark-blue font-medium mt-4"
                >
                  联系我们
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

export default RemoteCommunities;


