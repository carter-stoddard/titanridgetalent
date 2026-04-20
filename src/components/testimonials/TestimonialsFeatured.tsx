"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsFeatured() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      };

      gsap.fromTo(
        frameRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: trigger,
        }
      );

      gsap.fromTo(
        [leftColRef.current, rightColRef.current],
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
          delay: 0.3,
          scrollTrigger: trigger,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="testimonials-featured relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="featured-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div
          ref={frameRef}
          className="featured-frame"
          style={{
            backgroundColor: "#141F31",
            borderRadius: "12px",
            padding: "72px",
            opacity: 0,
          }}
        >
        <div className="featured-grid">
          {/* LEFT — Headshot + attribution */}
          <div
            ref={leftColRef}
            className="flex flex-col items-center text-center"
            style={{ opacity: 0 }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "9999px",
                backgroundColor: "#F5F4F0",
                border: "1.5px solid rgba(204, 166, 98, 0.3)",
              }}
            >
              <p
                className="font-display uppercase"
                style={{
                  fontSize: "12px",
                  letterSpacing: "2px",
                  color: "#CCA662",
                }}
              >
                Headshot
              </p>
            </div>
            <p
              className="font-display font-bold"
              style={{
                fontSize: "20px",
                color: "#F5F4F0",
                marginTop: "20px",
              }}
            >
              Sarah M.
            </p>
            <p
              className="font-display"
              style={{
                fontSize: "14px",
                letterSpacing: "1px",
                color: "#CCA662",
                marginTop: "6px",
              }}
            >
              VP of Operations
            </p>
            <p
              className="font-display font-medium uppercase"
              style={{
                fontSize: "10px",
                letterSpacing: "3px",
                color: "#CCA662",
                marginTop: "8px",
              }}
            >
              Employer
            </p>
          </div>

          {/* RIGHT — Quote */}
          <div ref={rightColRef} className="relative" style={{ opacity: 0 }}>
            <span
              aria-hidden="true"
              className="font-display font-black select-none pointer-events-none"
              style={{
                position: "absolute",
                top: "-40px",
                left: "-20px",
                fontSize: "120px",
                lineHeight: 1,
                color: "rgba(204, 166, 98, 0.15)",
                zIndex: 0,
              }}
            >
              &ldquo;
            </span>
            <p
              className="font-body italic relative"
              style={{
                fontSize: "clamp(20px, 2vw, 24px)",
                lineHeight: 1.7,
                color: "#F5F4F0",
                marginBottom: "32px",
                zIndex: 1,
              }}
            >
              We&apos;d tried four agencies before Titan Ridge. None of them
              took the time to understand what we actually needed. Adrian did.
              He asked questions nobody else had asked, told us when a
              candidate wasn&apos;t right, and when he finally put someone
              forward, that person has been with us for two years.
              That&apos;s the standard we hold every partner to now.
            </p>

            <div
              className="h-[1px] w-full"
              style={{
                backgroundColor: "#CCA662",
                marginBottom: "24px",
              }}
            />

            <p
              className="font-display font-bold"
              style={{
                fontSize: "16px",
                color: "#CCA662",
              }}
            >
              Sarah M.
            </p>
            <p
              className="font-display uppercase"
              style={{
                fontSize: "13px",
                letterSpacing: "1px",
                color: "rgba(245, 244, 240, 0.6)",
                marginTop: "4px",
              }}
            >
              VP of Operations
            </p>
          </div>
        </div>
        </div>
      </div>

      <style jsx>{`
        .featured-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        @media (max-width: 767px) {
          .testimonials-featured {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .featured-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .featured-frame {
            padding: 40px 28px !important;
          }
          .featured-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </section>
  );
}
