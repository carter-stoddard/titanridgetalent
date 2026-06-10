"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CareersCTA() {
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
        { scaleX: 1, duration: 0.8, ease: "power3.out", scrollTrigger: trigger }
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
      className="careers-cta relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "0",
        paddingBottom: "120px",
      }}
    >
      <div
        className="careers-cta-outer"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div
          className="careers-cta-card relative overflow-hidden"
          style={{
            borderRadius: "12px",
            paddingTop: "100px",
            paddingBottom: "100px",
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

          {/* Gradient overlay */}
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
            className="careers-cta-inner relative flex flex-col items-center text-center"
            style={{ paddingLeft: "60px", paddingRight: "60px", zIndex: 2 }}
          >
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
              Don&apos;t See It?
            </p>

            <h2
              ref={setItem(1)}
              className="font-display font-semibold uppercase"
              style={{
                fontSize: "clamp(36px, 4.5vw, 52px)",
                lineHeight: 0.95,
                color: "#FFFFFF",
                marginBottom: "20px",
                maxWidth: "780px",
                textShadow: "0 2px 24px rgba(0, 0, 0, 0.35)",
                opacity: 0,
              }}
            >
              The right role might be one conversation away.
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
              Send us your resume and tell us what you&apos;re looking for.
              We&apos;ll keep you in mind as new searches come in.
            </p>

            <div
              ref={setItem(3) as (el: HTMLDivElement | null) => void}
              className="careers-cta-buttons flex"
              style={{ gap: "16px", opacity: 0 }}
            >
              <a
                href="mailto:support@titanridgetalent.com"
                className="careers-cta-btn font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/30 hover:-translate-y-0.5 active:translate-y-0"
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
                Send Your Resume
              </a>
              <Link
                href="/contact"
                className="careers-cta-btn careers-cta-ghost font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
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
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .careers-cta-ghost:hover {
          border-color: #CCA662 !important;
          color: #CCA662 !important;
        }
        @media (max-width: 767px) {
          .careers-cta {
            padding-bottom: 80px !important;
          }
          .careers-cta-outer {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .careers-cta-card {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .careers-cta-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .careers-cta-buttons {
            flex-direction: column;
            width: 100%;
            max-width: 360px;
          }
          .careers-cta-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
