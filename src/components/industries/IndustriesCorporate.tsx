"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { JOBS_VISIBLE } from "@/lib/features";

gsap.registerPlugin(ScrollTrigger);

const sectors = [
  { name: "Human Resources", descriptor: "HR directors, talent acquisition leads, CHROs, HR business partners" },
  { name: "Executive Search", descriptor: "C-suite, VP level, director-level leadership across functions" },
  { name: "Finance", descriptor: "CFOs, controllers, financial analysts, accounting managers" },
  { name: "Administration", descriptor: "Executive assistants, office managers, operations coordinators" },
  { name: "Technology", descriptor: "IT managers, systems administrators, technology directors" },
  { name: "Sales", descriptor: "Sales directors, business development managers, account executives" },
];

export default function IndustriesCorporate() {
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
      id="corporate"
      ref={sectionRef}
      className="industries-corporate tr-section relative"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)", paddingTop: 0 }}
    >
      <div className="tr-container">
        <div className="corporate-grid">
          {/* LEFT — Image */}
          <div ref={mediaRef} className="corporate-media" style={{ opacity: 0 }}>
            <img
              src="/images/administrative-staffing-modern-office-southern-california.webp"
              alt="Modern office interior with white desks and computers"
              className="corporate-img"
            />
          </div>

          {/* RIGHT — Content */}
          <div ref={contentRef} className="corporate-content" style={{ opacity: 0 }}>
            <p className="tr-eyebrow">Administrative Recruiting</p>
            <h2 className="tr-h2" style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
              Precision Placement at Every Level
            </h2>
            <p className="tr-body corporate-body" style={{ color: "var(--tr-ink)" }}>
              Administrative recruiting demands a different kind of rigor. HR
              directors and executive leadership teams don&apos;t have time
              for candidates who almost fit. They need someone who understands
              the culture, can operate at the required level from day one,
              and has been thoroughly vetted before the first conversation.
              That&apos;s the standard we hold ourselves to on every administrative
              search.
            </p>
            <p className="corporate-sublabel font-display">Sectors We Cover</p>
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
              <div className="corporate-cta">
                <a href="/jobs" className="tr-btn tr-btn-gold">
                  Browse Administrative Roles
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .corporate-grid {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
          gap: clamp(32px, 6vw, 96px);
          align-items: center;
        }
        .corporate-body {
          margin-top: 24px;
        }
        .corporate-sublabel {
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
        .corporate-cta {
          margin-top: clamp(32px, 4vw, 48px);
        }
        .corporate-media {
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: var(--tr-cream-deep);
        }
        .corporate-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: saturate(0.9);
        }

        @media (max-width: 1023px) {
          .corporate-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .corporate-media {
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
