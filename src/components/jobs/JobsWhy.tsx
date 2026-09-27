"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    number: "01",
    title: "We Know the Role",
    body: "We don't blast your resume to every open position. We understand what each role actually demands before we put your name forward.",
  },
  {
    number: "02",
    title: "We Advocate For You",
    body: "When we reach out about a role it's because we genuinely believe it's right for you. We represent you, not just the opening.",
  },
  {
    number: "03",
    title: "We Stay Accountable",
    body: "Our relationship doesn't end at placement. We check in, follow up, and stay available because we measure success in retention, not volume.",
  },
];

export default function JobsWhy() {
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
        const content = row.querySelectorAll<HTMLElement>("[data-reveal]");
        const tl = gsap.timeline({
          scrollTrigger: { trigger: row, start: "top 78%", once: true },
        });
        tl.fromTo(content, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.65, ease: "power2.out", stagger: 0.08 }, 0.1);

        // Numbers count up 00 → 01/02/03
        const numEl = numberRefs.current[i];
        if (numEl) {
          const target = parseInt(reasons[i].number, 10);
          const counter = { val: 0 };
          tl.to(
            counter,
            {
              val: target,
              duration: 1.1,
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
      className="jobs-why tr-section relative w-full"
      aria-labelledby="jobs-why-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)" }}
    >
      <div className="tr-container">
        <div className="jobs-why-grid">
          <div ref={headRef} className="jobs-why-head" style={{ opacity: 0 }}>
            <p className="tr-eyebrow">The Difference</p>
            <h2 id="jobs-why-heading" className="tr-h2" style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
              Why Go Through Us
            </h2>
          </div>

          <ol className="jobs-why-list">
            {reasons.map((r, i) => (
              <li
                key={r.number}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                className="jobs-why-row"
              >
                <span
                  ref={(el) => {
                    numberRefs.current[i] = el;
                  }}
                  aria-hidden="true"
                  className="jobs-why-num font-display"
                  data-reveal
                >
                  00
                </span>
                <div className="jobs-why-text">
                  <h3 className="jobs-why-title font-display" data-reveal>
                    {r.title}
                  </h3>
                  <p className="jobs-why-body font-body" data-reveal>
                    {r.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <style jsx>{`
        .jobs-why-grid {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
          gap: clamp(40px, 6vw, 96px);
          align-items: start;
        }
        .jobs-why-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .jobs-why-row {
          position: relative;
          display: grid;
          grid-template-columns: 96px 1fr;
          gap: clamp(16px, 3vw, 40px);
          padding: clamp(28px, 3vw, 44px) 0;
          border-top: 1px solid rgba(20, 31, 49, 0.14);
        }
        .jobs-why-row:last-child {
          border-bottom: 1px solid rgba(20, 31, 49, 0.14);
        }
        .jobs-why-num {
          font-weight: 700;
          font-size: clamp(44px, 5vw, 72px);
          line-height: 0.9;
          letter-spacing: -0.02em;
          color: var(--tr-gold-text);
          font-variant-numeric: tabular-nums;
        }
        .jobs-why-title {
          font-weight: 600;
          text-transform: uppercase;
          font-size: clamp(26px, 2.4vw, 34px);
          line-height: 1;
          letter-spacing: 0.01em;
          color: var(--tr-navy);
        }
        .jobs-why-body {
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
          .jobs-why-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 639px) {
          .jobs-why-row {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
}
