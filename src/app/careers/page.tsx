import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CareersHero from "@/components/careers/CareersHero";
import CareersIntro from "@/components/careers/CareersIntro";
import CareersListings from "@/components/careers/CareersListings";
import CareersCTA from "@/components/careers/CareersCTA";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore open positions with Titan Ridge Talent. Real searches, vetted clients, and a recruiting team that follows through.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        <CareersHero />
        <CareersIntro />
        <CareersListings />
        <CareersCTA />
      </main>
      <Footer />
    </>
  );
}
