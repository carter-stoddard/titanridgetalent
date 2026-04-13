"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "We Talk",
    description:
      "A real conversation. Not a form, not an automated inbox. We learn what you actually need — the role, the culture, the non-negotiables.",
  },
  {
    number: "02",
    title: "We Search",
    description:
      "We go deep into our network. No job board scraping, no bulk submissions. Real vetting, real conversations, real candidates.",
  },
  {
    number: "03",
    title: "We Deliver",
    description:
      "The right person in the right role. We stay accountable after the placement — because we measure success in retention, not volume.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.fromTo(
        [eyebrowRef.current, headlineRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.1,
        }
      );

      tl.fromTo(
        stepsRef.current.filter(Boolean),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.15,
        },
        "-=0.2"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{
        backgroundColor: "#141F31",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div className="how-it-works-inner" style={{ paddingLeft: "80px", paddingRight: "80px" }}>
        {/* Eyebrow */}
        <p
          ref={eyebrowRef}
          className="font-display font-medium uppercase"
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            color: "#CCA662",
            opacity: 0,
          }}
        >
          The Process
        </p>

        {/* Headline */}
        <h2
          ref={headlineRef}
          className="font-display font-semibold uppercase"
          style={{
            fontSize: "clamp(36px, 4.5vw, 52px)",
            lineHeight: 0.95,
            color: "#FFFFFF",
            marginTop: "12px",
            opacity: 0,
          }}
        >
          Simple. Direct. Built on Trust.
        </h2>

        {/* Steps */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ marginTop: "60px" }}
        >
          {steps.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => {
                stepsRef.current[i] = el;
              }}
              className={`relative ${
                i < steps.length - 1
                  ? "border-b md:border-b-0 pb-12 mb-12 md:pb-0 md:mb-0 md:border-r"
                  : ""
              }`}
              style={{
                opacity: 0,
                paddingLeft: "48px",
                paddingRight: "48px",
                borderColor: "rgba(204, 166, 98, 0.4)",
              }}
            >
              {/* Atmospheric numeral */}
              <span
                aria-hidden="true"
                className="font-display font-black select-none pointer-events-none"
                style={{
                  position: "absolute",
                  top: "-30px",
                  left: "32px",
                  fontSize: "120px",
                  lineHeight: 1,
                  color: "rgba(255, 255, 255, 0.06)",
                  zIndex: 0,
                }}
              >
                {step.number}
              </span>

              {/* Content */}
              <div className="relative" style={{ zIndex: 1, paddingTop: "40px" }}>
                <h3
                  className="font-display uppercase"
                  style={{
                    fontSize: "22px",
                    letterSpacing: "2px",
                    color: "#CCA662",
                    fontWeight: 600,
                    lineHeight: 1.1,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-body"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "rgba(255, 255, 255, 0.6)",
                    marginTop: "10px",
                    maxWidth: "320px",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .how-it-works-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}
