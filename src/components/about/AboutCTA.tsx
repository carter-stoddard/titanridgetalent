import Link from "next/link";

export default function AboutCTA() {
  return (
    <section
      className="about-cta relative w-full"
      style={{
        backgroundColor: "#141F31",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="flex flex-col items-center text-center px-6">
        <p
          className="font-display font-medium uppercase"
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            color: "#CCA662",
            marginBottom: "16px",
          }}
        >
          The People Behind It
        </p>

        <h2
          className="font-display font-semibold uppercase"
          style={{
            fontSize: "clamp(36px, 4.5vw, 48px)",
            lineHeight: 0.95,
            color: "#FFFFFF",
            marginBottom: "16px",
          }}
        >
          Meet the Founder.
        </h2>

        <p
          className="font-body italic"
          style={{
            fontSize: "17px",
            lineHeight: 1.6,
            color: "rgba(255, 255, 255, 0.55)",
            marginBottom: "40px",
            maxWidth: "640px",
          }}
        >
          Thirty years of combined experience. Three people who built this
          because they believed it could be done better.
        </p>

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
          }}
        >
          Meet the Founder
        </Link>
      </div>
    </section>
  );
}
