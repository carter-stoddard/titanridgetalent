"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const proofPoints = [
  { value: "6+", label: "Years of recruiting experience" },
  { value: "100%", label: "Relationship-first placement" },
  { value: "Zero", label: "Bulk submissions, ever" },
  { value: "Both", label: "Industrial & corporate expertise" },
  { value: "Direct", label: "Client engagement, no portals" },
  { value: "Ongoing", label: "Accountability after the placement" },
];

export default function FoundersPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLLIElement | null)[]>([]);
  const dividersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      };

      gsap.fromTo(
        [eyebrowRef.current, headlineRef.current],
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: trigger,
        }
      );

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.15,
          scrollTrigger: trigger,
        }
      );

      gsap.fromTo(
        rowsRef.current.filter(Boolean),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.08,
          delay: 0.35,
          scrollTrigger: trigger,
        }
      );

      gsap.fromTo(
        dividersRef.current.filter(Boolean),
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.4,
          scrollTrigger: trigger,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="founders-philosophy relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="philosophy-outer"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        {/* Eyebrow — on light */}
        <p
          ref={eyebrowRef}
          className="font-display font-medium uppercase"
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            color: "#CCA662",
            marginBottom: "16px",
            opacity: 0,
          }}
        >
          The Approach
        </p>

        {/* Headline — on light */}
        <h2
          ref={headlineRef}
          className="font-display font-semibold uppercase"
          style={{
            fontSize: "clamp(36px, 4.5vw, 52px)",
            lineHeight: 0.95,
            color: "#141F31",
            marginBottom: "60px",
            opacity: 0,
          }}
        >
          Relationships First. Results Always.
        </h2>

        {/* Navy card */}
        <div
          ref={cardRef}
          className="philosophy-card"
          style={{
            backgroundColor: "#141F31",
            borderRadius: "12px",
            paddingLeft: "80px",
            paddingRight: "80px",
            paddingTop: "60px",
            paddingBottom: "60px",
            opacity: 0,
          }}
        >
          <ul
            className="proof-list"
            style={{ listStyle: "none", padding: 0, margin: 0 }}
          >
            {proofPoints.map((p, i) => (
              <li
                key={i}
                ref={(el) => {
                  rowsRef.current[i] = el;
                }}
                className="proof-row"
                style={{ opacity: 0 }}
              >
                {/* Animated gold divider — hidden on first row per column via CSS */}
                <span
                  ref={(el) => {
                    dividersRef.current[i] = el;
                  }}
                  aria-hidden="true"
                  className="proof-divider"
                />

                <span
                  className="font-display font-bold uppercase proof-value"
                  style={{
                    lineHeight: 1,
                    color: "#CCA662",
                    letterSpacing: "0.02em",
                  }}
                >
                  {p.value}
                </span>
                <span
                  className="font-display proof-label"
                  style={{
                    fontWeight: 500,
                    color: "#F5F4F0",
                    lineHeight: 1.4,
                  }}
                >
                  {p.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .proof-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 60px;
          row-gap: 0;
        }
        .proof-row {
          position: relative;
          display: grid;
          grid-template-columns: 140px 1fr;
          align-items: center;
          padding: 24px 0;
          gap: 24px;
        }
        .proof-divider {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background-color: rgba(204, 166, 98, 0.2);
          transform: scaleX(0);
          transform-origin: left center;
          will-change: transform;
        }
        /* Hide divider on first row of each desktop column */
        .proof-list > .proof-row:nth-child(1) .proof-divider,
        .proof-list > .proof-row:nth-child(2) .proof-divider {
          display: none;
        }
        .proof-list > .proof-row:nth-child(1),
        .proof-list > .proof-row:nth-child(2) {
          padding-top: 0;
        }
        .proof-value {
          font-size: clamp(32px, 2.5vw, 40px);
        }
        .proof-label {
          font-size: 15px;
        }

        @media (max-width: 1023px) {
          .proof-list {
            grid-template-columns: 1fr;
            column-gap: 0;
          }
          /* At single-column, show divider on row 2 (it was hidden at desktop) */
          .proof-list > .proof-row:nth-child(2) .proof-divider {
            display: block;
          }
          .proof-list > .proof-row:nth-child(2) {
            padding-top: 24px;
          }
        }

        @media (max-width: 767px) {
          .founders-philosophy {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .philosophy-outer {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .philosophy-card {
            padding: 32px 24px !important;
          }
          .proof-row {
            grid-template-columns: 100px 1fr !important;
            gap: 16px !important;
            padding: 20px 0 !important;
          }
          .proof-value {
            font-size: 28px !important;
          }
          .proof-label {
            font-size: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
