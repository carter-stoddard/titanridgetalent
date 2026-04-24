"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MissionCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLElement | null)[]>([]);
  const ruleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      };

      gsap.fromTo(
        ruleRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: trigger,
        }
      );

      gsap.fromTo(
        itemsRef.current.filter(Boolean),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.08,
          delay: 0.15,
          scrollTrigger: trigger,
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
      className="mission-cta relative w-full overflow-hidden"
      style={{
        paddingTop: "160px",
        paddingBottom: "160px",
      }}
    >
      {/* Background image */}
      <img
        src="/images/cta-section.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center", zIndex: 0 }}
      />

      {/* Cinematic gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(20, 31, 49, 0.6) 0%, rgba(20, 31, 49, 0.85) 70%, rgba(20, 31, 49, 0.93) 100%)",
          zIndex: 1,
        }}
      />

      <div
        className="mission-cta-inner relative flex flex-col items-center text-center"
        style={{ paddingLeft: "80px", paddingRight: "80px", zIndex: 2 }}
      >
        {/* Gold accent rule */}
        <div
          ref={ruleRef}
          aria-hidden="true"
          style={{
            width: "48px",
            height: "2px",
            backgroundColor: "#CCA662",
            marginBottom: "32px",
            transformOrigin: "center",
          }}
        />

        <p
          ref={setItem(0)}
          className="font-display font-medium uppercase"
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            color: "#CCA662",
            marginBottom: "16px",
            opacity: 0,
          }}
        >
          The Standard in Practice
        </p>

        <h2
          ref={setItem(1)}
          className="font-display font-semibold uppercase"
          style={{
            fontSize: "clamp(40px, 5vw, 56px)",
            lineHeight: 0.95,
            color: "#FFFFFF",
            marginBottom: "20px",
            maxWidth: "900px",
            textShadow: "0 2px 24px rgba(0, 0, 0, 0.35)",
            opacity: 0,
          }}
        >
          Hold us to it.
        </h2>

        <p
          ref={setItem(2)}
          className="font-body italic"
          style={{
            fontSize: "17px",
            lineHeight: 1.6,
            color: "rgba(255, 255, 255, 0.75)",
            marginBottom: "40px",
            maxWidth: "640px",
            opacity: 0,
          }}
        >
          A mission only matters if it shows up in the work. Start a
          conversation and find out.
        </p>

        <div
          ref={setItem(3) as (el: HTMLDivElement | null) => void}
          className="mission-cta-buttons flex"
          style={{ gap: "16px", opacity: 0 }}
        >
          <Link
            href="/contact"
            className="mission-cta-btn font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/30 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              height: "54px",
              padding: "0 36px",
              borderRadius: "9999px",
              backgroundColor: "#CCA662",
              color: "#141F31",
              fontSize: "14px",
              letterSpacing: "3px",
            }}
          >
            Start the Conversation
          </Link>
          <Link
            href="/founders"
            className="mission-cta-btn mission-cta-ghost font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              height: "54px",
              padding: "0 36px",
              borderRadius: "9999px",
              backgroundColor: "transparent",
              border: "1.5px solid rgba(255, 255, 255, 0.7)",
              color: "#FFFFFF",
              fontSize: "14px",
              letterSpacing: "3px",
            }}
          >
            Meet the Founder
          </Link>
        </div>
      </div>

      <style>{`
        .mission-cta-ghost:hover {
          border-color: #CCA662 !important;
          color: #CCA662 !important;
        }
        @media (max-width: 767px) {
          .mission-cta {
            padding-top: 112px !important;
            padding-bottom: 112px !important;
          }
          .mission-cta-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .mission-cta-buttons {
            flex-direction: column;
            width: 100%;
            max-width: 360px;
          }
          .mission-cta-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
