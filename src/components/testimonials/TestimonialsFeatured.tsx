"use client";

export default function TestimonialsFeatured() {
  return (
    <section
      className="testimonials-featured relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="featured-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div className="featured-grid">
          {/* LEFT — Headshot + attribution */}
          <div className="flex flex-col items-center text-center">
            <div
              className="flex items-center justify-center"
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "9999px",
                backgroundColor: "#141F31",
              }}
            >
              <p
                className="font-display uppercase"
                style={{
                  fontSize: "12px",
                  letterSpacing: "2px",
                  color: "#CCA662",
                }}
              >
                Headshot
              </p>
            </div>
            <p
              className="font-display font-bold"
              style={{
                fontSize: "20px",
                color: "#141F31",
                marginTop: "20px",
              }}
            >
              Sarah M.
            </p>
            <p
              className="font-display"
              style={{
                fontSize: "14px",
                letterSpacing: "1px",
                color: "#CCA662",
                marginTop: "6px",
              }}
            >
              VP of Operations · Pacific Industrial Group
            </p>
            <p
              className="font-display font-medium uppercase"
              style={{
                fontSize: "10px",
                letterSpacing: "3px",
                color: "#CCA662",
                marginTop: "8px",
              }}
            >
              Employer
            </p>
          </div>

          {/* RIGHT — Quote */}
          <div className="relative">
            <span
              aria-hidden="true"
              className="font-display font-black select-none pointer-events-none"
              style={{
                position: "absolute",
                top: "-40px",
                left: "-20px",
                fontSize: "120px",
                lineHeight: 1,
                color: "rgba(204, 166, 98, 0.15)",
                zIndex: 0,
              }}
            >
              &ldquo;
            </span>
            <p
              className="font-body italic relative"
              style={{
                fontSize: "clamp(20px, 2vw, 24px)",
                lineHeight: 1.7,
                color: "#141F31",
                marginBottom: "32px",
                zIndex: 1,
              }}
            >
              We&apos;d tried four agencies before Titan Ridge. None of them
              took the time to understand what we actually needed. Adrian did.
              He asked questions nobody else had asked, told us when a
              candidate wasn&apos;t right, and when he finally put someone
              forward — that person has been with us for two years.
              That&apos;s the standard we hold every partner to now.
            </p>

            <div
              className="h-[1px] w-full"
              style={{
                backgroundColor: "#CCA662",
                marginBottom: "24px",
              }}
            />

            <p
              className="font-display font-bold"
              style={{
                fontSize: "16px",
                color: "#CCA662",
              }}
            >
              Sarah M.
            </p>
            <p
              className="font-display uppercase"
              style={{
                fontSize: "13px",
                letterSpacing: "1px",
                color: "rgba(42, 42, 42, 0.6)",
                marginTop: "4px",
              }}
            >
              VP of Operations · Pacific Industrial Group
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .featured-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        @media (max-width: 767px) {
          .testimonials-featured {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .featured-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .featured-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </section>
  );
}
