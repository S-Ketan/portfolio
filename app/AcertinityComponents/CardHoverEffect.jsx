import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    (<div className="max-w-5xl mx-auto px-8">
        <div className="text-center text-5xl mt-20 font-raleway">Languages and Frameworks</div>
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [
  {
    title: "Next.js",
    description:
      "Next.js is a React-based framework for building fast, scalable, and SEO-friendly web applications with features like server-side rendering (SSR), static site generation (SSG), API routes, and built-in routing, along with performance optimizations like image optimization and incremental static regeneration.",
    
  },
  {
    title: "Tailwind CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework that provides pre-defined classes like flex, p-4, and text-center, enabling rapid UI development directly in HTML without writing custom CSS. It is highly customizable, supports responsive design with breakpoints, and optimizes styles for production, making it a powerful tool for building modern, responsive interfaces.",
    
  },
  {
    title: "React.js",
    description:
      "React.js is a JavaScript library for building dynamic and interactive user interfaces using reusable components, a virtual DOM for efficient rendering, and a declarative programming approach to make development fast and intuitive.",
    
  },
  {
    title: "Vite.js",
    description:
      "Vite.js is a fast and modern build tool for web development that provides instant server startup, lightning-fast hot module replacement (HMR), and optimized production builds, designed to improve the development experience for frameworks like React, Vue, and others.",
    
  },
 /*  {
    title: "Bootstrap",
    description:
      "Bootstrap is a popular front-end framework that provides ready-to-use HTML, CSS, and JavaScript components for building responsive and mobile-first web designs, featuring utilities like a grid system, buttons, modals, and navigation bars.",
    
  },
  {
    title: "JavaScript",
    description:
      "JavaScript is a versatile, lightweight programming language used to create dynamic and interactive web content, enabling features like form validation, animations, and APIs, and it runs on both the client-side and server-side for building modern web applications.",
  
  }, */
  {
    title: "TypeScript",
    description:
      "TypeScript is a strongly typed superset of JavaScript that adds static typing, enhancing code readability, catching errors during development, and providing better tooling support for building scalable and maintainable applications.",
   
  }, {
    title: "MongoDB",
    description:
      "MongoDB is a NoSQL database that stores data in a flexible, JSON-like document format, allowing for schema-less structures, scalability, and efficient querying, making it ideal for modern applications requiring fast and dynamic data handling.",
   
  },
];
