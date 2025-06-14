import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            赋能可持续未来
          </h1>
          <p className="text-xl text-white opacity-90 mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
            Ecomotech 提供创新的太阳能解决方案，帮助企业和房主减少碳足迹，同时节省能源成本。
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button 
              onClick={() => navigate('/products')}
              className="bg-ecomotech-green hover:bg-ecomotech-dark-green text-white px-8 py-6 text-lg"
            >
              探索产品
            </Button>
            <Button 
              onClick={() => navigate('/contact')}
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg"
            >
              <span>联系我们</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-3 bg-white rounded-full animate-[pulse_2s_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
