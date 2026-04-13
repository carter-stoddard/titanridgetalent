"use client";

const proofPoints = [
  { value: "[X]+", label: "Years Experience" },
  { value: "Both", label: "Industrial & Corporate" },
  { value: "100%", label: "Relationship-First" },
];

export default function FoundersPhilosophy() {
  return (
    <section
      className="founders-philosophy relative w-full"
      style={{
        backgroundColor: "#141F31",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="philosophy-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div className="philosophy-grid">
          {/* LEFT */}
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
              The Approach
            </p>
            <h2
              className="font-display font-semibold uppercase"
              style={{
                fontSize: "clamp(36px, 4.5vw, 52px)",
                lineHeight: 0.95,
                color: "#FFFFFF",
              }}
            >
              Relationships First. Results Always.
            </h2>
          </div>

          {/* RIGHT */}
          <div>
            <p
              className="font-body italic"
              style={{
                fontSize: "17px",
                lineHeight: 1.7,
                color: "rgba(255, 255, 255, 0.65)",
                marginBottom: "32px",
              }}
            >
              Every search starts the same way — with a conversation.
              Not a checklist, not a keyword scan. A real exchange about
              what the role actually demands, what the team actually needs,
              and what success actually looks like six months after the
              hire. That&apos;s the standard Titan Ridge was built on.
            </p>

            <div
              className="h-[1px] w-full"
              style={{
                backgroundColor: "#CCA662",
                marginBottom: "32px",
              }}
            />

            <div className="proof-row">
              {proofPoints.map((p, i) => (
                <div
                  key={i}
                  className={`proof-point ${
                    i < proofPoints.length - 1 ? "proof-divider" : ""
                  }`}
                >
                  <p
                    className="font-display font-bold"
                    style={{
                      fontSize: "28px",
                      lineHeight: 1,
                      color: "#CCA662",
                      marginBottom: "8px",
                    }}
                  >
                    {p.value}
                  </p>
                  <p
                    className="font-display uppercase"
                    style={{
                      fontSize: "11px",
                      letterSpacing: "2px",
                      color: "#FFFFFF",
                    }}
                  >
                    {p.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .philosophy-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .proof-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .proof-point {
          padding-right: 24px;
        }
        .proof-divider {
          border-right: 1px solid rgba(204, 166, 98, 0.4);
        }

        @media (max-width: 767px) {
          .founders-philosophy {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .philosophy-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .philosophy-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .proof-row {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .proof-point {
            padding-right: 0;
            padding-bottom: 24px;
            border-right: none !important;
            border-bottom: 1px solid rgba(204, 166, 98, 0.4);
          }
          .proof-point:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
}
