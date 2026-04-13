import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutMission from "@/components/about/AboutMission";

export const metadata: Metadata = {
  title: "About | Titan Ridge Talent",
  description:
    "The story behind Titan Ridge Talent — three recruiting veterans, thirty years of combined experience, and one shared belief.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutMission />
      </main>
      <Footer />
    </>
  );
}
