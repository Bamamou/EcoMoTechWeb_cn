import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { BatteryCharging } from "lucide-react";

const EVChargerInstallation = () => {
  return (
    <ServiceTemplate
      icon={<BatteryCharging className="w-16 h-16 text-ecomotech-green mx-auto" />}
      title="电动汽车充电器安装"
      description="为住宅和商业应用提供电动汽车充电站的专业安装，具有智能集成功能。"
      features={[
        "2 级和直流快速充电",
        "智能充电功能",
        "负载管理",
        "远程监控",
        "支付集成选项",
        "网络连接"
      ]}
      process={[
        {
          title: "现场评估",
          description: "评估电气容量和最佳充电器位置。"
        },
        {
          title: "设备选择",
          description: "根据需求推荐合适的充电设备。"
        },
        {
          title: "专业安装",
          description: "按照安全标准和法规进行专业安装。"
        },
        {
          title: "测试与配置",
          description: "完整的系统测试和智能功能设置。"
        }
      ]}
      benefits={[
        "便捷的充电解决方案",
        "增加物业价值",
        "面向未来的基础设施",
        "能源管理功能",
        "远程监控功能",
        "符合标准"
      ]}
    />
  );
};

export default EVChargerInstallation;


