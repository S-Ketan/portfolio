import { HoverEffect } from "@/components/ui/card-hover-effect";

export function MyTools() {
  return (
    (<div className="max-w-5xl mx-auto px-8">
        <div className="text-center text-5xl mt-20">MY TOOLS</div>
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [
  {
    title: "Git",
    description:
      "Git is a distributed version control system that enables developers to track changes in their codebase, collaborate seamlessly, and maintain a complete history of all modifications across branches.",
    
  },
  {
    title: "Node Package Manager (NPM)",
    description:
      "Node Package Manager (NPM) is a package manager for JavaScript that comes with Node.js, allowing developers to share, download, and manage libraries and dependencies, as well as run scripts to streamline project development and deployment.",
    
  },
  {
    title: "Prettier",
    description:
      "Prettier is an opinionated code formatter that enforces consistent coding style by automatically reformatting code for languages like JavaScript, HTML, CSS, and more, improving readability and reducing formatting-related errors in development.",
    
  },
  {
    title: "Vite.js",
    description:
      "Vite.js is a fast and modern build tool for web development that provides instant server startup, lightning-fast hot module replacement (HMR), and optimized production builds, designed to improve the development experience for frameworks like React, Vue, and others.",
    
  },
  {
    title: "Github Copilot",
    description:
      "GitHub Copilot is an AI-powered code assistant that integrates into code editors like VS Code to provide context-aware code suggestions, help write functions, and speed up development by generating code snippets based on natural language or existing code.",
  
  },
  {
    title: "MongoDB",
    description:
      "MongoDB is a NoSQL database that stores data in a flexible, JSON-like document format, allowing for schema-less structures, scalability, and efficient querying, making it ideal for modern applications requiring fast and dynamic data handling.",
   
  },
];
