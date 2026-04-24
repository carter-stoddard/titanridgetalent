"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MissionStatement() {
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
          duration: 0.9,
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
          stagger: 0.1,
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
      className="mission-statement relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="mission-statement-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div className="mission-statement-grid">
          {/* LEFT — Eyebrow + headline */}
          <div className="mission-statement-headline">
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
              Why We Exist
            </p>

            <h2
              ref={setItem(1)}
              className="font-display font-semibold uppercase"
              style={{
                fontSize: "clamp(36px, 4.5vw, 52px)",
                lineHeight: 0.95,
                color: "#141F31",
                opacity: 0,
              }}
            >
              More than recruiting. A standard.
            </h2>
          </div>

          {/* RIGHT — Body copy */}
          <div className="mission-statement-body">
            <div
              ref={ruleRef}
              aria-hidden="true"
              style={{
                width: "60px",
                height: "2px",
                backgroundColor: "#CCA662",
                marginBottom: "32px",
                transformOrigin: "left center",
              }}
            />

            <p
              ref={setItem(2)}
              className="font-body"
              style={{
                fontSize: "17px",
                lineHeight: 1.7,
                color: "#2A2A2A",
                marginBottom: "20px",
                opacity: 0,
              }}
            >
              Recruiting is too important to leave to keyword matches and
              resume blasts. We exist to do this right — for the companies
              hiring, for the people we place, and for the partnerships that
              grow from both.
            </p>

            <p
              ref={setItem(3)}
              className="font-body"
              style={{
                fontSize: "17px",
                lineHeight: 1.7,
                color: "#2A2A2A",
                opacity: 0,
              }}
            >
              The four principles below aren&apos;t a marketing exercise.
              They&apos;re the standard we hold ourselves to on every search,
              every conversation, every placement.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mission-statement-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        @media (max-width: 1023px) {
          .mission-statement-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 767px) {
          .mission-statement {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .mission-statement-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
