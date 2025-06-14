import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/Layout";

export const newsItems = [
  {
    id: 1,
    title: "Ecomotech 推出全新高效太阳能电池板系列",
    excerpt: "我们最新的太阳能电池板技术实现了创纪录的效率，使太阳能比以往任何时候都更易于获取和负担得起。",
    content: "Ecomotech 荣幸地宣布推出我们在太阳能技术方面的最新创新...",
    date: "2024 年 4 月 15 日",
    author: "David Chen",
    category: "产品新闻",
    image: "/EcoMoTechWeb/images/News/Ecomotech Launches New High-Efficiency Solar Panel Series.jpg",
    link: "/news/new-solar-panel-series"
  },
  {
    id: 2,
    title: "扩大我们的业务范围：新配送中心开业",
    excerpt: "Ecomotech 扩大业务，开设新的配送中心，通过更快的交货时间和改进的物流，更好地服务该地区的客户。",
    content: "Ecomotech 已正式在中西部中心地带开设了我们新的 50,000 平方英尺配送中心，标志着我们运营能力的显著扩展。这个最先进的设施将作为我们不断增长的安装商和合作伙伴网络的中心枢纽，覆盖美国中部，从而实现更快的交货和更及时的服务。\n\n新配送中心配备了先进的库存管理系统、专门的质量控制区域和扩大的仓库空间，这将使我们的库存容量增加 200% 以上。这项战略投资将使该地区客户的平均交货时间缩短多达 60%。\n\nEcomotech 首席运营官 Michael Johnson 表示：‘此次扩张代表了我们致力于为不断增长的客户群提供最佳服务的承诺。’‘通过加强我们的分销网络，我们确保高质量的太阳能解决方案随时可用，以满足对可再生能源日益增长的需求。’",
    date: "2023 年 3 月 22 日",
    author: "Michael Johnson",
    category: "公司新闻",
    image: "/EcoMoTechWeb/images/News/warehouse.jpg",
    link: "/news/distribution-center"
  },
  {
    id: 3,
    title: "为偏远社区提供可持续能源解决方案",
    excerpt: "我们的团队已成功为偏远村庄实施了离网太阳能解决方案，首次为社区带来了可靠的电力。",
    content: "Ecomotech 荣幸地宣布成功完成了一项里程碑式的项目，为发展中地区的五个偏远村庄带来了可持续能源。这项作为我们‘人人享有电力’计划一部分的倡议，已为以前电力供应有限或没有电力的 2,000 多人提供了可靠的电力。\n\n该项目利用了我们的离网太阳能和电池储能系统，这些系统经过专门设计，能够承受恶劣的环境条件，同时只需最少的维护。每个村庄的安装都包括一个集中式太阳能阵列、电池储能系统和一个本地微电网，为家庭、社区中心和小型企业供电。\n\n项目负责人 Emma Nelson 指出：‘可靠电力对这些社区的影响是变革性的。’‘从延长教育和医疗服务时间到新的小企业机会，我们正在看到可持续能源如何为社区发展奠定基础。’\n\n这项倡议代表了 Ecomotech 持续致力于确保可再生能源惠及所有社区，无论其地理位置或经济状况如何。扩大该计划至未来一年再增加十二个村庄的计划已经启动。",
    date: "2023 年 2 月 15 日",
    author: "Emma Nelson",
    category: "项目",
    image: "/EcoMoTechWeb/images/News/new-solar-panel-series.jpg",
    link: "/news/remote-communities"
  },
  {
    id: 4,
    title: "Ecomotech 与领先研究型大学合作",
    excerpt: "新的研究合作伙伴关系旨在开发具有更高容量和更长寿命的下一代太阳能储能技术。",
    content: "Ecomotech 已与州立大学著名的绿色能源研究所建立了战略研究合作伙伴关系，以加速下一代储能解决方案的开发。此次合作汇集了 Ecomotech 的行业专业知识和世界领先的可再生能源研究机构之一的尖端研究能力。\n\n为期三年的合作伙伴关系将专注于开发专门用于太阳能储能应用的先进电池技术。研究将针对储能容量、充电/放电效率和整体寿命的显著改进——解决当前可再生能源系统中的关键挑战。\n\nEcomotech 研究总监 James Williams 博士表示：‘有效的储能是使可再生能源真正与传统电源竞争的缺失环节。’‘这种伙伴关系将学术界的理论创新与我们实施实际太阳能解决方案的实践经验相结合。’\n\n该研究项目已获得政府可再生能源创新拨款的部分资助，Ecomotech 和州立大学都做出了重要的资源承诺。合作伙伴的目标是在 18 个月内准备好可商业化的原型进行测试。",
    date: "2023 年 1 月 28 日",
    author: "Dr. James Williams",
    category: "研发",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "/news/research-partnership"
  },
  {
    id: 5,
    title: "年度可持续发展报告显示创纪录的碳抵消",
    excerpt: "Ecomotech 安装的系统去年阻止了超过 500,000 公吨的二氧化碳排放，相当于种植了 2500 万棵树。",
    content: "Ecomotech 发布了其年度可持续发展报告，显示我们的太阳能装置在过去一年中总共阻止了超过 500,000 公吨的二氧化碳排放。这一里程碑比上一年增加了 35%，相当于约 2500 万棵成熟树木的碳固存能力。\n\nEcomotech 可持续发展总监 Elena Gomez 表示：‘这些数字不仅仅是统计数据——它们代表着真实的环境影响。’‘我们安装的每一块太阳能电池板都为减少全球碳足迹做出了重要贡献。’\n\n该报告还强调了 Ecomotech 的内部可持续发展举措，包括我们在所有制造设施中向 100% 可再生能源的过渡，通过改进工艺将用水量减少 40%，以及通过我们重新设计的包装计划显著减少包装废物。\n\n公司已为来年设定了雄心勃勃的目标，旨在将碳抵消总量再增加 40%，同时进一步减少我们制造和分销业务对环境的影响。\n\nGomez 补充说：‘作为一家可再生能源公司，我们相信我们必须在可持续发展的各个方面以身作则。’‘我们的承诺不仅限于我们创造的产品，还涵盖了我们作为一家企业运营的方方面面。’",
    date: "2022 年 12 月 10 日",
    author: "Elena Gomez",
    category: "可持续发展",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1141&q=80",
    link: "/news/sustainability-report"
  },
  {
    id: 6,
    title: "Ecomotech 太阳能路灯改变城市安全",
    excerpt: "新案例研究显示，在城市社区安装太阳能路灯后，夜间事件减少了 60%。",
    content: "一项新发布的案例研究记录了在城市地区安装 Ecomotech 太阳能路灯系统后，城市安全得到了显著改善。这项与市政当局合作进行的为期 18 个月的研究发现，在以前照明不足的社区，夜间安全事件显著减少了 60%。\n\n该项目在五个城市区域安装了 500 多个我们的 StreetBright 太阳能 LED 照明系统。这些独立单元独立于电网运行，具有运动感应功能，当行人或车辆靠近时会增加亮度。\n\nEcomotech 城市解决方案经理 Robert Kim 指出：‘除了明显的环境效益外，该项目还展示了可持续技术如何直接改善生活质量和社区安全。’‘这些系统的可靠性，即使在电网中断期间，也为城市基础设施增加了额外的弹性。’\n\n该案例研究还强调了市政成本的显著节约。由于不需要开挖电缆连接，并且没有持续的电力成本，太阳能路灯解决方案在 10 年内比传统照明系统节省了 40% 的成本。\n\n根据这些结果，另外三个城市已启动了使用 Ecomotech 太阳能路灯技术的类似项目，计划于下个季度开始安装。",
    date: "2022 年 11 月 5 日",
    author: "Robert Kim",
    category: "案例研究",
    image: "/EcoMoTechWeb/images/News/Ecomotech Solar Street Lighting Transforms Urban Safety.jpg",
    link: "/news/street-lighting"
  },
  {
    id: 7,
    title: "交通革命：电动出行在非洲扎根",
    excerpt: "Ecomotech 的电动摩托车和三轮车倡议正在改变非洲主要城市的城市出行，减少排放并创造可持续的交通解决方案。",
    content: "Ecomotech 开创性的电动出行计划在非洲扩张方面取得了重大里程碑，目前已有 1,000 多辆电动摩托车和三轮车在非洲五个主要城市运营。这项倡议正在重塑城市交通，同时解决环境问题和当地社区的经济机会。\n\n该计划已创造了 500 多个直接就业岗位，每年减少了约 1,200 吨的碳排放。我们的车辆经过专门设计，可应对当地条件，并得到我们不断增长的充电站和服务网络的支持。",
    date: "2022 年 10 月 15 日",
    author: "Marcus Adebayo",
    category: "电动出行",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "/news/electric-mobility-africa"
  },
  {
    id: 8,
    title: "扩大非洲城市的电动汽车充电基础设施",
    excerpt: "Ecomotech 宣布了一项全面计划，将在非洲主要城市中心安装 200 个太阳能电动汽车充电站，以支持不断增长的电动汽车生态系统。",
    content: "在非洲可持续交通方面的一项里程碑式举措中，Ecomotech 公布了在主要城市中心安装 200 个太阳能电动汽车充电站的计划。这项倡议是该地区迄今为止最大的电动汽车充电基础设施项目。\n\n充电站将由我们的高效太阳能电池板供电，并配备储能系统，确保即使在电网中断期间也能可靠充电。第一阶段的安装将重点放在主要大都市区，并计划扩展到二级城市和城际走廊。",
    date: "2022 年 9 月 28 日",
    author: "Sarah Okonjo",
    category: "基础设施",
    image: "/EcoMoTechWeb/images/News/Charging station.jpg",
    link: "/news/ev-charging-africa"
  }
];

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("所有类别");
  const itemsPerPage = 4;

  // Filter news items based on search query and selected category
  const filteredNews = useMemo(() => {
    return newsItems.filter((item) => {
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = 
        selectedCategory === "所有类别" || 
        item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  // Reset to first page when search changes
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Handle category selection
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to top when changing pages
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-ecomotech-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">公司新闻</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              了解 Ecomotech 的最新发展、创新和公告。
            </p>
          </div>
        </div>
      </section>

      {/* News Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Search */}
              <div className="bg-ecomotech-light-gray p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">搜索新闻</h3>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="搜索..."
                    className="pr-10"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-ecomotech-light-gray p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">类别</h3>
                <ul className="space-y-2">
                  {["所有类别", "产品新闻", "公司新闻", "项目", "研发", "可持续发展", "案例研究", "电动出行", "基础设施"].map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => handleCategoryClick(category)}
                        className={`w-full text-left block px-3 py-2 rounded-md transition-colors ${
                          selectedCategory === category
                            ? "bg-ecomotech-blue text-white"
                            : "text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-ecomotech-light-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">最新文章</h3>
                <ul className="space-y-4">
                  {newsItems.slice(0, 3).map((item) => (
                    <li key={item.id}>
                      <Link to={item.link} className="flex items-start group">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-md mr-4 flex-shrink-0"
                        />
                        <div>
                          <h4 className="text-gray-800 font-medium group-hover:text-ecomotech-blue transition-colors leading-tight">
                            {item.title}
                          </h4>
                          <div className="flex items-center text-gray-500 text-sm mt-1">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main News List */}
            <div className="lg:w-2/3">
              {currentItems.length > 0 ? (
                <div className="grid grid-cols-1 gap-8">
                  {currentItems.map((item) => (
                    <Link key={item.id} to={item.link} className="block">
                      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300">
                        <div className="md:w-1/3 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="p-6 flex-1">
                          <span className="inline-block bg-ecomotech-blue text-white text-xs px-3 py-1 rounded-full mb-2">
                            {item.category}
                          </span>
                          <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-ecomotech-blue transition-colors">
                            {item.title}
                          </h2>
                          <div className="flex items-center text-gray-500 text-sm mb-4">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{item.date}</span>
                            <span className="mx-2">•</span>
                            <span>作者: {item.author}</span>
                          </div>
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {item.excerpt}
                          </p>
                          <span className="text-ecomotech-blue font-medium inline-flex items-center">
                            阅读更多
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-600 text-lg py-10">
                  没有找到匹配的新闻文章。
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-12">
                  <Button
                    variant="outline"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  {[...Array(totalPages)].map((_, index) => (
                    <Button
                      key={index}
                      variant={currentPage === index + 1 ? "default" : "outline"}
                      onClick={() => paginate(index + 1)}
                      className="px-4 py-2"
                    >
                      {index + 1}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;


