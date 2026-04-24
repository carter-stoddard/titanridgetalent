import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Lora } from "next/font/google";
import "./globals.css";
import LoaderGate from "@/components/animations/LoaderGate";

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
    default: "Titan Ridge Talent | Relationships First. Results Always.",
    template: "%s | Titan Ridge Talent",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  description:
    "Relationship-first recruiting for industrial and corporate teams. Real conversations, vetted candidates, placements that last.",
  metadataBase: new URL("https://titanridgetalent.com"),
  openGraph: {
    siteName: "Titan Ridge Talent",
    type: "website",
    images: [{ url: "/images/titan-ridge-hero.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/titan-ridge-hero.webp"],
  },
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
      <body className="bg-titan-navy text-titan-offwhite">
        <LoaderGate>{children}</LoaderGate>
      </body>
    </html>
  );
}
