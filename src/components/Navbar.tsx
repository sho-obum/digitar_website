"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import logoImage from "../assets/images/Digitar_Media_logo_White_Hexagon.png";
import MenuIcon from "../assets/icons/menu.svg";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Fixed: Use number type for browser setTimeout
  const hideTimeoutRef = useRef<number | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Clear any existing timeout
  const clearHideTimeout = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  }, []);

  const startHideTimer = useCallback(() => {
    clearHideTimeout();
    hideTimeoutRef.current = window.setTimeout(() => {
      // Step 1: Start the fade-out animation
      setIsClosing(true);

      // Step 2: After animation completes, hide the dropdown
      window.setTimeout(() => {
        setActiveDropdown(null);
        setIsDropdownHovered(false);
        setIsClosing(false); // Reset closing state
      }, 300); // 300ms = duration of fade-out animation
    }, 200); // Your auto-close delay
  }, [clearHideTimeout]);

  // Handle mouse enter on navbar item
  const handleMouseEnter = useCallback(
    (itemName: string) => {
      clearHideTimeout();
      setActiveDropdown(itemName);
      setIsDropdownHovered(false);
      setIsClosing(false); // Reset closing state when opening
    },
    [clearHideTimeout]
  );

  // Handle mouse leave on navbar item
  const handleMouseLeave = useCallback(() => {
    startHideTimer();
  }, [startHideTimer]);

  // Handle mouse enter on dropdown card
  const handleDropdownEnter = useCallback(() => {
    clearHideTimeout();
    setIsDropdownHovered(true);
    setIsClosing(false); // Reset closing state when hovering
  }, [clearHideTimeout]);

  // Handle mouse leave on dropdown card
  const handleDropdownLeave = useCallback(() => {
    setIsDropdownHovered(false);
    startHideTimer();
  }, [startHideTimer]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const toggleMobileDropdown = (itemName: string) => {
    setMobileDropdown(mobileDropdown === itemName ? null : itemName);
  };

  // Enhanced dropdown content with orange-themed colors
  const dropdownContent = {
    Publishers: [
      {
        name: "Device-based audience segmentation",
        icon: "📊",
        color: "from-orange-500 to-orange-600",
        description: "Target users based on device characteristics",
      },
      {
        name: "Curation",
        icon: "🎯",
        color: "from-indigo-500 to-orange-600",
        description: "Curated content and audience insights",
      },
      {
        name: "Maia - Mobile AI Audience",
        icon: "🤖",
        color: "from-orange-500 to-orange-600",
        description: "AI-powered mobile audience targeting",
      },
    ],
    "Advertising Solutions": [
      {
        name: "Programmatic Advertising",
        icon: "🎯",
        color: "from-orange-600 to-indigo-600",
        description: "Automated ad buying and optimization",
      },
      {
        name: "Brand Safety",
        icon: "🛡️",
        color: "from-orange-600 to-orange-700",
        description: "Protect your brand reputation",
      },
      {
        name: "Analytics & Reporting",
        icon: "📈",
        color: "from-indigo-600 to-orange-600",
        description: "Comprehensive performance insights",
      },
    ],
    "About us": [
      {
        name: "Our Story",
        icon: "📖",
        color: "from-orange-500 to-indigo-500",
        description: "Learn about our journey",
      },
      {
        name: "Team",
        icon: "👥",
        color: "from-orange-500 to-orange-500",
        description: "Meet our amazing team",
      },
      {
        name: "Careers",
        icon: "💼",
        color: "from-indigo-500 to-orange-500",
        description: "Join our growing team",
      },
    ],
  };

  // Render dropdown content
  const renderDropdownContent = (items: typeof dropdownContent.Publishers, isMobile = false) => (
    <div className="space-y-2">
      {items.map((item, index) => (
        <a
          key={index}
          href="#"
          className={`group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 transform hover:scale-[1.02] ${
            isMobile ? "hover:bg-orange-500/10" : ""
          }`}
        >
          <div
            className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
          >
            <span className="text-xl">{item.icon}</span>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-white font-medium text-sm group-hover:text-orange-200 transition-colors">
              {item.name}
            </h3>
            <p className="text-gray-300 text-xs mt-1 opacity-80">
              {item.description}
            </p>
          </div>

          <svg
            className="w-4 h-4 text-gray-400 group-hover:text-orange-200 group-hover:translate-x-1 transition-all duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      ))}
    </div>
  );

  return (
    <div className="bg-black relative">
      <div className="container">
        <div className="py-4 flex items-center justify-between">
          {/* Logo and Brand Name */}
          <div className="flex items-center justify-center">
            <div className="relative gap-3">
              {/* <div className="absolute inset-0 rounded-full bg-[conic-gradient(at_top_left,_#F87BFF,_#FB92CF,_#FFFDD9,_#2FD8FE)] blur-xl opacity-60 z-0" /> */}
              <Image
                src={logoImage}
                alt="Logo"
                className="relative z-10 w-auto h-10 mr-2"
              />
            </div>
            <h1 
              className="text-white text-2xl font-bold tracking-wide"
              style={{ fontFamily: 'iBrand, sans-serif' }}
            >
              Digitar Media
            </h1>
          </div>

          {/* Desktop Navigation with Smooth Fade-out Dropdowns */}
          <nav className="hidden md:flex text-white gap-6 items-center ml-auto">
            {/* Publishers Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("Publishers")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="text-opacity-60 text-white hover:text-opacity-100 transition-all duration-300 flex items-center gap-1"
              >
                Publishers
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === "Publishers" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>

              {/* Glassmorphic Dropdown with smooth fade-out */}
              {activeDropdown === "Publishers" && (
                <div
                  className={`absolute top-full left-0 mt-3 w-96 z-50 transition-all duration-300 ${
                    isClosing 
                      ? "opacity-0 scale-95 translate-y-2" 
                      : "opacity-100 scale-100 translate-y-0 animate-in fade-in-0 zoom-in-95"
                  }`}
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div
                    className="relative rounded-2xl border border-orange-500/30 shadow-2xl overflow-hidden"
                    style={{
                      background: "rgba(0, 0, 0, 0.7)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-transparent pointer-events-none" />

                    <div className="relative p-6">
                      {renderDropdownContent(dropdownContent.Publishers)}

                      <div className="pt-4 mt-4 border-t border-orange-500/30">
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-sm text-orange-300 hover:text-orange-200 transition-colors font-medium"
                        >
                          View all case studies
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Advertising Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("Advertising Solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="text-opacity-60 text-white hover:text-opacity-100 transition-all duration-300 flex items-center gap-1"
              >
                Advertising Solutions
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === "Advertising Solutions"
                      ? "rotate-180"
                      : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>

              {activeDropdown === "Advertising Solutions" && (
                <div
                  className={`absolute top-full left-0 mt-3 w-96 z-50 transition-all duration-300 ${
                    isClosing 
                      ? "opacity-0 scale-95 translate-y-2" 
                      : "opacity-100 scale-100 translate-y-0 animate-in fade-in-0 zoom-in-95"
                  }`}
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div
                    className="relative rounded-2xl border border-orange-500/30 shadow-2xl overflow-hidden"
                    style={{
                      background: "rgba(0, 0, 0, 0.7)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-transparent pointer-events-none" />

                    <div className="relative p-6">
                      {renderDropdownContent(
                        dropdownContent["Advertising Solutions"]
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("About us")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="text-opacity-60 text-white hover:text-opacity-100 transition-all duration-300 flex items-center gap-1"
              >
                About us
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === "About us" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>

              {activeDropdown === "About us" && (
                <div
                  className={`absolute top-full right-0 mt-3 w-80 z-50 transition-all duration-300 ${
                    isClosing 
                      ? "opacity-0 scale-95 translate-y-2" 
                      : "opacity-100 scale-100 translate-y-0 animate-in fade-in-0 zoom-in-95"
                  }`}
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div
                    className="relative rounded-2xl border border-orange-500/30 shadow-2xl overflow-hidden"
                    style={{
                      background: "rgba(0, 0, 0, 0.7)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-transparent pointer-events-none" />

                    <div className="relative p-6">
                      {renderDropdownContent(dropdownContent["About us"])}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Get in Touch Button */}
            <button
              className="py-2 px-4 rounded-lg text-white transition-all duration-300 font-medium hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #182fff99)",
                backgroundPosition: "0 0",
                backgroundSize: "200% 200%",
              }}
            >
              Get in touch
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg hover:border-opacity-50 transition-all duration-300"
          >
            <div className="relative w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu with Glassmorphic Dropdowns */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="pb-6 pt-2">
            <div className="flex flex-col space-y-2">
              {/* Publishers Mobile Dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("Publishers")}
                  className="w-full text-left text-white text-opacity-60 hover:text-opacity-100 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 flex items-center justify-between"
                >
                  Publishers
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      mobileDropdown === "Publishers" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {mobileDropdown === "Publishers" && (
                  <div className="mt-2 mx-4 animate-in fade-in-0 slide-in-from-top-2 duration-300">
                    <div
                      className="relative rounded-xl border border-orange-500/30 shadow-xl overflow-hidden"
                      style={{
                        background: "rgba(0, 0, 0, 0.6)",
                        backdropFilter: "blur(15px)",
                        WebkitBackdropFilter: "blur(15px)",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 via-orange-500/8 to-transparent pointer-events-none" />

                      <div className="relative p-4">
                        {renderDropdownContent(
                          dropdownContent.Publishers,
                          true
                        )}

                        <div className="pt-3 mt-3 border-t border-orange-500/30">
                          <a
                            href="#"
                            className="inline-flex items-center gap-2 text-sm text-orange-300 hover:text-orange-200 transition-colors font-medium"
                          >
                            View all case studies
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Advertising Solutions Mobile Dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("Advertising Solutions")}
                  className="w-full text-left text-white text-opacity-60 hover:text-opacity-100 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 flex items-center justify-between"
                >
                  Advertising Solutions
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      mobileDropdown === "Advertising Solutions"
                        ? "rotate-180"
                        : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {mobileDropdown === "Advertising Solutions" && (
                  <div className="mt-2 mx-4 animate-in fade-in-0 slide-in-from-top-2 duration-300">
                    <div
                      className="relative rounded-xl border border-orange-500/30 shadow-xl overflow-hidden"
                      style={{
                        background: "rgba(0, 0, 0, 0.6)",
                        backdropFilter: "blur(15px)",
                        WebkitBackdropFilter: "blur(15px)",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 via-orange-500/8 to-transparent pointer-events-none" />

                      <div className="relative p-4">
                        {renderDropdownContent(
                          dropdownContent["Advertising Solutions"],
                          true
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* About Us Mobile Dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("About us")}
                  className="w-full text-left text-white text-opacity-60 hover:text-opacity-100 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 flex items-center justify-between"
                >
                  About us
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      mobileDropdown === "About us" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {mobileDropdown === "About us" && (
                  <div className="mt-2 mx-4 animate-in fade-in-0 slide-in-from-top-2 duration-300">
                    <div
                      className="relative rounded-xl border border-orange-500/30 shadow-xl overflow-hidden"
                      style={{
                        background: "rgba(0, 0, 0, 0.6)",
                        backdropFilter: "blur(15px)",
                        WebkitBackdropFilter: "blur(15px)",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 via-orange-500/8 to-transparent pointer-events-none" />

                      <div className="relative p-4">
                        {renderDropdownContent(
                          dropdownContent["About us"],
                          true
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button
                className="py-2 px-4 rounded-lg text-white transition-all duration-300 mt-4 font-medium hover:opacity-90 w-40"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #182fff99)",
                  backgroundPosition: "0 0",
                  backgroundSize: "200% 200%",
                }}
              >
                Get in touch
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
