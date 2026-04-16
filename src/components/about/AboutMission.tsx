"use client";

export default function AboutMission() {
  return (
    <section
      className="about-mission relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="about-mission-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <p
          className="font-display font-medium uppercase"
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            color: "#CCA662",
            marginBottom: "16px",
          }}
        >
          The Foundation
        </p>
        <h2
          className="font-display font-semibold uppercase"
          style={{
            fontSize: "clamp(36px, 4.5vw, 52px)",
            lineHeight: 0.95,
            color: "#141F31",
            marginBottom: "60px",
          }}
        >
          Where We Stand.
        </h2>

        <div className="mission-grid relative">
          {/* Center vertical gold divider */}
          <div
            className="mission-divider hidden md:block"
            aria-hidden="true"
          />

          {/* LEFT — Mission */}
          <div className="mission-col">
            <p
              className="font-display font-medium uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "20px",
              }}
            >
              Our Mission
            </p>
            <div
              className="h-[1px] w-full"
              style={{
                backgroundColor: "#CCA662",
                marginBottom: "28px",
              }}
            />
            <p
              className="font-body italic"
              style={{
                fontSize: "22px",
                lineHeight: 1.6,
                color: "#141F31",
              }}
            >
              To place the right people in the right roles, through
              relationships, not transactions.
            </p>
          </div>

          {/* RIGHT — Vision */}
          <div className="mission-col">
            <p
              className="font-display font-medium uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "20px",
              }}
            >
              Our Vision
            </p>
            <div
              className="h-[1px] w-full"
              style={{
                backgroundColor: "#CCA662",
                marginBottom: "28px",
              }}
            />
            <p
              className="font-body italic"
              style={{
                fontSize: "22px",
                lineHeight: 1.6,
                color: "#141F31",
              }}
            >
              To be the recruiting firm that industrial and corporate leaders
              trust by name, not for volume, but for the quality of every
              relationship and the permanence of every placement.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .mission-col {
          padding-left: 80px;
          padding-right: 80px;
        }
        .mission-col:first-of-type {
          padding-left: 0;
        }
        .mission-col:last-of-type {
          padding-right: 0;
        }
        .mission-divider {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background-color: #cca662;
          transform: translateX(-50%);
        }

        @media (max-width: 767px) {
          .about-mission {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .about-mission-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .mission-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .mission-col {
            padding-left: 0;
            padding-right: 0;
          }
        }
      `}</style>
    </section>
  );
}
