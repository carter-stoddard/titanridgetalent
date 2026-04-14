"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectors = [
  { name: "Aerospace", descriptor: "Production leads, quality engineers, assembly supervisors" },
  { name: "Automotive", descriptor: "Plant managers, production supervisors, tooling leads" },
  { name: "Food & Beverage", descriptor: "Operations managers, quality assurance, food safety leads" },
  { name: "Pharmaceuticals", descriptor: "Production supervisors, compliance leads, validation engineers" },
  { name: "Light Industrial", descriptor: "Warehouse leads, assembly supervisors, shift managers" },
  { name: "Manufacturing", descriptor: "Production supervisors, plant managers, quality leads" },
  { name: "Logistics", descriptor: "Distribution managers, fleet supervisors, supply chain leads" },
  { name: "Skilled Trades", descriptor: "Electricians, welders, machinists, HVAC technicians" },
  { name: "Operations", descriptor: "Operations managers, continuous improvement, safety leads" },
  { name: "Construction", descriptor: "Project managers, site superintendents, estimators" },
];

export default function IndustriesIndustrial() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectorsRef = useRef<(HTMLDivElement | null)[]>([]);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="industrial"
      ref={sectionRef}
      className="industries-industrial relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="industrial-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div className="industrial-grid">
          {/* LEFT — Content */}
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
              Industrial Recruiting
            </p>
            <h2
              className="font-display font-semibold uppercase"
              style={{
                fontSize: "clamp(36px, 4.5vw, 52px)",
                lineHeight: 0.95,
                color: "#141F31",
                marginBottom: "24px",
              }}
            >
              We Know What Good Looks Like On a Job Site.
            </h2>
            <p
              className="font-body"
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "rgba(42, 42, 42, 0.7)",
                marginBottom: "40px",
              }}
            >
              Industrial recruiting requires more than keyword matching. It
              requires knowing the difference between a candidate who can do
              the job and one who can lead a team through a tough quarter,
              adapt when the operation changes, and stick around long enough
              to make a real impact. We&apos;ve worked this space long enough
              to know the difference — and our clients know it too.
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
                  className="sector-card"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderLeft: "4px solid #CCA662",
                    borderTopRightRadius: "4px",
                    borderBottomRightRadius: "4px",
                    padding: "16px 16px 16px 16px",
                    opacity: 0,
                  }}
                >
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
                      color: "rgba(42, 42, 42, 0.6)",
                      lineHeight: 1.5,
                    }}
                  >
                    {s.descriptor}
                  </p>
                </div>
              ))}
            </div>
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
              Browse Industrial Roles
            </a>
          </div>

          {/* RIGHT — Image */}
          <div
            className="industrial-image flex items-center justify-center"
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
                src="/images/industrial-jobs.jpg"
                alt="Industrial job site — operations floor in cinematic warm light"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .industrial-grid {
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
          .industries-industrial {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .industrial-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .industrial-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .industrial-image {
            order: 2;
            min-height: 400px !important;
          }
          .sectors-grid {
            grid-template-columns: 1fr;
          }
          .industrial-inner :global(a) {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
