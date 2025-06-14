import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Icon } from '@iconify/react';
import Layout from "@/components/layout/Layout";
import { useToast } from "@/components/ui/use-toast";
import contactImg from "../assets/img/contact-img.svg";

const Contact = () => {
  const { toast } = useToast();
  const form = useRef();
  const [buttonText, setButtonText] = useState('发送');
  const [status, setStatus] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setButtonText("发送中...");

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        toast({
          title: "成功!",
          description: "您的消息已发送。我们将尽快回复您。",
          variant: "default",
        });
        
        setStatus({ success: true, message: '消息发送成功' });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus({ success: false, message: '出错了，请稍后再试。' });
        toast({
          title: "错误",
          description: "发送消息失败。请稍后再试。",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('错误:', error);
      setStatus({ success: false, message: '出错了，请稍后再试。' });
      toast({
        title: "错误",
        description: "发送消息失败。请稍后再试。",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setButtonText("发送");
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-ecomotech-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">联系我们</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{animationDelay: "0.2s"}}>
              对我们的产品或服务有疑问？请联系我们的团队。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* WhatsApp */}
            <div className="flex flex-col items-center text-center p-6 bg-ecomotech-light-gray rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center mb-4">
                <Icon 
                  icon="logos:whatsapp-icon" 
                  className="h-8 w-8" 
                  style={{ filter: 'brightness(0) invert(1)' }} 
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <a 
                href="https://wa.me/8618810799128" 
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-[#25D366] transition-colors flex items-center gap-2"
              >
                <span>+86 188 1079 9128</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center p-6 bg-ecomotech-light-gray rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4">
                <Mail className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">电子邮件</h3>
              <a 
                href="mailto:ecomotech@outlook.com" 
                className="text-gray-600 hover:text-blue-500 transition-colors flex items-center gap-2"
              >
                <span>ecomotech@outlook.com</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center text-center p-6 bg-ecomotech-light-gray rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-4">
                <MapPin className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">地址</h3>
              <p className="text-gray-600 group-hover:text-purple-500 transition-colors">
                亦庄经济开发区 28 号<br />
                大兴区，北京，16801
              </p>
            </div>

            {/* Business Hours */}
            <div className="flex flex-col items-center text-center p-6 bg-ecomotech-light-gray rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-4">
                <Clock className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">营业时间</h3>
              <p className="text-gray-600">
                周一至周五：上午 9 点至下午 6 点<br />
                周六：上午 10 点至下午 4 点
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Representations Section */}
      <section className="py-16 bg-ecomotech-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">我们的全球业务</h2>
            <div className="w-24 h-1 bg-ecomotech-green mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              与我们在非洲的区域办事处和合作伙伴联系
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tanzania */}
            <a 
              //href="https://ecomotech-tz.com"  to be updated in the future
              href="https://afrimes.com/"
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg 
                            shadow-sm hover:shadow-lg transition-all duration-300
                            transform hover:-translate-y-1">
                <img 
                  src="/EcoMoTechWeb/images/flags/tanzania.webp" 
                  alt="Tanzania Flag" 
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">EcoMoTech 坦桑尼亚</h3>
                <p className="text-gray-600 mb-4">达累斯萨拉姆，坦桑尼亚</p>
                <span className="text-ecomotech-green group-hover:text-ecomotech-dark-green 
                               flex items-center transition-colors">
                  访问网站 <ArrowUpRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </a>

            {/* The Gambia */}
            <a 
              //href="https://ecomotech-gambia.com"  to be updated 
              href="https://cecedekp.github.io/ecomotech-future-power-web/"
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg 
                            shadow-sm hover:shadow-lg transition-all duration-300
                            transform hover:-translate-y-1">
                <img 
                  src="/EcoMoTechWeb/images/flags/the gambia.webp" 
                  alt="Gambia Flag" 
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">EcoMoTech 冈比亚</h3>
                <p className="text-gray-600 mb-4">班珠尔，冈比亚</p>
                <span className="text-ecomotech-green group-hover:text-ecomotech-dark-green 
                               flex items-center transition-colors">
                  访问网站 <ArrowUpRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </a>

            {/* Guinea */}
            <a 
             // href="https://ecomotech-guinea.com" to be updated
              href="https://ecomotech.github.io/ecomotech-guinea/"
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg 
                            shadow-sm hover:shadow-lg transition-all duration-300
                            transform hover:-translate-y-1">
                <img 
                  src="/EcoMoTechWeb/images/flags/guinea.png" 
                  alt="Guinea Flag" 
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">EcoMoTech 几内亚</h3>
                <p className="text-gray-600 mb-4">科纳克里，几内亚</p>
                <span className="text-ecomotech-green group-hover:text-ecomotech-dark-green 
                               flex items-center transition-colors">
                  访问网站 <ArrowUpRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </a>

            {/* DR Congo */}
            <a 
              //href="https://ecomotech-drc.com"  to be updated 
              href="https://afrimes.com/"
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg 
                            shadow-sm hover:shadow-lg transition-all duration-300
                            transform hover:-translate-y-1">
                <img 
                  src="/EcoMoTechWeb/images/flags/drc.webp" 
                  alt="DR Congo Flag" 
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">EcoMoTech 刚果民主共和国</h3>
                <p className="text-gray-600 mb-4">金沙萨，刚果民主共和国</p>
                <span className="text-ecomotech-green group-hover:text-ecomotech-dark-green 
                               flex items-center transition-colors">
                  访问网站 <ArrowUpRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-ecomotech-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">联系我们</h2>
              <div className="w-24 h-1 bg-ecomotech-green mb-6"></div>
              <p className="text-gray-700 mb-8">
                我们很高兴收到您的来信。请填写以下表格，我们的团队将尽快回复您。
              </p>

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      姓名
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="您的姓名" 
                      required 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      电子邮件
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="您的电子邮件" 
                      required 
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    主题
                  </label>
                  <Input 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="您的消息主题" 
                    required 
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    消息
                  </label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="您的消息" 
                    required 
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="bg-ecomotech-green hover:bg-ecomotech-dark-green text-white px-8 py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '发送中...' : '发送消息'}
                </Button>
              </form>
            </div>

            <div>
              <div className="h-full min-h-[400px] md:min-h-0 bg-gray-300 rounded-lg overflow-hidden shadow-md">
                {/* Using Coyah, Guinea Conakry coordinates: approximately 9.7086, -13.3847 */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.1234567890123!2d116.49664!3d39.795866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f1a7e5d6b8b8b9%3A0x1d13f6b5b9b9b9b9!2sYizhuang%20Economic%20Development%20Zone!5e0!3m2!1sen!2scn!4v1625097200000!5m2!1sen!2scn"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-md"
                  title="Ecomotech 亦庄办公室位置，北京"
                ></iframe>
              </div>
              
              <div className="mt-6 p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">我们的主要办事处</h3>
                <p className="text-gray-600 mb-2">
                  亦庄经济开发区 28 号
                </p>
                <p className="text-gray-600 mb-2">
                  大兴区，北京，16801
                </p>
                <p className="text-gray-600">
                  中国
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;


