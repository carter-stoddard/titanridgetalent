"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industrial = [
  "Aerospace",
  "Automotive",
  "Food & Beverage",
  "Pharmaceuticals",
  "Light Industrial",
  "Manufacturing",
  "Logistics",
  "Skilled Trades",
  "Operations",
  "Construction",
  "Warehouse",
  "Energy",
];

const corporate = [
  "Human Resources",
  "Executive Search",
  "Finance",
  "Administration",
  "Technology",
  "Sales",
];

export default function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ruleTopRef = useRef<HTMLDivElement>(null);
  const ruleMidRef = useRef<HTMLDivElement>(null);
  const namesRef = useRef<(HTMLLIElement | null)[]>([]);

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
        imageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        0
      );

      tl.fromTo(
        [eyebrowRef.current, headlineRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
        },
        0
      );

      tl.fromTo(
        [ruleTopRef.current, ruleMidRef.current],
        { width: "0%" },
        { width: "100%", duration: 0.6, ease: "power2.out" },
        0.4
      );

      tl.fromTo(
        namesRef.current.filter(Boolean),
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.06,
        },
        "-=0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  let idx = 0;
  const renderName = (name: string) => {
    const i = idx++;
    return (
      <li
        key={name}
        ref={(el) => {
          namesRef.current[i] = el;
        }}
        className="industry-name group transition-all duration-200"
        style={{
          opacity: 0,
          paddingLeft: "16px",
          borderLeft: "2px solid transparent",
          fontSize: "18px",
        }}
      >
        <span
          className="font-display"
          style={{
            fontWeight: 600,
            color: "#141F31",
            letterSpacing: "0",
          }}
        >
          {name}
        </span>
      </li>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ backgroundColor: "#F5F4F0", paddingTop: "120px", paddingBottom: "120px" }}
    >
      <style jsx>{`
        .industry-name:hover {
          border-left-color: #cca662;
        }
        .industries-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 767px) {
          .industries-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .industries-grid > div:first-child {
            order: 2;
          }
          .industries-grid > div:last-child {
            order: 1;
          }
          .industries-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>

      <div
        className="industries-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div className="industries-grid">
          {/* LEFT — Contained image */}
          <div
            className="flex items-center justify-center"
            style={{ padding: "24px" }}
          >
            <div
              ref={imageRef}
              className="relative w-full overflow-hidden"
              style={{
                aspectRatio: "1 / 1",
                borderRadius: "8px",
                opacity: 0,
              }}
            >
              <img
                src="/images/where-we-work.webp"
                alt="Industrial and corporate landscape — where Titan Ridge works"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="flex flex-col justify-center">
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
              Where We Work
            </p>

            <h2
              ref={headlineRef}
              className="font-display font-semibold uppercase"
              style={{
                fontSize: "clamp(36px, 4.5vw, 52px)",
                lineHeight: 0.95,
                color: "#141F31",
                marginBottom: "48px",
                opacity: 0,
              }}
            >
              From the Floor to the Boardroom.
            </h2>

            {/* Top rule line */}
            <div
              ref={ruleTopRef}
              className="h-[1px]"
              style={{
                backgroundColor: "#CCA662",
                width: "0%",
                marginBottom: "40px",
              }}
            />

            {/* Industrial group */}
            <p
              className="font-display font-bold uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "20px",
              }}
            >
              Industrial
            </p>
            <ul
              className="grid grid-cols-2 gap-x-8 gap-y-4"
              style={{ listStyle: "none", padding: 0 }}
            >
              {industrial.map(renderName)}
            </ul>

            {/* Middle rule line */}
            <div
              ref={ruleMidRef}
              className="h-[1px]"
              style={{
                backgroundColor: "#CCA662",
                width: "0%",
                marginTop: "36px",
                marginBottom: "36px",
              }}
            />

            {/* Corporate group */}
            <p
              className="font-display font-bold uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "20px",
              }}
            >
              Corporate
            </p>
            <ul
              className="grid grid-cols-2 gap-x-8 gap-y-4"
              style={{ listStyle: "none", padding: 0 }}
            >
              {corporate.map(renderName)}
            </ul>

            {/* CTA */}
            <div className="industries-home-cta-wrapper" style={{ marginTop: "48px" }}>
              <Link
                href="/industries"
                className="industries-home-cta font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0"
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
                See Industries
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .industries-home-cta {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
