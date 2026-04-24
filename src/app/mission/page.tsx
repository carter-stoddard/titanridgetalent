import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import MissionHero from "@/components/mission/MissionHero";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "The mission behind Titan Ridge Talent — what drives us and why it matters.",
  alternates: { canonical: "/mission" },
};

export default function MissionPage() {
  return (
    <>
      <Navbar />
      <main>
        <MissionHero />
        {/* Content coming soon */}
      </main>
      <Footer />
    </>
  );
}
