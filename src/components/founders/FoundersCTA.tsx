"use client";

import Link from "next/link";

export default function FoundersCTA() {
  return (
    <section
      className="founders-cta relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="founders-cta-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div className="founders-cta-grid">
          {/* LEFT — Text + buttons */}
          <div>
            <p
              className="font-display font-medium uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "16px",
              }}
            >
              Work With Us
            </p>

            <h2
              className="font-display font-semibold uppercase"
              style={{
                fontSize: "clamp(36px, 4.5vw, 52px)",
                lineHeight: 0.95,
                color: "#141F31",
                marginBottom: "16px",
              }}
            >
              Ready to Start the Conversation?
            </h2>

            <p
              className="font-body"
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#2A2A2A",
                marginBottom: "36px",
              }}
            >
              Whether you&apos;re looking to build a team or find your next
              role, the Titan Ridge team is ready to talk. No forms, no
              automated responses. Just a real conversation.
            </p>

            <div className="flex flex-col sm:flex-row" style={{ gap: "16px" }}>
              <Link
                href="/contact"
                className="font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  height: "52px",
                  padding: "0 32px",
                  borderRadius: "9999px",
                  backgroundColor: "#CCA662",
                  color: "#141F31",
                  fontSize: "14px",
                  letterSpacing: "3px",
                }}
              >
                Let&apos;s Talk Hiring
              </Link>
              <Link
                href="/jobs"
                className="font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:bg-titan-navy hover:text-titan-offwhite hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  height: "52px",
                  padding: "0 32px",
                  borderRadius: "9999px",
                  backgroundColor: "transparent",
                  border: "1.5px solid #141F31",
                  color: "#141F31",
                  fontSize: "14px",
                  letterSpacing: "3px",
                }}
              >
                See Open Roles
              </Link>
            </div>
          </div>

          {/* RIGHT — Dark contact card */}
          <div
            style={{
              backgroundColor: "#141F31",
              borderRadius: "8px",
              padding: "40px",
            }}
          >
            <p
              className="font-display font-medium uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "12px",
              }}
            >
              Get in Touch Directly
            </p>
            <h3
              className="font-display font-bold"
              style={{
                fontSize: "20px",
                color: "#FFFFFF",
                lineHeight: 1.2,
                marginBottom: "16px",
              }}
            >
              Prefer to reach out directly?
            </h3>

            <a
              href="mailto:support@titanridgetalent.com"
              className="cta-email font-body italic"
              style={{
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.55)",
                display: "block",
                marginBottom: "8px",
                transition: "color 0.2s ease",
              }}
            >
              support@titanridgetalent.com
            </a>
            <a
              href="tel:+18005551234"
              className="cta-email font-body italic"
              style={{
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.55)",
                display: "block",
                transition: "color 0.2s ease",
              }}
            >
              (800) 555-1234
            </a>

            {/* LinkedIn connection — removed for now, can re-add later
            <div
              className="h-[1px] w-full"
              style={{
                backgroundColor: "#CCA662",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            />

            <Link
              href="#"
              className="cta-linkedin inline-flex items-center"
              style={{ gap: "10px", color: "#CCA662" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span
                className="font-display"
                style={{ fontSize: "14px", letterSpacing: "1px" }}
              >
                Connect with Adrian on LinkedIn
              </span>
            </Link>
            */}
          </div>
        </div>
      </div>

      <style jsx>{`
        .founders-cta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .cta-email:hover {
          color: #cca662 !important;
        }
        .cta-linkedin {
          transition: color 0.2s ease;
        }
        .cta-linkedin:hover {
          color: #ffffff !important;
        }

        @media (max-width: 767px) {
          .founders-cta {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .founders-cta-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .founders-cta-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .founders-cta-inner :global(a) {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
