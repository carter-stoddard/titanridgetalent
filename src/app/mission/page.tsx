import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import MissionHero from "@/components/mission/MissionHero";
import MissionStatement from "@/components/mission/MissionStatement";
import MissionPillars from "@/components/mission/MissionPillars";
import MissionCTA from "@/components/mission/MissionCTA";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "Where Talent Meets Its Peaks. Titan Ridge Talent builds lasting partnerships by connecting great people with the right opportunities through relationship-first recruiting.",
  alternates: { canonical: "/mission" },
};

export default function MissionPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <MissionHero />
        <MissionStatement />
        <MissionPillars />
        <MissionCTA />
      </main>
      <Footer />
    </>
  );
}
