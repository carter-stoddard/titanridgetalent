"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "We Talk",
    description:
      "A real conversation. Not a form, not an automated inbox. We learn what you actually need: the role, the culture, the non-negotiables.",
  },
  {
    number: "02",
    title: "We Search",
    description:
      "We go deep into our network. No job board scraping, no bulk submissions. Real vetting, real conversations, real candidates.",
  },
  {
    number: "03",
    title: "We Deliver",
    description:
      "The right person in the right role. We stay accountable after the placement, because we measure success in retention, not volume.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial section intro (eyebrow, headline, steps fade in)
      const intro = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      intro.fromTo(
        [eyebrowRef.current, headlineRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.1,
        }
      );

      intro.fromTo(
        stepsRef.current.filter(Boolean),
        { opacity: 0.3, y: 30 },
        {
          opacity: 0.4,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.15,
        },
        "-=0.2"
      );

      // Scroll-linked progress line (scrubs with scroll)
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      if (isMobile) {
        gsap.set(lineRef.current, { transformOrigin: "top center" });
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: stepsContainerRef.current,
              start: "top 70%",
              end: "bottom 60%",
              scrub: 0.5,
            },
          }
        );
      } else {
        gsap.set(lineRef.current, { transformOrigin: "left center" });
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: stepsContainerRef.current,
              start: "top 70%",
              end: "bottom 60%",
              scrub: 0.5,
            },
          }
        );
      }

      // Activate each step as the scroll progresses past it
      stepsRef.current.forEach((step, i) => {
        if (!step) return;
        const dot = dotsRef.current[i];

        gsap.to(step, {
          opacity: 1,
          scrollTrigger: {
            trigger: step,
            start: "top 75%",
            end: "top 60%",
            scrub: 0.5,
          },
        });

        if (dot) {
          gsap.to(dot, {
            backgroundColor: "#CCA662",
            scale: 1.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 70%",
              end: "top 55%",
              scrub: 0.5,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div className="how-it-works-outer" style={{ paddingLeft: "80px", paddingRight: "80px" }}>
        {/* Eyebrow — on light */}
        <p
          ref={eyebrowRef}
          className="font-display font-medium uppercase"
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            color: "#CCA662",
            marginBottom: "16px",
            opacity: 0,
          }}
        >
          The Process
        </p>

        {/* Headline — on light */}
        <h2
          ref={headlineRef}
          className="font-display font-semibold uppercase"
          style={{
            fontSize: "clamp(36px, 4.5vw, 52px)",
            lineHeight: 0.95,
            color: "#141F31",
            marginBottom: "60px",
            opacity: 0,
          }}
        >
          Simple. Direct. Built on Trust.
        </h2>

      <div
        className="how-it-works-inner"
        style={{
          backgroundColor: "#141F31",
          borderRadius: "12px",
          paddingLeft: "80px",
          paddingRight: "80px",
          paddingTop: "80px",
          paddingBottom: "100px",
        }}
      >
        {/* Steps container */}
        <div
          ref={stepsContainerRef}
          className="steps-wrapper"
          style={{ marginTop: "0", position: "relative" }}
        >
          {/* Progress line — track (faint) */}
          <div
            className="progress-track"
            aria-hidden="true"
            style={{
              position: "absolute",
              backgroundColor: "rgba(204, 166, 98, 0.15)",
            }}
          />
          {/* Progress line — fill (scroll-driven) */}
          <div
            ref={lineRef}
            className="progress-fill"
            aria-hidden="true"
            style={{
              position: "absolute",
              backgroundColor: "#CCA662",
              transformOrigin: "left center",
            }}
          />

          {/* Step dots */}
          {steps.map((_, i) => (
            <div
              key={`dot-${i}`}
              ref={(el) => {
                dotsRef.current[i] = el;
              }}
              className="step-dot"
              aria-hidden="true"
              style={{
                position: "absolute",
                width: "14px",
                height: "14px",
                borderRadius: "9999px",
                backgroundColor: "rgba(204, 166, 98, 0.3)",
                border: "2px solid #141F31",
                zIndex: 2,
              }}
              data-step={i}
            />
          ))}

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 steps-grid">
            {steps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => {
                  stepsRef.current[i] = el;
                }}
                className="step-col relative"
                style={{
                  opacity: 0.3,
                  paddingLeft: "48px",
                  paddingRight: "48px",
                }}
              >
                {/* Atmospheric numeral */}
                <span
                  aria-hidden="true"
                  className="font-display font-black select-none pointer-events-none step-numeral"
                  style={{
                    position: "absolute",
                    top: "-30px",
                    left: "32px",
                    fontSize: "120px",
                    lineHeight: 1,
                    color: "rgba(255, 255, 255, 0.06)",
                    zIndex: 0,
                  }}
                >
                  {step.number}
                </span>

                {/* Content */}
                <div className="relative" style={{ zIndex: 1, paddingTop: "56px" }}>
                  <h3
                    className="font-display uppercase"
                    style={{
                      fontSize: "22px",
                      letterSpacing: "2px",
                      color: "#CCA662",
                      fontWeight: 600,
                      lineHeight: 1.1,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-body"
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.7,
                      color: "rgba(255, 255, 255, 0.6)",
                      marginTop: "10px",
                      maxWidth: "320px",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="process-cta-wrapper flex justify-center"
          style={{ marginTop: "80px" }}
        >
          <Link
            href="/contact"
            className="process-cta font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              height: "56px",
              padding: "0 36px",
              borderRadius: "9999px",
              backgroundColor: "#CCA662",
              color: "#141F31",
              fontSize: "15px",
              letterSpacing: "3px",
            }}
          >
            Start the Process
          </Link>
        </div>
      </div>
      </div>

      <style jsx>{`
        /* Desktop: horizontal progress line above the steps */
        .progress-track,
        .progress-fill {
          top: 32px;
          left: 8.33%;
          right: 8.33%;
          height: 1px;
          width: auto;
        }
        .progress-fill {
          right: auto;
          width: 83.34%;
        }
        .step-dot {
          top: 26px;
        }
        .step-dot[data-step="0"] {
          left: calc(8.33% - 7px);
        }
        .step-dot[data-step="1"] {
          left: calc(50% - 7px);
        }
        .step-dot[data-step="2"] {
          left: calc(91.67% - 7px);
        }
        .steps-grid {
          gap: 0;
        }

        @media (max-width: 767px) {
          .how-it-works-outer {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .how-it-works-inner {
            padding-left: 32px !important;
            padding-right: 32px !important;
            padding-top: 60px !important;
            padding-bottom: 60px !important;
            text-align: left;
          }
          /* Mobile: vertical progress line on the left */
          .progress-track,
          .progress-fill {
            top: 0;
            bottom: 0;
            left: 6px;
            width: 1px;
            height: auto;
            right: auto;
          }
          .progress-fill {
            transform-origin: top center !important;
            height: auto;
            width: 1px;
          }
          .step-dot {
            top: 20px;
            left: 0 !important;
          }
          .step-dot[data-step="0"] {
            top: 20px;
          }
          .step-dot[data-step="1"] {
            top: calc(33% + 20px);
          }
          .step-dot[data-step="2"] {
            top: calc(66% + 20px);
          }
          .step-col {
            padding-left: 40px !important;
            padding-right: 0 !important;
            padding-bottom: 48px;
          }
          .step-col:last-child {
            padding-bottom: 0;
          }
          .step-numeral {
            font-size: 72px !important;
            left: 40px !important;
          }
          .process-cta-wrapper {
            margin-top: 48px !important;
          }
          .process-cta {
            width: 100% !important;
          }
        }
      `}</style>

    </section>
  );
}
