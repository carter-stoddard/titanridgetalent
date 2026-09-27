import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactMain from "@/components/contact/ContactMain";

export const metadata: Metadata = {
  title: "Contact a Recruiter in Fullerton, CA",
  description:
    "Talk to a Titan Ridge recruiter. Headquartered in Fullerton, serving Orange County and Southern California. Call (714) 552-4334 or send a message. By appointment only.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <ContactHero />
        <ContactMain />
      </main>
      <Footer />
    </>
  );
}
