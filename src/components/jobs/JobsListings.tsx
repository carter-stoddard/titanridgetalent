"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function JobsListings() {
  const sectionRef = useRef<HTMLElement>(null);
  const textItemsRef = useRef<(HTMLElement | null)[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardItemsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      };

      gsap.fromTo(
        textItemsRef.current.filter(Boolean),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: trigger,
        }
      );

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.25,
          scrollTrigger: trigger,
        }
      );

      gsap.fromTo(
        cardItemsRef.current.filter(Boolean),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.08,
          delay: 0.55,
          scrollTrigger: trigger,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const setText = (i: number) => (el: HTMLElement | null) => {
    textItemsRef.current[i] = el;
  };
  const setCardItem = (i: number) => (el: HTMLElement | null) => {
    cardItemsRef.current[i] = el;
  };

  return (
    <section
      ref={sectionRef}
      className="jobs-listings tr-section relative w-full"
      aria-labelledby="jobs-listings-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)" }}
    >
      <div className="tr-container">
        <div className="jobs-listings-grid">
          <div className="jobs-listings-head">
            <p ref={setText(0)} className="tr-eyebrow" style={{ opacity: 0 }}>
              Current Openings
            </p>

            <h2
              id="jobs-listings-heading"
              ref={setText(1)}
              className="tr-h2"
              style={{ marginTop: "20px", color: "var(--tr-navy)", opacity: 0 }}
            >
              Roles We&apos;re Actively Filling
            </h2>

            <p
              ref={setText(2)}
              className="tr-body"
              style={{ color: "var(--tr-ink)", marginTop: "24px", maxWidth: "44ch", opacity: 0 }}
            >
              We place candidates across industrial and administrative sectors. Browse
              our current openings on our jobs board. Every listing is a role
              we&apos;re actively working with a real client to fill.
            </p>
          </div>

          <div ref={cardRef} className="jobs-board" style={{ opacity: 0 }}>
            {/* Ridge icon */}
            <svg
              ref={setCardItem(0) as (el: SVGSVGElement | null) => void}
              viewBox="0 0 1000.58 481.49"
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: "48px", width: "auto", opacity: 0 }}
              fill="var(--tr-gold)"
              aria-hidden="true"
            >
              <path d="M703.61,226.61l-88.07,103.72,100.82,115.73h-296.12l217-246.81L502.75,0l-143.14,222.18-36.68-21.41L78.9,481.49l182.88-.08,68.19-85.58,90.3-.25-69.15,85.87,570.55-.25-218.28-254.6h.21ZM246.5,445.76l-89.48.25,173.82-202.51,36.85,28.44L503.33,58.92l27.12,43.97-62.85,154.81,40.95-27.87,21.9,38.67-83.97,95.64-135.06.41-64.92,81.19h0ZM754.12,445.76l-91.75-116.51,39.96-48.53,146.74,165.04h-94.94Z" />
            </svg>

            <p
              ref={setCardItem(1)}
              className="jobs-board-title font-display"
              style={{ opacity: 0 }}
            >
              View All Open Positions
            </p>

            <p
              ref={setCardItem(2)}
              className="tr-body"
              style={{ color: "var(--tr-ink)", marginTop: "14px", maxWidth: "44ch", opacity: 0 }}
            >
              Our full job board is hosted externally. Click below to browse
              current openings. New roles added regularly.
            </p>

            <div ref={setCardItem(3)} className="jobs-board-actions" style={{ opacity: 0 }}>
              <a href="#" className="tr-btn tr-btn-gold">
                Find a Job
              </a>
            </div>

            <p
              ref={setCardItem(4)}
              className="jobs-board-note font-body"
              style={{ opacity: 0 }}
            >
              Opens in a new tab, powered by our ATS platform
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .jobs-listings-grid {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
          gap: clamp(32px, 6vw, 96px);
          align-items: start;
        }
        .jobs-board {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .jobs-board-title {
          margin-top: 28px;
          font-weight: 600;
          text-transform: uppercase;
          font-size: clamp(26px, 2.4vw, 34px);
          line-height: 1;
          letter-spacing: 0.01em;
          color: var(--tr-navy);
        }
        .jobs-board-actions {
          margin-top: 32px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          width: 100%;
        }
        .jobs-board-note {
          margin-top: 16px;
          font-size: 17px;
          line-height: 1.6;
          color: var(--tr-ink);
        }
        @media (max-width: 1023px) {
          .jobs-listings-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}
