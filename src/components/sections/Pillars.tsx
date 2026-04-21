"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Stat =
  | {
      type: "count";
      target: number;
      suffix: string;
      label: string;
      descriptor: string;
    }
  | {
      type: "letters";
      letters: string[];
      label: string;
      descriptor: string;
    };

const stats: Stat[] = [
  {
    type: "count",
    target: 15,
    suffix: "+",
    label: "Years of Combined Experience",
    descriptor: "Across industrial floors and corporate boardrooms.",
  },
  {
    type: "count",
    target: 100,
    suffix: "%",
    label: "Relationship-Based",
    descriptor: "Every search starts with a real conversation. Not a form.",
  },
  {
    type: "letters",
    letters: ["Z", "E", "R", "O"],
    label: "Bulk Submissions. Ever.",
    descriptor: "We send the right candidate. Not a stack of resumes.",
  },
];

export default function Pillars() {
  const sectionRef = useRef<HTMLElement>(null);
  const colsRef = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const underlineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      colsRef.current.forEach((col, i) => {
        if (!col) return;
        const startTime = i * 0.12;

        tl.fromTo(
          col,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          startTime
        );

        const stat = stats[i];

        // Count-up animation for numerical stats
        if (stat.type === "count") {
          const numEl = numberRefs.current[i];
          if (numEl) {
            const counter = { val: 0 };
            tl.to(
              counter,
              {
                val: stat.target,
                duration: 1.6,
                ease: "power2.out",
                onUpdate: () => {
                  numEl.textContent = `${Math.round(counter.val)}${stat.suffix}`;
                },
              },
              startTime + 0.2
            );
          }
        }

        // Domino-fall letter animation for ZERO
        if (stat.type === "letters") {
          const letters = letterRefs.current.filter(
            (el): el is HTMLSpanElement =>
              !!el && el.dataset.col === String(i)
          );
          if (letters.length) {
            // Each letter falls from above, rotates slightly, and settles
            tl.fromTo(
              letters,
              {
                opacity: 0,
                y: -60,
                rotateZ: -25,
                transformOrigin: "bottom center",
              },
              {
                opacity: 1,
                y: 0,
                rotateZ: 0,
                duration: 0.55,
                ease: "back.out(1.8)",
                stagger: 0.12,
              },
              startTime + 0.2
            );
          }
        }

        // Animated underline draw beneath each stat
        const underline = underlineRefs.current[i];
        if (underline) {
          tl.fromTo(
            underline,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 0.9, ease: "power2.inOut" },
            startTime + 0.4
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ backgroundColor: "#F5F4F0", paddingTop: "120px", paddingBottom: "120px" }}
    >
      <div className="pillars-outer" style={{ paddingLeft: "80px", paddingRight: "80px" }}>
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
          By the Numbers
        </p>

        {/* Headline */}
        <h2
          className="font-display font-semibold uppercase"
          style={{
            fontSize: "clamp(36px, 4.5vw, 52px)",
            lineHeight: 0.95,
            color: "#141F31",
            marginBottom: "60px",
          }}
        >
          Proof Over Promises.
        </h2>

      <div
        className="pillars-grid grid grid-cols-1 md:grid-cols-3 relative"
        style={{
          backgroundColor: "#141F31",
          borderRadius: "12px",
          paddingLeft: "48px",
          paddingRight: "48px",
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            ref={(el) => {
              colsRef.current[i] = el;
            }}
            className={`pillar-card relative flex flex-col items-center text-center justify-start ${
              i < stats.length - 1 ? "border-b md:border-b-0 md:border-r" : ""
            }`}
            style={{
              opacity: 0,
              paddingTop: "32px",
              paddingBottom: "32px",
              paddingLeft: "48px",
              paddingRight: "48px",
              borderColor: "rgba(204, 166, 98, 0.2)",
              transition: "transform 0.4s ease",
            }}
          >
            {/* Number / Letters */}
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "96px",
                marginBottom: "16px",
              }}
            >
              {stat.type === "count" ? (
                <span
                  ref={(el) => {
                    numberRefs.current[i] = el;
                  }}
                  className="pillar-number font-display font-bold"
                  style={{
                    fontSize: "96px",
                    lineHeight: 1,
                    color: "#CCA662",
                    display: "inline-block",
                    transition: "transform 0.4s ease",
                  }}
                >
                  0{stat.suffix}
                </span>
              ) : (
                <span
                  className="pillar-number font-display font-bold"
                  style={{
                    fontSize: "96px",
                    lineHeight: 1,
                    color: "#CCA662",
                    display: "inline-block",
                    transition: "transform 0.4s ease",
                  }}
                  aria-label={stat.letters.join("")}
                >
                  {stat.letters.map((letter, li) => (
                    <span
                      key={li}
                      ref={(el) => {
                        letterRefs.current.push(el);
                        if (el) el.dataset.col = String(i);
                      }}
                      style={{
                        display: "inline-block",
                        opacity: 0,
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              )}

              {/* Animated gold underline */}
              <div
                ref={(el) => {
                  underlineRefs.current[i] = el;
                }}
                className="pillar-underline"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "10%",
                  right: "10%",
                  bottom: "-6px",
                  height: "2px",
                  backgroundColor: "#CCA662",
                  transform: "scaleX(0)",
                  transformOrigin: "left center",
                  transition: "box-shadow 0.4s ease",
                }}
              />
            </div>

            {/* Label */}
            <p
              className="font-display font-bold uppercase"
              style={{
                fontSize: "15px",
                letterSpacing: "3px",
                color: "#F5F4F0",
                marginTop: "16px",
                marginBottom: "12px",
                lineHeight: 1.3,
              }}
            >
              {stat.label}
            </p>

            {/* Descriptor */}
            <p
              className="pillar-descriptor font-body italic"
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                color: "rgba(245, 244, 240, 0.55)",
                maxWidth: "220px",
                transition: "color 0.4s ease",
              }}
            >
              {stat.descriptor}
            </p>
          </div>
        ))}
      </div>
      </div>

      <style jsx>{`
        @media (hover: hover) and (min-width: 768px) {
          .pillar-card:hover .pillar-number {
            transform: scale(1.06);
          }
          .pillar-card:hover .pillar-underline {
            box-shadow: 0 0 20px rgba(204, 166, 98, 0.5);
          }
          .pillar-card:hover .pillar-descriptor {
            color: rgba(245, 244, 240, 0.85) !important;
          }
        }

        @media (max-width: 767px) {
          section {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .pillars-outer {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .pillars-grid {
            padding-left: 32px !important;
            padding-right: 32px !important;
            padding-top: 40px !important;
            padding-bottom: 40px !important;
            gap: 0 !important;
          }
          .pillars-grid > div {
            text-align: left !important;
            align-items: flex-start !important;
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          .pillars-grid > div p {
            max-width: none !important;
          }
        }
      `}</style>
    </section>
  );
}
