import React from "react";
import Layout from "@/components/layout/Layout";
import { Check } from "lucide-react";
import styles from "@/styles/AboutUs.module.css";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-ecomotech-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">关于 Ecomotech</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{animationDelay: "0.2s"}}>
              我们的使命是通过创新的太阳能解决方案，加速向可持续能源的转型。
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">我们的故事</h2>
              <div className="w-24 h-1 bg-ecomotech-green mb-6"></div>
              <p className="text-gray-700 mb-6">
                Ecomotech 成立于 2010 年，最初的愿景很简单：让每个人都能获得可再生能源。最初由一群充满热情的工程师组成的小团队，现已发展成为多个国家领先的太阳能解决方案提供商。
              </p>
              <p className="text-gray-700 mb-6">
                多年来，我们开发了尖端的太阳能技术，可在最大限度提高能源产量的同时，最大限度减少对环境的影响。我们对创新、质量和客户满意度的承诺使我们成为可再生能源行业值得信赖的合作伙伴。
              </p>
              <p className="text-gray-700">
                今天，Ecomotech 秉持着清洁、可持续能源是地球美好未来的基础这一信念，继续突破太阳能领域的可能性。
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-ecomotech-green rounded-lg opacity-10 transform rotate-3"></div>
              <img 
                src="/EcoMoTechWeb/images/AboutUs/BJTU.jpg" 
                alt="Ecomotech team" 
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-ecomotech-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">我们的使命</h3>
              <div className="w-16 h-1 bg-ecomotech-green mb-6"></div>
              <p className="text-gray-700">
                通过提供创新、可靠且经济高效的太阳能解决方案，加速全球向可持续能源的转型，从而减少环境影响并增强能源独立性。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">我们的愿景</h3>
              <div className="w-16 h-1 bg-ecomotech-blue mb-6"></div>
              <p className="text-gray-700">
                一个由清洁、可再生能源驱动的世界，可持续资源人人可及，我们的技术创新为子孙后代创造一个更健康的地球做出贡献。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">我们的核心价值观</h2>
            <div className="w-24 h-1 bg-ecomotech-green mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              指导 Ecomotech 所有工作的原则。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="flex items-center text-xl font-semibold mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-ecomotech-green text-white rounded-full mr-3">
                  <Check size={16} />
                </span>
                创新
              </h3>
              <p className="text-gray-600">
                我们不断突破太阳能技术的界限，寻求提高效率、性能和可持续性的新方法。
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="flex items-center text-xl font-semibold mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-ecomotech-green text-white rounded-full mr-3">
                  <Check size={16} />
                </span>
                质量
              </h3>
              <p className="text-gray-600">
                我们从不妥协产品质量，确保我们提供的每种解决方案都符合最高的可靠性和耐用性标准。
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="flex items-center text-xl font-semibold mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-ecomotech-green text-white rounded-full mr-3">
                  <Check size={16} />
                </span>
                诚信
              </h3>
              <p className="text-gray-600">
                我们以坚定不移的诚实、透明和道德标准开展业务，与客户、合作伙伴和社区建立信任。
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="flex items-center text-xl font-semibold mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-ecomotech-green text-white rounded-full mr-3">
                  <Check size={16} />
                </span>
                可持续性
              </h3>
              <p className="text-gray-600">
                我们致力于在所有运营中最大限度减少对环境的影响，从产品开发到包装和分销。
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="flex items-center text-xl font-semibold mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-ecomotech-green text-white rounded-full mr-3">
                  <Check size={16} />
                </span>
                以客户为中心
              </h3>
              <p className="text-gray-600">
                我们优先考虑客户需求，在他们的可再生能源之旅中提供个性化解决方案、卓越服务和持久支持。
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="flex items-center text-xl font-semibold mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-ecomotech-green text-white rounded-full mr-3">
                  <Check size={16} />
                </span>
                协作
              </h3>
              <p className="text-gray-600">
                我们相信伙伴关系和团队合作的力量，与利益相关者密切合作，提供推动可再生能源转型的集成解决方案。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-ecomotech-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">我们的领导团队</h2>
            <div className="w-24 h-1 bg-ecomotech-blue mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              认识领导 Ecomotech 革命性可再生能源使命的专家。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className={styles.teamMember}>
              <div className={styles.teamImageWrapper}>
                <div className={styles.imageContainer}>
                  <img 
                    src="/EcoMoTechWeb/images/AboutUs/ID photo.jpg" 
                    alt="Nicolas Bamamou - CEO" 
                    className={styles.memberImage}
                  />
                </div>
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>Nicolas Bamamou</h3>
                <p className={styles.memberRole}>首席执行官</p>
                <div className={styles.divider}></div>
                <p className={styles.memberBio}>
                  David 在可再生能源领域拥有超过 10 年的经验，领导 Ecomotech 的战略愿景和全球运营。
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className={styles.teamMember}>
              <div className={styles.teamImageWrapper}>
                <div className={styles.imageContainer}>
                  <img 
                    src="/EcoMoTechWeb/images/AboutUs/Kagoma.jpg"  
                    alt="Kagoma Jaros - CTO" 
                    className={styles.memberImage}
                  />
                </div>
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>Kagoma Jaros</h3>
                <p className={styles.memberRole}>首席技术官</p>
                <div className={styles.divider}></div>
                <p className={styles.memberBio}>
                  来自坦桑尼亚的 Kagoma 推动 Ecomotech 的技术开发，专注于创新和提升我们的产品性能。
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className={styles.teamMember}>
              <div className={styles.teamImageWrapper}>
                <div className={styles.imageContainer}>
                  <img 
                    src="/EcoMoTechWeb/images/AboutUs/Njie.jpg" 
                    alt="Sulayman Njie - COO" 
                    className={styles.memberImage}
                  />
                </div>
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>Sulayman Njie</h3>
                <p className={styles.memberRole}>首席运营官</p>
                <div className={styles.divider}></div>
                <p className={styles.memberBio}>
                  Njie，又名 Brainysoul，负责 Ecomotech 的运营，确保我们太阳能解决方案的高效生产和交付。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;


