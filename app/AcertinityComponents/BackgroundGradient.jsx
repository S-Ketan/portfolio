"use client";;
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

export function BackgroundGradientDemo() {
  return (
    (<div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
        <Image
          src={`/assets/PortfolioPic.jpg`}
          alt="MyPic"
          height="400"
          width="400"
          className="object-contain rounded-lg" />
       <p
          className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          About me
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          I’m a front-end developer and Bachelor of Science in Informatik (International) student at Hochschule Hof. With knowledge in Frontend technologies like NextJs, React, JavaScript, and API integration.
        </p>
        {/* <button
          className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button> */}
      </BackgroundGradient>
    </div>)
  );
}
