"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const logos = [
  { name: "Crestline Corp", letters: "CRESTLINE" },
  { name: "Pacific Industrial Group", letters: "PACIFIC" },
  { name: "Westfield Distribution", letters: "WESTFIELD" },
  { name: "Meridian Operations", letters: "MERIDIAN" },
  { name: "Ironclad Manufacturing", letters: "IRONCLAD" },
  { name: "Vantage Logistics", letters: "VANTAGE" },
];

function FakeLogo({
  name,
  letters,
  innerRef,
}: {
  name: string;
  letters: string;
  innerRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div
      ref={innerRef}
      className="flex items-center justify-center"
      style={{
        height: "56px",
        opacity: 0,
      }}
      title={name}
    >
      <span
        className="font-display font-bold uppercase"
        style={{
          fontSize: "15px",
          letterSpacing: "4px",
          color: "#FFFFFF",
          whiteSpace: "nowrap",
        }}
      >
        {letters}
      </span>
    </div>
  );
}

export default function TestimonialsLogos() {
  const sectionRef = useRef<HTMLElement>(null);
  const textItemsRef = useRef<(HTMLElement | null)[]>([]);
  const logosRef = useRef<(HTMLDivElement | null)[]>([]);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      };

      gsap.fromTo(
        textItemsRef.current.filter(Boolean),
        { opacity: 0, y: 20 },
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
        logosRef.current.filter(Boolean),
        { opacity: 0, y: 14 },
        {
          opacity: 0.4,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.07,
          delay: 0.25,
          scrollTrigger: trigger,
        }
      );

      gsap.fromTo(
        dividerRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.6,
          scrollTrigger: trigger,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const setText = (i: number) => (el: HTMLElement | null) => {
    textItemsRef.current[i] = el;
  };

  return (
    <section
      ref={sectionRef}
      className="testimonials-logos relative w-full"
      style={{
        backgroundColor: "#141F31",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div
        className="logos-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div className="text-center">
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
            Trusted By
          </p>
          <h2
            ref={setText(1)}
            className="font-display font-bold uppercase"
            style={{
              fontSize: "24px",
              letterSpacing: "2px",
              color: "#FFFFFF",
              marginBottom: "60px",
              opacity: 0,
            }}
          >
            Companies That Trust Titan Ridge.
          </h2>
        </div>

        <div className="logos-row">
          {logos.map((logo, i) => (
            <FakeLogo
              key={logo.name}
              name={logo.name}
              letters={logo.letters}
              innerRef={(el) => {
                logosRef.current[i] = el;
              }}
            />
          ))}
        </div>

        <div
          ref={dividerRef}
          className="h-[1px] mx-auto"
          style={{
            backgroundColor: "rgba(204, 166, 98, 0.2)",
            marginTop: "60px",
            maxWidth: "600px",
            transform: "scaleX(0)",
            transformOrigin: "center",
            willChange: "transform",
          }}
        />
      </div>

      <style jsx>{`
        .logos-row {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 32px;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 1023px) {
          .logos-row {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 767px) {
          .testimonials-logos {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .logos-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .logos-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
