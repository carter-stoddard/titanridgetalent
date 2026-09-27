"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const employers = [
  {
    quote:
      "We'd worked with three other agencies before Titan Ridge. None of them took the time to actually understand our operation. Within two weeks they sent us one candidate, the right one. He's still with us eighteen months later.",
    initials: "MR",
    name: "Michael R.",
    title: "Operations Director",
  },
  {
    quote:
      "What separates Titan Ridge is accountability. They didn't disappear after the placement. They checked in, they followed up, and when we had a concern they addressed it directly. That's rare in this industry and it's why we keep coming back.",
    initials: "DK",
    name: "David K.",
    title: "VP of Human Resources",
  },
  {
    quote:
      "I've hired through staffing agencies my entire career. Most of them treat it like a transaction. Titan Ridge treated it like a partnership. The difference shows in the quality of every candidate they've sent our way.",
    initials: "RL",
    name: "Rachel L.",
    title: "Plant Manager",
  },
];

export default function TestimonialsEmployers() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
      });
      tl.fromTo(headRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, 0);
      tl.fromTo(
        itemsRef.current.filter(Boolean),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.12 },
        0.15
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="testimonials-employers tr-section relative w-full"
      aria-labelledby="employers-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)" }}
    >
      <div className="tr-container">
        <div ref={headRef} className="employers-head" style={{ opacity: 0 }}>
          <p className="tr-eyebrow">From Our Clients</p>
          <h2 id="employers-heading" className="tr-h2" style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
            What Hiring Managers Say
          </h2>
          <p className="tr-body" style={{ color: "var(--tr-ink)", marginTop: "24px" }}>
            From plant managers to HR directors, these are the people who
            trusted us to find the right fit.
          </p>
        </div>

        <ul className="employers-grid">
          {employers.map((t, i) => (
            <li
              key={t.name}
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              className="employer-item"
              style={{ opacity: 0 }}
            >
              <p className="employer-label font-display">Employer</p>
              <p className="employer-quote font-body">{t.quote}</p>
              <div className="employer-attr">
                <span className="employer-name font-display">{t.name}</span>
                <span className="employer-dot" aria-hidden="true" />
                <span className="employer-title font-display">{t.title}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .employers-grid {
          list-style: none;
          margin: clamp(40px, 5vw, 72px) 0 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: clamp(32px, 6vw, 96px);
        }
        .employer-item {
          padding: 40px 0;
          border-bottom: 1px solid rgba(20, 31, 49, 0.14);
        }
        .employer-item:nth-child(-n + 2) {
          padding-top: 0;
        }
        .employer-label {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--tr-gold-text);
        }
        .employer-quote {
          margin-top: 16px;
          font-size: 19px;
          line-height: 1.65;
          color: var(--tr-navy);
          text-wrap: pretty;
        }
        .employer-attr {
          margin-top: 24px;
          display: flex;
          align-items: baseline;
          gap: 12px;
          flex-wrap: wrap;
        }
        .employer-name {
          font-weight: 700;
          font-size: 17px;
          color: var(--tr-navy);
        }
        .employer-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--tr-gold);
          transform: translateY(-3px);
        }
        .employer-title {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--tr-gold-text);
        }
        @media (max-width: 1023px) {
          .employers-grid {
            grid-template-columns: 1fr;
          }
          .employer-item {
            padding: 32px 0;
          }
          .employer-item:nth-child(-n + 2) {
            padding-top: 32px;
          }
          .employer-item:first-child {
            padding-top: 0;
          }
          .employer-quote {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
}
