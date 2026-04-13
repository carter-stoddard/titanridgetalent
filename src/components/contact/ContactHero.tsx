export default function ContactHero() {
  return (
    <section
      className="relative w-full flex items-center overflow-hidden"
      style={{ height: "55vh", minHeight: "440px", backgroundColor: "#1E2D45" }}
    >
      <img
        src="/images/contact-hero.png"
        alt="Two professionals in genuine conversation — contact Titan Ridge"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center" }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(20, 31, 49, 0.82)" }}
      />

      {/* Content */}
      <div
        className="relative w-full"
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
            Get in Touch
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
            Let&apos;s Find the Right Fit.
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
            Whether you&apos;re looking to hire or ready for your next role —
            the conversation starts here.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          section[style*="55vh"] > div:last-child {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
