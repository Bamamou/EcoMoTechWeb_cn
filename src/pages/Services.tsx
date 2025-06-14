import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { serviceRoutes } from "@/config/serviceRoutes";

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-ecomotech-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">我们的服务</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{animationDelay: "0.2s"}}>
              全面的可再生能源解决方案和服务，为您的可持续未来提供动力
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-ecomotech-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceRoutes.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="mb-4">
                    <Icon className="w-12 h-12 text-ecomotech-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to={service.path}
                    className="text-ecomotech-green hover:text-ecomotech-dark-green flex items-center"
                  >
                    了解更多
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ecomotech-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">准备好开始了吗？</h2>
            <p className="text-lg mb-8">
              联系我们的专家团队，讨论您的可再生能源需求并找到完美的解决方案。
            </p>
            <Link 
              to="/contact"
              className="bg-white hover:bg-gray-100 text-ecomotech-green font-medium px-8 py-3 rounded-md transition-colors inline-block"
            >
              立即联系我们
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;


