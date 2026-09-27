import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/ui/PageHero";
import LocationDetail from "@/components/locations/LocationDetail";
import { HQ, getRegion, regions } from "@/lib/locations";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return regions.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const region = getRegion(slug);
  if (!region) return {};
  return {
    title: region.seoTitle,
    description: region.description,
    alternates: { canonical: `/locations/${region.slug}` },
    openGraph: { title: `${region.seoTitle} | Titan Ridge Talent`, description: region.description },
  };
}

export default async function LocationPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const region = getRegion(slug);
  if (!region) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Staffing & Recruiting in ${region.name}`,
    serviceType: "Staffing Agency",
    description: region.description,
    url: `https://titanridgetalent.com/locations/${region.slug}`,
    provider: {
      "@type": "EmploymentAgency",
      "@id": "https://titanridgetalent.com/#organization",
      name: HQ.name,
      telephone: HQ.phoneE164,
      address: {
        "@type": "PostalAddress",
        streetAddress: HQ.street,
        addressLocality: HQ.city,
        addressRegion: HQ.region,
        postalCode: HQ.postal,
        addressCountry: "US",
      },
    },
    areaServed: [
      ...region.areas.map((a) => ({ "@type": "AdministrativeArea", name: `${a}, California` })),
      ...region.cities.map((c) => ({ "@type": "City", name: `${c}, CA` })),
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://titanridgetalent.com/" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://titanridgetalent.com/locations" },
      { "@type": "ListItem", position: 3, name: region.name, item: `https://titanridgetalent.com/locations/${region.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow={region.eyebrow}
          headline={region.headline}
          image="/images/southern-california-beach-golden-hour-staffing-locations.webp"
          imageAlt="Golden hour on a Southern California beach"
        />
        <LocationDetail region={region} />
      </main>
      <Footer />
    </>
  );
}
