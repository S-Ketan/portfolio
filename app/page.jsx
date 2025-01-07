import Image from "next/image";
import Banner from "./Banner";
import { TimelineDemo } from "./AcertinityComponents/Timeline";
import { WobbleCardDemo } from "./AcertinityComponents/WobbleCard";
import { CardHoverEffectDemo } from "./AcertinityComponents/CardHoverEffect";

export default function Home() {
  return (
    <div>
      <Banner />
      <CardHoverEffectDemo />
      <TimelineDemo />
      <WobbleCardDemo />
    </div>
  );
}
