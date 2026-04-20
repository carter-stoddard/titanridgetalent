"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsClosing() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current.filter(Boolean),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.08,
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

  const setItem = (i: number) => (el: HTMLElement | null) => {
    itemsRef.current[i] = el;
  };

  return (
    <section
      ref={sectionRef}
      className="testimonials-closing relative w-full overflow-hidden"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div className="testimonials-closing-inner relative flex flex-col items-center text-center" style={{ paddingLeft: "80px", paddingRight: "80px" }}>
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
          Your Turn
        </p>

        <h2
          ref={setItem(1)}
          className="font-display font-semibold uppercase"
          style={{
            fontSize: "clamp(40px, 5vw, 52px)",
            lineHeight: 0.95,
            color: "#141F31",
            marginBottom: "16px",
            opacity: 0,
          }}
        >
          Ready to Be the Next Success Story?
        </h2>

        <p
          ref={setItem(2)}
          className="font-body italic"
          style={{
            fontSize: "17px",
            lineHeight: 1.6,
            color: "#2A2A2A",
            marginBottom: "40px",
            maxWidth: "640px",
            opacity: 0,
          }}
        >
          Whether you&apos;re hiring or looking, let&apos;s have a real
          conversation.
        </p>

        <div
          ref={setItem(3) as (el: HTMLDivElement | null) => void}
          className="closing-buttons flex"
          style={{ gap: "16px", opacity: 0 }}
        >
          <Link
            href="/contact"
            className="closing-cta font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              height: "52px",
              padding: "0 32px",
              borderRadius: "9999px",
              backgroundColor: "#CCA662",
              color: "#141F31",
              fontSize: "14px",
              letterSpacing: "3px",
            }}
          >
            Let&apos;s Talk Hiring
          </Link>
          <a
            href="/jobs"
            className="closing-cta font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:bg-titan-navy/5 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              height: "52px",
              padding: "0 32px",
              borderRadius: "9999px",
              backgroundColor: "transparent",
              border: "1.5px solid #141F31",
              color: "#141F31",
              fontSize: "14px",
              letterSpacing: "3px",
            }}
          >
            See Open Roles
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .testimonials-closing-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .closing-buttons {
            flex-direction: column;
            width: 100%;
            max-width: 360px;
          }
          .closing-cta {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
