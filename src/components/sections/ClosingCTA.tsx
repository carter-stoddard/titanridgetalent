"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { JOBS_VISIBLE } from "@/lib/features";

gsap.registerPlugin(ScrollTrigger);

export default function ClosingCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: "top 72%", once: true } });
      tl.fromTo(mediaRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }, 0);
      const items = contentRef.current?.querySelectorAll<HTMLElement>("[data-reveal]") ?? [];
      tl.fromTo(items, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.75, ease: "power2.out", stagger: 0.09 }, 0.1);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="closing tr-section relative"
      aria-labelledby="closing-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)" }}
    >
      <div className="tr-container">
        <div className="closing-grid">
          <div ref={contentRef} className="closing-content">
            <p className="tr-eyebrow" data-reveal>
              Ready to Climb
            </p>
            <h2 id="closing-heading" className="tr-h2" data-reveal style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
              The Right Role is Out There
            </h2>
            <p className="tr-body" data-reveal style={{ color: "var(--tr-ink)", marginTop: "24px", maxWidth: "44ch" }}>
              Browse open positions and take the first step. Or if you&apos;re looking to build a team, let&apos;s talk.
            </p>
            <div className="closing-actions" data-reveal>
              <a href={JOBS_VISIBLE ? "/jobs" : "/careers"} className="tr-btn tr-btn-gold">
                Find a Job
              </a>
              <a href="/contact?role=company" className="tr-btn tr-btn-ghost-dark">
                Find Talent
              </a>
            </div>
          </div>

          <div ref={mediaRef} className="closing-media" style={{ opacity: 0 }}>
            <img src="/images/mountain-peak-sunrise-career-opportunities-titan-ridge.webp" alt="Mountain peak emerging through fog at sunrise" className="closing-img" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .closing-grid {
          display: grid;
          grid-template-columns: minmax(0, 6fr) minmax(0, 5fr);
          gap: clamp(32px, 6vw, 96px);
          align-items: center;
        }
        .closing-actions {
          margin-top: 36px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .closing-media {
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: var(--tr-cream-deep);
        }
        .closing-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 40%;
          filter: saturate(0.9);
        }
        [data-reveal] {
          opacity: 0;
        }
        @media (max-width: 1023px) {
          .closing-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .closing-media {
            aspect-ratio: 16 / 11;
          }
        }
        @media (max-width: 767px) {
          .closing-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
