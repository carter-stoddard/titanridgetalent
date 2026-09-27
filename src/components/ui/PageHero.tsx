"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type PageHeroProps = {
  eyebrow: string;
  headline: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
  overlayAlpha?: number;
  /** CSS height for the hero band; default 55vh */
  height?: string;
};

export default function PageHero({
  eyebrow,
  headline,
  subtitle,
  image,
  imageAlt,
  objectPosition = "center",
  overlayAlpha = 0.85,
  height = "55vh",
}: PageHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ delay: 0.25 });
        tl.from(eyebrowRef.current, { opacity: 0, y: 14, duration: 0.7, ease: "power3.out" });
        tl.from(headlineRef.current, { opacity: 0, y: 28, duration: 1.1, ease: "power3.out" }, "-=0.45");
        if (subRef.current) {
          tl.from(subRef.current, { opacity: 0, y: 18, duration: 0.8, ease: "power3.out" }, "-=0.6");
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="page-hero relative w-full flex items-center overflow-hidden"
      style={{ height, minHeight: "440px", backgroundColor: "#1E2D45" }}
    >
      <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition }} />
      <div className="absolute inset-0" style={{ backgroundColor: `rgba(20, 31, 49, ${overlayAlpha})` }} />

      <div className="tr-container relative" style={{ paddingTop: "96px" }}>
        <div style={{ maxWidth: "820px" }}>
          <p ref={eyebrowRef} className="tr-eyebrow">
            {eyebrow}
          </p>
          <h1
            ref={headlineRef}
            className="tr-h2"
            style={{ marginTop: "20px", color: "#FFFFFF", marginBottom: subtitle ? "18px" : 0 }}
          >
            {headline}
          </h1>
          {subtitle ? (
            <p ref={subRef} className="tr-body" style={{ color: "rgba(255, 255, 255, 0.78)", maxWidth: "46ch" }}>
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
