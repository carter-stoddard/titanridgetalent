import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/ui/PageHero";
import LocationsGrid from "@/components/locations/LocationsGrid";
import ClosingCTA from "@/components/sections/ClosingCTA";
import { HQ, regions } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Southern California Staffing Locations",
  description:
    "Headquartered in Fullerton, CA. Staffing and temp agency services across Orange County, Los Angeles, the Inland Empire, and San Diego. Nationwide searches.",
  alternates: { canonical: "/locations" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  "@id": "https://titanridgetalent.com/#organization",
  name: HQ.name,
  url: "https://titanridgetalent.com/locations",
  telephone: HQ.phoneE164,
  address: {
    "@type": "PostalAddress",
    streetAddress: HQ.street,
    addressLocality: HQ.city,
    addressRegion: HQ.region,
    postalCode: HQ.postal,
    addressCountry: "US",
  },
  areaServed: [
    ...regions.flatMap((r) => r.areas.map((a) => ({ "@type": "AdministrativeArea", name: `${a}, California` }))),
    { "@type": "Country", name: "United States" },
  ],
};

export default function LocationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Staffing Agency Locations"
          headline="Southern California, one conversation at a time"
          image="/images/southern-california-beach-golden-hour-staffing-locations.webp"
          imageAlt="Golden hour on a Southern California beach"
        />
        <LocationsGrid />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
