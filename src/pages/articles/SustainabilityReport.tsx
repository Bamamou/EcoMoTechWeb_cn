import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const SustainabilityReport = () => {
  return (
    <Layout>
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="mb-6">
              <span className="text-ecomotech-blue font-medium">可持续发展</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                年度可持续发展报告显示创纪录的碳抵消
              </h1>
              <div className="flex items-center text-gray-600">
                <time dateTime="2022-12-10">2022 年 12 月 10 日</time>
                <span className="mx-2">·</span>
                <span>作者：Elena Gomez</span>
              </div>
            </div>
            
            <img
              src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1141&q=80"
              alt="太阳能电池板安装"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                Ecomotech 的 2022 年可持续发展报告显示了前所未有的环境影响，
                我们的太阳能装置阻止了超过 500,000 公吨的二氧化碳排放——
                相当于种植了 2500 万棵树。
              </p>

              <h2>主要成就</h2>
              <p>
                今年的报告强调了几个重要的里程碑：
              </p>
              <ul>
                <li>碳抵消比上一年增加 35%</li>
                <li>所有制造设施采用 100% 可再生能源</li>
                <li>通过工艺改进减少 40% 的用水量</li>
                <li>包装废物显著减少</li>
                <li>实施循环经济倡议</li>
              </ul>

              <blockquote>
                <p>
                  “这些数字不仅仅是统计数据——它们代表着真实的环境影响。
                  我们安装的每一块太阳能电池板都为减少全球碳足迹做出了重要贡献。”
                </p>
                <cite>— Elena Gomez，可持续发展总监</cite>
              </blockquote>

              <h2>制造创新</h2>
              <p>
                我们对可持续发展的承诺延伸到我们的制造过程：
              </p>
              <ul>
                <li>太阳能供电的制造设施</li>
                <li>水循环系统实施</li>
                <li>零废物包装倡议</li>
                <li>供应链优化</li>
              </ul>

              <h2>未来目标</h2>
              <p>
                展望未来，Ecomotech 为 2023 年设定了雄心勃勃的目标：
              </p>
              <ul>
                <li>碳抵消总量增加 40%</li>
                <li>制造废物减少 50%</li>
                <li>实施可生物降解包装</li>
                <li>扩大回收计划</li>
              </ul>

              <div className="bg-ecomotech-gray p-6 rounded-lg mt-8">
                <h3>下载完整报告</h3>
                <p>
                  从我们的 2022 年可持续发展报告中获取详细见解和全面数据。
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-ecomotech-blue hover:text-ecomotech-dark-blue font-medium mt-4"
                >
                  请求报告访问权限
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

export default SustainabilityReport;


