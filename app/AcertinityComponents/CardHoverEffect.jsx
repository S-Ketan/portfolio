import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    (<div className="max-w-5xl mx-auto px-8">
        <div className="text-center text-5xl mt-20">MY SKILLS</div>
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [
  {
    title: "Next.js",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    
  },
  {
    title: "Tailwind CSS",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    
  },
  {
    title: "React.js",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    
  },
  {
    title: "Vite.js",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    
  },
  {
    title: "JavaScript",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
  
  },
  {
    title: "TypeScript",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
   
  },
];
