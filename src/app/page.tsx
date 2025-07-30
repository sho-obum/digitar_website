import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import VideoHero from "@/components/VideoHero";
import Bento from "@/components/Bento";
import MyCustomGrid from "@/blocks/Components/MagicBento/MyCustomGrid";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoHero />
      <Bento />
      <LogoTicker />
      {/* <MyCustomGrid /> */}
      {/* <Products/> */}
      <Features />
      <ProductShowcase />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}
