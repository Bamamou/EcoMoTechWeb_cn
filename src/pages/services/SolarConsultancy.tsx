import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { LightbulbIcon } from "lucide-react";

const SolarConsultancy = () => {
  return (
    <ServiceTemplate
      icon={<LightbulbIcon className="w-16 h-16 text-ecomotech-green mx-auto" />}
      title="太阳能光伏咨询"
      description="为太阳能光伏项目提供专家咨询服务，包括可行性研究、系统设计和投资回报分析。"
      features={[
        "可行性研究",
        "系统设计",
        "财务分析",
        "技术规格",
        "项目管理",
        "法规遵从性"
      ]}
      process={[
        {
          title: "初步咨询",
          description: "了解项目要求和目标。"
        },
        {
          title: "技术分析",
          description: "详细评估现场条件和系统要求。"
        },
        {
          title: "设计与规划",
          description: "制定全面的系统设计和项目计划。"
        },
        {
          title: "实施支持",
          description: "在项目执行和调试过程中提供指导。"
        }
      ]}
      benefits={[
        "优化系统设计",
        "最大化投资回报率",
        "风险缓解",
        "技术专长",
        "法规遵从性",
        "项目成功"
      ]}
    />
  );
};

export default SolarConsultancy;


