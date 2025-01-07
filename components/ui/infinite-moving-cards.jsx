"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
return (
    <div
        ref={containerRef}
        className={cn(
            "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
            className
        )}>
        <ul
            ref={scrollerRef}
            className={cn(
                "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                start && "animate-scroll",
                pauseOnHover && "hover:[animation-play-state:paused]"
            )}>
            {items.map((item, idx) => (
  <li
    className="w-[350px]  max-w-full relative flex-shrink-0 px-8 py-6 md:w-[450px]"
    style={{
      background: "linear-gradient(180deg, #000000, #000000)",
      borderRadius: "9999px", // equivalent to rounded-full
      position: "relative",
    }}
    key={item.name}>
    {/* Gradient Border */}
    {/* <div
      aria-hidden="true"
      className="absolute -z-10 inset-0"
      style={{
        background: "linear-gradient(45deg,#3aa090, #ff00cc, #3333ff)",
        borderRadius: "2.5rem",
        padding: "3px", // Space for the border
      }}>
      <div
        className="h-full w-full"
        style={{
          background: "linear-gradient(180deg, #29292f, #18181b, #24324b)",
          borderRadius: "inherit", // Match border radius
        }}></div>
    </div> */}
    {/* Content */}
    <blockquote>
      <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
        {item.quote}
      </span>
      <div className="relative z-20 text-center flex flex-row items-center">
        <span className="w-full text-4xl text-center leading-[1.6] text-gray-400 font-normal">
          {item.name}
        </span>
      </div>
    </blockquote>
  </li>
))}

        </ul>
    </div>
);
};
