import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { Wrench } from "lucide-react";

const EVRepair = () => {
  return (
    <ServiceTemplate
      icon={<Wrench className="w-16 h-16 text-ecomotech-green mx-auto" />}
      title="电动汽车维修"
      description="为电动摩托车和三轮车提供专业的维修和保养服务，确保最佳性能和使用寿命。"
      features={[
        "诊断服务",
        "电池维护",
        "电机维修",
        "控制器维修",
        "固件更新",
        "性能优化"
      ]}
      process={[
        {
          title: "诊断评估",
          description: "使用先进工具对车辆问题进行全面诊断。"
        },
        {
          title: "服务规划",
          description: "制定维修策略和成本估算。"
        },
        {
          title: "专家维修",
          description: "由认证技术人员提供专业维修服务。"
        },
        {
          title: "质量测试",
          description: "对维修进行彻底测试和验证。"
        }
      ]}
      benefits={[
        "延长车辆寿命",
        "最佳性能",
        "安全操作",
        "保修期内维护",
        "经济高效的维护",
        "专家支持"
      ]}
    />
  );
};

export default EVRepair;


