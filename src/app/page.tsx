import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { VideoHero } from "@/components/VideoHero";
import Docks from "@/components/Docks";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { CallToAction } from "@/components/CallToAction";
import ParentVideo from "@/components/ParentVideo";
import { NewNav } from "@/components/NewNav";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <NewNav />
      <Hero />
      <ParentVideo />
      <ProductShowcase />
      <LogoTicker />
      {/* <Features /> */}
      <CallToAction />
    </>
  );
}
