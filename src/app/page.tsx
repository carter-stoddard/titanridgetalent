import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Pillars from "@/components/sections/Pillars";
import DualSplit from "@/components/sections/DualSplit";
import HowItWorks from "@/components/sections/HowItWorks";
import Industries from "@/components/sections/Industries";
import Testimonials from "@/components/sections/Testimonials";
import ClosingCTA from "@/components/sections/ClosingCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Pillars />
      <DualSplit />
      <HowItWorks />
      <Industries />
      <Testimonials />
      <ClosingCTA />
      <Footer />
    </>
  );
}
