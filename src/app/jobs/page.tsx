import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import JobsHero from "@/components/jobs/JobsHero";
import JobsListings from "@/components/jobs/JobsListings";
import JobsWhy from "@/components/jobs/JobsWhy";
import JobsDualCTA from "@/components/jobs/JobsDualCTA";

export const metadata: Metadata = {
  title: "Jobs Available | Titan Ridge Talent",
  description:
    "Browse open positions with Titan Ridge Talent. Personally vetted roles across industrial and corporate sectors.",
};

export default function JobsPage() {
  return (
    <>
      <Navbar />
      <main>
        <JobsHero />
        <JobsListings />
        <JobsWhy />
        <JobsDualCTA />
      </main>
      <Footer />
    </>
  );
}
