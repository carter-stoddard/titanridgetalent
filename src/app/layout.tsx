import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Lora } from "next/font/google";
import "./globals.css";
import LoaderGate from "@/components/animations/LoaderGate";
import SmoothScroll from "@/components/animations/SmoothScroll";
import ConsentGate from "@/components/legal/ConsentGate";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Industrial & Administrative Staffing Agency | Titan Ridge",
    template: "%s | Titan Ridge Talent",
  },
  applicationName: "Titan Ridge Talent",
  description:
    "Industrial and administrative staffing agency in Fullerton, CA. Temp, temp-to-hire, and direct hire across Orange County, Southern California, and the U.S.",
  metadataBase: new URL("https://titanridgetalent.com"),
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "Titan Ridge Talent",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/titan-ridge-talent-staffing-agency-social-share.png", width: 1200, height: 630, alt: "Titan Ridge Talent, staffing and recruiting agency in Fullerton, California" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/titan-ridge-talent-staffing-agency-social-share.png"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Titan Ridge Talent",
  alternateName: "Titan Ridge Talent LLC",
  url: "https://titanridgetalent.com",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "EmploymentAgency"],
  "@id": "https://titanridgetalent.com/#organization",
  name: "Titan Ridge Talent",
  legalName: "Titan Ridge Talent LLC",
  url: "https://titanridgetalent.com",
  logo: "https://titanridgetalent.com/images/titan-ridge-talent-logo.svg",
  description:
    "Relationship-first recruiting for industrial and administrative teams.",
  email: "support@titanridgetalent.com",
  telephone: "+1-714-552-4334",
  address: {
    "@type": "PostalAddress",
    streetAddress: "112 E. Amerige Ave #106",
    addressLocality: "Fullerton",
    addressRegion: "CA",
    postalCode: "92832",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Orange County, California" },
    { "@type": "AdministrativeArea", name: "Los Angeles County, California" },
    { "@type": "AdministrativeArea", name: "Riverside County, California" },
    { "@type": "AdministrativeArea", name: "San Bernardino County, California" },
    { "@type": "AdministrativeArea", name: "San Diego County, California" },
    { "@type": "Country", name: "United States" },
  ],
  knowsAbout: ["Industrial staffing", "Administrative staffing", "Temporary staffing", "Temp-to-hire", "Direct hire recruiting"],
  sameAs: ["https://www.linkedin.com/company/titanridgetalent/"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${lora.variable} antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem("titan-loaded"))document.documentElement.classList.add("tr-visited")}catch(e){}`,
          }}
        />
        <noscript>
          <style>{`[data-reveal],[style*="opacity: 0"]{opacity:1!important;transform:none!important}.loader-wrapper{display:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="bg-titan-navy text-titan-offwhite">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <SmoothScroll />
        <LoaderGate>{children}</LoaderGate>
        <ConsentGate />
      </body>
    </html>
  );
}
