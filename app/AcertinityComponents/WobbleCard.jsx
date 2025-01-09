"use client";
import Image from "next/image";
import { useState } from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import Project1 from "../Projects/Project1";
import Project2 from "../Projects/Project2";
import Project3 from "../Projects/Project3";

export function WobbleCardDemo() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [projectSelector, setProjectSelector] = useState(1);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <p className="text-center text-5xl my-10">My Projects</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
          onClick={()=>{ setProjectSelector(1); toggleSidebar();}}
           
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Exotic Celebrations
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Exotic Celebrations is a Next.js application for an event management firm which manages and plans various events, including artist management, party planning, corporate events, and venue management. It provides a comprehensive platform to streamline event organization and enhance user experience.
            </p>
          </div>
          <Image
            src="/assets/BannerImage.jpeg"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px]" onClick={()=>{setProjectSelector(2); toggleSidebar()}}>
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            PromptPlatz
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          This project is a platform for creating and sharing AI-generated prompts for creative writing, built with Next.js and Tailwind CSS.
          </p>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]" onClick={()=>{setProjectSelector(3); toggleSidebar()}}>
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Delivery Express
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Delivery Express is a logistics and supply chain management web application built with React and Vite. It provides various services such as freight forwarding, customs clearance, warehousing, supply chain management, and more. The application also includes user authentication, a contact form, and a chat feature.
            </p>
          </div>
          <Image
            src="/assets/ExoticCelebrations/MainPage.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:right-[1%] top-16 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>


      {/* // Pop up for projects */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 m-auto z-40 flex justify-center items-center transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-[90vw] bg-slate-950 h-[90vh] shadow-lg mx-auto rounded-2xl z-50 p-6 transition-all duration-300 transform ${
            isSidebarOpen ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          <button
            className="text-white text-2xl absolute top-4 right-4"
            onClick={toggleSidebar}
          >
            &times;
          </button>
          {projectSelector === 1 ? <Project1 /> : 
          projectSelector === 2 ? <Project2 /> :
          projectSelector === 3 ? <Project3 /> : null}
        </div>
        {/* Click outside sidebar to close */}
      </div>
    </>
  );
}
