"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { JOBS_VISIBLE } from "@/lib/features";

// Replace placeholder slides with real WebPs (2400px-wide) when ready.
// To "fill" a slide, set `src` to the path and clear `placeholder`.
type HeroSlide =
  | { src: string; alt: string; placeholder?: false }
  | { placeholder: true; label: string };

const heroImages: HeroSlide[] = [
  { src: "/images/hero-mountain.webp", alt: "Mountain ridge at golden hour" },
  { src: "/images/hero-1.webp", alt: "Operator at a CNC machine on the shop floor" },
  { src: "/images/hero-2.webp", alt: "Professional working in a corporate office" },
  { src: "/images/hero-3.webp", alt: "Forklift operator in a distribution warehouse" },
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

  const candidateHref = JOBS_VISIBLE ? "/jobs" : "/contact";

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
                aria-hidden={i !== activeIdx}
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
                    fontSize: "13px",
                    letterSpacing: "4px",
                    color: "rgba(255, 255, 255, 0.4)",
                  }}
                >
                  {slide.label}
                </span>
              </div>
            );
          }
          return (
            <img
              key={i}
              src={slide.src}
              alt={i === 0 ? slide.alt : ""}
              aria-hidden={i !== activeIdx}
              className="hero-image absolute inset-0 h-full w-full object-cover"
              style={baseStyle}
            />
          );
        })}
        {/* Directional gradient overlay — dark left, transparent right */}
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div
        className="hero-content relative z-10 w-full pt-52 sm:pt-56 md:pt-60 pb-24"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div className="max-w-3xl">
          <p className="font-display mb-8 text-[11px] font-medium uppercase tracking-[0.35em] text-titan-navy">
            Industrial &amp; Corporate Recruiting
          </p>

          <h1
            ref={headlineRef}
            className="font-display font-bold uppercase leading-[0.95] tracking-[0.02em]"
            style={{ fontSize: "clamp(56px, 8vw, 96px)" }}
          >
            <span className="block text-titan-navy">
              THE RIGHT <span className="text-titan-gold">PEOPLE.</span>
            </span>
            <span className="block text-titan-navy">
              THE RIGHT <span className="text-titan-gold">ROLES.</span>
            </span>
          </h1>

          <p
            ref={subRef}
            className="font-body mt-8 max-w-xl text-base leading-relaxed sm:text-lg sm:leading-[1.7]"
            style={{ color: "#2A2A2A" }}
          >
            Industrial and corporate recruiting built on real relationships,
            deep vetting, and placements that last.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col gap-4 sm:flex-row sm:gap-5"
            style={{ marginTop: "24px" }}
          >
            <a
              href="/contact"
              className="font-display inline-flex items-center justify-center rounded-full bg-gold-gradient px-8 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-titan-navy transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              I&apos;m Hiring
            </a>
            <a
              href={candidateHref}
              className="font-display inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-titan-navy transition-all duration-300 hover:border-titan-gold hover:text-titan-gold hover:-translate-y-0.5 active:translate-y-0"
              style={{ border: "2px solid #141F31" }}
            >
              I&apos;m Looking for Work
            </a>
          </div>
        </div>
      </div>

      {/* Carousel controls — bottom right */}
      {heroImages.length > 1 && (
        <div className="hero-controls absolute z-20 flex flex-col items-end">
          {/* Dots */}
          <div className="flex items-center" style={{ gap: "10px" }}>
            {heroImages.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === activeIdx}
                onClick={() => goTo(i)}
                className="hero-dot"
                style={{
                  width: i === activeIdx ? "28px" : "10px",
                  height: "2px",
                  backgroundColor:
                    i === activeIdx ? "#CCA662" : "rgba(20, 31, 49, 0.35)",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition:
                    "width 0.35s ease, background-color 0.3s ease",
                }}
              />
            ))}
          </div>

          {/* Progress track */}
          <div
            aria-hidden="true"
            style={{
              marginTop: "12px",
              width: "120px",
              height: "1px",
              backgroundColor: "rgba(20, 31, 49, 0.2)",
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
          background: linear-gradient(
            to right,
            rgba(245, 244, 240, 0.55) 0%,
            rgba(245, 244, 240, 0.45) 50%,
            rgba(245, 244, 240, 0.05) 100%
          );
        }
        .hero-controls {
          right: 80px;
          bottom: 40px;
        }
        .hero-dot:hover {
          background-color: #cca662 !important;
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
            background: linear-gradient(
              to bottom,
              rgba(245, 244, 240, 0.78) 0%,
              rgba(245, 244, 240, 0.55) 70%,
              rgba(245, 244, 240, 0.25) 100%
            );
          }
          .hero-content {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .hero-content :global(a) {
            width: 100% !important;
          }
          .hero-controls {
            right: 24px !important;
            bottom: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
