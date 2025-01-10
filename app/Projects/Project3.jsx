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
          src="/assets/DeliveryExpress/LandingPage.png"
          alt="dummy image"
          width="900"
          height="900"
          className="object-cover object-left-top h-[60%]  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto hidden md:block"
        />
        <Image
          src="/assets/DeliveryExpress/PhoneLandingPage.jpg"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-full  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto md:hidden"
        />
      </div>
    ),
  },
  {
    title: "About us",
    value: "About us",
    content: (
      <div className="w-full overflow-hidden relative sm:h-full   rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br to-gray-700 from-black">
        <p>About us tab</p>
        <Image
          src="/assets/DeliveryExpress/AboutUs.png"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto hidden md:block"
        />{" "}
        <Image
          src="/assets/DeliveryExpress/PhoneAboutUs.jpg"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-full  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto md:hidden"
        />
      </div>
    ),
  },
  {
    title: "Services",
    value: "Services",
    content: (
      <div className="w-full overflow-hidden relative sm:h-full   rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br to-gray-700 from-black">
        <p>Services tab</p>
        <Image
          src="/assets/DeliveryExpress/ourServices.png"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto hidden md:block"
        />{" "}
        <Image
          src="/assets/DeliveryExpress/PhoneOurServices.jpg"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-full  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto md:hidden"
        />
      </div>
    ),
  },
  {
    title: "Contact Us",
    value: "content",
    content: (
      <div className="w-full overflow-hidden relative sm:h-full   rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br to-gray-700 from-black">
        <p>Contact Us Tab</p>
        <Image
          src="/assets/DeliveryExpress/ContactUs.png"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto hidden md:block"
        />{" "}
        <Image
          src="/assets/DeliveryExpress/PhoneContactUs.jpg"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-full  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto md:hidden"
        />
      </div>
    ),
  },
  {
    title: "Chat",
    value: "chat",
    content: (
      <div className="w-full overflow-hidden relative sm:h-full   rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br to-gray-700 from-black">
        <p>Chat tab</p>
        <Image
          src="/assets/DeliveryExpress/Chat.png"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto hidden md:block"
        />{" "}
        <Image
          src="/assets/DeliveryExpress/PhoneChat.jpg"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-full  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto md:hidden"
        />
      </div>
    ),
  },
  {
    title: "List",
    value: "list",
    content: (
      <div className="w-full overflow-hidden relative sm:h-full   rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br to-gray-700 from-black">
        <p>List tab</p>
        <Image
          src="/assets/DeliveryExpress/list.png"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto hidden md:block"
        />{" "}
        <Image
          src="/assets/DeliveryExpress/PhoneList.jpg"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-full  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto md:hidden"
        />
      </div>
    ),
  },
  {
    title: "Login",
    value: "login",
    content: (
      <div className="w-full overflow-hidden relative sm:h-full   rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br to-gray-700 from-black">
        <p>Login tab</p>
        <Image
          src="/assets/DeliveryExpress/Login.png"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto hidden md:block"
        />{" "}
        <Image
          src="/assets/DeliveryExpress/PhoneLogin.jpg"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-full  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto md:hidden"
        />
      </div>
    ),
  },
  {
    title: "Register",
    value: "Register",
    content: (
      <div className="w-full overflow-hidden relative sm:h-full   rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br to-gray-700 from-black">
        <p>Register tab</p>
        <Image
          src="/assets/DeliveryExpress/Register.png"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto hidden md:block"
        />{" "}
        <Image
          src="/assets/DeliveryExpress/PhoneRegister.jpg"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-full  md:h-[90%] my-10 inset-x-0 w-full rounded-xl mx-auto md:hidden"
        />
      </div>
    ),
  },
];

const Project3 = () => {
  return (
    <div className="h-[80vh] md:h-[100%] [perspective:1000px]  no-visible-scrollbar  relative  flex flex-col max-w-5xl mx-auto w-full overflow-auto justify-center sm:items-start items-center sm:justify-start ">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Project3;
