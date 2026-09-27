"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { JOBS_VISIBLE } from "@/lib/features";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsClosing() {
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
      className="testimonials-closing tr-section relative w-full"
      aria-labelledby="testimonials-closing-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)" }}
    >
      <div className="tr-container">
        <div className="tclosing-grid">
          <div ref={contentRef} className="tclosing-content">
            <p className="tr-eyebrow" data-reveal>
              Your Turn
            </p>
            <h2
              id="testimonials-closing-heading"
              className="tr-h2"
              data-reveal
              style={{ marginTop: "20px", color: "var(--tr-navy)" }}
            >
              Ready to Be the Next Success Story?
            </h2>
            <p className="tr-body" data-reveal style={{ color: "var(--tr-ink)", marginTop: "24px", maxWidth: "44ch" }}>
              Whether you&apos;re hiring or looking, let&apos;s have a real
              conversation.
            </p>
            <div className="tclosing-actions" data-reveal>
              <a href={JOBS_VISIBLE ? "/jobs" : "/careers"} className="tr-btn tr-btn-gold">
                Find a Job
              </a>
              <Link href="/contact?role=company" className="tr-btn tr-btn-ghost-dark">
                Find Talent
              </Link>
            </div>
          </div>

          <div ref={mediaRef} className="tclosing-media" style={{ opacity: 0 }}>
            <img
              src="/images/client-testimonials-titan-ridge-talent-recruiting.webp"
              alt=""
              aria-hidden="true"
              className="tclosing-img"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .tclosing-grid {
          display: grid;
          grid-template-columns: minmax(0, 6fr) minmax(0, 5fr);
          gap: clamp(32px, 6vw, 96px);
          align-items: center;
        }
        .tclosing-actions {
          margin-top: 36px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .tclosing-media {
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: var(--tr-cream-deep);
        }
        .tclosing-img {
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
          .tclosing-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .tclosing-media {
            aspect-ratio: 16 / 11;
          }
        }
        @media (max-width: 767px) {
          .tclosing-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
