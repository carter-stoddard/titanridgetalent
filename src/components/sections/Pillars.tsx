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
    label: "Years Combined Experience",
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
  const dividersRef = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

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

        const divider = dividersRef.current[i];
        if (divider) {
          tl.fromTo(
            divider,
            { opacity: 0 },
            { opacity: 1, duration: 0.4, ease: "power2.out" },
            startTime
          );
        }

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

        // Letter reveal animation for ZERO
        if (stat.type === "letters") {
          const letters = letterRefs.current.filter(
            (el): el is HTMLSpanElement =>
              !!el && el.dataset.col === String(i)
          );
          if (letters.length) {
            tl.fromTo(
              letters,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power3.out",
                stagger: 0.18,
              },
              startTime + 0.2
            );
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ backgroundColor: "#141F31", paddingTop: "120px", paddingBottom: "120px" }}
    >
      <div
        className="pillars-grid grid grid-cols-1 md:grid-cols-3 relative"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            ref={(el) => {
              colsRef.current[i] = el;
            }}
            className={`relative flex flex-col items-center text-center ${
              i < stats.length - 1 ? "border-b md:border-b-0 md:border-r" : ""
            }`}
            style={{
              opacity: 0,
              paddingTop: "32px",
              paddingBottom: "32px",
              paddingLeft: "48px",
              paddingRight: "48px",
              borderColor: "rgba(204, 166, 98, 0.2)",
            }}
          >
            {/* Number / Letters */}
            {stat.type === "count" ? (
              <span
                ref={(el) => {
                  numberRefs.current[i] = el;
                }}
                className="font-display font-bold"
                style={{
                  fontSize: "96px",
                  lineHeight: 1,
                  color: "#CCA662",
                  marginBottom: "24px",
                  display: "block",
                }}
              >
                0{stat.suffix}
              </span>
            ) : (
              <span
                className="font-display font-bold"
                style={{
                  fontSize: "96px",
                  lineHeight: 1,
                  color: "#CCA662",
                  marginBottom: "24px",
                  display: "block",
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

            {/* Label */}
            <p
              className="font-display font-bold uppercase"
              style={{
                fontSize: "13px",
                letterSpacing: "3px",
                color: "#F5F4F0",
                marginBottom: "10px",
                lineHeight: 1.3,
              }}
            >
              {stat.label}
            </p>

            {/* Descriptor */}
            <p
              className="font-body italic"
              style={{
                fontSize: "14px",
                lineHeight: 1.6,
                color: "rgba(245, 244, 240, 0.5)",
                maxWidth: "220px",
              }}
            >
              {stat.descriptor}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          section {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .pillars-grid {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .pillars-grid {
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
