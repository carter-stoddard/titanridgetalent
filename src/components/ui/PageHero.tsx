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
};

export default function PageHero({
  eyebrow,
  headline,
  subtitle,
  image,
  imageAlt,
  objectPosition = "center",
  overlayAlpha = 0.85,
}: PageHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ delay: 0.2 });

        tl.from(eyebrowRef.current, {
          opacity: 0,
          y: 16,
          duration: 0.6,
          ease: "power3.out",
        });

        const words = headlineRef.current?.querySelectorAll(".hero-word");
        if (words && words.length) {
          tl.from(
            words,
            {
              opacity: 0,
              y: 40,
              rotateX: 25,
              duration: 0.9,
              ease: "power4.out",
              stagger: 0.12,
            },
            "-=0.3"
          );
        }

        if (subRef.current) {
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
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const words = headline.split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex items-center overflow-hidden"
      style={{ height: "55vh", minHeight: "440px", backgroundColor: "#1E2D45" }}
    >
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition }}
      />

      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(20, 31, 49, ${overlayAlpha})` }}
      />

      <div
        className="page-hero-content relative w-full"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div className="max-w-3xl">
          <p
            ref={eyebrowRef}
            className="font-display font-medium uppercase"
            style={{
              fontSize: "11px",
              letterSpacing: "4px",
              color: "#CCA662",
              marginBottom: "16px",
            }}
          >
            {eyebrow}
          </p>
          <h1
            ref={headlineRef}
            className="font-display font-bold uppercase"
            style={{
              fontSize: "clamp(42px, 6vw, 64px)",
              lineHeight: 0.95,
              color: "#FFFFFF",
              marginBottom: subtitle ? "16px" : 0,
              perspective: "1000px",
            }}
          >
            {words.map((w, i) => (
              <span
                key={i}
                className="hero-word"
                style={{
                  display: "inline-block",
                  marginRight: i < words.length - 1 ? "0.25em" : 0,
                  willChange: "transform, opacity",
                }}
              >
                {w}
              </span>
            ))}
          </h1>
          {subtitle ? (
            <p
              ref={subRef}
              className="font-body italic"
              style={{
                fontSize: "17px",
                lineHeight: 1.6,
                color: "rgba(255, 255, 255, 0.65)",
                maxWidth: "560px",
              }}
            >
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .page-hero-content {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
