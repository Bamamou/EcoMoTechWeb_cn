import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { Settings } from "lucide-react";

const SolarInstallation = () => {
  return (
    <ServiceTemplate
      icon={<Settings className="w-16 h-16 text-ecomotech-green mx-auto" />}
      title="太阳能光伏安装"
      description="为住宅和商业物业专业安装太阳能电池板，确保最佳性能和安全性。"
      features={[
        "定制系统设计",
        "高效太阳能电池板",
        "专业安装",
        "优质逆变器和组件",
        "性能监控",
        "保修范围"
      ]}
      process={[
        {
          title: "初步评估",
          description: "现场勘测和能源消耗分析，以确定最佳系统尺寸。"
        },
        {
          title: "系统设计",
          description: "根据您的能源需求和现场条件定制太阳能光伏系统设计。"
        },
        {
          title: "安装",
          description: "由我们认证的团队按照行业最佳实践进行专业安装。"
        },
        {
          title: "测试与调试",
          description: "对已安装系统进行彻底测试和认证。"
        }
      ]}
      benefits={[
        "降低电费",
        "增加物业价值",
        "环境可持续性",
        "能源独立性",
        "政府激励资格",
        "长期能源节约"
      ]}
    />
  );
};

export default SolarInstallation;


