export default function TestimonialsHero() {
  return (
    <section
      className="relative w-full flex items-center overflow-hidden"
      style={{ height: "55vh", minHeight: "440px", backgroundColor: "#1E2D45" }}
    >
      <img
        src="/images/testimonials-hero.jpg"
        alt="Warm genuine connection moment — what clients and candidates say about Titan Ridge"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center 30%" }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(20, 31, 49, 0.85)" }}
      />

      {/* Content */}
      <div
        className="testimonials-hero-content relative w-full"
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
            What They Say
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
            Don&apos;t Take Our Word For It.
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
            Real results from the companies we&apos;ve helped build — and the
            people we&apos;ve helped place.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .testimonials-hero-content {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
