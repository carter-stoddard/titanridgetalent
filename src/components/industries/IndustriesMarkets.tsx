"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { JOBS_VISIBLE } from "@/lib/features";

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesMarkets() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.fromTo(
        leftRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        0
      );

      tl.fromTo(
        rightRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        0.12
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="industries-markets tr-section relative"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)" }}
    >
      <div className="tr-container">
        <div className="markets-grid">
          {/* LEFT — Industrial */}
          <div ref={leftRef} className="markets-col" style={{ opacity: 0 }}>
            <p className="tr-eyebrow">Track One</p>
            <h2 className="tr-h2" style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
              Industrial
            </h2>
            <p className="tr-body markets-body" style={{ color: "var(--tr-ink)" }}>
              We&apos;ve spent years working alongside plant managers, operations
              leads, and skilled tradespeople. We know what good looks like on a
              job site, and we know the difference between a candidate who
              looks right on paper and one who&apos;ll actually last.
            </p>
            {JOBS_VISIBLE && (
              <div className="markets-cta">
                <a href="/jobs" className="tr-btn tr-btn-gold">
                  See Industrial Roles
                </a>
              </div>
            )}
          </div>

          {/* RIGHT — Administrative */}
          <div ref={rightRef} className="markets-col" style={{ opacity: 0 }}>
            <p className="tr-eyebrow">Track Two</p>
            <h2 className="tr-h2" style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
              Administrative
            </h2>
            <p className="tr-body markets-body" style={{ color: "var(--tr-ink)" }}>
              We&apos;ve placed executives, HR leaders, and administrative
              professionals across industries. We understand what organizations
              need at every level, and we know how to find the candidates who
              don&apos;t just fill the role but elevate the team around them.
            </p>
            {JOBS_VISIBLE && (
              <div className="markets-cta">
                <a href="/jobs" className="tr-btn tr-btn-gold">
                  See Administrative Roles
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .markets-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: clamp(32px, 6vw, 96px);
          align-items: start;
        }
        .markets-body {
          margin-top: 24px;
        }
        .markets-figure {
          font-weight: 700;
          font-size: clamp(40px, 4.2vw, 60px);
          line-height: 0.95;
          letter-spacing: -0.02em;
          color: var(--tr-navy);
          font-variant-numeric: tabular-nums;
        }
        .markets-label {
          margin-top: 12px;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--tr-gold-text);
          line-height: 1.35;
        }
        .markets-cta {
          margin-top: clamp(32px, 4vw, 48px);
        }

        @media (max-width: 1023px) {
          .markets-grid {
            grid-template-columns: 1fr;
            gap: clamp(56px, 8vw, 72px);
          }
        }
      `}</style>
    </section>
  );
}
