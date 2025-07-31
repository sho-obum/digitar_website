"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const THREAD_VIDEO =
  "https://www.start.io/wp-content/uploads/2023/05/STR_2023_Homepage-1300x300_2-1.mp4";
const DASHBOARD_VIDEO =
  "https://www.start.io/wp-content/uploads/2023/05/STR_Start-io-HP-revamp-Website-with-globe-v2.2.mp4";

const TEXT_BOX_POSITION = {
  top: -450,
  left: 50,
  width: 640,
};

const categoryContent = {
  Performance: {
    badgeText: "Performance",
    title: "Performance Marketing",
    subtitle: "Data-Driven Growth Engine",
    description:
      "We deliver data-driven campaigns focused on ROI, scalability, and measurable growth, combining programmatic media buying and analytics.",
    services: [
      "Performance Marketing",
      "Programmatic Buying",
      "Analytics",
      "Conversion Optimization",
    ],
  },
  Social: {
    badgeText: "Social",
    title: "Social-First Agency",
    subtitle: "We Turn Scrolls into Sales",
    description:
      "We help brands cut through the noise on social—via high-impact content, precise audience targeting, and creator-powered campaigns that spark action. From Instagram to TikTok, our team drives engagement, brand lift, and conversions with a clear focus on community and ROI.",
    services: [
      "Platform Strategy",
      "Paid Social Ads", 
      "UGC Creators",
      "Analytics-Backed Results",
    ],
  },
  Branding: {
    badgeText: "Branding",
    title: "Brand Excellence",
    subtitle: "Stories That Stick",
    description:
      "Build a compelling brand identity with creative production, design, storytelling, and visual communication that stands out.",
    services: [
      "Creative Production",
      "Brand Strategy",
      "Design & Visuals",
      "Storytelling",
    ],
  },
  Influencer: {
    badgeText: "Influencer",
    title: "Influencer Partnerships",
    subtitle: "Authentic Connections",
    description:
      "Amplify your reach through authentic influencer partnerships, targeted campaigns, and measurable social proof.",
    services: [
      "Influencer Partnerships",
      "Campaign Management",
      "Social Proof",
      "Metrics & Reporting",
    ],
  },
};

const sections = ["Performance", "Social", "Branding", "Influencer"];

