export default function JobsHero() {
  return (
    <section
      className="relative w-full flex items-center overflow-hidden"
      style={{ height: "55vh", minHeight: "440px", backgroundColor: "#1E2D45" }}
    >
      <img
        src="/images/jobs-hero.png"
        alt="Professional reviewing career opportunity in warm environment"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center" }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(20, 31, 49, 0.85)" }}
      />

      {/* Content */}
      <div
        className="jobs-hero-content relative w-full"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div className="max-w-3xl">
          <p
            className="font-display font-medium uppercase"
            style={{
              fontSize: "11px",
              letterSpacing: "4px",
              color: "#CCA662",
              marginBottom: "16px",
            }}
          >
            Open Positions
          </p>
          <h1
            className="font-display font-bold uppercase"
            style={{
              fontSize: "clamp(42px, 6vw, 64px)",
              lineHeight: 0.95,
              color: "#FFFFFF",
              marginBottom: "16px",
            }}
          >
            Find Your Next Role.
          </h1>
          <p
            className="font-body italic"
            style={{
              fontSize: "17px",
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.65)",
              maxWidth: "640px",
            }}
          >
            We work with industrial and corporate employers across multiple
            sectors. Every role we post is one we&apos;ve personally vetted.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .jobs-hero-content {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
