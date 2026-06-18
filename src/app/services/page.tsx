import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ClosingCTA from "@/components/sections/ClosingCTA";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesOffer from "@/components/services/ServicesOffer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Temporary staffing, direct hire, confidential searches, and more — industrial and corporate placements built on real relationships across the LA/OC market.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <ServicesHero />
        <ServicesOffer />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