export function VideoHero() {
  const [textContainerRef, textContainerInView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  const dashboardControls = useAnimation();
  const textControls = useAnimation();
  
  // State management
  const [isScrollingMode, setIsScrollingMode] = useState(false);
  const [scrollComplete, setScrollComplete] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Performance");
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const componentRef = useRef(null);
  const wheelTimeoutRef = useRef(null);

  // Debounced wheel handler
  const handleWheel = useCallback((event) => {
    if (!isScrollingMode || scrollComplete || isTransitioning) return;
    
    event.preventDefault();
    
    // Clear existing timeout
    if (wheelTimeoutRef.current) {
      clearTimeout(wheelTimeoutRef.current);
    }
    
    // Debounce wheel events
    wheelTimeoutRef.current = setTimeout(() => {
      const delta = event.deltaY;
      
      setIsTransitioning(true);
      
      if (delta > 0) {
        // Scroll down - next section
        setCurrentSectionIndex(prev => {
          const nextIndex = Math.min(prev + 1, sections.length - 1);
          setActiveCategory(sections[nextIndex]);
          
          // Complete after last section
          if (nextIndex === sections.length - 1) {
            setTimeout(() => {
              setScrollComplete(true);
              setIsScrollingMode(false);
            }, 2000);
          }
          
          return nextIndex;
        });
      } else {
        // Scroll up - previous section
        setCurrentSectionIndex(prev => {
          const prevIndex = Math.max(prev - 1, 0);
          setActiveCategory(sections[prevIndex]);
          return prevIndex;
        });
      }
      
      // Reset transition state
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
      
    }, 150); // 150ms debounce
    
  }, [isScrollingMode, scrollComplete, isTransitioning]);

  // Add/remove wheel event listener
  useEffect(() => {
    const element = componentRef.current;
    if (isScrollingMode && !scrollComplete && element) {
      element.addEventListener('wheel', handleWheel, { passive: false });
      
      return () => {
        element.removeEventListener('wheel', handleWheel);
      };
    }
  }, [isScrollingMode, scrollComplete, handleWheel]);

  // Hide/show content below
  useEffect(() => {
    const videoHeroParent = document.querySelector('[data-video-hero]')?.parentElement;
    if (videoHeroParent) {
      const allSiblings = Array.from(videoHeroParent.children);
      const videoHeroIndex = allSiblings.findIndex(child => child.hasAttribute('data-video-hero'));
      
      allSiblings.slice(videoHeroIndex + 1).forEach(sibling => {
        if (isScrollingMode && !scrollComplete) {
          sibling.style.display = 'none';
        } else {
          sibling.style.display = '';
        }
      });
    }
  }, [isScrollingMode, scrollComplete]);

  // Original video reveal animation
  useEffect(() => {
    if (!textContainerInView) {
      setIsScrollingMode(true);
      setScrollComplete(false);
      setCurrentSectionIndex(0);
      setActiveCategory("Performance");
      
      dashboardControls.start({
        x: "-25vw",
        scale: 0.9,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
      
      textControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      setIsScrollingMode(false);
      
      dashboardControls.start({
        x: 0,
        scale: 1,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
      
      textControls.start({
        opacity: 0,
        x: 60,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    }
  }, [textContainerInView, dashboardControls, textControls]);

  const currentContent = categoryContent[activeCategory];

  return (
    <div 
      ref={componentRef}
      data-video-hero
      className={`relative bg-black text-white py-16 px-4 overflow-hidden ${
        isScrollingMode ? 'min-h-[1100px]' : 'min-h-[1100px]'
      }`}
    >
      {/* Metrics */}
      <div
        className="container mx-auto max-w-6xl relative z-10 mb-10"
        ref={textContainerRef}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          <div className="text-center flex-1">
            <div className="text-4xl md:text-6xl font-bold text-[#e7ff30] mb-2">2.5x+</div>
            <div className="text-gray-400 text-sm md:text-base">
              Average ROAS
              <br />
              (Return on Ad Spend)
            </div>
          </div>
          <div className="text-center flex-1">
            <div className="text-4xl md:text-6xl font-bold text-[#ff8c12] mb-2">10M+</div>
            <div className="text-gray-400 text-sm md:text-base">
              Monthly Active Users
              <br />
              (MAU)
            </div>
          </div>
          <div className="text-center flex-1">
            <div className="text-4xl md:text-6xl font-bold text-[#27fff8] mb-2">10K+</div>
            <div className="text-gray-400 text-sm md:text-base">
              Integrated Publishers
              <br />
              & SDK Apps
            </div>
          </div>
        </div>
      </div>

      {/* Thread Video */}
      <div className="flex items-center justify-center mb-8">
        <video
          className="w-[1200px] md:w-[800px] lg:w-[1200px] h-80 object-cover"
          autoPlay
          muted
          loop
          playsInline
          style={{ position: "relative", bottom: "160px" }}
        >
          <source src={THREAD_VIDEO} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dashboard Video Section */}
      <div className="w-full flex items-center justify-center -mb-64 relative">
        <motion.div
          className="w-full flex justify-center"
          initial={{ x: 0, scale: 1 }}
          animate={dashboardControls}
        >
          <video
            src={DASHBOARD_VIDEO}
            className="w-full max-w-[1200px] h-auto object-cover"
            autoPlay
            muted
            loop
            playsInline
            style={{ position: "relative", bottom: "170px" }}
          />
        </motion.div>

        {/* TEXT CONTAINER */}
        <motion.div
          className="absolute"
          initial={{ opacity: 0, x: 60 }}
          animate={textControls}
          style={{ zIndex: 10 }}
        >
          <div
            className="relative p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/50 shadow-2xl"
            style={{
              position: "absolute",
              top: TEXT_BOX_POSITION.top,
              left: TEXT_BOX_POSITION.left,
              width: TEXT_BOX_POSITION.width,
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 via-lime-500/20 to-cyan-500/20 p-[1px]">
              <div className="w-full h-full bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 rounded-2xl"></div>
            </div>

            <div className="relative z-10">
              {!isScrollingMode ? (
                // NORMAL MODE - Click buttons
                <>
                  <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
                    {Object.keys(categoryContent).map((key) => (
                      <button
                        key={key}
                        onClick={() => setActiveCategory(key)}
                        className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 border ${
                          activeCategory === key
                            ? "bg-gradient-to-r from-green-600 to-lime-600 text-white border-transparent shadow-lg shadow-green-500/50"
                            : "bg-transparent text-green-400 border-green-400 hover:bg-green-600 hover:text-white"
                        }`}
                      >
                        {key}
                      </button>
                    ))}
                  </div>

                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-lime-500/20 border border-green-400/30 mb-6">
                    <div className="w-2 h-2 bg-gradient-to-r from-lime-400 to-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-medium bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
                      {currentContent.badgeText}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
                    {currentContent.badgeText} Advertising Solutions
                  </h2>
                </>
              ) : (
                // SCROLLING MODE - Progress indicators
                <>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-1 bg-gradient-to-r from-green-400 to-lime-400 rounded-full" />
                      <span className="text-lg font-medium text-green-400">
                        {currentContent.badgeText} • {currentSectionIndex + 1} of 4
                      </span>
                    </div>
                    
                    <div className="flex space-x-2">
                      {sections.map((_, index) => (
                        <div 
                          key={index} 
                          className={`w-2 h-2 rounded-full transition-all duration-500 ${
                            index === currentSectionIndex 
                              ? 'bg-green-400 scale-125 shadow-lg shadow-green-400/50' 
                              : 'bg-gray-600'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>

                  <motion.div 
                    key={`badge-${activeCategory}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-lime-500/20 border border-green-400/30 mb-6"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-lime-400 to-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-medium bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
                      {currentContent.badgeText}
                    </span>
                  </motion.div>

                  <motion.h2 
                    key={`title-${activeCategory}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight"
                  >
                    {currentContent.title}
                  </motion.h2>

                  <motion.h3
                    key={`subtitle-${activeCategory}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-xl font-semibold mb-6 bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent"
                  >
                    {currentContent.subtitle}
                  </motion.h3>
                </>
              )}

              <motion.div 
                key={`desc-${activeCategory}`}
                initial={isScrollingMode ? { opacity: 0, y: 20 } : false}
                animate={isScrollingMode ? { opacity: 1, y: 0 } : false}
                transition={isScrollingMode ? { duration: 0.5, delay: 0.4 } : {}}
                className="text-lg text-gray-300 leading-relaxed mb-8"
              >
                {currentContent.description}
              </motion.div>

              <motion.div 
                key={`services-${activeCategory}`}
                initial={isScrollingMode ? { opacity: 0, y: 20 } : false}
                animate={isScrollingMode ? { opacity: 1, y: 0 } : false}
                transition={isScrollingMode ? { duration: 0.5, delay: 0.5 } : {}}
                className="flex flex-wrap gap-3 mb-8"
              >
                {currentContent.services.map((service, index) => (
                  <motion.span
                    key={service}
                    initial={isScrollingMode ? { opacity: 0, scale: 0.8 } : false}
                    animate={isScrollingMode ? { opacity: 1, scale: 1 } : false}
                    transition={isScrollingMode ? { duration: 0.3, delay: 0.5 + (index * 0.1) } : {}}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 text-cyan-300"
                  >
                    🔹 {service}
                  </motion.span>
                ))}
              </motion.div>

              <motion.button 
                key={`cta-${activeCategory}`}
                initial={isScrollingMode ? { opacity: 0, y: 20 } : false}
                animate={isScrollingMode ? { opacity: 1, y: 0 } : false}
                transition={isScrollingMode ? { duration: 0.5, delay: 0.7 } : {}}
                className="group relative px-8 py-3 bg-gradient-to-r from-green-600 to-lime-600 rounded-full font-semibold text-white transition-all duration-300 hover:from-green-500 hover:to-lime-500 hover:shadow-lg hover:shadow-green-500/25"
              >
                <span className="relative z-10">Let&apos;s Create Together</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-lime-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </motion.button>
            </div>

            <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-8 left-8 w-1 h-1 bg-lime-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></div>
          </div>
        </motion.div>
      </div>

      {isScrollingMode && !scrollComplete && (
        <>
          <div className="fixed bottom-8 right-8 z-20">
            <div className="bg-black/50 backdrop-blur-sm rounded-full p-4 border border-gray-700">
              <div className="text-xs text-gray-400 mb-2 text-center">
                {currentSectionIndex + 1} / 4
              </div>
              <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-green-400 to-lime-400 rounded-full"
                  animate={{ width: `${((currentSectionIndex + 1) / 4) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-400">
            <div className="text-sm mb-2">Scroll to explore services</div>
            <div className="w-6 h-10 border border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
