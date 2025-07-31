"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ======= ScrollingSections Component =======

const categoryContent = {
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
  Performance: {
    badgeText: "Performance",
    title: "Performance Marketing",
    subtitle: "Data-Driven Growth Engine",
    description:
      "We deliver data-driven campaigns focused on ROI, scalability, and measurable growth, combining programmatic media buying and analytics to maximize your advertising spend.",
    services: [
      "Performance Marketing",
      "Programmatic Buying",
      "Analytics",
      "Conversion Optimization",
    ],
  },
  Branding: {
    badgeText: "Branding",
    title: "Brand Excellence",
    subtitle: "Stories That Stick",
    description:
      "Build a compelling brand identity with creative production, design, storytelling, and visual communication that stands out in today's crowded marketplace.",
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
      "Amplify your reach through authentic influencer partnerships, targeted campaigns, and measurable social proof that builds trust and drives conversions.",
    services: [
      "Influencer Partnerships",
      "Campaign Management",
      "Social Proof",
      "Metrics & Reporting",
    ],
  },
};

const sections = ["Social", "Performance", "Branding", "Influencer"];

export function ScrollingSections() {
  const sectionRef = useRef(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  
  // Track scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Transform scroll progress to section index (0-3)
  const sectionProgress = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3]);
  
  // Update current section based on scroll
  React.useEffect(() => {
    const unsubscribe = sectionProgress.onChange((latest) => {
      const newIndex = Math.round(latest);
      if (newIndex !== currentSectionIndex && newIndex >= 0 && newIndex < sections.length) {
        setCurrentSectionIndex(newIndex);
      }
    });
    return unsubscribe;
  }, [sectionProgress, currentSectionIndex]);

  const activeCategory = sections[currentSectionIndex];
  const currentContent = categoryContent[activeCategory];

  return (
    <div 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden h-[400vh]"
    >
      {/* Fixed content container */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {/* Main Content Card */}
        <div className="relative max-w-4xl mx-auto px-8">
          {/* Glass morphism container */}
          <div className="relative p-12 rounded-3xl backdrop-blur-md bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/50 shadow-2xl">
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/20 via-lime-500/20 to-cyan-500/20 p-[1px]">
              <div className="w-full h-full bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 rounded-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Section Indicator Header */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-lime-400 rounded-full" />
                  <span className="text-xl font-medium text-green-400">
                    {currentContent.badgeText} • {currentSectionIndex + 1} of 4
                  </span>
                </div>
                
                {/* Progress dots */}
                <div className="flex space-x-3">
                  {sections.map((_, index) => (
                    <div 
                      key={index} 
                      className={`w-3 h-3 rounded-full transition-all duration-500 ${
                        index === currentSectionIndex 
                          ? 'bg-green-400 scale-125 shadow-lg shadow-green-400/50' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`} 
                    />
                  ))}
                </div>
              </div>

              {/* Badge */}
              <motion.div 
                key={`badge-${activeCategory}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-lime-500/20 border border-green-400/30 mb-8"
              >
                <div className="w-3 h-3 bg-gradient-to-r from-lime-400 to-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-base font-medium bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
                  {currentContent.badgeText}
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h2 
                key={`title-${activeCategory}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight"
              >
                {currentContent.title}
              </motion.h2>

              {/* Subtitle */}
              <motion.h3
                key={`subtitle-${activeCategory}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl font-semibold mb-8 bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent"
              >
                {currentContent.subtitle}
              </motion.h3>

              {/* Description */}
              <motion.div 
                key={`desc-${activeCategory}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl"
              >
                {currentContent.description}
              </motion.div>

              {/* Service Badges */}
              <motion.div 
                key={`services-${activeCategory}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                {currentContent.services.map((service, index) => (
                  <motion.span
                    key={service}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 text-cyan-300"
                  >
                    🔹 {service}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.button 
                key={`cta-${activeCategory}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="group relative px-10 py-4 bg-gradient-to-r from-green-600 to-lime-600 rounded-full font-semibold text-white text-lg transition-all duration-300 hover:from-green-500 hover:to-lime-500 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                <span className="relative z-10">Let&apos;s Create Together</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-lime-400 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </motion.button>
            </div>

            {/* Floating particles effect */}
            <div className="absolute top-6 right-6 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-10 left-10 w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-6 w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="fixed bottom-8 right-8 z-20">
          <div className="bg-black/50 backdrop-blur-sm rounded-full p-4 border border-gray-700">
            <div className="text-xs text-gray-400 mb-2 text-center">
              {currentSectionIndex + 1} / 4
            </div>
            <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-green-400 to-lime-400 rounded-full"
                initial={{ width: "25%" }}
                animate={{ width: `${((currentSectionIndex + 1) / 4) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-400">
          <div className="text-sm mb-2">Scroll to explore services</div>
          <div className="w-6 h-10 border border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
