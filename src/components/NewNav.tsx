"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "../../src/assets/images/Digitar_Media_logo_White_Hexagon.png";

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

      {/* Mobile Dock - Simple phone-style */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-gray-900/95 border-t border-purple-800/30">
          <div className="flex items-center justify-around px-4 py-3 max-w-sm mx-auto">
            {/* Services */}
            <a
              href="#services"
              className="flex flex-col items-center p-2 rounded-lg hover:bg-purple-800/20 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <span className="text-xs text-gray-400 mt-1">Services</span>
            </a>

            {/* About */}
            <a
              href="#about"
              className="flex flex-col items-center p-2 rounded-lg hover:bg-purple-800/20 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-xs text-gray-400 mt-1">About</span>
            </a>

            {/* Logo - Center */}
            <div className="flex flex-col items-center p-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src={logo}
                  alt="Logo"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <span className="text-xs text-gray-400 mt-1">Home</span>
            </div>

            {/* Blog */}
            <a
              href="#blog"
              className="flex flex-col items-center p-2 rounded-lg hover:bg-purple-800/20 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <span className="text-xs text-gray-400 mt-1">Blog</span>
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="flex flex-col items-center p-2 rounded-lg hover:bg-purple-800/20 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs text-gray-400 mt-1">Contact</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
