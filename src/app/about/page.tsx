import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";

export const metadata: Metadata = {
  title: "About Our Recruiting Agency",
  description:
    "Titan Ridge Talent connects companies and job seekers through lasting relationships. Read our philosophy and six principles of recruitment.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <AboutHero />
        <AboutStory />
        <AboutValues />
      </main>
      <Footer />
    </>
  );
}
