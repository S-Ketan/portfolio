"use client";
import React from 'react'
 
import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";

const tabs = [
  {
    title: "Landing Page",
    value: "Landing Page",
    content: (
      <div className="w-full overflow-hidden relative sm:h-full h-[70%] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br to-gray-700 from-black">
        <p>Landing Page</p>
        <Image
      src="/assets/HR12/landingPage.png"
      alt="dummy image"
      width="900"
      height="900"
      className="object-cover object-left-top h-[60%]  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto"
    />
      </div>
    ),
  },
  {
    title: "Cart",
    value: "Cart",
    content: (
      <div className="w-full overflow-hidden relative sm:h-full h-[70%]  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br to-gray-700 from-black">
        <p>Cart tab</p>
        <Image
      src="/assets/HR12/cart.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto"
    />
      </div>
    ),
  },
  {
    title: "Dashboard",
    value: "Dashboard",
    content: (
      <div className="w-full overflow-hidden relative sm:h-full h-[70%]  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br to-gray-700 from-black">
        <p>Dashboard tab</p>
        <Image
      src="/assets/HR12/dashboard.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto"
    />
      </div>
    ),
  },

];


const Project5 = () => {
  return (
    <div className="h-[70vh] md:h-[100%] [perspective:1000px]  no-visible-scrollbar  relative  flex flex-col max-w-5xl mx-auto w-full overflow-auto justify-center sm:items-start items-center sm:justify-start ">
    <Tabs tabs={tabs} />
  </div>
  )
}

export default Project5