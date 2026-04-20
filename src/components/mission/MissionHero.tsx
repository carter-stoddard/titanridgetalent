"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MissionHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headline = "The Climb is the Point.";
  const words = headline.split(" ");

  return (
    <section
      ref={sectionRef}
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
            ref={eyebrowRef}
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
            ref={headlineRef}
            className="font-display font-bold uppercase"
            style={{
              fontSize: "clamp(42px, 6vw, 64px)",
              lineHeight: 0.95,
              color: "#FFFFFF",
              marginBottom: "16px",
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
            Why we built Titan Ridge, and what keeps us moving upward.
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
