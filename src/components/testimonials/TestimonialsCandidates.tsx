"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const candidates = [
  {
    quote:
      "I wasn't even actively looking. Adrian reached out, we had a real conversation, and he actually listened. Two months later I was in a role that fit better than anything I'd found on my own in two years of searching.",
    initials: "JS",
    name: "Jessica S.",
    title: "Logistics Manager",
  },
  {
    quote:
      "Every recruiter I'd dealt with before sent me roles that had nothing to do with what I was looking for. Titan Ridge actually read my resume, asked the right questions, and only reached out when they had something that made sense. That alone was a revelation.",
    initials: "TM",
    name: "Thomas M.",
    title: "Operations Supervisor",
  },
  {
    quote:
      "The process was straightforward and honest. They told me what to expect, kept me updated throughout, and when the offer came it was exactly what we'd talked about. No surprises. That's all anyone wants from a recruiter.",
    initials: "AP",
    name: "Amanda P.",
    title: "HR Business Partner",
  },
];

export default function TestimonialsCandidates() {
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
      className="testimonials-candidates tr-section relative w-full"
      aria-labelledby="candidates-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)", paddingTop: 0 }}
    >
      <div className="tr-container">
        <div ref={headRef} className="candidates-head" style={{ opacity: 0 }}>
          <p className="tr-eyebrow">From Our Candidates</p>
          <h2 id="candidates-heading" className="tr-h2" style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
            What Job Seekers Say
          </h2>
          <p className="tr-body" style={{ color: "var(--tr-ink)", marginTop: "24px" }}>
            From skilled tradespeople to administrative professionals, these are
            the people who trusted us to find them the right role.
          </p>
        </div>

        <ul className="candidates-grid">
          {candidates.map((t, i) => (
            <li
              key={t.name}
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              className="candidate-item"
              style={{ opacity: 0 }}
            >
              <p className="candidate-label font-display">Candidate</p>
              <p className="candidate-quote font-body">{t.quote}</p>
              <div className="candidate-attr">
                <span className="candidate-name font-display">{t.name}</span>
                <span className="candidate-dot" aria-hidden="true" />
                <span className="candidate-title font-display">{t.title}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .candidates-grid {
          list-style: none;
          margin: clamp(40px, 5vw, 72px) 0 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: clamp(32px, 6vw, 96px);
        }
        .candidate-item {
          padding: 40px 0;
          border-bottom: 1px solid rgba(20, 31, 49, 0.14);
        }
        .candidate-item:nth-child(-n + 2) {
          padding-top: 0;
        }
        .candidate-label {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--tr-gold-text);
        }
        .candidate-quote {
          margin-top: 16px;
          font-size: 19px;
          line-height: 1.65;
          color: var(--tr-navy);
          text-wrap: pretty;
        }
        .candidate-attr {
          margin-top: 24px;
          display: flex;
          align-items: baseline;
          gap: 12px;
          flex-wrap: wrap;
        }
        .candidate-name {
          font-weight: 700;
          font-size: 17px;
          color: var(--tr-navy);
        }
        .candidate-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--tr-gold);
          transform: translateY(-3px);
        }
        .candidate-title {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--tr-gold-text);
        }
        @media (max-width: 1023px) {
          .candidates-grid {
            grid-template-columns: 1fr;
          }
          .candidate-item {
            padding: 32px 0;
          }
          .candidate-item:nth-child(-n + 2) {
            padding-top: 32px;
          }
          .candidate-item:first-child {
            padding-top: 0;
          }
          .candidate-quote {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
}
