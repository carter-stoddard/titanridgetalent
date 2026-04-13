"use client";

import Link from "next/link";

export default function JobsDualCTA() {
  return (
    <section
      className="jobs-dual-cta relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="jobs-dual-cta-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div className="jobs-dual-grid relative">
          {/* Center vertical divider */}
          <div
            className="jobs-dual-divider hidden md:block"
            aria-hidden="true"
          />

          {/* LEFT — Candidates */}
          <div className="jobs-dual-col">
            <p
              className="font-display font-medium uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "16px",
              }}
            >
              For Candidates
            </p>
            <h3
              className="font-display font-semibold uppercase"
              style={{
                fontSize: "clamp(28px, 3.5vw, 36px)",
                lineHeight: 0.95,
                color: "#141F31",
                marginBottom: "16px",
              }}
            >
              Don&apos;t See the Right Role?
            </h3>
            <p
              className="font-body"
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#2A2A2A",
                marginBottom: "32px",
              }}
            >
              Send us your resume directly. We work active searches across
              multiple sectors and we keep strong candidates in mind for roles
              as they come in. The right opportunity might be one conversation
              away.
            </p>
            <a
              href="mailto:hello@titanridgetalent.com"
              className="jobs-dual-cta-button font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0"
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
              Send Your Resume
            </a>
          </div>

          {/* RIGHT — Employers */}
          <div className="jobs-dual-col">
            <p
              className="font-display font-medium uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "16px",
              }}
            >
              For Employers
            </p>
            <h3
              className="font-display font-semibold uppercase"
              style={{
                fontSize: "clamp(28px, 3.5vw, 36px)",
                lineHeight: 0.95,
                color: "#141F31",
                marginBottom: "16px",
              }}
            >
              Looking to Hire?
            </h3>
            <p
              className="font-body"
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#2A2A2A",
                marginBottom: "32px",
              }}
            >
              If you have a role to fill — industrial or corporate — we want
              to hear about it. Tell us what you need and we&apos;ll tell you
              honestly whether we can help.
            </p>
            <Link
              href="/contact"
              className="jobs-dual-cta-button font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0"
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
          </div>
        </div>
      </div>

      <style jsx>{`
        .jobs-dual-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .jobs-dual-col {
          padding-left: 60px;
          padding-right: 60px;
        }
        .jobs-dual-col:first-of-type {
          padding-left: 0;
        }
        .jobs-dual-col:last-of-type {
          padding-right: 0;
        }
        .jobs-dual-divider {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background-color: #cca662;
          transform: translateX(-50%);
        }

        @media (max-width: 767px) {
          .jobs-dual-cta {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .jobs-dual-cta-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .jobs-dual-grid {
            grid-template-columns: 1fr;
          }
          .jobs-dual-col {
            padding-left: 0;
            padding-right: 0;
          }
          .jobs-dual-col:first-of-type {
            padding-bottom: 48px;
            margin-bottom: 0;
            border-bottom: 1px solid #cca662;
          }
          .jobs-dual-col:last-of-type {
            padding-top: 48px;
          }
          .jobs-dual-col :global(a) {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
