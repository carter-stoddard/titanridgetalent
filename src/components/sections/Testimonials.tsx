"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    label: "Employer",
    initials: "MR",
    quote:
      "We'd worked with three other agencies before Titan Ridge. None of them took the time to actually understand our operation. Within two weeks they sent us one candidate — the right one. He's still with us eighteen months later.",
    name: "Michael R.",
    title: "Operations Director · Pacific Industrial Group",
  },
  {
    label: "Candidate",
    initials: "JS",
    quote:
      "I wasn't even actively looking. Adrian reached out, we had a real conversation, and he actually listened. Two months later I was in a role that fit better than anything I'd found on my own in two years of searching.",
    name: "Jessica S.",
    title: "Logistics Manager · Westfield Distribution",
  },
  {
    label: "Employer",
    initials: "DK",
    quote:
      "What separates Titan Ridge is accountability. They didn't disappear after the placement. They checked in, they followed up, and when we had a concern they addressed it directly. That's rare in this industry.",
    name: "David K.",
    title: "VP of Human Resources · Crestline Corp",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const animateQuote = useCallback((index: number) => {
    if (!quoteRef.current) return;
    gsap.to(quoteRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => {
        setActive(index);
        gsap.fromTo(
          quoteRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
      },
    });
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (index === active) return;
      // Reset auto-rotate timer
      if (intervalRef.current) clearInterval(intervalRef.current);
      animateQuote(index);
      intervalRef.current = setInterval(() => {
        setActive((prev) => {
          const next = (prev + 1) % testimonials.length;
          animateQuote(next);
          return prev;
        });
      }, 6000);
    },
    [active, animateQuote]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.fromTo(
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

      tl.fromTo(
        quoteRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }, sectionRef);

    // Auto-rotate every 6 seconds
    intervalRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % testimonials.length;
        animateQuote(next);
        return prev;
      });
    }, 6000);

    return () => {
      ctx.revert();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [animateQuote]);

  const t = testimonials[active];

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{
        backgroundColor: "#141F31",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div style={{ paddingLeft: "80px", paddingRight: "80px", textAlign: "center" }}>
        {/* Eyebrow */}
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
          What They Say
        </p>

        {/* Headline */}
        <h2
          ref={headlineRef}
          className="font-display font-semibold uppercase"
          style={{
            fontSize: "clamp(36px, 4.5vw, 52px)",
            lineHeight: 0.95,
            color: "#FFFFFF",
            marginBottom: "80px",
            opacity: 0,
          }}
        >
          Don&apos;t Take Our Word For It.
        </h2>

        {/* Quote area */}
        <div
          ref={quoteRef}
          className="relative"
          style={{ maxWidth: "800px", margin: "0 auto", opacity: 0 }}
        >
          {/* Decorative quote mark */}
          <span
            aria-hidden="true"
            className="font-display font-black select-none pointer-events-none"
            style={{
              position: "absolute",
              top: "-40px",
              left: "-8px",
              fontSize: "140px",
              lineHeight: 1,
              color: "rgba(204, 166, 98, 0.15)",
              zIndex: 0,
            }}
          >
            &ldquo;
          </span>

          {/* Quote text */}
          <p
            className="font-body italic relative"
            style={{
              fontSize: "clamp(22px, 2.5vw, 28px)",
              lineHeight: 1.6,
              color: "rgba(245, 244, 240, 0.85)",
              zIndex: 1,
            }}
          >
            {t.quote}
          </p>

          {/* Gold rule */}
          <div
            style={{
              width: "60px",
              height: "1px",
              backgroundColor: "#CCA662",
              marginTop: "40px",
              marginBottom: "28px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />

          {/* Label */}
          <p
            className="font-display font-medium uppercase"
            style={{
              fontSize: "10px",
              letterSpacing: "3px",
              color: "#CCA662",
              marginBottom: "16px",
            }}
          >
            {t.label}
          </p>

          {/* Attribution */}
          <div className="flex items-center justify-center gap-4">
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "9999px",
                border: "1px solid rgba(204, 166, 98, 0.4)",
                backgroundColor: "rgba(204, 166, 98, 0.08)",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="8" r="4" fill="rgba(204, 166, 98, 0.5)" />
                <path
                  d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
                  fill="rgba(204, 166, 98, 0.5)"
                />
              </svg>
            </div>
            <div>
              <p
                className="font-display font-bold"
                style={{
                  fontSize: "17px",
                  color: "#F5F4F0",
                  lineHeight: 1.2,
                }}
              >
                {t.name}
              </p>
              <p
                className="font-display"
                style={{
                  fontSize: "13px",
                  color: "rgba(204, 166, 98, 0.8)",
                  letterSpacing: "1px",
                  marginTop: "4px",
                }}
              >
                {t.title}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div
          className="flex items-center justify-center"
          style={{ gap: "12px", marginTop: "60px" }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`View testimonial ${i + 1}`}
              onClick={() => goTo(i)}
              className="transition-all duration-300"
              style={{
                width: i === active ? "32px" : "8px",
                height: "8px",
                borderRadius: "9999px",
                backgroundColor: i === active ? "#CCA662" : "rgba(204, 166, 98, 0.3)",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          div[style*="paddingLeft: \"80px\""] {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
