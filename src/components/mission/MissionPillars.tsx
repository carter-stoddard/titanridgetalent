"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    number: "01",
    title: "Exceptional Solutions",
    description:
      "Deliver talent solutions with an uncompromising focus on quality, integrity, and service. The right candidate, every time, with no shortcuts.",
  },
  {
    number: "02",
    title: "Lasting Partnerships",
    description:
      "Build relationships that outlast the placement. We take the time to understand each client's operation, culture, and goals before we ever submit a candidate.",
  },
  {
    number: "03",
    title: "Contractor Success",
    description:
      "Support every contractor and candidate at every stage of the process. Their success is the most direct measure of whether we did our job well.",
  },
  {
    number: "04",
    title: "Industry Standard",
    description:
      "Set the bar for what recruiting should be — through expertise, transparency, and a people-first approach that the industry has too often abandoned.",
  },
];

export default function MissionPillars() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const goldBarsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      };

      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: trigger,
        }
      );

      gsap.fromTo(
        goldBarsRef.current.filter(Boolean),
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.1,
          scrollTrigger: trigger,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, i: number) => {
    const card = cardsRef.current[i];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = ((centerY - y) / centerY) * 5;
    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = (i: number) => {
    const card = cardsRef.current[i];
    if (!card) return;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="mission-pillars relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "0",
        paddingBottom: "120px",
      }}
    >
      <div
        className="mission-pillars-outer"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div
          className="mission-pillars-inner"
          style={{
            backgroundColor: "#141F31",
            borderRadius: "12px",
            padding: "72px",
          }}
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
            How We Operate
          </p>

          <h2
            className="font-display font-semibold uppercase"
            style={{
              fontSize: "clamp(32px, 4vw, 44px)",
              lineHeight: 0.95,
              color: "#FFFFFF",
              marginBottom: "12px",
              maxWidth: "640px",
            }}
          >
            The Four Pillars.
          </h2>

          <p
            className="font-body italic"
            style={{
              fontSize: "16px",
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.55)",
              marginBottom: "60px",
              maxWidth: "640px",
            }}
          >
            Four principles, one standard. This is what guides every
            decision we make.
          </p>

          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <div
                key={p.number}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className="pillar-card relative overflow-hidden"
                onMouseMove={(e) => handleMouseMove(e, i)}
                onMouseLeave={() => handleMouseLeave(i)}
                style={{
                  backgroundColor: "#1E2D45",
                  borderTopRightRadius: "6px",
                  borderBottomRightRadius: "6px",
                  padding: "36px 32px 32px 36px",
                  opacity: 0,
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              >
                {/* Animated gold left bar */}
                <span
                  ref={(el) => {
                    goldBarsRef.current[i] = el;
                  }}
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: "4px",
                    backgroundColor: "#CCA662",
                    transform: "scaleY(0)",
                    transformOrigin: "top center",
                    zIndex: 2,
                  }}
                />

                {/* Atmospheric number */}
                <span
                  aria-hidden="true"
                  className="font-display font-black select-none pointer-events-none"
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "24px",
                    fontSize: "84px",
                    lineHeight: 1,
                    color: "rgba(204, 166, 98, 0.13)",
                    zIndex: 0,
                  }}
                >
                  {p.number}
                </span>

                {/* Content */}
                <div className="relative" style={{ zIndex: 1 }}>
                  <p
                    className="font-display font-medium uppercase"
                    style={{
                      fontSize: "11px",
                      letterSpacing: "3px",
                      color: "#CCA662",
                      marginBottom: "10px",
                    }}
                  >
                    Pillar {p.number}
                  </p>
                  <h3
                    className="font-display font-bold uppercase"
                    style={{
                      fontSize: "22px",
                      letterSpacing: "1px",
                      color: "#FFFFFF",
                      lineHeight: 1.1,
                      marginBottom: "16px",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="font-body italic"
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.6,
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          perspective: 1000px;
        }

        @media (max-width: 1023px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .mission-pillars {
            padding-bottom: 80px !important;
          }
          .mission-pillars-outer {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .mission-pillars-inner {
            padding: 36px 24px !important;
          }
          .pillar-card {
            padding: 28px 24px 24px 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
