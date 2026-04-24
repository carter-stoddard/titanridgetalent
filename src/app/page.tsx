import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Pillars from "@/components/sections/Pillars";
import DualSplit from "@/components/sections/DualSplit";
import HowItWorks from "@/components/sections/HowItWorks";
import Industries from "@/components/sections/Industries";
import Testimonials from "@/components/sections/Testimonials";
import ClosingCTA from "@/components/sections/ClosingCTA";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "Titan Ridge Talent | Relationship-First Recruiting",
  },
  description:
    "Industrial and corporate recruiting built on real conversations, not resume floods. Vetted candidates, direct engagement, placements that last.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <DualSplit />
        <HowItWorks />
        <Industries />
        <Testimonials />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
