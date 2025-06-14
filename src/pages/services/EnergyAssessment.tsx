import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { Zap } from "lucide-react";

const EnergyAssessment = () => {
  return (
    <ServiceTemplate
      icon={<Zap className="w-16 h-16 text-ecomotech-green mx-auto" />}
      title="能源效率评估"
      description="全面的能源审计和建议，以提高家庭和企业的能源效率。"
      features={[
        "详细能源分析",
        "消费模式",
        "设备评估",
        "热成像",
        "节约成本的机会",
        "碳足迹分析"
      ]}
      process={[
        {
          title: "数据收集",
          description: "收集历史能源使用数据和现场信息。"
        },
        {
          title: "现场评估",
          description: "彻底检查设施和设备。"
        },
        {
          title: "分析与建议",
          description: "详细分析和制定改进策略。"
        },
        {
          title: "实施规划",
          description: "创建可操作的实施路线图。"
        }
      ]}
      benefits={[
        "降低能源成本",
        "提高效率",
        "环境影响",
        "法规遵从性",
        "提高舒适度",
        "可持续运营"
      ]}
    />
  );
};

export default EnergyAssessment;


