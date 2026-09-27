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
      "We take pride in the work: the vetting, the matching, the follow-through. Details matter here.",
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
      "When something goes wrong, we own it. That's not a policy. That's how trust gets built.",
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
  const headRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);

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

      rowRefs.current.forEach((row) => {
        if (!row) return;
        const content = row.querySelectorAll<HTMLElement>("[data-reveal]");
        const tl = gsap.timeline({
          scrollTrigger: { trigger: row, start: "top 82%", once: true },
        });
        tl.fromTo(content, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.65, ease: "power2.out", stagger: 0.08 }, 0.1);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about-values tr-section relative"
      aria-labelledby="about-values-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)" }}
    >
      <div className="tr-container">
        <div ref={headRef} className="values-head" style={{ opacity: 0 }}>
          <p className="tr-eyebrow">What We Stand For</p>
          <h2 id="about-values-heading" className="tr-h2" style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
            The Six Things That Drive Everything
          </h2>
        </div>

        <ol className="values-grid">
          {values.map((v, i) => (
            <li
              key={v.number}
              ref={(el) => {
                rowRefs.current[i] = el;
              }}
              className="value"
            >
              <span className="value-num font-display" data-reveal aria-hidden="true">
                {v.number}
              </span>
              <div className="value-text">
                <h3 className="value-title font-display" data-reveal>
                  {v.title}
                </h3>
                <p className="value-desc font-body" data-reveal>
                  {v.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <style jsx>{`
        .values-grid {
          list-style: none;
          margin: clamp(40px, 5vw, 64px) 0 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: clamp(32px, 6vw, 96px);
        }
        .value {
          display: grid;
          grid-template-columns: 72px 1fr;
          gap: clamp(16px, 2.5vw, 32px);
          padding: clamp(28px, 3vw, 40px) 0;
          border-top: 1px solid rgba(20, 31, 49, 0.14);
        }
        .value:nth-last-child(-n + 2) {
          border-bottom: 1px solid rgba(20, 31, 49, 0.14);
        }
        .value-num {
          font-weight: 700;
          font-size: clamp(36px, 3.6vw, 52px);
          line-height: 0.9;
          letter-spacing: -0.02em;
          color: var(--tr-gold-text);
          font-variant-numeric: tabular-nums;
        }
        .value-title {
          font-weight: 600;
          text-transform: uppercase;
          font-size: clamp(24px, 2.2vw, 30px);
          line-height: 1;
          letter-spacing: 0.01em;
          color: var(--tr-navy);
        }
        .value-desc {
          margin-top: 12px;
          font-size: 18px;
          line-height: 1.7;
          color: var(--tr-ink);
          max-width: 40ch;
        }
        [data-reveal] {
          opacity: 0;
        }
        @media (max-width: 1023px) {
          .values-grid {
            grid-template-columns: 1fr;
          }
          .value:nth-last-child(-n + 2) {
            border-bottom: none;
          }
          .value:last-child {
            border-bottom: 1px solid rgba(20, 31, 49, 0.14);
          }
        }
        @media (max-width: 639px) {
          .value {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
}
