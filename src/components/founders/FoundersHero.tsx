"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FoundersHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headline = "The Team Behind the Firm.";
  const words = headline.split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex items-center overflow-hidden"
      style={{ height: "55vh", minHeight: "440px", backgroundColor: "#1E2D45" }}
    >
      <img
        src="/images/founders-hero.jpg"
        alt="Cinematic professional environment — Titan Ridge founders"
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
        className="founders-hero-content relative w-full"
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
            Leadership
          </p>
          <h1
            ref={headlineRef}
            className="font-display font-bold uppercase"
            style={{
              fontSize: "clamp(42px, 6vw, 64px)",
              lineHeight: 0.95,
              color: "#FFFFFF",
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
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .founders-hero-content {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
