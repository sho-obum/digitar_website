"use client";
import Image from "next/image";
import { LogoType } from "./LogoTicker";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";

export default function LogoCol(props: {
  integration: LogoType;
  className?: string;
  reverse?: boolean;
}) {
  const { integration, className, reverse } = props;

  return (
    <div
      className={twMerge(
        "relative h-[800px] overflow-hidden",
        className
      )}
    >
      <motion.div
        initial={{
          y: reverse ? "-50%" : 0,
        }}
        animate={{ y: reverse ? "0%" : "-50%" }}
        transition={{
          duration:150,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-4"
      >
        {Array.from({ length: 2 }).map((_, i) => (
          <Fragment key={i}>
            {integration.map((item) => (
              <div
                key={`${item.alt}-${i}`}
                className="bg-[#ecd7ff] border border-white/10 rounded-3xl p-6"
              >
                <div className="flex justify-center">
                  <Image src={item.src} alt={item.alt} className="w-32" />
                </div>
                <h3 className="text-2xl font-bold text-center mt-6">{item.alt}</h3>
                <p className="text-center text-black/50 mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
}
