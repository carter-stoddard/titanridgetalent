import type { ReactNode } from "react";

type LegalLayoutProps = {
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <section
      className="legal tr-section relative w-full"
      style={{
        backgroundColor: "var(--tr-cream)",
        color: "var(--tr-navy)",
        paddingTop: "clamp(150px, 16vw, 210px)",
      }}
    >
      <style>{`
        .legal-grid {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
          gap: clamp(40px, 6vw, 96px);
          align-items: start;
        }
        .legal-prose {
          max-width: 68ch;
        }
        .legal-prose h2 {
          font-family: var(--font-display);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          font-size: 26px;
          line-height: 1.05;
          color: var(--tr-navy);
          margin-top: 56px;
          margin-bottom: 18px;
        }
        .legal-prose h2:first-child,
        .legal-prose .legal-divider + h2 {
          margin-top: 0;
        }
        .legal-prose h3 {
          font-family: var(--font-display);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 14px;
          color: var(--tr-gold-text);
          margin-top: 32px;
          margin-bottom: 10px;
        }
        .legal-prose p {
          font-family: var(--font-body);
          font-size: 17px;
          line-height: 1.75;
          color: var(--tr-ink);
          margin-bottom: 18px;
          text-wrap: pretty;
        }
        .legal-prose ul {
          list-style: none;
          padding: 0;
          margin: 18px 0;
        }
        .legal-prose ul li {
          position: relative;
          padding-left: 24px;
          font-family: var(--font-body);
          font-size: 17px;
          line-height: 1.7;
          color: var(--tr-ink);
          margin-bottom: 10px;
        }
        .legal-prose ul li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.7em;
          width: 12px;
          height: 1px;
          background-color: var(--tr-gold-text);
        }
        .legal-prose strong {
          font-weight: 600;
          color: var(--tr-navy);
        }
        .legal-prose a {
          color: var(--tr-gold-text);
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-thickness: 1px;
          transition: color 0.2s ease;
        }
        .legal-prose a:hover {
          color: var(--tr-navy);
        }
        .legal-prose .legal-divider {
          display: none;
        }
        @media (max-width: 1023px) {
          .legal-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 767px) {
          .legal-prose h2 {
            font-size: 23px;
            margin-top: 44px;
          }
        }
      `}</style>

      <div className="tr-container">
        <div className="legal-grid">
          <div className="legal-head">
            <p className="tr-eyebrow">Legal</p>
            <h1 className="tr-h2" style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
              {title}
            </h1>
            <p
              className="legal-updated"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--tr-gold-text)",
                marginTop: "24px",
              }}
            >
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className="legal-prose">{children}</div>
        </div>
      </div>
    </section>
  );
}
