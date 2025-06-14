
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "作为一名企业主，我一直在寻找既可持续又具有经济意义的能源解决方案。Ecomotech 在这两个方面都表现出色。他们的商业太阳能安装在性能和投资回报方面都超出了我们的预期。",
    author: "Sarah Johnson",
    position: "企业主",
    image: "/EcoMoTechWeb/images/AboutUs/businesowner.jpg"
  },
  {
    text: "改用 Ecomotech 的太阳能电池板大大降低了我们的能源费用和碳足迹。安装团队专业高效，系统运行一年多来一直完美无瑕。",
    author: "John Davis",
    position: "房主",
    image: "/EcoMoTechWeb/images/AboutUs/customer.webp"
  },

  {
    text: "Ecomotech 的储能系统彻底改变了我们偏远设施的状况。现在我们全天候都有可靠的电力，无论电网状况如何。在整个过程中，客户支持都非常出色。",
    author: "Michael Chen",
    position: "运营经理",
    image: "/EcoMoTechWeb/images/AboutUs/customerbattery.png"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">客户评价</h2>
          <div className="w-24 h-1 bg-ecomotech-blue mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            听听客户如何通过我们的太阳能解决方案改变他们的能源使用。
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-10 left-0 opacity-30">
            <Quote size={60} className="text-ecomotech-green" />
          </div>

          {/* Testimonial */}
          <div className="bg-ecomotech-light-gray p-8 md:p-12 rounded-lg shadow-md relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <p className="text-lg text-gray-700 italic mb-6">
                  “{testimonials[currentIndex].text}”
                </p>
                <div>
                  <h4 className="text-xl font-semibold">{testimonials[currentIndex].author}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-ecomotech-gray hover:bg-ecomotech-green hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-ecomotech-green' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <button 
              onClick={goToNext}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-ecomotech-gray hover:bg-ecomotech-green hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


