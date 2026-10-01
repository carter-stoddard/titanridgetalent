"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
      });
      tl.fromTo(mediaRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }, 0);
      const items = textRef.current?.querySelectorAll<HTMLElement>("[data-reveal]") ?? [];
      tl.fromTo(items, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.08 }, 0.1);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about-story tr-section relative"
      aria-labelledby="about-story-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)" }}
    >
      <div className="tr-container">
        <div className="about-story-grid">
          {/* LEFT — Text */}
          <div ref={textRef} className="about-story-text">
            <p className="tr-eyebrow" data-reveal>
              Who We Are
            </p>

            <h2 id="about-story-heading" className="tr-h2" data-reveal style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
              Built on Experience. Driven by Standards
            </h2>

            <div className="about-story-copy" data-reveal>
              <p className="tr-body" style={{ color: "var(--tr-ink)" }}>
                Titan Ridge Talent is dedicated to connecting companies and job
                seekers through mutually beneficial relationships.
              </p>
              <p className="tr-body" style={{ color: "var(--tr-ink)" }}>
                Our philosophy is simple: we&apos;re not here to choose
                someone&apos;s next job for them. We listen, understand what
                they&apos;re looking for, and use our recruiting expertise to
                guide candidates toward opportunities that align with their
                skills, experience, and career goals.
              </p>
              <p className="tr-body" style={{ color: "var(--tr-ink)" }}>
                From individuals just starting their careers to seasoned
                professionals, we connect candidates with companies and
                opportunities where their experience, work values, and goals
                can align for the long term.
              </p>
            </div>

            <div className="about-story-actions" data-reveal>
              <Link href="/contact" className="tr-btn tr-btn-gold">
                Start the Conversation
              </Link>
            </div>
          </div>

          {/* RIGHT — Contained image */}
          <div ref={mediaRef} className="about-story-media" style={{ opacity: 0 }}>
            <img
              src="/images/titan-ridge-recruiters-relationship-first-hiring.webp"
              alt="Cinematic ridge at golden hour — the Titan Ridge story"
              className="about-story-img"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-story-grid {
          display: grid;
          grid-template-columns: minmax(0, 6fr) minmax(0, 5fr);
          gap: clamp(32px, 6vw, 96px);
          align-items: center;
        }
        .about-story-copy {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .about-story-actions {
          margin-top: 36px;
        }
        .about-story-media {
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: var(--tr-cream-deep);
        }
        .about-story-img {
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
          .about-story-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .about-story-media {
            aspect-ratio: 16 / 11;
          }
        }
      `}</style>
    </section>
  );
}
