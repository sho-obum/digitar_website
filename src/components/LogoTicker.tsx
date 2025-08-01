"use client";

import casino888 from "../assets/svgs/888casino.png";
import acko from "../assets/svgs/acko.png";
import alliancebank from "../assets/svgs/alliancebank.png";
import amazonmusic from "../assets/svgs/amazonmusic.png";
import banzoAzteca from "../assets/svgs/banzo_azteca.png";
import bbva from "../assets/svgs/bbva.png";
import betgm from "../assets/svgs/betgm.png";
import binance from "../assets/svgs/binance.png";
import bluebet from "../assets/svgs/bluebet.png";
import boylesports from "../assets/svgs/boylesports.png";
import cleo from "../assets/svgs/cleo.png";
import coindcx from "../assets/svgs/coindcx.png";
import comeon from "../assets/svgs/comeon.png";
import cryptoco from "../assets/svgs/cryptoco.png";
import empower from "../assets/svgs/empower.png";
import fanatics from "../assets/svgs/fanatics.png";
import instamoney from "../assets/svgs/instamoney.png";
import izibank from "../assets/svgs/izibank.png";
import kalshi from "../assets/svgs/kalshi.png";
import kraken from "../assets/svgs/kraken.png";
import kredivo from "../assets/svgs/kredivo.png";
import LogoCol from "./LogoCol";

const images = [
  {
    src: casino888,
    alt: "888 Casino",
    description: "Premier online gaming platform.",
  },
  {
    src: acko,
    alt: "Acko",
    description: "Digital insurance solutions.",
  },
  {
    src: alliancebank,
    alt: "Alliance Bank",
    description: "Trusted banking services.",
  },
  {
    src: amazonmusic,
    alt: "Amazon Music",
    description: "Stream millions of songs.",
  },
  {
    src: banzoAzteca,
    alt: "Banzo Azteca",
    description: "Financial services excellence.",
  },
  {
    src: bbva,
    alt: "BBVA",
    description: "Global banking solutions.",
  },
  {
    src: betgm,
    alt: "BetGM",
    description: "Sports betting platform.",
  },
  {
    src: binance,
    alt: "Binance",
    description: "World's leading crypto exchange.",
  },
  {
    src: bluebet,
    alt: "BlueBet",
    description: "Online betting solutions.",
  },
  {
    src: boylesports,
    alt: "BoyleSports",
    description: "Irish sports betting leader.",
  },
  {
    src: cleo,
    alt: "Cleo",
    description: "AI-powered financial assistant.",
  },
  {
    src: coindcx,
    alt: "CoinDCX",
    description: "India's crypto trading platform.",
  },
  {
    src: comeon,
    alt: "ComeOn",
    description: "Gaming and betting platform.",
  },
  {
    src: cryptoco,
    alt: "Crypto.co",
    description: "Cryptocurrency solutions.",
  },
  {
    src: empower,
    alt: "Empower",
    description: "Financial wellness platform.",
  },
  {
    src: fanatics,
    alt: "Fanatics",
    description: "Sports merchandise leader.",
  },
  {
    src: instamoney,
    alt: "InstaMoney",
    description: "Instant financial services.",
  },
  {
    src: izibank,
    alt: "IziBank",
    description: "Digital banking solutions.",
  },
  {
    src: kalshi,
    alt: "Kalshi",
    description: "Event trading platform.",
  },
  {
    src: kraken,
    alt: "Kraken",
    description: "Secure crypto trading platform.",
  },
  {
    src: kredivo,
    alt: "Kredivo",
    description: "Digital credit solutions.",
  },
];

export type LogoType = typeof images;

export const LogoTicker = () => {
  return (
    <div className="py-24 overflow-hidden bg-gradient-to-b from-[#12002f] to-[#090213]">
      <div className="container mx-auto md:px-24 px-4">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div className="">
            <p className="border-2 border-purple-500 text-[#c58ef8] w-fit px-3 py-1 rounded-xl">
              <span className="font-extrabold"> 250+</span>
              Trusted Partners
            </p>
            <h2 className="text-6xl font-extrabold mt-6 text-white">
              Top Brands <br />{" "}
              <span className="text-[#b15fff]"> Trust Digitar </span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              From global powerhouses to rising startups, the world&apos;s most
              trusted brands rely on Digitar Media to deliver performance,
              precision, and scale. Our results speak louder than words and our
              partnerships prove it.
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
