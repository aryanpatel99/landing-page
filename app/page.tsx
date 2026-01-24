import Image from "next/image";
import ModeToggle from "./components/mode-toggle";
import Hero from "./components/Hero";
import LandingCloud from "./components/LandingCloud";
import Features from "./components/features";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <LandingCloud/>
      <Features/>
    </div>
  )
}
