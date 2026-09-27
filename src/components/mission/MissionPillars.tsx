"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    number: "01",
    title: "Exceptional Solutions",
    description:
      "Deliver talent solutions with an uncompromising focus on quality, integrity, and service. The right candidate, every time, with no shortcuts.",
  },
  {
    number: "02",
    title: "Lasting Partnerships",
    description:
      "Build relationships that outlast the placement. We take the time to understand each client's operation, culture, and goals before we ever submit a candidate.",
  },
  {
    number: "03",
    title: "Contractor Success",
    description:
      "Support every contractor and candidate at every stage of the process. Their success is the most direct measure of whether we did our job well.",
  },
  {
    number: "04",
    title: "Industry Standard",
    description:
      "Set the bar for what recruiting should be — through expertise, transparency, and a people-first approach that the industry has too often abandoned.",
  },
];

export default function MissionPillars() {
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
          scrollTrigger: { trigger: row, start: "top 78%", once: true },
        });
        tl.fromTo(content, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.65, ease: "power2.out", stagger: 0.08 }, 0.1);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mission-pillars tr-section relative"
      aria-labelledby="mission-pillars-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)", paddingTop: 0 }}
    >
      <div className="tr-container">
        <div className="pillars-grid">
          <div ref={headRef} className="pillars-head" style={{ opacity: 0 }}>
            <p className="tr-eyebrow">How We Operate</p>
            <h2 id="mission-pillars-heading" className="tr-h2" style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
              The Four Pillars
            </h2>
            <p className="tr-body" style={{ color: "var(--tr-ink)", marginTop: "22px" }}>
              Four principles, one standard. This is what guides every
              decision we make.
            </p>
          </div>

          <ol className="pillar-steps">
            {pillars.map((p, i) => (
              <li
                key={p.number}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                className="pillar"
              >
                <p className="pillar-label font-display" data-reveal>
                  Pillar {p.number}
                </p>
                <div className="pillar-text">
                  <h3 className="pillar-title font-display" data-reveal>
                    {p.title}
                  </h3>
                  <p className="pillar-desc font-body" data-reveal>
                    {p.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <style jsx>{`
        .pillars-grid {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
          gap: clamp(40px, 6vw, 96px);
          align-items: start;
        }
        .pillar-steps {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .pillar {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: clamp(16px, 3vw, 40px);
          padding: clamp(28px, 3vw, 44px) 0;
          border-top: 1px solid rgba(20, 31, 49, 0.14);
        }
        .pillar:last-child {
          border-bottom: 1px solid rgba(20, 31, 49, 0.14);
        }
        .pillar-label {
          padding-top: 6px;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--tr-gold-text);
          white-space: nowrap;
        }
        .pillar-title {
          font-weight: 600;
          text-transform: uppercase;
          font-size: clamp(26px, 2.4vw, 34px);
          line-height: 1;
          letter-spacing: 0.01em;
          color: var(--tr-navy);
        }
        .pillar-desc {
          margin-top: 14px;
          font-size: 18px;
          line-height: 1.75;
          color: var(--tr-ink);
          max-width: 46ch;
        }
        [data-reveal] {
          opacity: 0;
        }
        @media (max-width: 1023px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 639px) {
          .pillar {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .pillar-label {
            padding-top: 0;
          }
        }
      `}</style>
    </section>
  );
}
