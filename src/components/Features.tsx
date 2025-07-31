"use client";
import { useState, useEffect } from "react";

const features = [
  {
    title: "LendingLeaf",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
    icon: "🔗", // You can replace with your actual icons
    color: "cyan",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Crazyoffers",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
    icon: "🎯",
    color: "purple",
    gradient: "from-purple-500/20 to-fuchsia-500/20",
  },
  {
    title: "Yogza",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
    icon: "🔒",
    color: "emerald",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

export const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger stagger animation on mount
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#090213] via-[#030b1f] to-[#00aae8] text-white py-[72px] sm:py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter transform transition-all duration-1000 translate-y-0 opacity-100">
          Our Products
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70 transform transition-all duration-1000 delay-300 translate-y-0 opacity-100">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
            consequuntur odio cupiditate porro corrupti suscipit tempore, esse
            velit quidem dignissimos, placeat ratione accusamus
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="max-w-5xl w-full">
            <div className="mt-16 flex flex-col sm:flex-row gap-6">
              {features.map(
                ({ title, description, icon, color, gradient }, index) => (
                  <div
                    key={index}
                    className={`group relative transform transition-all duration-700 delay-${
                      index * 200
                    } ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    {/* Animated glow effect */}
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10 scale-105`}
                    ></div>

                    {/* Main card */}
                    <div className="relative backdrop-blur-xl bg-white/5 border border-white/20 hover:border-white/40 px-5 py-10 text-center rounded-xl sm:flex-1 group-hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                      {/* Floating icon container */}
                      <div className="flex justify-center">
                        <div className="relative">
                          {/* Icon glow */}
                          <div
                            className={`absolute inset-0 bg-${color}-500/30 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 scale-110`}
                          ></div>

                          {/* Icon shadow */}
                          <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-black/30 rounded-full blur-sm group-hover:bg-black/20 transition-all duration-300"></div>

                          {/* Icon */}
                          <div
                            className={`relative inline-flex h-14 w-14 bg-gradient-to-br from-white to-gray-100 text-black justify-center items-center rounded-lg group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 shadow-lg`}
                          >
                            <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                              {icon}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="mt-6 font-bold text-lg group-hover:text-white transition-colors duration-300">
                        {title}
                      </h3>
                      <p className="mt-2 text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                        {description}
                      </p>

                      {/* Subtle bottom accent */}
                      <div
                        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-12 h-0.5 bg-${color}-400 transition-all duration-500 rounded-full`}
                      ></div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
