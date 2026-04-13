"use client";

const logos = [
  { name: "Crestline Corp", letters: "CRESTLINE" },
  { name: "Pacific Industrial Group", letters: "PACIFIC" },
  { name: "Westfield Distribution", letters: "WESTFIELD" },
  { name: "Meridian Operations", letters: "MERIDIAN" },
  { name: "Ironclad Manufacturing", letters: "IRONCLAD" },
  { name: "Vantage Logistics", letters: "VANTAGE" },
];

function FakeLogo({ name, letters }: { name: string; letters: string }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        height: "56px",
        opacity: 0.4,
      }}
      title={name}
    >
      <span
        className="font-display font-bold uppercase"
        style={{
          fontSize: "15px",
          letterSpacing: "4px",
          color: "#FFFFFF",
          whiteSpace: "nowrap",
        }}
      >
        {letters}
      </span>
    </div>
  );
}

export default function TestimonialsLogos() {
  return (
    <section
      className="testimonials-logos relative w-full"
      style={{
        backgroundColor: "#141F31",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div
        className="logos-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div className="text-center">
          <p
            className="font-display font-medium uppercase"
            style={{
              fontSize: "11px",
              letterSpacing: "4px",
              color: "#CCA662",
              marginBottom: "16px",
            }}
          >
            Trusted By
          </p>
          <h2
            className="font-display font-bold uppercase"
            style={{
              fontSize: "24px",
              letterSpacing: "2px",
              color: "#FFFFFF",
              marginBottom: "60px",
            }}
          >
            Companies That Trust Titan Ridge.
          </h2>
        </div>

        <div className="logos-row">
          {logos.map((logo) => (
            <FakeLogo key={logo.name} name={logo.name} letters={logo.letters} />
          ))}
        </div>

        <div
          className="h-[1px] mx-auto"
          style={{
            backgroundColor: "rgba(204, 166, 98, 0.2)",
            marginTop: "60px",
            maxWidth: "600px",
          }}
        />
      </div>

      <style jsx>{`
        .logos-row {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 32px;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 1023px) {
          .logos-row {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 767px) {
          .testimonials-logos {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .logos-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .logos-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
