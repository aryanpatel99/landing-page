import Image from "next/image";
import ModeToggle from "./components/mode-toggle";
import Hero from "./components/Hero";
import LandingCloud from "./components/LandingCloud";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <LandingCloud/>
    </div>
  )
}
