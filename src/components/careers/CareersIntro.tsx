"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CareersIntro() {
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
        { scaleX: 1, duration: 0.9, ease: "power3.out", scrollTrigger: trigger }
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
      className="careers-intro relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "120px",
        paddingBottom: "60px",
      }}
    >
      <div
        className="careers-intro-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div className="careers-intro-grid">
          <div className="careers-intro-headline">
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
              Open Positions
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
              Roles we&apos;re actively filling.
            </h2>
          </div>

          <div className="careers-intro-body">
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
              Every role below is a real search we&apos;re running with a real
              client. No ghost postings, no resume traps. Browse what&apos;s
              open, and if something fits, apply directly.
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
              Don&apos;t see the right fit today? Send us your resume anyway.
              We&apos;ll keep you in mind as new searches come in.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .careers-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        @media (max-width: 1023px) {
          .careers-intro-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 767px) {
          .careers-intro {
            padding-top: 80px !important;
          }
          .careers-intro-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
