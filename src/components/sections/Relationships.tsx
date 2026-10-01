"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  "Direct Hire",
  "Executive Search",
  "Temp to Hire",
  "Temporary Assignments",
  "Confidential Searches",
  "High Volume MFG Support",
  "Nationwide Recruitment",
];

export default function Relationships() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll<HTMLElement>("[data-reveal]") ?? [];
      gsap.fromTo(
        items,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.06,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="rel tr-section relative"
      aria-labelledby="rel-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)", paddingTop: 0 }}
    >
      <div className="tr-container">
        <div className="rel-grid">
          <h2 id="rel-heading" className="tr-h2" data-reveal style={{ color: "var(--tr-navy)" }}>
            Built on Relationships. Driven by Results
          </h2>

          <div>
            <p className="tr-body" data-reveal style={{ color: "var(--tr-ink)", maxWidth: "62ch" }}>
              Every candidate search at Titan Ridge is tailored to each company&apos;s unique processes, systems, and
              culture. We look beyond the job title, focusing on industry relevance, applicable experience, work
              history, and strong tenure.
            </p>
            <p className="tr-body" data-reveal style={{ color: "var(--tr-ink)", maxWidth: "62ch", marginTop: "18px" }}>
              We also consider each candidate&apos;s pay, schedule, commute, and career goals to create the right
              match for both sides and support long-term retention.
            </p>

            <h3 className="rel-label font-display" data-reveal>
              Our Services
            </h3>
            <ul className="rel-list">
              {services.map((s) => (
                <li key={s} className="rel-item font-display" data-reveal>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .rel-grid {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
          gap: clamp(40px, 6vw, 96px);
          align-items: start;
        }
        .rel-label {
          margin-top: clamp(36px, 4vw, 52px);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--tr-gold-text);
        }
        .rel-list {
          list-style: none;
          margin: 16px 0 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: clamp(24px, 3vw, 48px);
          border-top: 1px solid rgba(20, 31, 49, 0.14);
        }
        .rel-item {
          padding: 15px 0;
          border-bottom: 1px solid rgba(20, 31, 49, 0.14);
          font-weight: 600;
          font-size: 20px;
          line-height: 1.2;
          color: var(--tr-navy);
        }
        [data-reveal] {
          opacity: 0;
        }
        @media (max-width: 1023px) {
          .rel-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
        @media (max-width: 639px) {
          .rel-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
