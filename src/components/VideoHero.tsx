"use client";
import React from "react";
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

const REVEAL_TEXT = (
  <>
    {/* Badge */}
    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-lime-500/20 border border-green-400/30 mb-6">
      <div className="w-2 h-2 bg-gradient-to-r from-lime-400 to-green-400 rounded-full mr-2 animate-pulse"></div>
      <span className="text-sm font-medium bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
        Full-Service Agency
      </span>
    </div>

    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
      We Connect Creativity, Media & Data
    </h2>

    <div className="text-lg text-gray-300 leading-relaxed mb-8">
      We are a 360° advertising agency specializing in full-funnel
      solutions—performance marketing, programmatic buying, creative production,
      influencer campaigns, and analytics.
    </div>

    <div className="text-base text-gray-400 leading-relaxed mb-8">
      Our teams craft campaigns that move the needle, with strong focus on ROI,
      LTV, and scalable results.
    </div>

    {/* Service Badges */}
    <div className="flex flex-wrap gap-3 mb-8">
      {[
        "Performance Marketing",
        "Creative Production",
        "Analytics",
        "Influencer Campaigns",
      ].map((service, index) => (
        <span
          key={service}
          className="px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 text-cyan-300"
        >
          {service}
        </span>
      ))}
    </div>

    {/* CTA Button */}
    <button className="group relative px-8 py-3 bg-gradient-to-r from-green-600 to-lime-600 rounded-full font-semibold text-white transition-all duration-300 hover:from-green-500 hover:to-lime-500 hover:shadow-lg hover:shadow-green-500/25">
      <span className="relative z-10">Let's Create Together</span>
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-lime-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
    </button>
  </>
);

export default function VideoHero() {
  const [textContainerRef, textContainerInView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  const dashboardControls = useAnimation();
  const textControls = useAnimation();

  React.useEffect(() => {
    if (!textContainerInView) {
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

  return (
    <div className="relative bg-black text-white py-16 px-4 overflow-hidden min-h-[500px]">
      {/* Metrics */}
      <div
        className="container mx-auto max-w-6xl relative z-10 mb-10"
        ref={textContainerRef}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          <div className="text-center flex-1">
            <div className="text-4xl md:text-6xl font-bold text-[#e7ff30] mb-2">
              IND & USA
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              Global Reach
              <br />
              Local Expertise
            </div>
          </div>
          <div className="text-center flex-1">
            <div className="text-4xl md:text-6xl font-bold text-[#ff8c12] mb-2">
              15+ Years
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              Proven Growth & ROI
              <br />
              (SDK)
            </div>
          </div>
          <div className="text-center flex-1">
            <div className="text-4xl md:text-6xl font-bold text-[#27fff8] mb-2">
              Award-Winning
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              Innovation. Impact. Recognition.
              <br />
              (MAUs)
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
        {/* Dashboard Video */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ x: 0, scale: 1 }}
          animate={dashboardControls}
        >
          <video
            src={DASHBOARD_VIDEO}
            className="w-full max-w-[1600px] h-auto object-cover"
            autoPlay
            muted
            loop
            playsInline
            style={{ position: "relative", bottom: "170px" }}
          />
        </motion.div>

        {/* TEXT CONTAINER - POSITIONED PARALLEL TO VIDEO */}
        <motion.div
          className="absolute" // Removed conflicting positioning classes
          initial={{ opacity: 0, x: 60 }}
          animate={textControls}
          style={{ zIndex: 10 }}
        >
          {/* Glass morphism container */}
          <div
            className="relative p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/50 shadow-2xl"
            style={{
              position: 'absolute',
              top: TEXT_BOX_POSITION.top,
              left: TEXT_BOX_POSITION.left,
              width: TEXT_BOX_POSITION.width,
            }}
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 via-lime-500/20 to-cyan-500/20 p-[1px]">
              <div className="w-full h-full bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 rounded-2xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">{REVEAL_TEXT}</div>

            {/* Floating particles effect */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-8 left-8 w-1 h-1 bg-lime-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
