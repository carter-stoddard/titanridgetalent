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
    title: "Logistics Manager",
  },
  {
    quote:
      "Every recruiter I'd dealt with before sent me roles that had nothing to do with what I was looking for. Titan Ridge actually read my resume, asked the right questions, and only reached out when they had something that made sense. That alone was a revelation.",
    initials: "TM",
    name: "Thomas M.",
    title: "Operations Supervisor",
  },
  {
    quote:
      "The process was straightforward and honest. They told me what to expect, kept me updated throughout, and when the offer came it was exactly what we'd talked about. No surprises. That's all anyone wants from a recruiter.",
    initials: "AP",
    name: "Amanda P.",
    title: "HR Business Partner",
  },
];

export default function TestimonialsCandidates() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);
  const marksRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);
      const bars = barsRef.current.filter(Boolean);
      const marks = marksRef.current.filter(Boolean);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.fromTo(
        cards,
        { opacity: 0, y: 48, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.18,
        }
      )
        .fromTo(
          bars,
          { scaleY: 0, transformOrigin: "top center" },
          { scaleY: 1, duration: 0.7, ease: "power2.inOut", stagger: 0.18 },
          0.1
        )
        .fromTo(
          marks,
          { opacity: 0, scale: 0.6, y: -10 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.6)",
            stagger: 0.18,
          },
          0.3
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
    const rotateY = ((x - centerX) / centerX) * 6;
    const rotateX = ((centerY - y) / centerY) * 6;
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
          From skilled tradespeople to corporate professionals, these are
          the people who trusted us to find them the right role.
        </p>

        <div className="candidates-grid">
          {candidates.map((t, i) => (
            <div
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="candidate-card relative overflow-hidden"
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={() => handleMouseLeave(i)}
              style={{
                backgroundColor: "#FFFFFF",
                borderTopRightRadius: "8px",
                borderBottomRightRadius: "8px",
                padding: "36px",
                opacity: 0,
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <div
                ref={(el) => {
                  barsRef.current[i] = el;
                }}
                aria-hidden="true"
                className="candidate-bar"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "4px",
                  height: "100%",
                  backgroundColor: "#CCA662",
                  transform: "scaleY(0)",
                  transformOrigin: "top center",
                  zIndex: 2,
                }}
              />

              <span
                ref={(el) => {
                  marksRef.current[i] = el;
                }}
                aria-hidden="true"
                className="candidate-mark font-display font-black select-none pointer-events-none"
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "28px",
                  fontSize: "80px",
                  lineHeight: 1,
                  color: "rgba(204, 166, 98, 0.1)",
                  zIndex: 0,
                  opacity: 0,
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

              <div className="flex items-baseline flex-wrap" style={{ gap: "10px" }}>
                <p
                  className="font-display font-bold"
                  style={{
                    fontSize: "17px",
                    color: "#141F31",
                    lineHeight: 1.2,
                    letterSpacing: "0.5px",
                  }}
                >
                  {t.name}
                </p>
                <span
                  aria-hidden="true"
                  style={{
                    display: "inline-block",
                    width: "4px",
                    height: "4px",
                    borderRadius: "9999px",
                    backgroundColor: "#CCA662",
                    transform: "translateY(-3px)",
                  }}
                />
                <p
                  className="font-display uppercase"
                  style={{
                    fontSize: "12px",
                    color: "#CCA662",
                    letterSpacing: "2px",
                    fontWeight: 600,
                  }}
                >
                  {t.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .candidate-card {
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
            box-shadow 0.4s ease;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
          will-change: transform;
        }
        .candidate-bar {
          transition: width 0.35s ease, box-shadow 0.35s ease;
        }
        .candidate-mark {
          transition: color 0.4s ease, transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .candidates-grid {
          perspective: 1000px;
        }

        @media (hover: hover) and (min-width: 768px) {
          .candidate-card:hover {
            box-shadow: 0 18px 40px rgba(20, 31, 49, 0.14);
          }
          .candidate-card:hover .candidate-bar {
            width: 6px;
            box-shadow: 0 0 18px rgba(204, 166, 98, 0.45);
          }
          .candidate-card:hover .candidate-mark {
            color: rgba(204, 166, 98, 0.22);
            transform: scale(1.08);
          }
        }

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
