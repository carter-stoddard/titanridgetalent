"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  "E-Verify",
  "Onboarding",
  "Payroll",
  "Geo Location Time Keeping",
  "Federal Background Check",
  "5 to 10 Panel Drug Test",
  "OSHA Certified",
  "Workers’ Compensation Insurance",
  "General Liability Insurance",
  "Professional Liability Insurance",
];

export default function Compliance() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
      });
      tl.fromTo(headRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, 0);
      tl.fromTo(
        itemRefs.current.filter((el): el is HTMLLIElement => !!el),
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.05 },
        0.15
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="compliance tr-section relative"
      aria-labelledby="compliance-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)" }}
    >
      <div className="tr-container">
        <div className="compliance-grid">
          <div ref={headRef} className="compliance-head" style={{ opacity: 0 }}>
            <p className="tr-eyebrow">Built In. Not Bolted On.</p>
            <h2 id="compliance-heading" className="tr-h2" style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
              Onboarding &amp; Compliance
            </h2>
          </div>

          <ul className="compliance-list">
            {items.map((item, i) => (
              <li
                key={item}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="compliance-item"
              >
                <span className="compliance-idx font-display" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="compliance-name font-display">{item}</span>
                <span className="compliance-check" aria-hidden="true">
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .compliance-grid {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
          gap: clamp(40px, 6vw, 96px);
          align-items: start;
        }
        .compliance-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: clamp(24px, 3vw, 48px);
          border-top: 1px solid rgba(20, 31, 49, 0.14);
        }
        .compliance-item {
          display: grid;
          grid-template-columns: 32px 1fr 24px;
          align-items: center;
          gap: 12px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(20, 31, 49, 0.14);
          opacity: 0;
          transition: padding-left 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .compliance-item:hover {
          padding-left: 6px;
        }
        .compliance-idx {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--tr-gold-text);
          font-variant-numeric: tabular-nums;
        }
        .compliance-name {
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 0.02em;
          color: var(--tr-navy);
          line-height: 1.2;
        }
        .compliance-check {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 1px solid rgba(204, 166, 98, 0.7);
          color: var(--tr-gold-text);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 1023px) {
          .compliance-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 639px) {
          .compliance-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
