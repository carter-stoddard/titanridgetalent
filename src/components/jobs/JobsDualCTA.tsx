"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function JobsDualCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const colsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        colsRef.current.filter(Boolean),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const setCol = (i: number) => (el: HTMLDivElement | null) => {
    colsRef.current[i] = el;
  };

  return (
    <section
      ref={sectionRef}
      className="jobs-dual-cta tr-section relative w-full"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)", paddingTop: 0 }}
    >
      <div className="tr-container">
        <div className="jobs-dual-grid">
          {/* LEFT — Employers */}
          <div ref={setCol(0)} className="jobs-dual-col" style={{ opacity: 0 }}>
            <p className="tr-eyebrow">For Employers</p>
            <h3 className="jobs-dual-title font-display">Looking to Hire?</h3>
            <p className="tr-body" style={{ color: "var(--tr-ink)", marginTop: "18px", maxWidth: "44ch" }}>
              If you have a role to fill, industrial or administrative, we want
              to hear about it. Tell us what you need and we&apos;ll tell you
              honestly whether we can help.
            </p>
            <div className="jobs-dual-actions">
              <Link href="/contact?role=company" className="tr-btn tr-btn-gold">
                Find Talent
              </Link>
            </div>
          </div>

          {/* RIGHT — Candidates */}
          <div ref={setCol(1)} className="jobs-dual-col" style={{ opacity: 0 }}>
            <p className="tr-eyebrow">For Candidates</p>
            <h3 className="jobs-dual-title font-display">Don&apos;t See the Right Role?</h3>
            <p className="tr-body" style={{ color: "var(--tr-ink)", marginTop: "18px", maxWidth: "44ch" }}>
              Send us your resume directly. We work active searches across
              multiple sectors and we keep strong candidates in mind for roles
              as they come in. The right opportunity might be one conversation
              away.
            </p>
            <div className="jobs-dual-actions">
              <a href="mailto:support@titanridgetalent.com" className="tr-btn tr-btn-ghost-dark">
                Send Your Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .jobs-dual-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: clamp(32px, 6vw, 96px);
          align-items: start;
        }
        .jobs-dual-title {
          margin-top: 20px;
          font-weight: 600;
          text-transform: uppercase;
          font-size: clamp(26px, 2.4vw, 34px);
          line-height: 1;
          letter-spacing: 0.01em;
          color: var(--tr-navy);
        }
        .jobs-dual-actions {
          margin-top: 32px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        @media (max-width: 1023px) {
          .jobs-dual-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .jobs-dual-col {
            padding: 40px 0;
            border-top: 1px solid rgba(20, 31, 49, 0.14);
          }
          .jobs-dual-col:last-child {
            border-bottom: 1px solid rgba(20, 31, 49, 0.14);
          }
        }
      `}</style>
    </section>
  );
}
