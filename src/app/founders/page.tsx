import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FoundersHero from "@/components/founders/FoundersHero";
import FoundersAdrian from "@/components/founders/FoundersAdrian";
import FoundersPhilosophy from "@/components/founders/FoundersPhilosophy";
import FoundersCTA from "@/components/founders/FoundersCTA";

export const metadata: Metadata = {
  title: "Founders",
  description:
    "Meet the people behind Titan Ridge Talent — thirty years of combined experience in industrial and corporate recruiting.",
  alternates: { canonical: "/founders" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adrian Ibarra",
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: "Titan Ridge Talent",
    url: "https://titanridgetalent.com",
  },
  url: "https://titanridgetalent.com/founders",
  image: "https://titanridgetalent.com/images/adrian-headshot.webp",
  description:
    "Adrian Ibarra is the founder of Titan Ridge Talent, working across industrial and corporate markets. His career has been built on the principle that the right placement starts with a real conversation, not a resume submission.",
  knowsAbout: [
    "Aerospace recruiting",
    "Food and Beverage recruiting",
    "Information Technology recruiting",
    "Industrial recruiting",
    "Corporate recruiting",
    "Executive search",
  ],
  email: "support@titanridgetalent.com",
  telephone: "+1-714-552-4334",
};

export default function FoundersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar />
      <main id="main">
        <FoundersHero />
        <FoundersAdrian />
        <FoundersPhilosophy />
        <FoundersCTA />
      </main>
      <Footer />
    </>
  );
}
