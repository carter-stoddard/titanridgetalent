"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CareersIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current.filter(Boolean),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.1,
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

  const setItem = (i: number) => (el: HTMLElement | null) => {
    itemsRef.current[i] = el;
  };

  return (
    <section
      ref={sectionRef}
      className="careers-intro tr-section relative w-full"
      aria-labelledby="careers-intro-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)" }}
    >
      <div className="tr-container">
        <div className="careers-intro-grid">
          <div className="careers-intro-headline">
            <p ref={setItem(0)} className="tr-eyebrow" style={{ opacity: 0 }}>
              Join Our Network
            </p>
            <h2
              id="careers-intro-heading"
              ref={setItem(1)}
              className="tr-h2"
              style={{ marginTop: "20px", color: "var(--tr-navy)", opacity: 0 }}
            >
              Weekly Pay. Opportunities That Fit
            </h2>
          </div>

          <div className="careers-intro-body">
            <p ref={setItem(2)} className="tr-body" style={{ color: "var(--tr-ink)", opacity: 0 }}>
              We partner with companies across the U.S. to connect great people
              with opportunities in both Administrative and Industrial roles.
            </p>
            <p ref={setItem(3)} className="tr-body" style={{ color: "var(--tr-ink)", marginTop: "20px", opacity: 0 }}>
              We take the time to understand your experience, what you&apos;re
              looking for, and what matters most in your next role. When we find
              an opportunity that matches your skills and goals, we&apos;ll
              reach out and walk you through the details.
            </p>
            <div ref={setItem(4)} className="careers-intro-cta" style={{ marginTop: "40px", opacity: 0 }}>
              <h3 className="careers-intro-sub font-display">Looking for your next opportunity?</h3>
              <p className="tr-body" style={{ color: "var(--tr-ink)", marginTop: "10px" }}>
                Send your resume to{" "}
                <a href="mailto:support@titanridgetalent.com?subject=Resume%20for%20Titan%20Ridge%20Talent" className="careers-intro-mail">
                  Support@titanridgetalent.com
                </a>
              </p>
              <div style={{ marginTop: "26px" }}>
                <a href="mailto:support@titanridgetalent.com?subject=Resume%20for%20Titan%20Ridge%20Talent" className="tr-btn tr-btn-gold">
                  Email Resume
                </a>
              </div>
              <p className="careers-intro-note font-body">
                By emailing your resume you agree to our{" "}
                <a href="/privacy" className="careers-intro-mail">
                  Privacy Policy
                </a>
                . Titan Ridge Talent is an Equal Opportunity Employer and
                participates in E-Verify. Need an accommodation to apply? Call{" "}
                <a href="tel:+17145524334" className="careers-intro-mail">
                  (714) 552-4334
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .careers-intro-sub {
          font-weight: 600;
          text-transform: uppercase;
          font-size: clamp(22px, 2vw, 28px);
          line-height: 1.05;
          letter-spacing: 0.01em;
          color: var(--tr-navy);
        }
        .careers-intro-note {
          margin-top: 22px;
          font-size: 16px;
          line-height: 1.6;
          color: var(--tr-ink);
          max-width: 56ch;
        }
        .careers-intro-mail {
          color: var(--tr-navy);
          font-weight: 500;
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .careers-intro-mail:hover {
          color: var(--tr-gold-text);
        }
        .careers-intro-grid {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
          gap: clamp(32px, 6vw, 96px);
          align-items: start;
        }
        @media (max-width: 1023px) {
          .careers-intro-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
}
