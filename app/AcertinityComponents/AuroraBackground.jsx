"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

import { BackgroundGradientDemo } from "./BackgroundGradient";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex items-center justify-center gap-40 h-full p-4"
      >
        <div className="flex flex-col justify-center gap-5 ">
          <div className="text-3xl md:text-8xl font-bold text-white ">
            Ketan Sharma
          </div>
          <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4">
            Front-end Developer
          </div>
          <a href="/assets/Ketan-CV.pdf" download={"Ketan's CV"}>
          <button className="bg-white rounded-full w-fit :text-black px-4 py-2">
            Download CV
          </button></a>
        </div>
       { <div className="sm:block hidden">
          <BackgroundGradientDemo />
        </div>}
      </motion.div>
    </AuroraBackground>
  );
}
