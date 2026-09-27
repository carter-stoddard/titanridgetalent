"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MissionCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%", once: true },
      });
      tl.fromTo(mediaRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }, 0);
      const items = contentRef.current?.querySelectorAll<HTMLElement>("[data-reveal]") ?? [];
      tl.fromTo(items, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.75, ease: "power2.out", stagger: 0.09 }, 0.1);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mission-cta tr-section relative"
      aria-labelledby="mission-cta-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)" }}
    >
      <div className="tr-container">
        <div className="mission-cta-grid">
          <div ref={contentRef} className="mission-cta-content">
            <p className="tr-eyebrow" data-reveal>
              The Standard in Practice
            </p>

            <h2 id="mission-cta-heading" className="tr-h2" data-reveal style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
              Hold us to it
            </h2>

            <p className="tr-body" data-reveal style={{ color: "var(--tr-ink)", marginTop: "24px", maxWidth: "44ch" }}>
              A mission only matters if it shows up in the work. Start a
              conversation and find out.
            </p>

            <div className="mission-cta-actions" data-reveal>
              <Link href="/contact" className="tr-btn tr-btn-gold">
                Start the Conversation
              </Link>
            </div>
          </div>

          <div ref={mediaRef} className="mission-cta-media" style={{ opacity: 0 }}>
            <img src="/images/mountain-summit-sunrise-start-the-conversation-recruiting.webp" alt="" aria-hidden="true" className="mission-cta-img" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .mission-cta-grid {
          display: grid;
          grid-template-columns: minmax(0, 6fr) minmax(0, 5fr);
          gap: clamp(32px, 6vw, 96px);
          align-items: center;
        }
        .mission-cta-actions {
          margin-top: 36px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .mission-cta-media {
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: var(--tr-cream-deep);
        }
        .mission-cta-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: saturate(0.9);
        }
        [data-reveal] {
          opacity: 0;
        }
        @media (max-width: 1023px) {
          .mission-cta-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .mission-cta-media {
            aspect-ratio: 16 / 11;
          }
        }
        @media (max-width: 767px) {
          .mission-cta-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
