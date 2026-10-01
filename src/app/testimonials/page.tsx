import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import TestimonialsEmployers from "@/components/testimonials/TestimonialsEmployers";
import TestimonialsCandidates from "@/components/testimonials/TestimonialsCandidates";
import TestimonialsClosing from "@/components/testimonials/TestimonialsClosing";

export const metadata: Metadata = {
  title: "Staffing Agency Reviews & Testimonials",
  description:
    "Reviews from employers and job seekers who worked with Titan Ridge Talent, an industrial and administrative staffing agency in Fullerton, CA.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <TestimonialsHero />
        <TestimonialsEmployers />
        <TestimonialsCandidates />
        <TestimonialsClosing />
      </main>
      <Footer />
    </>
  );
}
