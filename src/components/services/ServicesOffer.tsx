"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Add additional services by appending to this array; the grid auto-flows.
const services = [
  {
    number: "01",
    title: "Temporary Staffing",
    description:
      "Short-term placements for peak demand, seasonal surges, or coverage gaps. Vetted candidates ready to contribute from day one.",
  },
  {
    number: "02",
    title: "Temp-to-Hire",
    description:
      "Start temporary, convert when you're confident. Evaluate fit before you commit — we handle the transition when you're ready.",
  },
  {
    number: "03",
    title: "Direct Hire",
    description:
      "Permanent placement from day one. We identify, vet, and deliver. You make the offer. We stay accountable after.",
  },
  {
    number: "04",
    title: "Confidential Searches",
    description:
      "Discreet recruitment for sensitive roles. We protect your organization's privacy throughout the entire search process.",
  },
  {
    number: "05",
    title: "Professional Search",
    description:
      "Corporate and white-collar placement across HR, finance, administration, technology, and sales. Same relationship-first process, applied at every level.",
  },
  {
    number: "06",
    title: "High-Volume Manufacturing Support",
    description:
      "Scalable staffing solutions for production environments with large or rapid headcount needs. Built for operations that can't afford to slow down.",
  },
];

export default function ServicesOffer() {
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
      className="services-offer relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="services-offer-outer"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div
          className="services-offer-inner"
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
              marginBottom: "40px",
            }}
          >
            Staffing Solutions
          </p>

          <div className="services-grid">
            {services.map((s, i) => (
              <div
                key={s.number}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className="service-card relative overflow-hidden"
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
                  {s.number}
                </span>

                {/* Content */}
                <div className="relative" style={{ zIndex: 1 }}>
                  <p
                    className="font-display font-medium uppercase"
                    style={{
                      fontSize: "12px",
                      letterSpacing: "3px",
                      color: "#CCA662",
                      marginBottom: "10px",
                    }}
                  >
                    Service {s.number}
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
                    {s.title}
                  </h3>
                  <p
                    className="font-body italic"
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.6,
                      color: "rgba(255, 255, 255, 0.72)",
                    }}
                  >
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          perspective: 1000px;
        }

        @media (max-width: 1023px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 639px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .services-offer {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .services-offer-outer {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .services-offer-inner {
            padding: 36px 24px !important;
          }
          .service-card {
            padding: 28px 24px 24px 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
