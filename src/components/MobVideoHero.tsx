"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, PanInfo } from "framer-motion";

const THREAD_VIDEO =
  "https://www.start.io/wp-content/uploads/2023/05/STR_2023_Homepage-1300x300_2-1.mp4";
const DASHBOARD_VIDEO =
  "https://www.start.io/wp-content/uploads/2023/05/STR_Start-io-HP-revamp-Website-with-globe-v2.2.mp4";

const categoryContent = {
  Performance: {
    badgeText: "Performance",
    title: "Performance Marketing",
    subtitle: "Data-Driven Growth Engine",
    description:
      "We acquire users that matter. By leveraging intent signals and precise targeting, we help you reach high-value customers across platforms social, search, native, and more.",
    metrics: [
      { number: "250K+", label: "Monthly Conversions" },
      { number: "35+", label: "Countries Global Reach" },
      { number: "10M+", label: "Monthly Active Users" },
    ],
  },
  Social: {
    badgeText: "Social",
    title: "Social-First Agency",
    subtitle: "We Turn Scrolls into Sales",
    description:
      "We help brands cut through the noise on social—via high-impact content, precise audience targeting, and creator-powered campaigns that spark action.",
    metrics: [
      { number: "250K+", label: "Leads Generated" },
      { number: "2.5x", label: "Return of Ad Spend" },
      { number: "50+", label: "Clients" },
    ],
  },
  Branding: {
    badgeText: "Branding",
    title: "Brand Excellence",
    subtitle: "Stories That Stick",
    description:
      "We craft brands that are not just seen—but remembered. From identity design to positioning and storytelling, we help businesses build a distinctive voice.",
    metrics: [
      { number: "72%", label: "Brand Recall Rate" },
      { number: "61%", label: "Higher Ad Recognition" },
      { number: "5M+", label: "Brand Impressions" },
    ],
  },
  Influencer: {
    badgeText: "Influencer",
    title: "Influencer Partnerships",
    subtitle: "Authentic Connections",
    description:
      "We connect brands with voices that matter. By partnering with trusted creators across platforms, we build campaigns that drive real engagement.",
    metrics: [
      { number: "25K+", label: "Verified Creators" },
      { number: "9.8%", label: "Average Engagement Rate" },
      { number: "75K+", label: "Influencer-Driven Sales" },
    ],
  },
};

const sections = ["Performance", "Social", "Branding", "Influencer"] as const;

export function MobileVideoHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragDirection, setDragDirection] = useState(0);
  const constraintsRef = useRef(null);
  const carouselControls = useAnimation();

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle swipe end
  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 50;
    const swipeVelocity = Math.abs(info.velocity.x);
    
    if (Math.abs(info.offset.x) > threshold || swipeVelocity > 500) {
      if (info.offset.x > 0) {
        // Swiped right - go to previous
        setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length);
      } else {
        // Swiped left - go to next
        setCurrentIndex((prev) => (prev + 1) % sections.length);
      }
    }
  };

  const currentContent = categoryContent[sections[currentIndex]];

  return (
    <div className="relative bg-black text-white overflow-hidden min-h-screen z-20">
      {/* Top Metrics Section - Added for Mobile */}
      <div className="px-4 py-8">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#e7ff30] mb-1">
              250K+
            </div>
            <div className="text-gray-400 text-xs">
              Leads Generated
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#ff8c12] mb-1">
              2.5x
            </div>
            <div className="text-gray-400 text-xs">
              Return of Ad Spend
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#27fff8] mb-1">
              50+
            </div>
            <div className="text-gray-400 text-xs">
              Clients
            </div>
          </div>
        </div>
      </div>

      {/* Videos Section */}
      <div className="relative mb-8 px-4 bottom-24 z-0">
        {/* Thread Video */}
        <div className="flex items-center justify-center mb-4">
          <video
            className="w-full max-w-md h-48 object-cover rounded-lg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={THREAD_VIDEO} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Dashboard Video */}
        <div className="flex items-center justify-center">
          <video
            src={DASHBOARD_VIDEO}
            className="w-full max-w-md h-48 object-cover rounded-lg"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>

      {/* Carousel Section */}
      <div className="px-4 pb-20">
        <div ref={constraintsRef} className="overflow-hidden">
          <motion.div
            className="flex cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            animate={{
              x: -currentIndex * 100 + "%",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {sections.map((section, index) => {
              const content = categoryContent[section];
              return (
                <motion.div
                  key={section}
                  className="w-full flex-shrink-0 px-2"
                  initial={{ opacity: 0.7, scale: 0.95 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0.7,
                    scale: index === currentIndex ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/50 shadow-2xl">
                    {/* Gradient Border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 via-lime-500/20 to-cyan-500/20 p-[1px]">
                      <div className="w-full h-full bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 rounded-2xl"></div>
                    </div>

                    <div className="relative z-10">
                      {/* Badge */}
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-lime-500/20 border border-green-400/30 mb-4">
                        <div className="w-2 h-2 bg-gradient-to-r from-lime-400 to-green-400 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-medium bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
                          {content.badgeText}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
                        {content.title}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {content.description}
                      </p>

                      {/* Card-Specific Metrics - Made More Prominent */}
                      <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-xl p-4 mb-6">
                        <div className="grid grid-cols-3 gap-3">
                          {content.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="text-center">
                              <div
                                className={`text-xl md:text-2xl font-bold mb-1 ${
                                  metricIndex === 0
                                    ? "text-[#e7ff30]"
                                    : metricIndex === 1
                                    ? "text-[#ff8c12]"
                                    : "text-[#27fff8]"
                                }`}
                              >
                                {metric.number}
                              </div>
                              <div className="text-white text-xs leading-tight">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button className="w-full group relative px-6 py-3 bg-gradient-to-r from-green-600 to-lime-600 rounded-full font-semibold text-white transition-all duration-300 hover:from-green-500 hover:to-lime-500 hover:shadow-lg hover:shadow-green-500/25">
                        <span className="relative z-10">Let&apos;s Create Together</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-lime-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                      </button>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-lime-400 rounded-full animate-pulse"></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center items-center mt-8 space-x-3">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-green-400 to-lime-400 scale-125 shadow-lg shadow-green-400/50"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Swipe Indicator */}
        <div className="text-center mt-4">
          <p className="text-gray-400 text-sm">Swipe to explore services</p>
        </div>
      </div>
    </div>
  );
}
