"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Stat =
  | { type: "count"; target: number; suffix: string; label: string; descriptor: string }
  | { type: "letters"; letters: string[]; label: string; descriptor: string };

const stats: Stat[] = [
  {
    type: "count",
    target: 15,
    suffix: "+",
    label: "Years of Combined Experience",
    descriptor: "Across industrial floors and administrative boardrooms.",
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
  const headRef = useRef<HTMLDivElement>(null);
  const colsRef = useRef<(HTMLLIElement | null)[]>([]);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
      });
      tl.fromTo(headRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, 0);

      colsRef.current.forEach((col, i) => {
        if (!col) return;
        const start = 0.15 + i * 0.12;
        tl.fromTo(col, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, start);
        const stat = stats[i];
        if (stat.type === "count") {
          const numEl = numberRefs.current[i];
          if (numEl) {
            const counter = { val: 0 };
            tl.to(
              counter,
              {
                val: stat.target,
                duration: 1.5,
                ease: "power2.out",
                onUpdate: () => {
                  numEl.textContent = `${Math.round(counter.val)}${stat.suffix}`;
                },
              },
              start + 0.15
            );
          }
        } else {
          const letters = letterRefs.current.filter(
            (el): el is HTMLSpanElement => !!el && el.dataset.col === String(i)
          );
          if (letters.length) {
            tl.fromTo(
              letters,
              { opacity: 0, y: -30, transformOrigin: "bottom center" },
              { opacity: 1, y: 0, duration: 0.45, ease: "back.out(1.4)", stagger: 0.08 },
              start + 0.15
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
      className="pillars tr-section relative"
      aria-labelledby="pillars-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)" }}
    >
      <div className="tr-container">
        <div className="pillars-grid">
          <div ref={headRef} className="pillars-head" style={{ opacity: 0 }}>
            <p className="tr-eyebrow">By the Numbers</p>
            <h2 id="pillars-heading" className="tr-h2" style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
              Proof Over Promises
            </h2>
          </div>

          <ul className="pillars-list">
            {stats.map((stat, i) => (
              <li
                key={i}
                ref={(el) => {
                  colsRef.current[i] = el;
                }}
                className="pillar"
                style={{ opacity: 0 }}
              >
                <div className="pillar-figure font-display" role={stat.type === "letters" ? "img" : undefined} aria-label={stat.type === "letters" ? stat.letters.join("") : undefined}>
                  {stat.type === "count" ? (
                    <span
                      ref={(el) => {
                        numberRefs.current[i] = el;
                      }}
                    >
                      0{stat.suffix}
                    </span>
                  ) : (
                    stat.letters.map((letter, li) => (
                      <span
                        key={li}
                        ref={(el) => {
                          letterRefs.current.push(el);
                          if (el) el.dataset.col = String(i);
                        }}
                        style={{ display: "inline-block", opacity: 0 }}
                      >
                        {letter}
                      </span>
                    ))
                  )}
                </div>
                <div className="pillar-text">
                  <p className="pillar-label font-display">{stat.label}</p>
                  <p className="pillar-desc font-body">{stat.descriptor}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .pillars-grid {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
          gap: clamp(40px, 6vw, 96px);
          align-items: start;
        }
        .pillars-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .pillar {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: clamp(16px, 3vw, 40px);
          align-items: center;
          padding: clamp(24px, 2.6vw, 36px) 0;
          border-top: 1px solid rgba(20, 31, 49, 0.14);
        }
        .pillar:last-child {
          border-bottom: 1px solid rgba(20, 31, 49, 0.14);
        }
        .pillar-figure {
          font-weight: 700;
          font-size: clamp(52px, 5.2vw, 76px);
          line-height: 0.9;
          letter-spacing: -0.02em;
          color: var(--tr-navy);
          font-variant-numeric: tabular-nums;
          white-space: nowrap;
        }
        .pillar-label {
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--tr-gold-text);
          line-height: 1.35;
        }
        .pillar-desc {
          margin-top: 8px;
          font-size: 17px;
          line-height: 1.65;
          color: var(--tr-ink);
          max-width: 34ch;
        }
        @media (max-width: 1023px) {
          .pillars-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
        @media (max-width: 639px) {
          .pillar {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
}
