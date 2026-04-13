import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FoundersHero from "@/components/founders/FoundersHero";
import FoundersAdrian from "@/components/founders/FoundersAdrian";
import FoundersPhilosophy from "@/components/founders/FoundersPhilosophy";
import FoundersCTA from "@/components/founders/FoundersCTA";

export const metadata: Metadata = {
  title: "Founders | Titan Ridge Talent",
  description:
    "Meet the people behind Titan Ridge Talent — thirty years of combined experience in industrial and corporate recruiting.",
};

export default function FoundersPage() {
  return (
    <>
      <Navbar />
      <main>
        <FoundersHero />
        <FoundersAdrian />
        <FoundersPhilosophy />
        <FoundersCTA />
      </main>
      <Footer />
    </>
  );
}
