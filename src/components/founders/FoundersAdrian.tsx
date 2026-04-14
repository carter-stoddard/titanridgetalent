"use client";

export default function FoundersAdrian() {
  return (
    <section
      className="founders-adrian relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="adrian-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div className="adrian-grid">
          {/* LEFT — Contained headshot */}
          <div
            className="flex items-center justify-center adrian-image-col"
            style={{ padding: "24px" }}
          >
            <div
              className="relative w-full overflow-hidden flex items-center justify-center"
              style={{
                aspectRatio: "1 / 1",
                borderRadius: "8px",
                backgroundColor: "#C4B89A",
              }}
            >
              <p
                className="font-display uppercase text-center px-6"
                style={{
                  fontSize: "13px",
                  letterSpacing: "2px",
                  color: "#141F31",
                }}
              >
                Adrian Ibarra — professional headshot, high contrast, neutral or
                dark background
              </p>
            </div>
          </div>

          {/* RIGHT — Bio */}
          <div className="flex flex-col justify-center adrian-text-col">
            <p
              className="font-display font-medium uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "12px",
              }}
            >
              Founder
            </p>

            <h2
              className="font-display font-semibold uppercase"
              style={{
                fontSize: "clamp(36px, 4.5vw, 52px)",
                lineHeight: 0.95,
                color: "#141F31",
                marginBottom: "8px",
              }}
            >
              Adrian Ibarra
            </h2>

            <p
              className="font-display"
              style={{
                fontSize: "18px",
                fontWeight: 600,
                letterSpacing: "1px",
                color: "#CCA662",
                marginBottom: "32px",
              }}
            >
              [Specialty Area] · [X] Years Experience
            </p>

            <div
              className="h-[1px] w-full"
              style={{
                backgroundColor: "#CCA662",
                marginBottom: "32px",
              }}
            />

            <div
              className="flex flex-col"
              style={{ gap: "16px", marginBottom: "40px" }}
            >
              <p
                className="font-body"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#2A2A2A",
                }}
              >
                Adrian Ibarra is the founder of Titan Ridge Talent,
                bringing [X] years of recruiting experience across industrial
                and corporate markets. His career has been built on one
                principle: that the right placement starts with a real
                conversation — not a resume submission.
              </p>
              <p
                className="font-body"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#2A2A2A",
                }}
              >
                Throughout his career Adrian has developed deep expertise in
                [Specialty Area], working directly with hiring managers,
                operations leaders, and executives to understand not just what a
                role requires on paper, but what it demands in practice. That
                ground-level understanding is what separates a good placement
                from a permanent one.
              </p>
              <p
                className="font-body"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#2A2A2A",
                }}
              >
                When Adrian isn&apos;t working a search, he&apos;s building the
                relationships that make future searches possible. At Titan
                Ridge, that&apos;s not a strategy — it&apos;s just how he
                operates.
              </p>
            </div>

            {/* LinkedIn CTA — removed for now, can re-add later
            <Link
              href="#"
              className="adrian-linkedin inline-flex items-center"
              style={{ gap: "10px", color: "#CCA662" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span
                className="font-display"
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                }}
              >
                Connect on LinkedIn
              </span>
            </Link>
            */}
          </div>
        </div>
      </div>

      <style jsx>{`
        .adrian-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .adrian-linkedin {
          transition: color 0.2s ease;
        }
        .adrian-linkedin:hover {
          color: #141f31 !important;
        }

        @media (max-width: 767px) {
          .founders-adrian {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .adrian-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .adrian-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .adrian-image-col {
            order: 2;
          }
          .adrian-text-col {
            order: 1;
          }
        }
      `}</style>
    </section>
  );
}
