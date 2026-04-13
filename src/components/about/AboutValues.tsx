"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    number: "01",
    title: "Integrity",
    description:
      "We say what we mean and deliver what we promise. No overclaiming, no disappearing after the placement.",
  },
  {
    number: "02",
    title: "Relationships",
    description:
      "Every search starts with a real conversation. We know our candidates by name, not by code.",
  },
  {
    number: "03",
    title: "Craftsmanship",
    description:
      "We take pride in the work — the vetting, the matching, the follow-through. Details matter here.",
  },
  {
    number: "04",
    title: "Durability",
    description:
      "We measure success in retention, not volume. A placement that doesn't stick isn't a placement.",
  },
  {
    number: "05",
    title: "Accountability",
    description:
      "When something goes wrong, we own it. That's not a policy — that's how trust gets built.",
  },
  {
    number: "06",
    title: "Grit",
    description:
      "We work hard markets and fill difficult roles others walk away from. That's the job.",
  },
];

export default function AboutValues() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about-values relative w-full"
      style={{
        backgroundColor: "#141F31",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="about-values-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        {/* Eyebrow */}
        <p
          className="font-display font-medium uppercase"
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            color: "#CCA662",
            marginBottom: "16px",
          }}
        >
          What We Stand For
        </p>

        {/* Headline */}
        <h2
          className="font-display font-semibold uppercase"
          style={{
            fontSize: "clamp(36px, 4.5vw, 52px)",
            lineHeight: 0.95,
            color: "#FFFFFF",
            marginBottom: "60px",
          }}
        >
          The Six Things That Drive Everything.
        </h2>

        {/* Values grid */}
        <div className="values-grid">
          {values.map((v, i) => (
            <div
              key={v.number}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="relative overflow-hidden"
              style={{
                backgroundColor: "#1E2D45",
                borderLeft: "4px solid #CCA662",
                borderTopRightRadius: "6px",
                borderBottomRightRadius: "6px",
                padding: "32px",
                opacity: 0,
              }}
            >
              {/* Atmospheric number */}
              <span
                aria-hidden="true"
                className="font-display font-black select-none pointer-events-none"
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "24px",
                  fontSize: "72px",
                  lineHeight: 1,
                  color: "rgba(204, 166, 98, 0.15)",
                  zIndex: 0,
                }}
              >
                {v.number}
              </span>

              {/* Content */}
              <div className="relative" style={{ zIndex: 1 }}>
                <h3
                  className="font-display font-bold uppercase"
                  style={{
                    fontSize: "18px",
                    letterSpacing: "2px",
                    color: "#CCA662",
                    marginBottom: "12px",
                    lineHeight: 1.1,
                  }}
                >
                  {v.title}
                </h3>
                <p
                  className="font-body italic"
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 1023px) {
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 767px) {
          .about-values {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .about-values-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
