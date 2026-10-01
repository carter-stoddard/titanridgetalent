"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const markets = [
  {
    name: "Industrial",
    body:
      "We've spent years working alongside plant managers, operations leads, and skilled tradespeople. We know what good looks like on a job site — and the difference between a candidate who looks right on paper and one who'll actually last.",
    image: "/images/cnc-machine-operator-manufacturing-staffing-southern-california.webp",
    alt: "Operator at a CNC machine on a manufacturing floor",
  },
  {
    name: "Administrative",
    body:
      "We've placed executives, HR leaders, and administrative professionals across industries. We know how to find candidates who don't just fill the role but elevate the team around them.",
    image: "/images/hiring-manager-employer-staffing-solutions-orange-county.webp",
    alt: "Smiling professional holding a laptop in a modern office",
  },
];

const scope = ["Manufacturing", "Food & Beverage", "Pharmaceuticals", "Nutraceuticals", "Construction", "Logistics"];
const divisions = ["Administrative", "Skilled-Trade", "Engineering"];

export default function TwoMarkets() {
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
          stagger: 0.07,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="markets tr-section relative"
      aria-labelledby="markets-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)" }}
    >
      <div className="tr-container">
        <h2 id="markets-heading" className="tr-h2" data-reveal style={{ color: "var(--tr-navy)" }}>
          Two Markets. One Standard
        </h2>

        <div className="markets-grid">
          {markets.map((m) => (
            <article key={m.name} className="market" data-reveal>
              <div className="market-media">
                <img src={m.image} alt={m.alt} className="market-img" />
              </div>
              <h3 className="market-name font-display">{m.name}</h3>
              <p className="tr-body" style={{ color: "var(--tr-ink)", marginTop: "14px" }}>
                {m.body}
              </p>
            </article>
          ))}
        </div>

        <dl className="markets-facts">
          <div className="fact" data-reveal>
            <dt className="fact-label font-display">Industry Scope</dt>
            <dd className="fact-value">
              <ul className="fact-list">
                {scope.map((s) => (
                  <li key={s} className="font-display">
                    {s}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="fact" data-reveal>
            <dt className="fact-label font-display">Recruitment Divisions</dt>
            <dd className="fact-value">
              <ul className="fact-list">
                {divisions.map((s) => (
                  <li key={s} className="font-display">
                    {s}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>

      <style jsx>{`
        .markets-grid {
          margin-top: clamp(40px, 5vw, 64px);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px, 5vw, 80px);
        }
        .market-media {
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: var(--tr-cream-deep);
        }
        .market-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 25%;
          filter: saturate(0.9);
        }
        .market-name {
          margin-top: 26px;
          font-weight: 600;
          text-transform: uppercase;
          font-size: clamp(26px, 2.6vw, 36px);
          line-height: 1;
          letter-spacing: 0.04em;
          color: var(--tr-navy);
        }
        .markets-facts {
          margin: clamp(48px, 6vw, 80px) 0 0;
          border-top: 1px solid rgba(20, 31, 49, 0.14);
        }
        .fact {
          display: grid;
          grid-template-columns: minmax(0, 3fr) minmax(0, 9fr);
          gap: clamp(16px, 3vw, 48px);
          align-items: baseline;
          padding: 24px 0;
          border-bottom: 1px solid rgba(20, 31, 49, 0.14);
        }
        .fact-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--tr-gold-text);
        }
        .fact-value {
          margin: 0;
        }
        .fact-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 10px 32px;
        }
        .fact-list li {
          font-weight: 600;
          font-size: clamp(19px, 1.7vw, 23px);
          line-height: 1.2;
          color: var(--tr-navy);
        }
        [data-reveal] {
          opacity: 0;
        }
        @media (max-width: 767px) {
          .markets-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .fact {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
