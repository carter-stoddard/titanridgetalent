"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MissionStatement() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll<HTMLElement>("[data-reveal]") ?? [];
      gsap.fromTo(
        items,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mission-statement tr-section relative"
      aria-labelledby="mission-statement-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)" }}
    >
      <div className="tr-container">
        <div className="mission-statement-grid">
          {/* LEFT — Eyebrow + headline */}
          <div className="mission-statement-headline">
            <p className="tr-eyebrow" data-reveal>
              Our Mission Statement
            </p>

            <h2
              id="mission-statement-heading"
              className="tr-h2"
              data-reveal
              style={{ marginTop: "20px", color: "var(--tr-navy)" }}
            >
              More than recruiting. A standard
            </h2>
          </div>

          {/* RIGHT — Body copy */}
          <div className="mission-statement-body">
            <p className="tr-body" data-reveal style={{ color: "var(--tr-ink)" }}>
              At Titan Ridge, our mission is to build lasting partnerships by
              connecting great people with the right opportunities. We take a
              relationship-first approach to recruiting&mdash;learning the needs
              of our clients, understanding the goals of our candidates, and
              delivering quality talent built for long-term success.
            </p>

            <p className="tr-body" data-reveal style={{ color: "var(--tr-ink)", marginTop: "20px" }}>
              We believe staffing should be about more than filling positions.
              It should be about strengthening businesses, creating
              opportunities, and building relationships that last.
            </p>

            <div className="mission-badge" data-reveal>
              <span className="mission-badge-icon" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span className="mission-badge-text font-display">Nationwide Staffing</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mission-statement-grid {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
          gap: clamp(40px, 6vw, 96px);
          align-items: start;
        }
        .mission-badge {
          margin-top: 32px;
          display: inline-flex;
          align-items: center;
          gap: 14px;
          background-color: var(--tr-navy);
          border-radius: 9999px;
          padding: 12px 22px 12px 14px;
        }
        .mission-badge-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: var(--tr-gold-text);
          color: var(--tr-navy);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .mission-badge-text {
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--tr-cream);
        }
        [data-reveal] {
          opacity: 0;
        }
        @media (max-width: 1023px) {
          .mission-statement-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
}
