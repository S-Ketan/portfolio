"use client";
import React from "react";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";

const tabs = [
  {
    title: "Landing Page",
    value: "Landing Page",
    content: (
      <div className="w-full overflow-hidden relative sm:h-full  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br to-gray-700 from-black">
        <p>Landing Page</p>
        <Image
          src="/assets/ReactProjects/TextUtils.png"
          alt="dummy image"
          width="900"
          height="900"
          className="object-cover object-left-top h-[60%]  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto hidden md:block"
        />
        <Image
          src="/assets/ReactProjects/PhoneTextUtils.jpg"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-full  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto md:hidden"
        />
      </div>
    ),
  },
  {
    title: "About Us",
    value: "About Us",
    content: (
      <div className="w-full overflow-hidden relative sm:h-full   rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br to-gray-700 from-black">
        <p>About Us tab</p>
        <Image
          src="/assets/ReactProjects/AboutUs.png"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto hidden md:block"
        />
        <Image
          src="/assets/ReactProjects/PhoneAboutUs.jpg"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-full  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto md:hidden"
        />
      </div>
    ),
  },
  {
    title: "Dark Mode",
    value: "Dark Mode",
    content: (
      <div className="w-full overflow-hidden relative sm:h-full   rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br to-gray-700 from-black">
        <p>Dark Mode tab</p>
        <Image
          src="/assets/ReactProjects/DarkMode.png"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto hidden md:block"
        />
        <Image
          src="/assets/ReactProjects/PhoneDarkMode.jpg"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-full  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto md:hidden"
        />
      </div>
    ),
  },
];

const Project4 = () => {
  return (
    <div className="h-[80vh] md:h-[100%] [perspective:1000px]  no-visible-scrollbar  relative  flex flex-col max-w-5xl mx-auto w-full overflow-auto justify-center sm:items-start items-center sm:justify-start ">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Project4;
