import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CareersHero from "@/components/careers/CareersHero";
import CareersIntro from "@/components/careers/CareersIntro";
import CareersListings from "@/components/careers/CareersListings";
import FeaturedListings from "@/components/careers/FeaturedListings";
import CareersApply from "@/components/careers/CareersApply";
import CareersCTA from "@/components/careers/CareersCTA";
import { CAREERS_LISTINGS_VISIBLE, CAREERS_FORM_VISIBLE } from "@/lib/features";

export const metadata: Metadata = {
  title: "Jobs: Warehouse, Manufacturing & Office",
  description:
    "Weekly pay and opportunities that fit. Administrative and industrial jobs with companies across the U.S. Email your resume to get started.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <CareersHero />
        <CareersIntro />
        {CAREERS_LISTINGS_VISIBLE ? (
          <>
            <FeaturedListings />
            <CareersListings />
            <CareersCTA />
          </>
        ) : CAREERS_FORM_VISIBLE ? (
          <CareersApply />
        ) : null}
      </main>
      <Footer />
    </>
  );
}
