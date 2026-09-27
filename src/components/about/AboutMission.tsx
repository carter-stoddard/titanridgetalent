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
      "The firm industrial and administrative leaders trust for every search.",
  },
];

export default function AboutMission() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        }
      );

      rowRefs.current.forEach((row, i) => {
        if (!row) return;
        const tl = gsap.timeline({
          scrollTrigger: { trigger: row, start: "top 80%", once: true },
        });

        const content = row.querySelectorAll<HTMLElement>("[data-reveal]");
        tl.fromTo(content, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.65, ease: "power2.out", stagger: 0.1 }, 0);

        // Number count-up (00 -> 01 / 00 -> 02)
        const numEl = numberRefs.current[i];
        if (numEl) {
          const counter = { val: 0 };
          tl.to(
            counter,
            {
              val: pillars[i].number,
              duration: 0.9,
              ease: "power2.out",
              onUpdate: () => {
                numEl.textContent = String(Math.round(counter.val)).padStart(2, "0");
              },
            },
            0.1
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about-mission tr-section relative"
      aria-labelledby="about-mission-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)" }}
    >
      <div className="tr-container">
        <div className="mission-grid">
          <div ref={headRef} className="mission-head" style={{ opacity: 0 }}>
            <p className="tr-eyebrow">The Foundation</p>
            <h2 id="about-mission-heading" className="tr-h2" style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
              Where We Stand
            </h2>
          </div>

          <ol className="mission-rows">
            {pillars.map((p, i) => (
              <li
                key={p.number}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                className="mission-row"
              >
                <span
                  ref={(el) => {
                    numberRefs.current[i] = el;
                  }}
                  aria-hidden="true"
                  className="mission-num font-display"
                  data-reveal
                >
                  00
                </span>

                <div className="mission-text">
                  <p className="mission-label font-display" data-reveal>
                    Our {p.label}
                  </p>
                  <h3 className="mission-statement font-display" data-reveal>
                    {p.statement}
                  </h3>
                  <p className="mission-support font-body" data-reveal>
                    {p.supporting}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <style jsx>{`
        .mission-grid {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
          gap: clamp(40px, 6vw, 96px);
          align-items: start;
        }
        .mission-rows {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .mission-row {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: clamp(16px, 3vw, 40px);
          padding: clamp(28px, 3vw, 44px) 0;
          border-top: 1px solid rgba(20, 31, 49, 0.14);
        }
        .mission-row:last-child {
          border-bottom: 1px solid rgba(20, 31, 49, 0.14);
        }
        .mission-num {
          font-weight: 700;
          font-size: clamp(56px, 6vw, 88px);
          line-height: 0.9;
          letter-spacing: -0.02em;
          color: var(--tr-navy);
          font-variant-numeric: tabular-nums;
        }
        .mission-label {
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--tr-gold-text);
        }
        .mission-statement {
          margin-top: 14px;
          font-weight: 600;
          text-transform: uppercase;
          font-size: clamp(26px, 2.4vw, 34px);
          line-height: 1;
          letter-spacing: 0.01em;
          color: var(--tr-navy);
        }
        .mission-support {
          margin-top: 14px;
          font-size: 17px;
          line-height: 1.65;
          color: var(--tr-ink);
          max-width: 40ch;
        }
        [data-reveal] {
          opacity: 0;
        }
        @media (max-width: 1023px) {
          .mission-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 639px) {
          .mission-row {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
