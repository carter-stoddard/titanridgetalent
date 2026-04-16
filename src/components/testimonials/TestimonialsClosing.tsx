import Link from "next/link";

export default function TestimonialsClosing() {
  return (
    <section
      className="testimonials-closing relative w-full overflow-hidden"
      style={{
        backgroundColor: "#141F31",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <img
        src="/images/cta-section.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center" }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(20, 31, 49, 0.75)" }}
      />
      <div className="testimonials-closing-inner relative flex flex-col items-center text-center" style={{ paddingLeft: "80px", paddingRight: "80px" }}>
        <p
          className="font-display font-medium uppercase"
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            color: "#CCA662",
            marginBottom: "16px",
          }}
        >
          Your Turn
        </p>

        <h2
          className="font-display font-semibold uppercase"
          style={{
            fontSize: "clamp(40px, 5vw, 52px)",
            lineHeight: 0.95,
            color: "#FFFFFF",
            marginBottom: "16px",
          }}
        >
          Ready to Be the Next Success Story?
        </h2>

        <p
          className="font-body italic"
          style={{
            fontSize: "17px",
            lineHeight: 1.6,
            color: "rgba(255, 255, 255, 0.7)",
            marginBottom: "40px",
            maxWidth: "640px",
          }}
        >
          Whether you&apos;re hiring or looking, let&apos;s have a real
          conversation.
        </p>

        <div className="closing-buttons flex" style={{ gap: "16px" }}>
          <Link
            href="/contact"
            className="closing-cta font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0"
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
          <a
            href="/jobs"
            className="closing-cta font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              height: "52px",
              padding: "0 32px",
              borderRadius: "9999px",
              backgroundColor: "transparent",
              border: "1.5px solid #FFFFFF",
              color: "#FFFFFF",
              fontSize: "14px",
              letterSpacing: "3px",
            }}
          >
            See Open Roles
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .testimonials-closing-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .closing-buttons {
            flex-direction: column;
            width: 100%;
            max-width: 360px;
          }
          .closing-cta {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
