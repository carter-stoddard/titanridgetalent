"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const employers = [
  {
    quote:
      "We'd worked with three other agencies before Titan Ridge. None of them took the time to actually understand our operation. Within two weeks they sent us one candidate — the right one. He's still with us eighteen months later.",
    initials: "MR",
    name: "Michael R.",
    title: "Operations Director",
  },
  {
    quote:
      "What separates Titan Ridge is accountability. They didn't disappear after the placement. They checked in, they followed up, and when we had a concern they addressed it directly. That's rare in this industry and it's why we keep coming back.",
    initials: "DK",
    name: "David K.",
    title: "VP of Human Resources",
  },
  {
    quote:
      "I've hired through staffing agencies my entire career. Most of them treat it like a transaction. Titan Ridge treated it like a partnership. The difference shows in the quality of every candidate they've sent our way.",
    initials: "RL",
    name: "Rachel L.",
    title: "Plant Manager",
  },
];

export default function TestimonialsEmployers() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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
      className="testimonials-employers relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="employers-inner"
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
          From Our Clients
        </p>

        <h2
          className="font-display font-semibold uppercase"
          style={{
            fontSize: "clamp(36px, 4.5vw, 48px)",
            lineHeight: 0.95,
            color: "#141F31",
            marginBottom: "16px",
          }}
        >
          What Hiring Managers Say.
        </h2>

        <p
          className="font-body italic"
          style={{
            fontSize: "16px",
            color: "#2A2A2A",
            marginBottom: "60px",
            maxWidth: "640px",
          }}
        >
          From plant managers to HR directors — these are the people who
          trusted us to find the right fit.
        </p>

        <div className="employers-grid">
          {employers.map((t, i) => (
            <div
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="relative overflow-hidden"
              style={{
                backgroundColor: "#FFFFFF",
                borderLeft: "4px solid #CCA662",
                borderTopRightRadius: "8px",
                borderBottomRightRadius: "8px",
                padding: "36px",
                opacity: 0,
              }}
            >
              {/* Decorative quote mark */}
              <span
                aria-hidden="true"
                className="font-display font-black select-none pointer-events-none"
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "28px",
                  fontSize: "80px",
                  lineHeight: 1,
                  color: "rgba(204, 166, 98, 0.1)",
                  zIndex: 0,
                }}
              >
                &ldquo;
              </span>

              {/* Label */}
              <p
                className="font-display font-medium uppercase relative"
                style={{
                  fontSize: "10px",
                  letterSpacing: "3px",
                  color: "#CCA662",
                  marginBottom: "16px",
                  zIndex: 1,
                }}
              >
                Employer
              </p>

              {/* Quote */}
              <p
                className="font-body italic relative"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#2A2A2A",
                  marginBottom: "24px",
                  zIndex: 1,
                }}
              >
                {t.quote}
              </p>

              {/* Rule */}
              <div
                className="h-[1px] w-full"
                style={{
                  backgroundColor: "#CCA662",
                  marginBottom: "20px",
                }}
              />

              {/* Attribution row */}
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "9999px",
                    backgroundColor: "#141F31",
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="8" r="4" fill="rgba(245, 244, 240, 0.6)" />
                    <path
                      d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
                      fill="rgba(245, 244, 240, 0.6)"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className="font-display font-bold"
                    style={{
                      fontSize: "15px",
                      color: "#141F31",
                      lineHeight: 1.2,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="font-display"
                    style={{
                      fontSize: "12px",
                      color: "#CCA662",
                      letterSpacing: "1px",
                      marginTop: "3px",
                    }}
                  >
                    {t.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .employers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 1023px) {
          .employers-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .testimonials-employers {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .employers-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
