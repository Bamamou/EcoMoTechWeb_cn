import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { Factory } from "lucide-react";

const SolarMaintenance = () => {
  return (
    <ServiceTemplate
      icon={<Factory className="w-16 h-16 text-ecomotech-green mx-auto" />}
      title="太阳能光伏农场维护"
      description="为太阳能农场提供全面的维护服务，包括定期检查、清洁和性能优化。"
      features={[
        "定期性能监控",
        "面板清洁和维护",
        "逆变器维修",
        "电气系统检查",
        "预防性维护",
        "24/7 紧急支持"
      ]}
      process={[
        {
          title: "检查与评估",
          description: "对所有系统组件进行彻底检查和性能分析。"
        },
        {
          title: "维护计划",
          description: "制定定制的维护计划和程序。"
        },
        {
          title: "定期维修",
          description: "定期清洁、测试和预防性维护。"
        },
        {
          title: "性能报告",
          description: "详细报告系统性能和维护活动。"
        }
      ]}
      benefits={[
        "最大化系统效率",
        "延长设备寿命",
        "减少停机时间",
        "最佳发电量",
        "预防重大问题",
        "符合保修要求"
      ]}
    />
  );
};

export default SolarMaintenance;


