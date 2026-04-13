"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const candidates = [
  {
    quote:
      "I wasn't even actively looking. Adrian reached out, we had a real conversation, and he actually listened. Two months later I was in a role that fit better than anything I'd found on my own in two years of searching.",
    initials: "JS",
    name: "Jessica S.",
    title: "Logistics Manager · Westfield Distribution",
  },
  {
    quote:
      "Every recruiter I'd dealt with before sent me roles that had nothing to do with what I was looking for. Titan Ridge actually read my resume, asked the right questions, and only reached out when they had something that made sense. That alone was a revelation.",
    initials: "TM",
    name: "Thomas M.",
    title: "Operations Supervisor · Ironridge Industrial",
  },
  {
    quote:
      "The process was straightforward and honest. They told me what to expect, kept me updated throughout, and when the offer came it was exactly what we'd talked about. No surprises. That's all anyone wants from a recruiter.",
    initials: "AP",
    name: "Amanda P.",
    title: "HR Business Partner · Meridian Corporate Group",
  },
];

export default function TestimonialsCandidates() {
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
      className="testimonials-candidates relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="candidates-inner"
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
          From Our Candidates
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
          What Job Seekers Say.
        </h2>

        <p
          className="font-body"
          style={{
            fontSize: "16px",
            lineHeight: 1.7,
            color: "#2A2A2A",
            marginBottom: "60px",
            maxWidth: "720px",
          }}
        >
          From skilled tradespeople to corporate professionals — these are
          the people who trusted us to find them the right role.
        </p>

        <div className="candidates-grid">
          {candidates.map((t, i) => (
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
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
                padding: "36px",
                opacity: 0,
              }}
            >
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
                Candidate
              </p>

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

              <div
                className="h-[1px] w-full"
                style={{
                  backgroundColor: "#CCA662",
                  marginBottom: "20px",
                }}
              />

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
                    <circle cx="12" cy="8" r="4" fill="rgba(20, 31, 49, 0.4)" />
                    <path
                      d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
                      fill="rgba(20, 31, 49, 0.4)"
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
        .candidates-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 1023px) {
          .candidates-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 767px) {
          .testimonials-candidates {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .candidates-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
