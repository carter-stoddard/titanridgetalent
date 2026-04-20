"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function JobsListings() {
  const sectionRef = useRef<HTMLElement>(null);
  const textItemsRef = useRef<(HTMLElement | null)[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardItemsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      };

      gsap.fromTo(
        textItemsRef.current.filter(Boolean),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: trigger,
        }
      );

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.25,
          scrollTrigger: trigger,
        }
      );

      gsap.fromTo(
        cardItemsRef.current.filter(Boolean),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.08,
          delay: 0.55,
          scrollTrigger: trigger,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const setText = (i: number) => (el: HTMLElement | null) => {
    textItemsRef.current[i] = el;
  };
  const setCardItem = (i: number) => (el: HTMLElement | null) => {
    cardItemsRef.current[i] = el;
  };

  return (
    <section
      ref={sectionRef}
      className="jobs-listings relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="jobs-listings-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <p
          ref={setText(0)}
          className="font-display font-medium uppercase"
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            color: "#CCA662",
            marginBottom: "16px",
            opacity: 0,
          }}
        >
          Current Openings
        </p>

        <h2
          ref={setText(1)}
          className="font-display font-semibold uppercase"
          style={{
            fontSize: "clamp(36px, 4.5vw, 48px)",
            lineHeight: 0.95,
            color: "#141F31",
            marginBottom: "16px",
            opacity: 0,
          }}
        >
          Roles We&apos;re Actively Filling.
        </h2>

        <p
          ref={setText(2)}
          className="font-body"
          style={{
            fontSize: "16px",
            lineHeight: 1.7,
            color: "#2A2A2A",
            maxWidth: "600px",
            marginBottom: "60px",
            opacity: 0,
          }}
        >
          We place candidates across industrial and corporate sectors. Browse
          our current openings on our jobs board. Every listing is a role
          we&apos;re actively working with a real client to fill.
        </p>

        {/* Placeholder block */}
        <div
          ref={cardRef}
          className="flex flex-col items-center text-center"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #D4D0C8",
            borderRadius: "8px",
            padding: "80px 40px",
            opacity: 0,
          }}
        >
          {/* Ridge icon */}
          <svg
            ref={setCardItem(0) as (el: SVGSVGElement | null) => void}
            viewBox="0 0 1000.58 481.49"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "48px", width: "auto", marginBottom: "24px", opacity: 0 }}
            fill="#CCA662"
            aria-hidden="true"
          >
            <path d="M703.61,226.61l-88.07,103.72,100.82,115.73h-296.12l217-246.81L502.75,0l-143.14,222.18-36.68-21.41L78.9,481.49l182.88-.08,68.19-85.58,90.3-.25-69.15,85.87,570.55-.25-218.28-254.6h.21ZM246.5,445.76l-89.48.25,173.82-202.51,36.85,28.44L503.33,58.92l27.12,43.97-62.85,154.81,40.95-27.87,21.9,38.67-83.97,95.64-135.06.41-64.92,81.19h0ZM754.12,445.76l-91.75-116.51,39.96-48.53,146.74,165.04h-94.94Z" />
          </svg>

          <p
            ref={setCardItem(1)}
            className="font-display font-bold uppercase"
            style={{
              fontSize: "20px",
              letterSpacing: "2px",
              color: "#141F31",
              marginBottom: "12px",
              opacity: 0,
            }}
          >
            View All Open Positions
          </p>

          <p
            ref={setCardItem(2)}
            className="font-body italic"
            style={{
              fontSize: "15px",
              color: "rgba(0, 0, 0, 0.45)",
              marginBottom: "36px",
              maxWidth: "520px",
              opacity: 0,
            }}
          >
            Our full job board is hosted externally. Click below to browse
            current openings. New roles added regularly.
          </p>

          <a
            ref={setCardItem(3) as (el: HTMLAnchorElement | null) => void}
            href="#"
            className="font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              height: "56px",
              padding: "0 40px",
              borderRadius: "4px",
              backgroundColor: "#CCA662",
              color: "#141F31",
              fontSize: "15px",
              letterSpacing: "3px",
              opacity: 0,
            }}
          >
            Browse Open Roles
          </a>

          <p
            ref={setCardItem(4)}
            className="font-body italic"
            style={{
              fontSize: "13px",
              color: "rgba(0, 0, 0, 0.35)",
              marginTop: "16px",
              opacity: 0,
            }}
          >
            Opens in a new tab, powered by our ATS platform
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .jobs-listings {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .jobs-listings-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
