"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "../../src/assets/images/Digitar_Media_logo_White_Hexagon.png";
import adxityLogo from "../../src/assets/images/logosaas.png";
import adpocketLogo from "../../src/assets/images/Adpocket.png";
import career from "../../src/assets/images/briefcase.png";
import call from "../../src/assets/images/operator.png";

export const NewNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show navbar at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Desktop Navigation with scroll-to-hide */}
      <nav
        className={`hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-2 shadow-2xl">
          <div className="flex items-center justify-between max-w-4xl">
            {/* Left Links */}
            <div className="flex items-center space-x-8">
              <a
                href="#services"
                className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105"
              >
                About
              </a>
            </div>

            {/* Center Logo */}
            <div className="mx-12">
              <div className="w-12 h-12 flex items-center justify-center transition-all duration-300 group">
                <Image
                  src={logo}
                  alt="Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>

            {/* Right Links */}
            <div className="flex items-center space-x-8">
              <a
                href="#blog"
                className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Dock - iOS Island Style */}
      {/* Mobile Dock - Corner to Corner iOS Style */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-black/70 backdrop-blur-xl rounded-t-3xl border-t border-white/10 shadow-2xl px-6 py-4">
          <div className="flex items-end justify-around max-w-full">
            {/* Career */}
            <a href="#services" className="flex flex-col items-center group">
              <div className="p-3 rounded-xl hover:bg-white/10 active:bg-white/20 transition-all duration-200 hover:scale-110">
                <Image src={career} alt="Career" className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-medium text-gray-300 mt-1 tracking-wide opacity-80">
                Career
              </span>
            </a>

            {/* Adpocket */}
            <a href="#about" className="flex flex-col items-center group">
              <div className="p-3 rounded-xl hover:bg-white/10 active:bg-white/20 transition-all duration-200 hover:scale-110">
                <Image src={adpocketLogo} alt="Adpocket" className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-medium text-gray-300 mt-1 tracking-wide opacity-80">
                Adpocket
              </span>
            </a>

            {/* Center Logo - Prominent but not elevated */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl border-2 border-white/20 hover:scale-105 active:scale-95 transition-all duration-200">
                <Image
                  src={logo}
                  alt="Home"
                  className="w-9 h-9 object-contain"
                />
              </div>
              <span className="text-[10px] font-medium text-white mt-1 tracking-wide">
                Home
              </span>
            </div>

            {/* Adxity */}
            <a href="#blog" className="flex flex-col items-center group">
              <div className="p-3 rounded-xl hover:bg-white/10 active:bg-white/20 transition-all duration-200 hover:scale-110">
                <Image src={adxityLogo} alt="Adxity" className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-medium text-gray-300 mt-1 tracking-wide opacity-80">
                Adxity
              </span>
            </a>

            {/* Contact */}
            <a href="#contact" className="flex flex-col items-center group">
              <div className="p-3 rounded-xl hover:bg-white/10 active:bg-white/20 transition-all duration-200 hover:scale-110">
                <Image src={call} alt="Contact" className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-medium text-gray-300 mt-1 tracking-wide opacity-80">
                Contact
              </span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
