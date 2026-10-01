import type { Metadata } from "next";
import { preload } from "react-dom";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TwoMarkets from "@/components/sections/TwoMarkets";
import Relationships from "@/components/sections/Relationships";
import Standards from "@/components/sections/Standards";
import ClosingCTA from "@/components/sections/ClosingCTA";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "Industrial & Administrative Staffing Agency | Titan Ridge",
  },
  description:
    "Industrial and administrative staffing agency in Fullerton, CA. Temp, temp-to-hire, and direct hire across Orange County, Southern California, and the U.S.",
  alternates: { canonical: "/" },
};

export default function Home() {
  // Preload the first hero slide (the Largest Contentful Paint element)
  preload("/images/staffing-agency-orange-county-mountain-ridge-hero.webp", {
    as: "image",
    imageSrcSet:
      "/images/staffing-agency-orange-county-mountain-ridge-hero-960w.webp 960w, /images/staffing-agency-orange-county-mountain-ridge-hero.webp 2400w",
    imageSizes: "100vw",
    fetchPriority: "high",
  });
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <TwoMarkets />
        <Relationships />
        <Standards />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
