import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Information */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-ecomotech-green">Eco</span>
              <span className="text-ecomotech-blue">motech</span>
            </h2>
            <p className="text-gray-400 mb-4">
              领先的太阳能系统和可再生能源解决方案提供商。
              我们致力于通过创新的绿色技术创造可持续的未来。
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Ecomotech/61574949172407/" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/ecomotech" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  产品
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  服务
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  新闻
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">我们的产品</h3>
            <ul className="space-y-2">
              {/* Solar Products */}
              <li>
                <Link to="/products/solar-panels" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  太阳能电池板
                </Link>
              </li>
              <li>
                <Link to="/products/solar-inverters" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  太阳能逆变器
                </Link>
              </li>
              <li>
                <Link to="/products/home-systems" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  家用太阳能系统
                </Link>
              </li>
              <li>
                <Link to="/products/street-lights" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  太阳能路灯
                </Link>
              </li>
              <li>
                <Link to="/products/energy-storage" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  储能系统
                </Link>
              </li>
              <li>
                <Link to="/products/solar-pumbs" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  太阳能水泵
                </Link>
              </li>

              {/* Electric Mobility Products */}
              <li>
                <Link to="/products/electric-motorcycles" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  电动摩托车
                </Link>
              </li>
              <li>
                <Link to="/products/electric-tricycles" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  电动三轮车
                </Link>
              </li>
              <li>
                <Link to="/products/ev-chargers" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  电动汽车充电器
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">我们的服务</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/solar-installation" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  太阳能光伏安装
                </Link>
              </li>
              <li>
                <Link to="/services/solar-maintenance" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  太阳能农场维护
                </Link>
              </li>
              <li>
                <Link to="/services/ev-charger-installation" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  电动汽车充电器安装
                </Link>
              </li>
              <li>
                <Link to="/services/ev-repair" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  电动汽车维修服务
                </Link>
              </li>
              <li>
                <Link to="/services/solar-consultancy" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  太阳能光伏咨询
                </Link>
              </li>
              <li>
                <Link to="/services/energy-assessment" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  能源效率评估
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <div className="space-y-3">
              <div className="text-gray-400 mb-4 flex items-start">
                <MapPin className="h-5 w-5 text-ecomotech-green mt-1 mr-2" />
                <span>
                  亦庄经济开发区 28 号,<br />
                  大兴区, 北京, 16801
                </span>
              </div>
              
              <div className="flex items-center">
                <div className="flex items-center">
                  <Icon 
                    icon="logos:whatsapp-icon" 
                    className="h-5 w-5 mr-2" 
                  />
                  <a 
                    href="https://wa.me/8618810799128" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-ecomotech-green transition-colors flex items-center"
                  >
                    +86 188 1079 9128
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="h-5 w-5 text-ecomotech-green mr-2" />
                <a 
                  href="mailto:ecomotech@outlook.com"
                  className="text-gray-400 hover:text-ecomotech-green transition-colors flex items-center"
                >
                  ecomotech@outlook.com
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Ecomotech. 保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


