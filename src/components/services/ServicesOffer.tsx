"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Add additional services by appending to this array; the list auto-flows.
const services = [
  {
    number: "01",
    title: "Temporary Staffing",
    description:
      "Short-term placements for peak demand, seasonal surges, or coverage gaps. Vetted candidates ready to contribute from day one.",
  },
  {
    number: "02",
    title: "Temp-to-Hire",
    description:
      "Start temporary, convert when you're confident. Evaluate fit before you commit, we handle the transition when you're ready.",
  },
  {
    number: "03",
    title: "Direct Hire",
    description:
      "Permanent placement from day one. We identify, vet, and deliver. You make the offer. We stay accountable after.",
  },
  {
    number: "04",
    title: "Confidential Searches",
    description:
      "Discreet recruitment for sensitive roles. We protect your organization's privacy throughout the entire search process.",
  },
  {
    number: "05",
    title: "Professional Search",
    description:
      "Administrative and white-collar placement across HR, finance, administration, technology, and sales. Same relationship-first process, applied at every level.",
  },
  {
    number: "06",
    title: "High-Volume Manufacturing Support",
    description:
      "Scalable staffing solutions for production environments with large or rapid headcount needs. Built for operations that can't afford to slow down.",
  },
];

export default function ServicesOffer() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.fromTo(
        headRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
        0
      );

      tl.fromTo(
        rowsRef.current.filter(Boolean),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
          stagger: 0.08,
        },
        0.15
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="services-offer tr-section relative"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)" }}
    >
      <div className="tr-container">
        <div ref={headRef} className="services-head" style={{ opacity: 0 }}>
          <p className="tr-eyebrow">Staffing Solutions</p>
        </div>

        <ul className="services-list">
          {services.map((s, i) => (
            <li
              key={s.number}
              ref={(el) => {
                rowsRef.current[i] = el;
              }}
              className="service-row"
              style={{ opacity: 0 }}
            >
              <div className="service-head">
                <p className="service-number font-display">Service {s.number}</p>
                <h2 className="service-title font-display">{s.title}</h2>
              </div>
              <p className="tr-body service-desc" style={{ color: "var(--tr-ink)" }}>
                {s.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .services-list {
          list-style: none;
          margin: clamp(32px, 4vw, 48px) 0 0;
          padding: 0;
        }
        .service-row {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
          gap: clamp(24px, 4vw, 64px);
          align-items: start;
          padding: clamp(28px, 3vw, 40px) 0;
          border-bottom: 1px solid rgba(20, 31, 49, 0.14);
        }
        .service-row:first-child {
          padding-top: 8px;
        }
        .service-number {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--tr-gold-text);
        }
        .service-title {
          margin-top: 10px;
          font-weight: 600;
          font-size: clamp(24px, 2.4vw, 34px);
          line-height: 1.05;
          text-transform: uppercase;
          letter-spacing: -0.005em;
          color: var(--tr-navy);
        }
        .service-desc {
          max-width: 60ch;
        }

        @media (max-width: 1023px) {
          .service-row {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
      `}</style>
    </section>
  );
}
