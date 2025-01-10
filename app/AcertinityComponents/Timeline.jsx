import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "January 2025",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Started the year by developing an Event Management website for a client.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/ExoticCelebrations/MainPage.png"
              alt="Event Management Website Main Page"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/ExoticCelebrations/Services.png"
              alt="Event Management Website Services"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/ExoticCelebrations/Services2.png"
              alt="Event Management Website Additional Services"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/ExoticCelebrations/WIP.png"
              alt="Event Management Website Work In Progress"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "December 2024",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Began learning and experimenting with Next.js and NextAuth.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/PromptPlatz/MainPage.png"
              alt="Next.js Project Main Page"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/PromptPlatz/MyProfile.png"
              alt="Next.js Project Profile Page"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/PromptPlatz/CreatePost.png"
              alt="Next.js Project Create Post Page"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "November 2024",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Designed a frontend for a logistics company using React and Vite.js.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/DeliveryExpress/landingPage.png"
              alt="Logistics Company Landing Page"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/DeliveryExpress/ourServices.png"
              alt="Logistics Company Services Page"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/DeliveryExpress/list.png"
              alt="Logistics Company List Page"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/DeliveryExpress/AboutUs.png"
              alt="Logistics Company About Us Page"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "October 2024",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Started learning React and API integration, developed a website using NewsAPI and a text manipulation site.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/ReactProjects/NewsJockey.png"
              alt="NewsAPI Project"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/ReactProjects/Spinner.png"
              alt="React Spinner Project"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/ReactProjects/TextUtils.png"
              alt="Text Manipulation Project"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/ReactProjects/DarkMode.png"
              alt="Dark Mode Project"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "September 2024",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Learned JavaScript and developed small projects, culminating in a media player.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/MediaPlayer/MainPage.png"
              alt="Media Player Main Page"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/MediaPlayer/Lyrics.png"
              alt="Media Player Lyrics Page"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/MediaPlayer/RPS.png"
              alt="Rock Paper Scissors Game"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/MediaPlayer/CalorieCounter.png"
              alt="Calorie Counter Project"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "August 2024 onwards",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Discovered Tailwind CSS, which significantly improved my workflow.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Implemented it in all projects, creating landing page clones of websites like Netflix and UltraEdit.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/Clones/MainPage.png"
              alt="Netflix Clone Main Page"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/Clones/cart.png"
              alt="E-commerce Cart Page"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/Clones/Netflix.png"
              alt="Netflix Clone"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/Clones/UltraEdit.png"
              alt="UltraEdit Clone"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "May - June 2023",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Developed a full-stack website for a client, focusing primarily on the frontend.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            The backend was managed by other team members.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/HR12/landingPage.png"
              alt="Client Project Landing Page"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/HR12/cart.png"
              alt="Client Project Cart Page"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/HR12/dashBoard.png"
              alt="Client Project Dashboard"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "March - April 2023",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Created the first significant webpage with a group of friends, focusing on frontend development using HTML, CSS, and a bit of JavaScript.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/SocialMedia/MainPage.png"
              alt="Social Media Project Main Page"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/SocialMedia/Dashboard.png"
              alt="Social Media Project Dashboard"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/SocialMedia/DarkMode.png"
              alt="Social Media Project Dark Mode"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "February 2023",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Developed an interest in web development and learned HTML and CSS fundamentals.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Created small webpages for practice and learned about responsive design.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/Start/start1.png"
              alt="Initial Web Development Project"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/Start/start3.png"
              alt="Initial Web Development Project"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/assets/Start/start4.png"
              alt="Initial Web Development Project"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
