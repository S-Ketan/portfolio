"use client";
import Image from "next/image";
import { useState } from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import Project1 from "../Projects/Project1";
import Project2 from "../Projects/Project2";
import Project3 from "../Projects/Project3";
import Project4 from "../Projects/Project4";
import Project5 from "../Projects/Project5";
import Project6 from "../Projects/Project6";
import Project7 from "../Projects/Project7";
import Project8 from "../Projects/Project8";

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
        {/* Exotic Celebrations */}
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
          onClick={() => {
            setProjectSelector(1);
            toggleSidebar();
          }}
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Exotic Celebrations
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Exotic Celebrations is a Next.js application for an event
              management firm which manages and plans various events, including
              artist management, party planning, corporate events, and venue
              management. It provides a comprehensive platform to streamline
              event organization and enhance user experience.
            </p>
          </div>
          <Image
            src="/assets/ExoticCelebrations/MainPage.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl hidden sm:block"
          />
          <Image
            src="/assets/ExoticCelebrations/MainPage.png"
            width={500}
            height={500}
            alt="linear demo image"
            className=" mt-10 -right-4 lg:-right-[40%]  object-contain rounded-2xl sm:hidden "
          />
        </WobbleCard>
        {/* PromptPlatz */}
        <WobbleCard
          containerClassName="col-span-1 min-h-[300px] bg-green-700"
          onClick={() => {
            setProjectSelector(2);
            toggleSidebar();
          }}
        >
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            PromptPlatz
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            This project is a platform for creating and sharing AI-generated
            prompts for creative writing, built with Next.js and Tailwind CSS.
          </p>
        </WobbleCard>
        {/* Delivery Express */}
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
          onClick={() => {
            setProjectSelector(3);
            toggleSidebar();
          }}
        >
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Delivery Express
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Delivery Express is a logistics and supply chain management web
              application built with React and Vite. It provides various
              services such as freight forwarding, customs clearance,
              warehousing, supply chain management, and more. The application
              also includes user authentication, a contact form, and a chat
              feature.
            </p>
          </div>
          <Image
            src="/assets/DeliveryExpress/LandingPage.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:right-[1%] top-16 object-contain rounded-2xl hidden sm:block"
          />
          <Image
            src="/assets/DeliveryExpress/LandingPage.png"
            width={500}
            height={500}
            alt="linear demo image"
            className=" mt-10 md:-right-[40%] lg:right-[1%]  object-contain rounded-2xl sm:hidden"
          />
        </WobbleCard>
        {/* TextUtils */}
        <WobbleCard
          containerClassName=" col-span-1 min-h-[300px] bg-orange-700"
          className=""
          onClick={() => {
            setProjectSelector(4);
            toggleSidebar();
          }}
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              TextUtils
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              TextUtils is a React app for text manipulation. It offers features
              like converting text to uppercase, lowercase, camelCase, and more.
              It also includes word/character count, space removal, and
              clipboard copy. Supports light and dark modes.
            </p>
          </div>
        </WobbleCard>
        {/* HR12 */}
        <WobbleCard
          containerClassName=" col-span-1 min-h-[300px] bg-cyan-700"
          onClick={() => {
            setProjectSelector(5);
            toggleSidebar();
          }}
        >
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            HR 12
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Website made using MongoDB, Express and embedded Javascript. It is a
            full-stack web application that allows users to place orders at the
            HR12 Cafe.
          </p>
        </WobbleCard>
        {/* Memoir Social Media */}
        <WobbleCard
          containerClassName=" col-span-1 min-h-[300px] bg-red-700"
          onClick={() => {
            setProjectSelector(6);
            toggleSidebar();
          }}
        >
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Memoir Social Media
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Website made using MongoDB, Express and embedded Javascript. It is a
            full-stack web application that allows users to place orders at the
            HR12 Cafe.
          </p>
        </WobbleCard>
        {/* Snack Point */}
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-purple-800 min-h-[500px] lg:min-h-[300px]"
          className=""
          onClick={() => {
            setProjectSelector(7);
            toggleSidebar();
          }}
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Snack Point
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Snack Point is a responsive web application designed for browsing
              and purchasing snacks. Built with HTML, Tailwind CSS, and Font
              Awesome, it features an intuitive user interface, responsive
              design, and smooth scrolling. The project is managed with npm for
              efficient dependency handling and build processes.
            </p>
          </div>
          <Image
            src="/assets/Clones/MainPage.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl hidden sm:block"
          />
          <Image
            src="/assets/Clones/MainPage.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="mt-10 -right-4 lg:-right-[40%]  object-contain rounded-2xl sm:hidden"
          />
        </WobbleCard>
        {/* Music Player */}
        <WobbleCard
          containerClassName="col-span-1 min-h-[300px] bg-yellow-700"
          onClick={() => {
            setProjectSelector(8);
            toggleSidebar();
          }}
        >
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Music Player
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            A feature-rich media player web application built with HTML, CSS,
            and JavaScript. It allows users to play, shuffle, and search for
            songs, display song suggestions, control volume, and view artist
            images in a carousel.
          </p>
        </WobbleCard>
      </div>

      {/* // Pop up for projects */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 m-auto z-40 flex justify-center items-center transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-[90vw] bg-white bg-opacity-[30%] h-[90vh]  shadow-lg mx-auto rounded-2xl z-50 p-6 transition-all duration-300 transform ${
            isSidebarOpen
              ? "scale-100 opacity-100 backdrop-blur-sm transition-backdrop duration-300"
              : "scale-50 opacity-0 backdrop-blur-none transition-backdrop duration-300"
          }`}
        >
          <button
            className="text-white text-2xl absolute top-4 right-4"
            onClick={toggleSidebar}
          >
            &times;
          </button>
          {projectSelector === 1 ? (
            <Project1 />
          ) : projectSelector === 2 ? (
            <Project2 />
          ) : projectSelector === 3 ? (
            <Project3 />
          ) : projectSelector === 4 ? (
            <Project4 />
          ) : projectSelector === 5 ? (
            <Project5 />
          ) : projectSelector === 6 ? (
            <Project6 />
          ) : projectSelector === 7 ? (
            <Project7 />
          ) : projectSelector === 8 ? (
            <Project8 />
          ) : null}
        </div>
        {/* Click outside sidebar to close */}
      </div>
    </>
  );
}
