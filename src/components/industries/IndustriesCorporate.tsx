"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { JOBS_VISIBLE } from "@/lib/features";

gsap.registerPlugin(ScrollTrigger);

const sectors = [
  { name: "Human Resources", descriptor: "HR directors, talent acquisition leads, CHROs, HR business partners" },
  { name: "Executive Search", descriptor: "C-suite, VP level, director-level leadership across functions" },
  { name: "Finance", descriptor: "CFOs, controllers, financial analysts, accounting managers" },
  { name: "Administration", descriptor: "Executive assistants, office managers, operations coordinators" },
  { name: "Technology", descriptor: "IT managers, systems administrators, technology directors" },
  { name: "Sales", descriptor: "Sales directors, business development managers, account executives" },
];

export default function IndustriesCorporate() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectorsRef = useRef<(HTMLDivElement | null)[]>([]);
  const goldBarsRef = useRef<(HTMLSpanElement | null)[]>([]);

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
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      tl.fromTo(
        sectorsRef.current.filter(Boolean),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
        },
        "-=0.4"
      );

      tl.fromTo(
        goldBarsRef.current.filter(Boolean),
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
        },
        "-=0.6"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="corporate"
      ref={sectionRef}
      className="industries-corporate relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="corporate-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div className="corporate-grid">
          {/* LEFT — Image */}
          <div
            className="corporate-image flex items-center justify-center"
            style={{ padding: "24px" }}
          >
            <div
              className="relative w-full overflow-hidden"
              style={{
                aspectRatio: "1 / 1",
                borderRadius: "8px",
              }}
            >
              <img
                src="/images/corporate-jobs.webp"
                alt="Corporate professional environment — modern office at golden hour"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
          </div>

          {/* RIGHT — Content */}
          <div ref={contentRef} style={{ opacity: 0 }}>
            <p
              className="font-display font-medium uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "16px",
              }}
            >
              Corporate Recruiting
            </p>
            <h2
              className="font-display font-semibold uppercase"
              style={{
                fontSize: "clamp(36px, 4.5vw, 48px)",
                lineHeight: 0.95,
                color: "#141F31",
                marginBottom: "24px",
              }}
            >
              Precision Placement at Every Level.
            </h2>
            <p
              className="font-body"
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#2A2A2A",
                marginBottom: "40px",
              }}
            >
              Corporate recruiting demands a different kind of rigor. HR
              directors and executive leadership teams don&apos;t have time
              for candidates who almost fit. They need someone who understands
              the culture, can operate at the required level from day one,
              and has been thoroughly vetted before the first conversation.
              That&apos;s the standard we hold ourselves to on every corporate
              search.
            </p>
            <div
              className="h-[1px] w-full"
              style={{ backgroundColor: "#CCA662", marginBottom: "40px" }}
            />
            <p
              className="font-display font-bold uppercase"
              style={{
                fontSize: "12px",
                letterSpacing: "3px",
                color: "#CCA662",
                marginBottom: "24px",
              }}
            >
              Sectors We Cover
            </p>
            <div className="sectors-grid">
              {sectors.map((s, i) => (
                <div
                  key={s.name}
                  ref={(el) => {
                    sectorsRef.current[i] = el;
                  }}
                  className="sector-card relative overflow-hidden"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderTopRightRadius: "4px",
                    borderBottomRightRadius: "4px",
                    padding: "16px 16px 16px 20px",
                    opacity: 0,
                  }}
                >
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
                  <p
                    className="font-display font-bold uppercase"
                    style={{
                      fontSize: "16px",
                      letterSpacing: "1px",
                      color: "#141F31",
                      marginBottom: "4px",
                    }}
                  >
                    {s.name}
                  </p>
                  <p
                    className="font-body italic"
                    style={{
                      fontSize: "13px",
                      color: "rgba(0, 0, 0, 0.45)",
                      lineHeight: 1.5,
                    }}
                  >
                    {s.descriptor}
                  </p>
                </div>
              ))}
            </div>
            {JOBS_VISIBLE && (
              <a
                href="/jobs"
                className="font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  marginTop: "40px",
                  height: "48px",
                  padding: "0 28px",
                  borderRadius: "9999px",
                  backgroundColor: "#CCA662",
                  color: "#141F31",
                  fontSize: "13px",
                  letterSpacing: "3px",
                }}
              >
                Browse Corporate Roles
              </a>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .corporate-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .sectors-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 767px) {
          .industries-corporate {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .corporate-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .corporate-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .corporate-image {
            order: 2;
            min-height: 400px !important;
          }
          .sectors-grid {
            grid-template-columns: 1fr;
          }
          .corporate-inner :global(a) {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
