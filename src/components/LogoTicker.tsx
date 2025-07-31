"use client";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import LogoCol from "./LogoCol";

const images = [
  {
    src: acmeLogo,
    alt: "Acme",
    description: "Powerful business tools by Acme.",
  },
  {
    src: quantumLogo,
    alt: "Quantum",
    description: "Innovative AI-driven analytics.",
  },
  {
    src: echoLogo,
    alt: "Echo",
    description: "Next-gen communication solutions.",
  },
  {
    src: celestialLogo,
    alt: "Celestial",
    description: "Cloud-native architecture powerhouse.",
  },
  {
    src: pulseLogo,
    alt: "Pulse",
    description: "Real-time monitoring at your fingertips.",
  },
  {
    src: apexLogo,
    alt: "Apex",
    description: "Enterprise-level performance tools.",
  },
];

export type LogoType = typeof images;

export const LogoTicker = () => {
  return (
    <div className="py-24 overflow-hidden bg-gradient-to-b from-[#12002f] to-[#090213]">
      <div className="container mx-auto px-24">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div className="">
            <p className="border-2 border-lime-500 text-lime-500 w-fit px-3 py-1 rounded-xl">
              Badge :: CSS Requried
            </p>
            <h2 className="text-6xl font-medium mt-6 text-white">
              Our <span className="text-lime-500"> Clients </span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              Easily connect with industry-leading tools to streamline your
              workflow and unlock performance.
            </p>
          </div>
          <div className="">
            <div className="h-[400px] lg:h-[600px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4  [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <LogoCol
                integration={images}
                className="md:flex  md:flex-col md:gap-4 md:pb-4"
              />
              <LogoCol
                integration={images.slice().reverse()}
                className="hidden md:flex  md:flex-col md:gap-4 md:pb-4"
                reverse
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
