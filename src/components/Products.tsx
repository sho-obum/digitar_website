// ======= Products Component =======
"use client";
import { motion } from "framer-motion";
import CardSwap, { Card } from "../blocks/Components/CardSwap/CardSwap";
import { useState } from "react";

// Card data for flip cards (left cards)
const leftCards = [
  {
    name: "DSP",
    label: "Adxity.com",
    gradient: "from-blue-400 via-purple-400 to-pink-500",
    description: "Demand Side Platform: Efficient ad buying and targeting.",
    badges: ["Trusted", "Fast", "Scalable"],
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Latency", value: "120ms" },
      { label: "Integrations", value: "15+" },
    ],
  },
  {
    name: "SDK",
    label: "Adpocket.io",
    gradient: "from-purple-500 via-pink-400 to-yellow-400",
    description: "Software Development Kit: Tools for easy integration.",
    badges: ["Lightweight", "Flexible", "SDK v2.0"],
    metrics: [
      { label: "Downloads", value: "50k+" },
      { label: "Languages", value: "5" },
      { label: "Apps Supported", value: "200+" },
    ],
  },
];

// Products data for right stack
const products = [
  {
    name: "LendingLeaf",
    description:
      "Empowering seamless lending experiences from start to finish, with instant approvals and robust analytics. Manage your loan products, monitor risk, and automate compliance in a fluid, cloud-based dashboard.",
    highlights: [
      "Smart KYC & risk assessment",
      "Instant eligibility checks",
      "Real-time loan performance tracking",
    ],
    metric1: "92%",
    metric1Label: "Approval Rate",
    metric2: "800K+",
    metric2Label: "Loans Processed",
  },
  {
    name: "CrazyOffers",
    description:
      "Unleash campaigns and exclusive deals with dynamic rules and AI-powered targeting. Create, A/B test, and personalize offers that convert on every channel—in one sleek dashboard.",
    highlights: [
      "Segmented offer flows",
      "Personalized couponing and rewards",
      "Live redemption insights",
    ],
    metric1: "5X",
    metric1Label: "Higher Engagement",
    metric2: "200+",
    metric2Label: "Brands Onboarded",
  },
  {
    name: "Yogza",
    description:
      "Innovate user engagement and scale your reach with next-gen analytics, actionable insights, and event-driven automation. Understand customer journeys and supercharge retention.",
    highlights: [
      "Omnichannel tracking",
      "Retention prediction",
      "Growth automation playbooks",
    ],
    metric1: "3M+",
    metric1Label: "Users Analyzed",
    metric2: "92%",
    metric2Label: "Churn Reduction",
  },
];

// Flip animation for Framer Motion
const cardFlipVariants = {
  initial: { rotateY: 0 },
  hover: { rotateY: 180 },
};
const flipTransition = {
  duration: 0.6,
  ease: [0.32, 0.72, 0, 1],
};

// FlipCard component for the left column cards
const FlipCard = ({ card }: { card: (typeof leftCards)[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl cursor-pointer min-h-[340px] h-full select-none"
      style={{
        perspective: "1800px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={isHovered ? "hover" : "initial"}
        variants={cardFlipVariants}
        transition={flipTransition}
      >
        {/* Card Front */}
        <div
          className={`absolute inset-0 bg-gradient-to-tr ${card.gradient} rounded-2xl shadow-lg`}
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow:
              "0 8px 32px 0 rgba(108, 52, 131, 0.25), 0 0 0 1px rgba(147,51,234,0.12)",
            transform: "rotateY(0deg)",
            backfaceVisibility: "hidden",
            zIndex: 2,
          }}
        >
          <div className="bg-black bg-opacity-60 rounded-xl p-6 shadow-md min-h-[320px] h-full flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">
                {card.name}
              </h2>
              <div className="font-mono mb-4 opacity-90 text-indigo-300">
                {card.label}
              </div>
              <p className="text-gray-200 mb-6">{card.description}</p>
            </div>
            <div className="flex gap-3 mb-6 flex-wrap">
              {card.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-indigo-600 bg-opacity-70 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex justify-between text-indigo-200">
              {card.metrics.map((metric, idx) => (
                <div key={idx} className="text-center min-w-[70px]">
                  <div className="text-xl font-semibold text-white">
                    {metric.value}
                  </div>
                  <div className="text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Card Back */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-100/30 rounded-2xl p-8 flex flex-col justify-center items-center"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            zIndex: 3,
          }}
        >
          <h3 className="text-3xl font-bold text-pink-400 mb-2">
            {card.name} Details
          </h3>
          <div className="text-indigo-100 text-center mb-4">
            {card.name === "DSP"
              ? "Perfect for ad buyers, agencies, and marketers who demand scale and agility. Integrate with Adxity.com and reach audiences worldwide with precision."
              : "Integrate Adpocket.io SDK in minutes. Power up your app’s monetization and reporting with our blazing fast, developer‑friendly SDK."}
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {card.badges.map((badge, idx) => (
              <span
                key={idx}
                className="inline-block bg-indigo-500/80 text-white text-xs font-semibold px-3 py-1 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const rightCardMotion = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export function Products() {
  return (
    <section className="bg-black min-h-screen relative overflow-x-hidden py-12 px-24">
      <h1 className="text-7xl text-white font-extrabold text-center mb-16">
        Ideas turned into Impact
      </h1>
      {/* Left cards grid */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {leftCards.map((card) => (
            <FlipCard key={card.name} card={card} />
          ))}
        </div>
      </div>

    
    </section>
  );
}


