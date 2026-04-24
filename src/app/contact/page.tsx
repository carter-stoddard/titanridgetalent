import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactMain from "@/components/contact/ContactMain";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Titan Ridge Talent. Whether you're hiring or looking for your next role — the conversation starts here.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactMain />
      </main>
      <Footer />
    </>
  );
}
