"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

// Replace placeholder slides with real WebPs (2400px-wide) when ready.
// To "fill" a slide, set `src` to the path and clear `placeholder`.
type HeroSlide =
  | { src: string; alt: string; placeholder?: false; position?: string; tall?: string }
  | { placeholder: true; label: string };

const heroImages: HeroSlide[] = [
  { src: "/images/staffing-agency-orange-county-mountain-ridge-hero.webp", alt: "Sunlit mountain ridge at golden hour", position: "center top", tall: "150%" },
  { src: "/images/cnc-machine-operator-manufacturing-staffing-southern-california.webp", alt: "Operator at a CNC machine on the shop floor" },
  { src: "/images/administrative-professional-office-staffing-orange-county.webp", alt: "Professional working in an administrative office" },
  { src: "/images/forklift-operator-warehouse-staffing-southern-california.webp", alt: "Forklift operator in a distribution warehouse" },
];

const SLIDE_INTERVAL_MS = 4000;
const CROSSFADE_MS = 600;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // Slides 2+ are fetched only after the page has loaded, so they never compete with the first slide.
  const [restReady, setRestReady] = useState(false);
  useEffect(() => {
    const go = () => setRestReady(true);
    if (document.readyState === "complete") {
      const t = window.setTimeout(go, 300);
      return () => window.clearTimeout(t);
    }
    window.addEventListener("load", go, { once: true });
    const fallback = window.setTimeout(go, 3500);
    return () => {
      window.removeEventListener("load", go);
      window.clearTimeout(fallback);
    };
  }, []);

  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Text/CTA entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ delay: 0.25 });

        tl.from(headlineRef.current, {
          opacity: 0,
          y: 32,
          duration: 1.2,
          ease: "power3.out",
        });

        tl.from(
          subRef.current,
          { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" },
          "-=0.65"
        );

        tl.from(
          ctaRef.current,
          { opacity: 0, y: 18, duration: 0.7, ease: "power3.out" },
          "-=0.55"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const goTo = (i: number) => setActiveIdx(i);
  const handleAnimationEnd = () => {
    setActiveIdx((i) => (i + 1) % heroImages.length);
  };


  return (
    <section
      ref={sectionRef}
      className="hero-section relative flex min-h-[96dvh] items-start justify-start overflow-hidden"
    >
      {/* Background — cinematic hero carousel */}
      <div className="hero-bg absolute inset-0 z-0">
        {heroImages.map((slide, i) => {
          const baseStyle: React.CSSProperties = {
            opacity: i === activeIdx ? 1 : 0,
            transition: `opacity ${CROSSFADE_MS}ms ease-in-out`,
          };
          if ("placeholder" in slide && slide.placeholder) {
            return (
              <div
                key={i}
                aria-hidden={i !== activeIdx ? true : undefined}
                className="absolute inset-0 h-full w-full flex items-center justify-center"
                style={{
                  ...baseStyle,
                  background:
                    "linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%)",
                }}
              >
                <span
                  className="font-display uppercase"
                  style={{
                    fontSize: "14px",
                    letterSpacing: "4px",
                    color: "rgba(255, 255, 255, 0.4)",
                  }}
                >
                  {slide.label}
                </span>
              </div>
            );
          }
          if (i > 0 && !restReady) return null;
          return (
            <img
              key={i}
              src={slide.src}
              srcSet={i === 0 ? `${slide.src.replace(".webp", "-960w.webp")} 960w, ${slide.src} 2400w` : undefined}
              sizes={i === 0 ? "100vw" : undefined}
              fetchPriority={i === 0 ? "high" : "low"}
              decoding={i === 0 ? "sync" : "async"}
              alt={i === 0 ? slide.alt : ""}
              aria-hidden={i !== activeIdx ? true : undefined}
              className="hero-image absolute inset-0 h-full w-full object-cover"
              style={{ ...baseStyle, objectPosition: slide.position ?? "center", height: slide.tall ?? "100%" }}
            />
          );
        })}
        {/* Directional gradient overlay — dark left, transparent right */}
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div
        className="hero-content tr-container relative z-10 pt-52 sm:pt-56 md:pt-60 pb-24"
      >
        <div className="max-w-5xl">
          <h1 ref={headlineRef} style={{ margin: 0 }}>
            <span className="font-display mb-8 block text-[12px] font-semibold uppercase tracking-[0.35em] text-titan-gold">
              Industrial &amp; Administrative Staffing Agency
            </span>
            <span
              className="font-display block font-bold uppercase leading-[0.95] tracking-[0.02em]"
              style={{ fontSize: "clamp(60px, 9.5vw, 132px)" }}
            >
              <span className="block text-titan-offwhite">WHERE TALENT</span>
            <span className="block text-titan-offwhite">
              MEETS ITS <span className="text-titan-gold">PEAK</span>
            </span>
            </span>
          </h1>

          <p
            ref={subRef}
            className="font-body mt-10 max-w-2xl text-lg leading-relaxed sm:text-[21px] sm:leading-[1.65]"
            style={{ color: "rgba(245, 244, 240, 0.82)" }}
          >
            Industrial and administrative recruiting built on real relationships,
            deep vetting, and placements that last.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col gap-4 sm:flex-row sm:gap-5"
            style={{ marginTop: "40px" }}
          >
            <a
              href="/contact?role=company"
              className="font-display inline-flex items-center justify-center rounded-full bg-gold-gradient px-10 py-4 text-[15px] font-bold uppercase tracking-[0.15em] text-titan-navy transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              Find Talent
            </a>
          </div>
        </div>
      </div>

      {/* Carousel controls — bottom right */}
      {heroImages.length > 1 && (
        <div className="hero-controls absolute z-20 flex flex-col items-end">
          {/* Pause + dots */}
          <div className="flex items-center" style={{ gap: "6px" }}>
            <button
              type="button"
              onClick={() => setIsPaused((p) => !p)}
              aria-pressed={isPaused}
              aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
              className="hero-pause"
            >
              {isPaused ? (
                <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 1.5v9l8-4.5z" fill="currentColor" /></svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><rect x="2" y="1.5" width="3" height="9" fill="currentColor" /><rect x="7" y="1.5" width="3" height="9" fill="currentColor" /></svg>
              )}
            </button>
            {heroImages.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === activeIdx}
                onClick={() => goTo(i)}
                className="hero-dot"
              >
                <span
                  aria-hidden="true"
                  style={{
                    display: "block",
                    width: i === activeIdx ? "28px" : "10px",
                    height: "2px",
                    backgroundColor: i === activeIdx ? "#CCA662" : "rgba(245, 244, 240, 0.55)",
                    transition: "width 0.35s ease, background-color 0.3s ease",
                  }}
                />
              </button>
            ))}
          </div>

          {/* Progress track */}
          <div
            aria-hidden="true"
            style={{
              marginTop: "12px",
              width: "120px",
              height: "1px",
              backgroundColor: "rgba(245, 244, 240, 0.2)",
              overflow: "hidden",
            }}
          >
            <div
              key={`${activeIdx}-${isPaused ? "p" : "r"}`}
              className="hero-progress-fill"
              onAnimationEnd={handleAnimationEnd}
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#CCA662",
                transformOrigin: "left center",
                animation: reducedMotion
                  ? "none"
                  : `hero-progress ${SLIDE_INTERVAL_MS}ms linear forwards`,
                animationPlayState: isPaused ? "paused" : "running",
              }}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .hero-image {
          object-position: center;
        }
        .hero-overlay {
          background:
            linear-gradient(to right, rgba(14, 22, 38, 0.82) 0%, rgba(14, 22, 38, 0.62) 45%, rgba(14, 22, 38, 0.2) 100%),
            linear-gradient(to top, rgba(14, 22, 38, 0.55) 0%, rgba(14, 22, 38, 0) 45%),
            linear-gradient(to bottom, rgba(14, 22, 38, 0.45) 0%, rgba(14, 22, 38, 0) 30%);
        }
        .hero-controls {
          right: var(--tr-gutter);
          bottom: 40px;
        }
        .hero-dot,
        .hero-pause {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 28px;
          min-height: 28px;
          padding: 0 4px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: rgba(245, 244, 240, 0.85);
        }
        .hero-dot:hover > span {
          background-color: #cca662 !important;
        }
        .hero-pause:hover {
          color: #cca662;
        }

        @keyframes hero-progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @media (max-width: 767px) {
          .hero-image {
            object-position: center center;
          }
          .hero-overlay {
            background: linear-gradient(to bottom, rgba(14, 22, 38, 0.7) 0%, rgba(14, 22, 38, 0.6) 55%, rgba(14, 22, 38, 0.85) 100%);
          }
          .hero-content :global(a) {
            width: 100% !important;
          }
          .hero-controls {
            right: var(--tr-gutter) !important;
            bottom: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
