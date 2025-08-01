"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import CountUp from "@/blocks/TextAnimations/CountUp/CountUp";

const THREAD_VIDEO =
  "https://www.start.io/wp-content/uploads/2023/05/STR_2023_Homepage-1300x300_2-1.mp4";
const DASHBOARD_VIDEO =
  "https://www.start.io/wp-content/uploads/2023/05/STR_Start-io-HP-revamp-Website-with-globe-v2.2.mp4";

const TEXT_BOX_POSITION = {
  top: -450,
  left: 50,
  width: "calc(50vw - 100px)", // Always maintains 10px right margin
  maxWidth: "600px", // But never exceeds 600px on large screens
};

const categoryContent = {
  Performance: {
    badgeText: "Performance",
    title: "Performance Marketing",
    subtitle: "Data-Driven Growth Engine",
    description:
      "We acquire users that matter. Using intent signals and sharp targeting, we reach high-value customers across social, search, native, and more. Each campaign is ROI-focused—tracking clicks, conversions, and spend to fuel real, scalable growth.",
    metrics: [
      { number: "250K+", label: "Monthly Conversions" },
      { number: "35+", label: "Countries Global Reach Active" },
      { number: "10M+", label: "Monthly Active Users" },
    ],
  },
  Social: {
    badgeText: "Social",
    title: "Social-First Agency",
    subtitle: "We Turn Scrolls into Sales",
    description:
      "We help brands stand out on social with impactful content, smart targeting, and creator-led campaigns. From Instagram to TikTok, we drive engagement, conversions, and brand lift—focused on community and ROI.",
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
      "We build brands that last. From identity and storytelling to positioning, we craft a unique voice across channels—driving recognition, emotional connection, and loyalty that leads to long-term market success.",
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
      "We link brands with trusted creators to drive real engagement. From nano to celebrity, our influencer campaigns blend performance, trust, and ROI—delivering impact across every funnel stage.",
    metrics: [
      { number: "25K+", label: "Verified Creators" },
      { number: "9.8%", label: "Average Engagement Rate" },
      { number: "75K+", label: "Influencer-Driven Sales" },
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

  const componentRef = useRef<HTMLDivElement | null>(null);
  const wheelTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Debounced wheel handler
  const handleWheel = useCallback(
    (event: WheelEvent) => {
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
          setCurrentSectionIndex((prev) => {
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
          setCurrentSectionIndex((prev) => {
            const prevIndex = Math.max(prev - 1, 0);
            setActiveCategory(sections[prevIndex]);
            return prevIndex;
          });
        }

        // Reset transition state
        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }, 100); // 100ms debounce
    },
    [isScrollingMode, scrollComplete, isTransitioning]
  );

  // Add/remove wheel event listener
  useEffect(() => {
    const element = componentRef.current;
    if (isScrollingMode && !scrollComplete && element) {
      element.addEventListener("wheel", handleWheel, { passive: false });

      return () => {
        element.removeEventListener("wheel", handleWheel);
      };
    }
  }, [isScrollingMode, scrollComplete, handleWheel]);

  // Hide/show content below
  useEffect(() => {
    const videoHeroParent =
      document.querySelector("[data-video-hero]")?.parentElement;
    if (videoHeroParent) {
      const allSiblings = Array.from(videoHeroParent.children);
      const videoHeroIndex = allSiblings.findIndex((child) =>
        child.hasAttribute("data-video-hero")
      );

      allSiblings.slice(videoHeroIndex + 1).forEach((sibling) => {
        if (sibling instanceof HTMLElement) {
          if (isScrollingMode && !scrollComplete) {
            sibling.style.display = "none";
          } else {
            sibling.style.display = "";
          }
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

  const currentContent =
    categoryContent[activeCategory as keyof typeof categoryContent];

  return (
    <div
      ref={componentRef}
      data-video-hero
      className={`relative bg-black text-white py-16 px-4 overflow-hidden ${
        isScrollingMode ? "min-h-[1000px]" : "min-h-[1000px]"
      }`}
    >
      {/* Metrics */}
      <div
        className="container mx-auto max-w-6xl relative z-50 mb-10"
        ref={textContainerRef}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          <div className="text-center flex-1">
            <div className="flex justify-center items-center">
              <CountUp
                from={0}
                to={250}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-4xl md:text-7xl font-bold text-[#e7ff30] mb-2"
              />
              <div className="text-4xl md:text-7xl font-bold text-[#e7ff30] mb-2">
                K+
              </div>
            </div>

            <div className="text-gray-400 text-sm md:text-base">
              Leads Generated
            </div>
          </div>
          <div className="text-center flex-1">
            <div className="flex justify-center items-center">
              <CountUp
                from={0.0}
                to={2.5}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-4xl md:text-7xl font-bold text-[#ff8c12] mb-2"
              />
              <div className="text-4xl md:text-7xl font-bold text-[#ff8c12] mb-2">
                x
              </div>
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              Return of Ad spend
              <br />
              (ROAS)
            </div>
          </div>
          <div className="text-center flex-1">
            <div className="flex justify-center items-center">
              <CountUp
                from={0}
                to={50}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-4xl md:text-7xl font-bold text-[#27fff8] mb-2"
              />
              <div className="text-4xl md:text-7xl font-bold text-[#27fff8] mb-2">
                +
              </div>
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              Clients
              <br />& SDK Apps
            </div>
          </div>
        </div>
      </div>

      {/* Thread Video */}
      <div className="flex items-center justify-center mb-8 relative -z-10">
        <video
          className="relative bottom-[40px] md:bottom-[120px] lg:bottom-[160px] w-[800px] md:w-[1200px] h-80 object-cover"
          autoPlay
          muted
          loop
          playsInline
          style={{
            zIndex: -1,
          }}
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
              {/* Performance Badge and Indicator */}
              <div className="flex items-center justify-between mb-8">
                <motion.div
                  key={`badge-${activeCategory}`}
                  initial={isScrollingMode ? { opacity: 0, y: 20 } : false}
                  animate={isScrollingMode ? { opacity: 1, y: 0 } : false}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-lime-500/20 border border-green-400/30"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-lime-400 to-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
                    {currentContent.badgeText}
                  </span>
                </motion.div>

                {isScrollingMode && (
                  <span className="text-lg font-medium text-green-400">
                    {currentSectionIndex + 1} / 4
                  </span>
                )}
              </div>

              {/* Heading */}
              <motion.h2
                key={`title-${activeCategory}`}
                initial={isScrollingMode ? { opacity: 0, y: 20 } : false}
                animate={isScrollingMode ? { opacity: 1, y: 0 } : false}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight"
              >
                {currentContent.title}
              </motion.h2>

              {/* Subtext */}
              <motion.div
                key={`description-${activeCategory}`}
                initial={isScrollingMode ? { opacity: 0, y: 20 } : false}
                animate={isScrollingMode ? { opacity: 1, y: 0 } : false}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-gray-300 leading-relaxed mb-8"
              >
                {currentContent.description}
              </motion.div>

              {/* Metrics */}
              <motion.div
                key={`metrics-${activeCategory}`}
                initial={isScrollingMode ? { opacity: 0, y: 20 } : false}
                animate={isScrollingMode ? { opacity: 1, y: 0 } : false}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-8"
              >
                <div className="grid grid-cols-3 gap-6 ">
                  {currentContent.metrics.map((metric, index) => (
                    <div key={index} className="text-center relative z-10">
                      <div
                        className={`text-2xl md:text-3xl font-bold mb-1 ${
                          index === 0
                            ? "text-[#e7ff30]"
                            : index === 1
                            ? "text-[#ff8c12]"
                            : "text-[#27fff8]"
                        }`}
                      >
                        {metric.number}
                      </div>
                      <div className="text-white text-sm">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {isScrollingMode && !scrollComplete && (
        <>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-400 flex justify-center items-center flex-col">
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
