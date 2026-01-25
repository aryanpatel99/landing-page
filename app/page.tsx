import Image from "next/image";
import ModeToggle from "./components/mode-toggle";
import Hero from "./components/Hero";
import LandingCloud from "./components/LandingCloud";
import Features from "./components/features";
import Speed from "./components/speed";
import {FeaturesSecondary} from "./components/features-secondary/features-secondary";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <LandingCloud/>
      <Features/>
      <Speed/>
      <FeaturesSecondary/>
    </div>
  )
}
