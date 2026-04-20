"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    number: 1,
    label: "Mission",
    statement: "Right People. Right Roles.",
    supporting: "Placed through relationships. Not transactions.",
  },
  {
    number: 2,
    label: "Vision",
    statement: "Known By Name.",
    supporting:
      "The firm industrial and corporate leaders trust for every search.",
  },
];

export default function AboutMission() {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const labelRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const statementRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const ruleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const supportingRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Center divider grows top → bottom
      if (dividerRef.current) {
        gsap.fromTo(
          dividerRef.current,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              once: true,
            },
          }
        );
      }

      pillars.forEach((p, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: numberRefs.current[i],
            start: "top 80%",
            once: true,
          },
        });

        // Number count-up (00 → 01 / 00 → 02)
        const numEl = numberRefs.current[i];
        if (numEl) {
          const counter = { val: 0 };
          tl.to(
            counter,
            {
              val: p.number,
              duration: 0.9,
              ease: "power2.out",
              onUpdate: () => {
                numEl.textContent = String(Math.round(counter.val)).padStart(
                  2,
                  "0"
                );
              },
            },
            0
          );
          tl.fromTo(
            numEl,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            0
          );
        }

        // Label fades in
        tl.fromTo(
          labelRefs.current[i],
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          0.3
        );

        // Statement: word-by-word rise with subtle overshoot
        const statement = statementRefs.current[i];
        if (statement) {
          const words = statement.querySelectorAll(".statement-word");
          tl.fromTo(
            words,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              ease: "back.out(1.4)",
              stagger: 0.08,
            },
            0.45
          );
        }

        // Gold rule draws in
        tl.fromTo(
          ruleRefs.current[i],
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.7, ease: "power3.out" },
          0.75
        );

        // Supporting copy fades in
        tl.fromTo(
          supportingRefs.current[i],
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          0.95
        );

        // Parallax on the big numbers (moves slower than scroll)
        if (numEl) {
          gsap.to(numEl, {
            y: -40,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about-mission relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="about-mission-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <p
          className="font-display font-medium uppercase"
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            color: "#CCA662",
            marginBottom: "16px",
          }}
        >
          The Foundation
        </p>
        <h2
          className="font-display font-semibold uppercase"
          style={{
            fontSize: "clamp(36px, 4.5vw, 52px)",
            lineHeight: 0.95,
            color: "#141F31",
            marginBottom: "80px",
          }}
        >
          Where We Stand.
        </h2>

        <div
          className="mission-card"
          style={{
            backgroundColor: "#141F31",
            borderRadius: "12px",
            padding: "80px",
          }}
        >
        <div className="mission-grid relative">
          {/* Center vertical gold divider */}
          <div
            ref={dividerRef}
            className="mission-divider hidden md:block"
            aria-hidden="true"
          />

          {pillars.map((p, i) => (
            <div key={p.number} className="mission-col">
              {/* Big atmospheric number */}
              <span
                ref={(el) => {
                  numberRefs.current[i] = el;
                }}
                aria-hidden="true"
                className="font-display font-bold select-none"
                style={{
                  display: "block",
                  fontSize: "72px",
                  lineHeight: 1,
                  color: "#CCA662",
                  marginBottom: "16px",
                  opacity: 0,
                  willChange: "transform",
                }}
              >
                00
              </span>

              {/* Small label */}
              <p
                ref={(el) => {
                  labelRefs.current[i] = el;
                }}
                className="font-display font-medium uppercase"
                style={{
                  fontSize: "11px",
                  letterSpacing: "4px",
                  color: "#CCA662",
                  marginBottom: "20px",
                  opacity: 0,
                }}
              >
                Our {p.label}
              </p>

              {/* Bold statement with word-by-word reveal */}
              <h3
                ref={(el) => {
                  statementRefs.current[i] = el;
                }}
                className="font-display font-semibold uppercase"
                style={{
                  fontSize: "clamp(28px, 3vw, 40px)",
                  lineHeight: 1.05,
                  color: "#FFFFFF",
                  marginBottom: "20px",
                }}
              >
                {p.statement.split(" ").map((word, wi) => (
                  <span
                    key={wi}
                    className="statement-word"
                    style={{
                      display: "inline-block",
                      marginRight: "0.25em",
                      opacity: 0,
                    }}
                  >
                    {word}
                  </span>
                ))}
              </h3>

              {/* Gold rule */}
              <div
                ref={(el) => {
                  ruleRefs.current[i] = el;
                }}
                style={{
                  width: "48px",
                  height: "2px",
                  backgroundColor: "#CCA662",
                  marginBottom: "20px",
                  transform: "scaleX(0)",
                  transformOrigin: "left center",
                }}
              />

              {/* Supporting copy */}
              <p
                ref={(el) => {
                  supportingRefs.current[i] = el;
                }}
                className="font-body italic"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.6,
                  color: "rgba(245, 244, 240, 0.7)",
                  maxWidth: "360px",
                  opacity: 0,
                }}
              >
                {p.supporting}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>

      <style jsx>{`
        .mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .mission-col {
          padding-left: 80px;
          padding-right: 80px;
        }
        .mission-col:first-of-type {
          padding-left: 0;
        }
        .mission-col:last-of-type {
          padding-right: 0;
        }
        .mission-divider {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background-color: #cca662;
          transform: translateX(-50%);
        }

        @media (max-width: 767px) {
          .about-mission {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .about-mission-inner {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .mission-card {
            padding: 48px 32px !important;
          }
          .mission-grid {
            grid-template-columns: 1fr;
            gap: 56px;
          }
          .mission-col {
            padding-left: 0;
            padding-right: 0;
          }
        }
      `}</style>
    </section>
  );
}
