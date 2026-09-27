"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industrial = [
  "Aerospace",
  "Automotive",
  "Food & Beverage",
  "Light Industrial",
  "Manufacturing",
  "Logistics",
  "Skilled Trades",
  "Operations",
  "Warehouse",
];

const corporate = [
  "Human Resources",
  "Executive Search",
  "Finance",
  "Administration",
  "Technology",
  "Sales",
];

const groups = [
  { label: "Industrial", names: industrial },
  { label: "Administrative", names: corporate },
];

export default function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: "top 72%", once: true } });
      tl.fromTo(mediaRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }, 0);
      const items = contentRef.current?.querySelectorAll<HTMLElement>("[data-reveal]") ?? [];
      tl.fromTo(items, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out", stagger: 0.04 }, 0.1);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="industries tr-section relative"
      aria-labelledby="industries-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)" }}
    >
      <div className="tr-container">
        <div className="ind-grid">
          <div ref={mediaRef} className="ind-media" style={{ opacity: 0 }}>
            <img src="/images/plywood-manufacturing-facility-industrial-recruiting.webp" alt="Stacks of plywood inside a factory — where Titan Ridge works" className="ind-img" />
          </div>

          <div ref={contentRef} className="ind-content">
            <p className="tr-eyebrow" data-reveal>
              Where We Work
            </p>
            <h2 id="industries-heading" className="tr-h2" data-reveal style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
              From the Floor to the Boardroom
            </h2>

            <div className="ind-groups">
              {groups.map((g) => (
                <div key={g.label} className="ind-group">
                  <p className="ind-label font-display" data-reveal>
                    {g.label}
                  </p>
                  <ul className="ind-list">
                    {g.names.map((name) => (
                      <li key={name} className="ind-item font-display" data-reveal>
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="ind-cta" data-reveal>
              <Link href="/industries" className="tr-btn tr-btn-ghost-dark">
                See Industries
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ind-grid {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
          gap: clamp(32px, 6vw, 96px);
          align-items: start;
        }
        .ind-media {
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: var(--tr-cream-deep);
        }
        .ind-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: saturate(0.9);
        }
        .ind-groups {
          margin-top: clamp(32px, 4vw, 48px);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(24px, 4vw, 48px);
          padding-top: 8px;
        }
        .ind-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--tr-gold-text);
          margin-bottom: 14px;
        }
        .ind-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .ind-item {
          font-weight: 600;
          font-size: clamp(19px, 1.6vw, 22px);
          line-height: 1.15;
          color: var(--tr-navy);
          padding: 9px 0;
          border-bottom: 1px solid rgba(20, 31, 49, 0.14);
          transition: color 0.25s ease, padding-left 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .ind-item:hover {
          color: var(--tr-gold-text);
          padding-left: 6px;
        }
        .ind-cta {
          margin-top: clamp(32px, 4vw, 48px);
        }
        [data-reveal] {
          opacity: 0;
        }
        @media (max-width: 1023px) {
          .ind-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .ind-media {
            aspect-ratio: 16 / 11;
          }
        }
        @media (max-width: 639px) {
          .ind-groups {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
