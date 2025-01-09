"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    (<div
      className="h-[10rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>)
  );
}

const testimonials = [
  {
   /*  quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.", */
    name: "FRONTEND",
   /*  title: "A Tale of Two Cities", */
  },
  {
   
    name: "WEB DEVELOPMENT",
   
  },
  {
   
    name: "SEO",
    
  },
  {
  
    name: "BACKEND",
    
  },
  {
    
   
    name: "FULLSTACK",
    
  },
];
