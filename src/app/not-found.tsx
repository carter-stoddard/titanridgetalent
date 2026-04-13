import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div
      style={{
        backgroundColor: "#141F31",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-barlow-condensed), sans-serif",
          fontSize: "11px",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "4px",
          color: "#CCA662",
          marginBottom: "16px",
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: "var(--font-barlow-condensed), sans-serif",
          fontSize: "clamp(36px, 5vw, 52px)",
          fontWeight: 600,
          textTransform: "uppercase",
          lineHeight: 0.95,
          color: "#F5F4F0",
          marginBottom: "20px",
        }}
      >
        Page Not Found.
      </h1>
      <p
        style={{
          fontFamily: "var(--font-lora), serif",
          fontStyle: "italic",
          fontSize: "17px",
          lineHeight: 1.6,
          color: "rgba(245, 244, 240, 0.55)",
          maxWidth: "480px",
          marginBottom: "40px",
        }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-barlow-condensed), sans-serif",
          fontWeight: 700,
          textTransform: "uppercase",
          fontSize: "14px",
          letterSpacing: "3px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: "52px",
          padding: "0 32px",
          borderRadius: "9999px",
          backgroundColor: "#CCA662",
          color: "#141F31",
          textDecoration: "none",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
