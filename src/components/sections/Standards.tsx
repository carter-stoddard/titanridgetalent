"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const standards = [
  {
    title: "HR Principles",
    body:
      "Compliance comes first — State and Federal regulation, plus our own ethical standards. Constant communication and notation, with uniform standards for contractors and staff.",
  },
  {
    title: "Safety",
    body:
      "A shared responsibility. We learn the work environment, requirements, and exposures before placing anyone. OSHA standards, backed by a Risk Management Team with 20+ years in staffing.",
  },
  {
    title: "Teamwork",
    body:
      "Not an outside vendor — an extension of your team. We stay in contact with management, HR, supervisors, and our employees to address concerns early.",
  },
  {
    title: "Accountability",
    body:
      "Our job doesn't end when a candidate starts. We follow up with client and employee throughout the assignment to support retention.",
  },
];

const qualifications = [
  "E-Verify",
  "Onboarding",
  "Payroll Administration",
  "Geolocation Timekeeping",
  "Federal Background Check",
  "5- to 10-Panel Drug Testing",
  "OSHA Safety Training",
  "Workers’ Compensation Insurance",
  "General Liability Insurance",
  "Professional Liability Insurance",
];

export default function Standards() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll<HTMLElement>("[data-reveal]") ?? [];
      gsap.fromTo(
        items,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.04,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="std tr-section relative"
      aria-labelledby="std-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)", paddingTop: 0 }}
    >
      <div className="tr-container">
        <div className="std-grid">
          <div>
            <p className="tr-eyebrow" data-reveal>
              Beyond the Placement
            </p>
            <h2 id="std-heading" className="tr-h2" data-reveal style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
              Our Standards
            </h2>
            <p className="tr-body" data-reveal style={{ color: "var(--tr-ink)", marginTop: "24px", maxWidth: "58ch" }}>
              Finding the right candidate is only part of the job. A successful staffing partnership takes
              accountability, communication, safety, and support long after the placement.
            </p>

            <ul className="std-list">
              {standards.map((s) => (
                <li key={s.title} className="std-item" data-reveal>
                  <h3 className="std-title font-display">{s.title}</h3>
                  <p className="std-body font-body">{s.body}</p>
                </li>
              ))}
            </ul>

            <p className="std-close font-body" data-reveal>
              One skilled professional or a growing workforce — we bring technology, industry knowledge, and human
              judgment to help you build a stronger team.
            </p>
          </div>

          <div>
            <h3 className="qual-heading font-display" data-reveal>
              Additional Qualifications
            </h3>
            <ul className="qual-list">
              {qualifications.map((q) => (
                <li key={q} className="qual-item font-display" data-reveal>
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .std-grid {
          display: grid;
          grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
          gap: clamp(40px, 6vw, 96px);
          align-items: start;
        }
        .std-list {
          list-style: none;
          margin: clamp(32px, 4vw, 48px) 0 0;
          padding: 0;
          border-top: 1px solid rgba(20, 31, 49, 0.14);
        }
        .std-item {
          display: grid;
          grid-template-columns: minmax(0, 4fr) minmax(0, 8fr);
          gap: clamp(12px, 3vw, 40px);
          padding: 24px 0;
          border-bottom: 1px solid rgba(20, 31, 49, 0.14);
        }
        .std-title {
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--tr-gold-text);
          line-height: 1.4;
        }
        .std-body {
          font-size: 17px;
          line-height: 1.7;
          color: var(--tr-ink);
        }
        .std-close {
          margin-top: clamp(28px, 3vw, 40px);
          font-size: clamp(20px, 1.9vw, 24px);
          line-height: 1.5;
          color: var(--tr-navy);
          max-width: 46ch;
        }
        .qual-heading {
          margin-top: 38px;
          font-weight: 600;
          text-transform: uppercase;
          font-size: clamp(24px, 2.2vw, 30px);
          line-height: 1;
          letter-spacing: 0.02em;
          color: var(--tr-navy);
        }
        .qual-list {
          list-style: none;
          margin: 24px 0 0;
          padding: 0;
          border-top: 1px solid rgba(20, 31, 49, 0.14);
        }
        .qual-item {
          padding: 16px 0;
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
          .std-grid {
            grid-template-columns: 1fr;
            gap: 56px;
          }
          .qual-heading {
            margin-top: 0;
          }
        }
        @media (max-width: 639px) {
          .std-item {
            grid-template-columns: 1fr;
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
}
