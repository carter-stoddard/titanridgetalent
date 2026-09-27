"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsFeatured() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
      });
      tl.fromTo(leftColRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, 0);
      tl.fromTo(rightColRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0.15);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="testimonials-featured tr-section relative w-full"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)" }}
    >
      <div className="tr-container">
        <div className="featured-grid">
          {/* LEFT — attribution */}
          <div ref={leftColRef} className="featured-head" style={{ opacity: 0 }}>
            <p className="tr-eyebrow">Employer</p>
            <p className="featured-head-name font-display">Sarah M.</p>
            <p className="featured-head-title font-display">VP of Operations</p>
          </div>

          {/* RIGHT — Quote */}
          <div ref={rightColRef} className="featured-quote" style={{ opacity: 0 }}>
            <span className="featured-mark font-display" aria-hidden="true">
              &ldquo;
            </span>
            <p className="featured-text font-body">
              We&apos;d tried four agencies before Titan Ridge. None of them
              took the time to understand what we actually needed. Adrian did.
              He asked questions nobody else had asked, told us when a
              candidate wasn&apos;t right, and when he finally put someone
              forward, that person has been with us for two years.
              That&apos;s the standard we hold every partner to now.
            </p>

            <div className="featured-attr">
              <span className="featured-name font-display">Sarah M.</span>
              <span className="featured-dot" aria-hidden="true" />
              <span className="featured-title font-display">VP of Operations</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .featured-grid {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
          gap: clamp(40px, 6vw, 96px);
          align-items: start;
        }
        .featured-head-name {
          margin-top: 20px;
          font-weight: 700;
          font-size: 28px;
          line-height: 1.1;
          color: var(--tr-navy);
        }
        .featured-head-title {
          margin-top: 8px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--tr-gold-text);
        }
        .featured-quote {
          position: relative;
          padding-top: clamp(24px, 3vw, 48px);
          padding-left: clamp(0px, 2vw, 24px);
        }
        .featured-mark {
          position: absolute;
          top: -0.15em;
          left: -0.1em;
          font-weight: 900;
          font-size: clamp(140px, 16vw, 220px);
          line-height: 1;
          color: rgba(204, 166, 98, 0.18);
          pointer-events: none;
          user-select: none;
        }
        .featured-text {
          position: relative;
          font-size: clamp(24px, 2.6vw, 36px);
          line-height: 1.4;
          color: var(--tr-navy);
          max-width: 24em;
          text-wrap: pretty;
        }
        .featured-attr {
          margin-top: 32px;
          display: flex;
          align-items: baseline;
          gap: 12px;
          flex-wrap: wrap;
        }
        .featured-name {
          font-weight: 700;
          font-size: 17px;
          color: var(--tr-navy);
        }
        .featured-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--tr-gold);
          transform: translateY(-3px);
        }
        .featured-title {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--tr-gold-text);
        }
        @media (max-width: 1023px) {
          .featured-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .featured-quote {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
