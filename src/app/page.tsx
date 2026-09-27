import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Pillars from "@/components/sections/Pillars";
import DualSplit from "@/components/sections/DualSplit";
import HowItWorks from "@/components/sections/HowItWorks";
import Industries from "@/components/sections/Industries";
import Testimonials from "@/components/sections/Testimonials";
import ClosingCTA from "@/components/sections/ClosingCTA";
import Compliance from "@/components/sections/Compliance";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "Titan Ridge Talent | Staffing & Recruiting Agency in Orange County, CA",
  },
  description:
    "Industrial and administrative staffing agency in Fullerton, CA serving Orange County, Los Angeles, the Inland Empire, and San Diego. Real conversations, vetted candidates, placements that last.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Pillars />
        <DualSplit />
        <HowItWorks />
        <Compliance />
        <Industries />
        <Testimonials />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
