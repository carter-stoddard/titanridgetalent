"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    number: "01",
    title: "We Know the Role",
    body: "We don't blast your resume to every open position. We understand what each role actually demands before we put your name forward.",
  },
  {
    number: "02",
    title: "We Advocate For You",
    body: "When we reach out about a role it's because we genuinely believe it's right for you. We represent you, not just the opening.",
  },
  {
    number: "03",
    title: "We Stay Accountable",
    body: "Our relationship doesn't end at placement. We check in, follow up, and stay available because we measure success in retention, not volume.",
  },
];

export default function JobsWhy() {
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
          duration: 0.7,
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

  return (
    <section
      ref={sectionRef}
      className="jobs-why relative w-full"
      style={{
        backgroundColor: "#141F31",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="jobs-why-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <p
          className="font-display font-medium uppercase"
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            color: "#CCA662",
            marginBottom: "16px",
          }}
        >
          The Difference
        </p>

        <h2
          className="font-display font-semibold uppercase"
          style={{
            fontSize: "clamp(36px, 4.5vw, 52px)",
            lineHeight: 0.95,
            color: "#FFFFFF",
            marginBottom: "60px",
          }}
        >
          Why Go Through Us.
        </h2>

        <div className="jobs-why-grid">
          {reasons.map((r, i) => (
            <div
              key={r.number}
              ref={(el) => {
                colsRef.current[i] = el;
              }}
              className={`jobs-why-col relative flex flex-col items-center text-center ${
                i > 0 ? "jobs-why-divider" : ""
              }`}
              style={{ opacity: 0 }}
            >
              {/* Atmospheric number */}
              <span
                aria-hidden="true"
                className="jobs-why-number font-display font-black select-none pointer-events-none"
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "96px",
                  lineHeight: 1,
                  color: "rgba(204, 166, 98, 0.12)",
                  zIndex: 0,
                }}
              >
                {r.number}
              </span>

              {/* Content */}
              <div className="relative" style={{ zIndex: 1, paddingTop: "48px" }}>
                <h3
                  className="font-display font-bold uppercase"
                  style={{
                    fontSize: "20px",
                    letterSpacing: "2px",
                    color: "#CCA662",
                    marginBottom: "16px",
                    lineHeight: 1.1,
                  }}
                >
                  {r.title}
                </h3>
                <p
                  className="font-body italic"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  {r.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .jobs-why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .jobs-why-col {
          padding-left: 48px;
          padding-right: 48px;
        }
        .jobs-why-divider {
          border-left: 1px solid rgba(204, 166, 98, 0.4);
        }

        @media (max-width: 767px) {
          .jobs-why {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .jobs-why-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .jobs-why-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .jobs-why-col {
            padding-left: 0;
            padding-right: 0;
            text-align: left;
            align-items: flex-start;
          }
          .jobs-why-number {
            display: none !important;
          }
          .jobs-why-divider {
            border-left: none;
            border-top: 1px solid rgba(204, 166, 98, 0.4);
            padding-top: 48px;
          }
        }
      `}</style>
    </section>
  );
}
