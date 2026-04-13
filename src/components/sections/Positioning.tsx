"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Positioning() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const statementRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );

      tl.fromTo(
        statementRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.15"
      );

      tl.fromTo(
        bodyRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );

      tl.fromTo(
        ruleRef.current,
        { width: "0%" },
        { width: "100%", duration: 0.6, ease: "power2.out" },
        "-=0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-titan-offwhite"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      <div className="positioning-inner" style={{ paddingLeft: "80px", paddingRight: "80px" }}>
        <div className="max-w-[640px]">
          {/* Label */}
          <p
            ref={labelRef}
            className="font-display font-medium uppercase text-titan-gold"
            style={{
              fontSize: "11px",
              letterSpacing: "0.35em",
              marginBottom: "28px",
              opacity: 0,
            }}
          >
            Who We Are
          </p>

          {/* Statement */}
          <h2
            ref={statementRef}
            className="font-display font-black uppercase text-white"
            style={{
              fontSize: "clamp(42px, 5vw, 56px)",
              lineHeight: 1.05,
              letterSpacing: "0.01em",
              opacity: 0,
              color: "#141F31",
            }}
          >
            THIS INDUSTRY LOST ITS WAY
          </h2>

          {/* Body */}
          <div
            ref={bodyRef}
            className="font-body"
            style={{
              marginTop: "32px",
              opacity: 0,
            }}
          >
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "rgba(42, 42, 42, 0.7)",
              }}
            >
              Somewhere along the line, recruiting became transactional. Résumés
              in, bodies out, repeat. Candidates became numbers. Clients became
              tickets. The people on both sides of the equation stopped being
              treated like people.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "rgba(42, 42, 42, 0.7)",
                marginTop: "20px",
              }}
            >
              We built Titan Ridge because we&apos;ve seen what this industry
              looks like when it&apos;s done right — and we&apos;ve seen what
              happens when it isn&apos;t. Years across industrial floors
              and corporate boardrooms taught us one thing: the right placement
              starts with the right relationship. Everything else follows.
            </p>
          </div>

          {/* Rule line */}
          <div
            ref={ruleRef}
            className="h-[1px] bg-titan-gold/30"
            style={{ width: "0%", marginTop: "64px" }}
          />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .positioning-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
