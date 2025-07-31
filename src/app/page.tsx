import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { VideoHero } from "@/components/VideoHero";
// import { ScrollingSections } from "@/components/ScrollingSections";
import { Products } from "@/components/Products";
import Docks from "@/components/Docks";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoHero />
    
      <Products />
      <LogoTicker />

      <Docks />
    </>
  );
}
