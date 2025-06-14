import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const StreetLighting = () => {
  return (
    <Layout>
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="mb-6">
              <span className="text-ecomotech-blue font-medium">案例研究</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                Ecomotech 太阳能路灯改变城市安全
              </h1>
              <div className="flex items-center text-gray-600">
                <time dateTime="2022-11-05">2022 年 11 月 5 日</time>
                <span className="mx-2">·</span>
                <span>作者：Robert Kim</span>
              </div>
            </div>
            
            <img
              src="/EcoMoTechWeb_cn/images/News/Ecomotech Solar Street Lighting Transforms Urban Safety.jpg"
              alt="太阳能路灯"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                一项为期 18 个月的综合研究显示，Ecomotech 的太阳能路灯安装使
                城市社区的夜间事件减少了 60%，同时为市政当局节省了大量成本。
              </p>

              <h2>项目概览</h2>
              <p>
                该倡议在五个城市区域安装了 500 多个 StreetBright 太阳能 LED 照明系统，
                彻底改变了公共安全和能源效率：
              </p>
              <ul>
                <li>用于自适应亮度的运动感应功能</li>
                <li>独立于电网运行</li>
                <li>智能监控系统</li>
                <li>耐候设计</li>
                <li>零持续电力成本</li>
              </ul>

              <h2>安全影响</h2>
              <p>
                该研究记录了几项关键的安全改进：
              </p>
              <ul>
                <li>夜间安全事件减少 60%</li>
                <li>以前未充分利用的区域的行人活动增加</li>
                <li>增强的应急响应能力</li>
                <li>改善交叉路口的交通安全</li>
                <li>停电期间持续照明</li>
              </ul>

              <blockquote>
                <p>
                  “除了明显的环境效益外，该项目还展示了
                  可持续技术如何直接改善生活质量和社区安全。”
                </p>
                <cite>— Robert Kim，城市解决方案经理</cite>
              </blockquote>

              <h2>经济效益</h2>
              <p>
                财务分析显示出显著的成本优势：
              </p>
              <ul>
                <li>10 年内成本降低 40%</li>
                <li>零电力成本</li>
                <li>最低维护要求</li>
                <li>无需开挖或布线成本</li>
                <li>减少基础设施压力</li>
              </ul>

              <h2>技术特点</h2>
              <p>
                StreetBright 系统包含多项创新功能：
              </p>
              <ul>
                <li>用于最大效率的先进 LED 技术</li>
                <li>智能运动检测系统</li>
                <li>远程监控功能</li>
                <li>自主运行</li>
                <li>20 年使用寿命</li>
              </ul>

              <h2>未来扩展</h2>
              <p>
                基于这些成功的成果，另外三个城市已启动了使用 Ecomotech 太阳能路灯技术的类似项目，
                计划于下个季度开始安装。
              </p>

              <div className="bg-ecomotech-gray p-6 rounded-lg mt-8">
                <h3>了解更多关于 StreetBright</h3>
                <p>
                  了解我们的太阳能路灯解决方案如何造福您的社区。
                  联系我们的城市发展团队以获取详细规格和定价。
                </p>
                <Link 
                  to="/products/street-lights" 
                  className="inline-flex items-center text-ecomotech-blue hover:text-ecomotech-dark-blue font-medium mt-4"
                >
                  探索 StreetBright 解决方案
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

export default StreetLighting;


