import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesMarkets from "@/components/industries/IndustriesMarkets";
import IndustriesIndustrial from "@/components/industries/IndustriesIndustrial";
import IndustriesCorporate from "@/components/industries/IndustriesCorporate";

export const metadata: Metadata = {
  title: "Industries | Industrial & Administrative Staffing in Southern California",
  description:
    "Warehouse, manufacturing, logistics, aerospace, and skilled trades staffing, plus HR, finance, administrative, technology, and sales recruiting across Southern California.",
  alternates: { canonical: "/industries" },
};

const provider = {
  "@type": "Organization",
  name: "Titan Ridge Talent",
  url: "https://titanridgetalent.com",
};

const industrialServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Industrial Recruiting",
  name: "Industrial Recruiting",
  description:
    "Industrial recruiting for aerospace, automotive, food and beverage, light industrial, manufacturing, logistics, skilled trades, operations, and warehouse roles. Direct placements through real conversations with hiring managers and operations leaders.",
  provider,
  areaServed: { "@type": "Country", name: "United States" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Industrial Sectors",
    itemListElement: [
      "Aerospace",
      "Automotive",
      "Food & Beverage",
      "Light Industrial",
      "Manufacturing",
      "Logistics",
      "Skilled Trades",
      "Operations",
      "Warehouses",
    ].map((sector) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: `${sector} Recruiting` },
    })),
  },
};

const corporateServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Administrative Recruiting",
  name: "Administrative Recruiting",
  description:
    "Administrative recruiting for Human Resources, Executive Search, Finance, Administration, Technology, and Sales roles. Precision placement at every level, from individual contributors to C-suite leadership.",
  provider,
  areaServed: { "@type": "Country", name: "United States" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Administrative Sectors",
    itemListElement: [
      "Human Resources",
      "Executive Search",
      "Finance",
      "Administration",
      "Technology",
      "Sales",
    ].map((sector) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: `${sector} Recruiting` },
    })),
  },
};

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industrialServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporateServiceJsonLd) }}
      />
      <Navbar />
      <main id="main">
        <IndustriesHero />
        <IndustriesMarkets />
        <IndustriesIndustrial />
        <IndustriesCorporate />
      </main>
      <Footer />
    </>
  );
}
