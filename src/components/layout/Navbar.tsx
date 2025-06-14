import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/ui/language-switcher";


const serviceLinks = [
  { name: "太阳能光伏安装", href: "/services/solar-installation" },
  { name: "太阳能农场维护", href: "/services/solar-maintenance" },
  { name: "电动汽车充电器安装", href: "/services/ev-charger-installation" },
  { name: "电动汽车维修", href: "/services/ev-repair" },
  { name: "太阳能光伏咨询", href: "/services/solar-consultancy" },
  { name: "能源效率评估", href: "/services/energy-assessment" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navLinks = [
    { name: "首页", path: "/" },
    { 
      name: "产品", 
      path: "/products",
      dropdown: true,
      items: [
        { name: "太阳能电池板", path: "/products/solar-panels" },
        { name: "太阳能逆变器", path: "/products/solar-inverters" },
        { name: "家用系统", path: "/products/home-systems" },
        { name: "路灯", path: "/products/street-lights" },
        { name: "储能", path: "/products/energy-storage" },
        { name: "太阳能水泵", path: "/products/solar-pumbs" },
        { name: "电动摩托车", path: "/products/electric-motorcycles" },
        { name: "电动三轮车", path: "/products/electric-tricycles" },
        { name: "电动汽车充电器", path: "/products/ev-chargers" },
      ]
    },
    { 
      name: "服务", 
      path: "/services",
      dropdown: true,
      items: [
        { name: "太阳能光伏安装", path: "/services/solar-installation" },
        { name: "太阳能农场维护", path: "/services/solar-maintenance" },
        { name: "电动汽车充电器安装", path: "/services/ev-charger-installation" },
        { name: "电动汽车维修", path: "/services/ev-repair" },
        { name: "太阳能光伏咨询", path: "/services/solar-consultancy" },
        { name: "能源效率评估", path: "/services/energy-assessment" },
      ]
    },
    { name: "关于我们", path: "/about" },
    { name: "新闻", path: "/news" },
    { name: "加入我们", path: "/join-us" },
    { name: "联系我们", path: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-ecomotech-green">
            Eco<span className="text-ecomotech-blue">motech</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <button 
                  className="flex items-center space-x-1 text-gray-800 hover:text-ecomotech-green font-medium transition-colors"
                  onClick={() => toggleDropdown(link.name)}
                >
                  <span>{link.name}</span>
                  <ChevronDown size={16} />
                </button>
              ) : (
                <Link 
                  to={link.path} 
                  className="text-gray-800 hover:text-ecomotech-green font-medium transition-colors"
                >
                  {link.name}
                </Link>
              )}

              {link.dropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top-left">
                  {link.items?.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-ecomotech-gray hover:text-ecomotech-green transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button className="bg-ecomotech-green hover:bg-ecomotech-dark-green text-white">
            获取报价
          </Button>
        </div>

        	{/* Right side items */}
					<div className="hidden md:flex items-center space-x-4">
						<LanguageSwitcher />
						<Link to="/contact">
							<Button>Contact Us</Button>
						</Link>
					</div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            {navLinks.map((link) => (
              <div key={link.name} className="py-2">
                {link.dropdown ? (
                  <>
                    <button 
                      className="flex items-center justify-between w-full text-gray-800 hover:text-ecomotech-green font-medium"
                      onClick={() => toggleDropdown(link.name)}
                    >
                      <span>{link.name}</span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`} 
                      />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-4 mt-2 border-l-2 border-ecomotech-green">
                        {link.items?.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block py-2 text-gray-700 hover:text-ecomotech-green"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    to={link.path} 
                    className="block text-gray-800 hover:text-ecomotech-green font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4">
              <Button className="w-full bg-ecomotech-green hover:bg-ecomotech-dark-green text-white">
                获取报价
              </Button>
            </div>
            <div className="px-4 py-2 border-t border-gray-200">
            <LanguageSwitcher />
          </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


