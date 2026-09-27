"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "We Talk",
    description:
      "A real conversation. Not a form, not an automated inbox. We learn what you actually need: the role, the culture, the non-negotiables.",
  },
  {
    number: "02",
    title: "We Search",
    description:
      "We go deep into our network. No job board scraping, no bulk submissions. Real vetting, real conversations, real candidates.",
  },
  {
    number: "03",
    title: "We Deliver",
    description:
      "The right person in the right role. We stay accountable after the placement, because we measure success in retention, not volume.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        }
      );

      rowRefs.current.forEach((row) => {
        if (!row) return;
        const content = row.querySelectorAll<HTMLElement>("[data-reveal]");
        const tl = gsap.timeline({
          scrollTrigger: { trigger: row, start: "top 78%", once: true },
        });
        tl.fromTo(content, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.65, ease: "power2.out", stagger: 0.08 }, 0.1);
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="process tr-section relative"
      aria-labelledby="process-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)" }}
    >
      <div className="tr-container">
        <div className="process-grid">
          <div ref={headRef} className="process-head" style={{ opacity: 0 }}>
            <p className="tr-eyebrow">The Process</p>
            <h2 id="process-heading" className="tr-h2" style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
              Simple. Direct. Built on Trust
            </h2>
            <div className="process-cta">
              <Link href="/contact?role=company" className="tr-btn tr-btn-ghost-dark">
                Find Talent
              </Link>
            </div>
          </div>

          <ol className="process-steps">
            {steps.map((step, i) => (
              <li
                key={step.number}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                className="step"
              >
                <span className="step-num font-display" data-reveal>
                  {step.number}
                </span>
                <div className="step-text">
                  <h3 className="step-title font-display" data-reveal>
                    {step.title}
                  </h3>
                  <p className="step-desc font-body" data-reveal>
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <style jsx>{`
        .process-grid {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
          gap: clamp(40px, 6vw, 96px);
          align-items: start;
        }
        .process-cta {
          margin-top: 40px;
        }
        .process-steps {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .step {
          position: relative;
          display: grid;
          grid-template-columns: 96px 1fr;
          gap: clamp(16px, 3vw, 40px);
          padding: clamp(28px, 3vw, 44px) 0;
          border-top: 1px solid rgba(20, 31, 49, 0.14);
        }
        .step:last-child {
          border-bottom: 1px solid rgba(20, 31, 49, 0.14);
        }
        .step-num {
          font-weight: 700;
          font-size: clamp(44px, 5vw, 72px);
          line-height: 0.9;
          letter-spacing: -0.02em;
          color: var(--tr-gold-text);
          font-variant-numeric: tabular-nums;
        }
        .step-title {
          font-weight: 600;
          text-transform: uppercase;
          font-size: clamp(26px, 2.4vw, 34px);
          line-height: 1;
          letter-spacing: 0.01em;
          color: var(--tr-navy);
        }
        .step-desc {
          margin-top: 14px;
          font-size: 18px;
          line-height: 1.75;
          color: var(--tr-ink);
          max-width: 46ch;
        }
        [data-reveal] {
          opacity: 0;
        }
        @media (max-width: 1023px) {
          .process-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 639px) {
          .step {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
}
