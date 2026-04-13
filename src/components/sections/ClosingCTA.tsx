"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ClosingCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.fromTo(
        imageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        0
      );

      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
        0
      );

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
        0.1
      );

      tl.fromTo(
        subRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
        0.2
      );

      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
        0.35
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ backgroundColor: "#F5F4F0", paddingTop: "120px", paddingBottom: "120px" }}
    >
      <style jsx>{`
        .closing-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 767px) {
          .closing-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .closing-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .closing-inner :global(a) {
            width: 100% !important;
          }
        }
      `}</style>

      <div
        className="closing-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div className="closing-grid">
          {/* LEFT — Text */}
          <div className="flex flex-col justify-center">
            <p
              ref={eyebrowRef}
              className="font-display font-medium uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "16px",
                opacity: 0,
              }}
            >
              Ready to Climb
            </p>

            <h2
              ref={headlineRef}
              className="font-display font-semibold uppercase"
              style={{
                fontSize: "clamp(36px, 4.5vw, 52px)",
                lineHeight: 0.95,
                color: "#141F31",
                marginBottom: "20px",
                opacity: 0,
              }}
            >
              The Right Role is Out There.
            </h2>

            <p
              ref={subRef}
              className="font-body italic"
              style={{
                fontSize: "17px",
                lineHeight: 1.7,
                color: "rgba(42, 42, 42, 0.6)",
                maxWidth: "480px",
                marginBottom: "48px",
                opacity: 0,
              }}
            >
              Browse open positions and take the first step. Or if you&apos;re
              looking to build a team — let&apos;s talk.
            </p>

            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row"
              style={{ gap: "16px", opacity: 0 }}
            >
              <a
                href="/jobs"
                className="font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  height: "52px",
                  padding: "0 32px",
                  borderRadius: "9999px",
                  backgroundColor: "#CCA662",
                  color: "#141F31",
                  fontSize: "14px",
                  letterSpacing: "3px",
                }}
              >
                See Open Roles
              </a>
              <a
                href="/contact"
                className="font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:bg-titan-navy hover:text-titan-offwhite hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  height: "52px",
                  padding: "0 32px",
                  borderRadius: "9999px",
                  backgroundColor: "transparent",
                  border: "1.5px solid #141F31",
                  color: "#141F31",
                  fontSize: "14px",
                  letterSpacing: "3px",
                }}
              >
                Let&apos;s Talk Hiring
              </a>
            </div>
          </div>

          {/* RIGHT — Contained image */}
          <div
            className="flex items-center justify-center"
            style={{ padding: "24px" }}
          >
            <div
              ref={imageRef}
              className="relative w-full overflow-hidden"
              style={{
                aspectRatio: "1 / 1",
                borderRadius: "8px",
                opacity: 0,
              }}
            >
              <img
                src="/images/right-role.jpg"
                alt="Summit view at golden hour — ridge looking out over horizon"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
