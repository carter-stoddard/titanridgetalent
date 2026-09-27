"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CareersCTA() {
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
      className="careers-cta tr-section relative w-full"
      aria-labelledby="careers-cta-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)", paddingTop: 0 }}
    >
      <div className="tr-container">
        <div className="careers-cta-grid">
          <div ref={contentRef} className="careers-cta-content">
            <p className="tr-eyebrow" data-reveal>
              Don&apos;t See It?
            </p>
            <h2
              id="careers-cta-heading"
              className="tr-h2"
              data-reveal
              style={{ marginTop: "20px", color: "var(--tr-navy)" }}
            >
              The right role might be one conversation away
            </h2>
            <p className="tr-body" data-reveal style={{ color: "var(--tr-ink)", marginTop: "24px", maxWidth: "44ch" }}>
              Send us your resume and tell us what you&apos;re looking for.
              We&apos;ll keep you in mind as new searches come in.
            </p>
            <div className="careers-cta-actions" data-reveal>
              <a href="mailto:support@titanridgetalent.com" className="tr-btn tr-btn-gold">
                Send Your Resume
              </a>
              <Link href="/contact?role=professional" className="tr-btn tr-btn-ghost-dark">
                Contact Us
              </Link>
            </div>
          </div>

          <div ref={mediaRef} className="careers-cta-media" style={{ opacity: 0 }}>
            <img src="/images/mountain-summit-sunrise-start-the-conversation-recruiting.webp" alt="" aria-hidden="true" className="careers-cta-img" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .careers-cta-grid {
          display: grid;
          grid-template-columns: minmax(0, 6fr) minmax(0, 5fr);
          gap: clamp(32px, 6vw, 96px);
          align-items: center;
        }
        .careers-cta-actions {
          margin-top: 36px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .careers-cta-media {
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: var(--tr-cream-deep);
        }
        .careers-cta-img {
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
          .careers-cta-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .careers-cta-media {
            aspect-ratio: 16 / 11;
          }
        }
        @media (max-width: 767px) {
          .careers-cta-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
