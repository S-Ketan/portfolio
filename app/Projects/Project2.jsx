"use client";
import React from "react";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";

const tabs = [
  {
    title: "Landing Page",
    value: "Landing Page",
    content: (
      <div className="w-full overflow-hidden relative md:h-full  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br to-gray-700 from-black">
        <p>Landing Page</p>
        <Image
          src="/assets/PromptPlatz/MainPage.png"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto hidden md:block"
        />
        <Image
          src="/assets/PromptPlatz/PhoneMainPage.jpg"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-full  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto md:hidden"
        />
      </div>
    ),
  },
  {
    title: "My Profile",
    value: "My Profile",
    content: (
      <div className="w-full overflow-hidden relative sm:h-full   rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br to-gray-700 from-black">
        <p>My Profile tab</p>
        <Image
          src="/assets/PromptPlatz/MyProfile.png"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto hidden md:block"
        />
        <Image
          src="/assets/PromptPlatz/PhoneMyProfile.jpg"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-full  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto md:hidden"
        />
      </div>
    ),
  },
  {
    title: "Creat Prompt",
    value: "Creat Prompt",
    content: (
      <div className="w-full overflow-hidden relative sm:h-full   rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br to-gray-700 from-black">
        <p>Creat Prompt tab</p>
        <Image
          src="/assets/PromptPlatz/CreatePost.png"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto hidden md:block"
        />
        <Image
          src="/assets/PromptPlatz/PhoneCreatePost.jpg"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-full  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto md:hidden"
        />
      </div>
    ),
  },
  {
    title: "Edit Prompt",
    value: "Edit Prompt",
    content: (
      <div className="w-full overflow-hidden relative sm:h-full   rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br to-gray-700 from-black ">
        <p>Edit Prompt tab</p>
        <Image
          src="/assets/PromptPlatz/EditPost.png"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto hidden md:block"
        />
        <Image
          src="/assets/PromptPlatz/PhoneEditPost.jpg"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-full  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto md:hidden"
        />
      </div>
    ),
  },
];

const Project2 = () => {
  return (
    <div className="h-[80vh]  md:h-[40rem] [perspective:1000px] no-visible-scrollbar  relative  flex flex-col max-w-5xl mx-auto w-full overflow-auto justify-center sm:items-start items-center sm:justify-start ">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Project2;
