import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ClosingCTA from "@/components/sections/ClosingCTA";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesOffer from "@/components/services/ServicesOffer";

export const metadata: Metadata = {
  title: "Staffing Services | Temp, Temp-to-Hire & Direct Hire in Southern California",
  description:
    "Temporary staffing, temp-to-hire, direct hire, confidential searches, and high-volume manufacturing support for employers across Orange County, LA, the Inland Empire, and San Diego.",
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
