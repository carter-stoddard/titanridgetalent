import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      id="main"
      className="tr-section"
      style={{
        backgroundColor: "var(--tr-cream)",
        color: "var(--tr-navy)",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className="tr-container">
        <p className="tr-eyebrow">404</p>
        <h1 className="tr-h2" style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
          Page Not Found
        </h1>
        <p className="tr-body" style={{ color: "var(--tr-ink)", marginTop: "24px", maxWidth: "44ch" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div style={{ marginTop: "36px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link href="/" className="tr-btn tr-btn-gold">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
