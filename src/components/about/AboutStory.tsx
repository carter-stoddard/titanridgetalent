import Link from "next/link";

export default function AboutStory() {
  return (
    <section
      className="about-story relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="about-story-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div className="about-story-grid">
          {/* LEFT — Text */}
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
              Who We Are
            </p>

            <h2
              className="font-display font-semibold uppercase"
              style={{
                fontSize: "clamp(36px, 4.5vw, 52px)",
                lineHeight: 0.95,
                color: "#141F31",
                marginBottom: "32px",
              }}
            >
              Built on Experience. Driven by Standards.
            </h2>

            <div className="flex flex-col" style={{ gap: "20px" }}>
              <p
                className="font-body"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#2A2A2A",
                }}
              >
                Titan Ridge Talent was built by recruiting professionals
                who had seen the industry at its best, and watched it drift
                far from it. Years of experience across industrial floors and
                corporate boardrooms, placing thousands of people and building
                relationships that lasted long after the placement. We also
                watched too many firms reduce that process to a numbers game.
              </p>
              <p
                className="font-body"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#2A2A2A",
                }}
              >
                The problem isn&apos;t that recruiting is hard. It&apos;s that
                somewhere along the way, the industry decided relationships
                were inefficient. Resumes in, bodies out, repeat. Candidates
                became codes in a system. Clients became tickets in a queue.
                The people on both sides of the equation, the ones whose
                careers and companies were actually at stake, stopped being
                treated like people.
              </p>
              <p
                className="font-body"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#2A2A2A",
                }}
              >
                We built Titan Ridge because we believe the right placement
                starts with the right conversation. Not a form. Not an
                automated inbox. A real conversation with someone who actually
                listens, asks the right questions, and tells you the truth,
                even when the truth is that it&apos;s not the right fit.
              </p>
              <p
                className="font-body"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#2A2A2A",
                }}
              >
                That&apos;s not a differentiator. That&apos;s just how this
                should have always worked. We&apos;re not reinventing
                recruiting. We&apos;re returning it to what it was always
                supposed to be.
              </p>
            </div>

            <Link
              href="/founders"
              className="font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0"
              style={{
                height: "52px",
                padding: "0 32px",
                borderRadius: "9999px",
                backgroundColor: "#CCA662",
                color: "#141F31",
                fontSize: "14px",
                letterSpacing: "3px",
                marginTop: "40px",
              }}
            >
              Meet the Founder
            </Link>
          </div>

          {/* RIGHT — Contained image */}
          <div
            className="flex items-center justify-center"
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
                Story Image — three founders in genuine conversation, candid,
                warm light
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        @media (max-width: 767px) {
          .about-story {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .about-story-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .about-story-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-story-inner :global(a) {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
