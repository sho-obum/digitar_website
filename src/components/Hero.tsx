"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ArrowIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/2.png";
import messageImage from "../assets/images/1.png";
import BlurText from "../blocks/TextAnimations/BlurText/BlurText"; // Optional

export const Hero = () => {
  // Scroll progress within hero for rocket animation
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  // Control rocket curve: up 400px, left 250px
  const rocketY = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const rocketX = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <div
      ref={heroRef}
      className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[120px] relative overflow-hidden "
    >
      <div className="absolute h-[600px] w-[280vw] sm:w-[180vw] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560eb)] top-[calc(100%-85px)] sm:top-[calc(100%-120px)] z-10"></div>
      <div className="container relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8 -mt-20 sm:mt-0">
            <a
              href="#"
              className="border py-1 px-2 rounded-lg border-white/30 inline-flex items-center gap-3"
            >
              <span className="bg-gradient-to-r from-[#F87AFF] via-[#FB93D0] via-[#FFDD99] via-[#C3F0B2] to-[#2FD8FE] text-transparent bg-clip-text">
                Smarter campaigns
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="text-white/70">start here </span>
                <ArrowIcon />
              </span>
            </a>
          </div>
          <div className="flex justify-center">
            <div className="inline-flex relative">
              <div className="flex flex-col text-center z-10">
                <h1 className="text-4xl md:text-7xl font-bold mb-2 drop-shadow-xl shadow-black">
                  From Ads to Analytics
                </h1>
                <h1 className="text-4xl md:text-7xl font-bold mb-6">
                  We Make Every Click Count
                </h1>
              </div>

              {/* Cursor: Yo-yo animation */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  left: "-250px",
                  bottom: "-200px",
                  zIndex: 0,
                  width: 400,
                  height: 400,
                  pointerEvents: "none",
                }}
              >
                <Image
                  src={cursorImage}
                  alt="cursor"
                  height={400}
                  width={400}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                  priority
                />
              </motion.div>

              <motion.div
                className="absolute left-[976px] bottom-[-470px] z-11 w-[400px] h-[400px] pointer-events-none"
                style={{
                  x: rocketX,
                  y: rocketY,
                  willChange: "transform",
                }}
              >
                <Image
                  src={messageImage}
                  alt="rocket"
                  height={400}
                  width={400}
                  style={{
                    transform: "scaleX(-1)",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                  priority
                />
              </motion.div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-base text-white/70 mb-8 max-w-2xl mx-auto ">
              Powering next-gen mobile advertising with transparency, reach, and
              real-time performance. Partner with us to deliver scalable
              campaigns that convert.
            </p>
            <button
              className="py-3 font-bold px-4 rounded-lg text-white transition-all duration-300 hover:opacity-90 mb-4"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #182fff99)",
                backgroundPosition: "0 0",
                backgroundSize: "200% 200%",
              }}
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
