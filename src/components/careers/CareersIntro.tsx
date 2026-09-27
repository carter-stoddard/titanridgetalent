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
              Get paid weekly. Get placed right
            </h2>
          </div>

          <div className="careers-intro-body">
            <p ref={setItem(2)} className="tr-body" style={{ color: "var(--tr-ink)", opacity: 0 }}>
              We place people in industrial and administrative roles across the
              LA/OC market, and every search we run is for a real client. No
              ghost postings, no resume traps.
            </p>
            <p ref={setItem(3)} className="tr-body" style={{ color: "var(--tr-ink)", marginTop: "20px", opacity: 0 }}>
              Tell us who you are and what you do, and share your resume if you
              have one handy. We&apos;ll reach out when the right role comes up.
            </p>
            <div
              ref={setItem(4)}
              className="careers-perk inline-flex items-center"
              style={{
                marginTop: "36px",
                gap: "14px",
                backgroundColor: "var(--tr-navy)",
                borderRadius: "9999px",
                padding: "12px 22px 12px 14px",
                opacity: 0,
              }}
            >
              <span
                aria-hidden="true"
                className="font-display"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "var(--tr-gold)",
                  color: "var(--tr-navy)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "16px",
                }}
              >
                $
              </span>
              <span
                className="font-display font-bold uppercase"
                style={{ fontSize: "14px", letterSpacing: "0.2em", color: "var(--tr-cream)" }}
              >
                Weekly Pay
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
