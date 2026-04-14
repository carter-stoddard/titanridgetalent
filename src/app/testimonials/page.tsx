import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import TestimonialsFeatured from "@/components/testimonials/TestimonialsFeatured";
import TestimonialsEmployers from "@/components/testimonials/TestimonialsEmployers";
import TestimonialsCandidates from "@/components/testimonials/TestimonialsCandidates";
import TestimonialsClosing from "@/components/testimonials/TestimonialsClosing";

export const metadata: Metadata = {
  title: "Testimonials | Titan Ridge Talent",
  description:
    "Real results from the companies we've helped build — and the people we've helped place.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main>
        <TestimonialsHero />
        <TestimonialsFeatured />
        <TestimonialsEmployers />
        <TestimonialsCandidates />
        <TestimonialsClosing />
      </main>
      <Footer />
    </>
  );
}
