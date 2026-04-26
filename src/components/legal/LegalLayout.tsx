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
    <>
      {/* Header */}
      <section
        className="legal-header relative w-full overflow-hidden"
        style={{
          backgroundColor: "#1E2D45",
          paddingTop: "180px",
          paddingBottom: "80px",
        }}
      >
        <div
          className="legal-header-inner relative w-full"
          style={{ paddingLeft: "80px", paddingRight: "80px" }}
        >
          <div style={{ maxWidth: "780px" }}>
            <p
              className="font-display font-medium uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "16px",
              }}
            >
              Legal
            </p>
            <h1
              className="font-display font-bold uppercase"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                lineHeight: 0.95,
                color: "#FFFFFF",
                marginBottom: "16px",
              }}
            >
              {title}
            </h1>
            <p
              className="font-body italic"
              style={{
                fontSize: "15px",
                color: "rgba(255, 255, 255, 0.55)",
              }}
            >
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section
        className="legal-body relative w-full"
        style={{
          backgroundColor: "#F5F4F0",
          paddingTop: "96px",
          paddingBottom: "120px",
        }}
      >
        <div
          className="legal-body-inner"
          style={{
            maxWidth: "780px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "80px",
            paddingRight: "80px",
          }}
        >
          <div className="legal-prose">{children}</div>
        </div>

        <style>{`
          .legal-prose h2 {
            font-family: var(--font-barlow-condensed);
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 22px;
            color: #141f31;
            margin-top: 48px;
            margin-bottom: 16px;
          }
          .legal-prose h2:first-child {
            margin-top: 0;
          }
          .legal-prose h3 {
            font-family: var(--font-barlow-condensed);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 14px;
            color: #cca662;
            margin-top: 28px;
            margin-bottom: 8px;
          }
          .legal-prose p {
            font-family: var(--font-lora);
            font-size: 16px;
            line-height: 1.75;
            color: #2a2a2a;
            margin-bottom: 16px;
          }
          .legal-prose ul {
            list-style: none;
            padding: 0;
            margin: 16px 0;
          }
          .legal-prose ul li {
            position: relative;
            padding-left: 24px;
            font-family: var(--font-lora);
            font-size: 16px;
            line-height: 1.7;
            color: #2a2a2a;
            margin-bottom: 10px;
          }
          .legal-prose ul li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0.7em;
            width: 12px;
            height: 1px;
            background-color: #cca662;
          }
          .legal-prose strong {
            font-weight: 600;
            color: #141f31;
          }
          .legal-prose a {
            color: #cca662;
            text-decoration: underline;
            text-underline-offset: 3px;
            text-decoration-thickness: 1px;
            transition: color 0.2s ease;
          }
          .legal-prose a:hover {
            color: #141f31;
          }
          .legal-prose .legal-divider {
            width: 48px;
            height: 2px;
            background-color: #cca662;
            margin: 0 0 32px 0;
          }

          @media (max-width: 767px) {
            .legal-header {
              padding-top: 140px !important;
              padding-bottom: 64px !important;
            }
            .legal-header-inner {
              padding-left: 24px !important;
              padding-right: 24px !important;
            }
            .legal-body {
              padding-top: 64px !important;
              padding-bottom: 80px !important;
            }
            .legal-body-inner {
              padding-left: 24px !important;
              padding-right: 24px !important;
            }
            .legal-prose h2 {
              font-size: 19px;
              margin-top: 40px;
            }
            .legal-prose p,
            .legal-prose ul li {
              font-size: 15px;
            }
          }
        `}</style>
      </section>
    </>
  );
}
