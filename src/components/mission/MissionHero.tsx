export default function MissionHero() {
  return (
    <section
      className="relative w-full flex items-center overflow-hidden"
      style={{ height: "55vh", minHeight: "440px", backgroundColor: "#1E2D45" }}
    >
      <img
        src="/images/mission-hero.jpg"
        alt="Cinematic ridge at golden hour — what drives Titan Ridge"
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
        className="mission-hero-content relative w-full"
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
            Our Mission
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
            The Climb is the Point.
          </h1>
          <p
            className="font-body italic"
            style={{
              fontSize: "17px",
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.65)",
              maxWidth: "560px",
            }}
          >
            Why we built Titan Ridge — and what keeps us moving upward.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .mission-hero-content {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
