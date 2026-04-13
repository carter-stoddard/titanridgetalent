"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = headlineRef.current?.querySelectorAll(".hero-word");
      if (!lines) return;

      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(lines, {
        opacity: 0,
        y: 60,
        rotateX: 30,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
      });

      tl.from(
        subRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.4"
      );

      tl.from(
        ctaRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.4"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-dvh items-start justify-start overflow-hidden"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      {/* Background — cinematic hero image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/titan-ridge-hero.webp"
          alt="Dramatic ridge landscape at golden hour"
          className="h-full w-full object-cover object-center"
        />
        {/* Directional gradient overlay — dark left, transparent right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(245, 244, 240, 0.72) 0%, rgba(245, 244, 240, 0.65) 50%, rgba(245, 244, 240, 0.1) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 w-full pt-40 sm:pt-44 md:pt-48 pb-24" style={{ paddingLeft: "80px", paddingRight: "80px" }}>
        <div className="max-w-3xl">
          {/* Label */}
          <p className="font-display mb-8 text-[11px] font-medium uppercase tracking-[0.35em] text-titan-gold">
            Industrial &amp; Corporate Recruiting
          </p>

          {/* Headline — line by line reveal */}
          <h1
            ref={headlineRef}
            className="font-display font-bold uppercase leading-[0.95] tracking-[0.02em]"
            style={{
              fontSize: "clamp(56px, 8vw, 96px)",
              perspective: "600px",
            }}
          >
            <span className="hero-word block text-titan-navy">
              THE RIGHT <span className="text-titan-gold">PEOPLE.</span>
            </span>
            <span className="hero-word block text-titan-navy">
              THE RIGHT <span className="text-titan-gold">ROLES.</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p
            ref={subRef}
            className="font-body mt-8 max-w-xl text-base leading-relaxed sm:text-lg sm:leading-[1.7]"
            style={{ color: "#2A2A2A" }}
          >
            Some climbs you don&apos;t take alone. We know the terrain.
          </p>

          {/* Dual CTAs */}
          <div ref={ctaRef} className="flex flex-col gap-4 sm:flex-row sm:gap-5" style={{ marginTop: "24px" }}>
            <a
              href="/contact"
              className="font-display inline-flex items-center justify-center rounded-full bg-gold-gradient px-8 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-titan-navy transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              I&apos;m Hiring
            </a>
            <a
              href="/jobs"
              className="font-display inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-titan-navy transition-all duration-300 hover:border-titan-gold hover:text-titan-gold hover:-translate-y-0.5 active:translate-y-0"
              style={{ border: "2px solid #141F31" }}
            >
              I&apos;m Looking for Work
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .hero-content {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .hero-content :global(a) {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
