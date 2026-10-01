"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { JOBS_VISIBLE } from "@/lib/features";

gsap.registerPlugin(ScrollTrigger);

const sectors = [
  { name: "Aerospace", descriptor: "Production leads, quality engineers, assembly supervisors" },
  { name: "Automotive", descriptor: "Plant managers, production supervisors, tooling leads" },
  { name: "Food & Beverage", descriptor: "Operations managers, quality assurance, food safety leads" },
  { name: "Light Industrial", descriptor: "Warehouse leads, assembly supervisors, shift managers" },
  { name: "Manufacturing", descriptor: "Production supervisors, plant managers, quality leads" },
  { name: "Logistics", descriptor: "Distribution managers, fleet supervisors, supply chain leads" },
  { name: "Skilled Trades", descriptor: "Electricians, welders, machinists, HVAC technicians" },
  { name: "Operations", descriptor: "Operations managers, continuous improvement, safety leads" },
  { name: "Warehouses", descriptor: "Warehouse managers, inventory leads, shipping & receiving supervisors" },
];

export default function IndustriesIndustrial() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const sectorsRef = useRef<(HTMLLIElement | null)[]>([]);

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
        mediaRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
        0
      );

      tl.fromTo(
        contentRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        0.1
      );

      tl.fromTo(
        sectorsRef.current.filter(Boolean),
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.05,
        },
        0.3
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="industrial"
      ref={sectionRef}
      className="industries-industrial tr-section relative"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)", paddingTop: 0 }}
    >
      <div className="tr-container">
        <div className="industrial-grid">
          {/* LEFT — Content */}
          <div ref={contentRef} className="industrial-content" style={{ opacity: 0 }}>
            <p className="tr-eyebrow">Industrial Recruiting</p>
            <h2 className="tr-h2" style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
              We Understand the Work Behind the Job Title
            </h2>
            <p className="tr-body industrial-body" style={{ color: "var(--tr-ink)" }}>
              Industrial recruiting requires more than keyword matching. It
              requires knowing the difference between a candidate who can do
              the job and one who can lead a team through a tough quarter,
              adapt when the operation changes, and stick around long enough
              to make a real impact. We&apos;ve worked this space long enough
              to know the difference, and our clients know it too.
            </p>
            <p className="industrial-sublabel font-display">Sectors We Cover</p>
            <ul className="sectors-list">
              {sectors.map((s, i) => (
                <li
                  key={s.name}
                  ref={(el) => {
                    sectorsRef.current[i] = el;
                  }}
                  className="sector-row"
                  style={{ opacity: 0 }}
                >
                  <p className="sector-name font-display">{s.name}</p>
                  <p className="sector-desc font-body">{s.descriptor}</p>
                </li>
              ))}
            </ul>
            {JOBS_VISIBLE && (
              <div className="industrial-cta">
                <a href="/jobs" className="tr-btn tr-btn-gold">
                  Browse Industrial Roles
                </a>
              </div>
            )}
          </div>

          {/* RIGHT — Image */}
          <div ref={mediaRef} className="industrial-media" style={{ opacity: 0 }}>
            <img
              src="/images/forklift-operator-industrial-staffing-manufacturing-facility.webp"
              alt="Forklift operator moving materials inside a manufacturing facility"
              className="industrial-img"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .industrial-grid {
          display: grid;
          grid-template-columns: minmax(0, 6fr) minmax(0, 5fr);
          gap: clamp(32px, 6vw, 96px);
          align-items: center;
        }
        .industrial-body {
          margin-top: 24px;
        }
        .industrial-sublabel {
          margin-top: clamp(32px, 4vw, 48px);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--tr-gold-text);
        }
        .sectors-list {
          list-style: none;
          margin: 12px 0 0;
          padding: 0;
        }
        .sector-row {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
          gap: 16px 24px;
          align-items: baseline;
          padding: 12px 0;
          border-bottom: 1px solid rgba(20, 31, 49, 0.14);
          transition: padding-left 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .sector-row:hover {
          padding-left: 6px;
        }
        .sector-row:hover .sector-name {
          color: var(--tr-gold-text);
        }
        .sector-name {
          font-weight: 600;
          font-size: clamp(19px, 1.6vw, 22px);
          line-height: 1.15;
          color: var(--tr-navy);
          transition: color 0.25s ease;
        }
        .sector-desc {
          font-size: 17px;
          line-height: 1.55;
          color: var(--tr-ink);
        }
        .industrial-cta {
          margin-top: clamp(32px, 4vw, 48px);
        }
        .industrial-media {
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: var(--tr-cream-deep);
        }
        .industrial-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: saturate(0.9);
        }

        @media (max-width: 1023px) {
          .industrial-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .industrial-media {
            aspect-ratio: 16 / 11;
          }
        }
        @media (max-width: 639px) {
          .sector-row {
            grid-template-columns: 1fr;
            gap: 4px;
          }
        }
      `}</style>
    </section>
  );
}
