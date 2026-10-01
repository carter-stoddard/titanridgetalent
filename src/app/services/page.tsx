import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesOffer from "@/components/services/ServicesOffer";

export const metadata: Metadata = {
  title: "Staffing Services: Temp to Direct Hire",
  description:
    "Temporary staffing, temp-to-hire, direct hire, executive and confidential searches, and high-volume manufacturing support for employers.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <ServicesHero />
        <ServicesOffer />
      </main>
      <Footer />
    </>
  );
}
