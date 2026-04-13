import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesMarkets from "@/components/industries/IndustriesMarkets";
import IndustriesIndustrial from "@/components/industries/IndustriesIndustrial";
import IndustriesCorporate from "@/components/industries/IndustriesCorporate";

export const metadata: Metadata = {
  title: "Industries | Titan Ridge Talent",
  description:
    "From industrial operations to corporate boardrooms — the industries Titan Ridge Talent serves across both markets.",
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <IndustriesHero />
        <IndustriesMarkets />
        <IndustriesIndustrial />
        <IndustriesCorporate />
      </main>
      <Footer />
    </>
  );
}
