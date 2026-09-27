import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CareersHero from "@/components/careers/CareersHero";
import CareersIntro from "@/components/careers/CareersIntro";
import CareersListings from "@/components/careers/CareersListings";
import FeaturedListings from "@/components/careers/FeaturedListings";
import CareersApply from "@/components/careers/CareersApply";
import CareersCTA from "@/components/careers/CareersCTA";
import { CAREERS_LISTINGS_VISIBLE } from "@/lib/features";

export const metadata: Metadata = {
  title: "Find a Job | Warehouse, Manufacturing & Office Roles in Southern California",
  description:
    "Weekly pay and real recruiters. Industrial and administrative jobs across Orange County, Los Angeles, the Inland Empire, and San Diego. Share your info and we reach out when a role fits.",
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
        ) : (
          <CareersApply />
        )}
      </main>
      <Footer />
    </>
  );
}
