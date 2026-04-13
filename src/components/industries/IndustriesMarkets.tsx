"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Stat = { value: string; label: string };

const industrialStats: Stat[] = [
  { value: "6", label: "Sectors Covered" },
  { value: "Hands-On", label: "Industry Knowledge" },
  { value: "Direct", label: "Employer Relationships" },
];

const corporateStats: Stat[] = [
  { value: "6", label: "Sectors Covered" },
  { value: "C-Suite", label: "Placement Experience" },
  { value: "Retained", label: "Client Relationships" },
];

function StatRow({ stats }: { stats: Stat[] }) {
  return (
    <div className="industries-stat-row">
      {stats.map((s) => (
        <div key={s.label}>
          <p
            className="font-display font-bold"
            style={{
              fontSize: "32px",
              lineHeight: 1,
              color: "#CCA662",
              marginBottom: "6px",
            }}
          >
            {s.value}
          </p>
          <p
            className="font-display uppercase"
            style={{
              fontSize: "10px",
              letterSpacing: "2px",
              color: "rgba(42, 42, 42, 0.6)",
              lineHeight: 1.3,
            }}
          >
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function IndustriesMarkets() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.fromTo(
        leftRef.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power2.out" },
        0
      );

      tl.fromTo(
        rightRef.current,
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power2.out" },
        0
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="industries-markets relative w-full"
      style={{ backgroundColor: "#F5F4F0", paddingTop: "120px", paddingBottom: "120px" }}
    >
      <div className="markets-grid relative" style={{ paddingLeft: "80px", paddingRight: "80px" }}>
        {/* Center gold divider */}
        <div
          className="markets-divider hidden md:block"
          aria-hidden="true"
        />

        {/* LEFT — Industrial */}
        <div
          ref={leftRef}
          className="markets-col"
          style={{
            paddingTop: "40px",
            paddingBottom: "40px",
            paddingLeft: "40px",
            paddingRight: "40px",
            opacity: 0,
          }}
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
            Track One
          </p>
          <h2
            className="font-display font-semibold uppercase"
            style={{
              fontSize: "clamp(36px, 4.5vw, 52px)",
              lineHeight: 0.95,
              color: "#141F31",
              marginBottom: "20px",
            }}
          >
            Industrial.
          </h2>
          <p
            className="font-body"
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "rgba(42, 42, 42, 0.7)",
              marginBottom: "32px",
            }}
          >
            We&apos;ve spent years working alongside plant managers, operations
            leads, and skilled tradespeople. We know what good looks like on a
            job site — and we know the difference between a candidate who
            looks right on paper and one who&apos;ll actually last.
          </p>
          <div
            className="h-[1px] w-full"
            style={{ backgroundColor: "#CCA662", marginBottom: "24px" }}
          />
          <StatRow stats={industrialStats} />
          <a
            href="/jobs"
            className="font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              marginTop: "32px",
              height: "48px",
              padding: "0 28px",
              borderRadius: "9999px",
              backgroundColor: "#CCA662",
              color: "#141F31",
              fontSize: "13px",
              letterSpacing: "3px",
            }}
          >
            See Industrial Roles
          </a>
        </div>

        {/* RIGHT — Corporate */}
        <div
          ref={rightRef}
          className="markets-col"
          style={{
            paddingTop: "40px",
            paddingBottom: "40px",
            paddingLeft: "40px",
            paddingRight: "40px",
            opacity: 0,
          }}
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
            Track Two
          </p>
          <h2
            className="font-display font-semibold uppercase"
            style={{
              fontSize: "clamp(36px, 4.5vw, 52px)",
              lineHeight: 0.95,
              color: "#141F31",
              marginBottom: "20px",
            }}
          >
            Corporate.
          </h2>
          <p
            className="font-body"
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "rgba(42, 42, 42, 0.7)",
              marginBottom: "32px",
            }}
          >
            We&apos;ve placed executives, HR leaders, and corporate
            professionals across industries. We understand what organizations
            need at every level — and we know how to find the candidates who
            don&apos;t just fill the role but elevate the team around them.
          </p>
          <div
            className="h-[1px] w-full"
            style={{ backgroundColor: "#CCA662", marginBottom: "24px" }}
          />
          <StatRow stats={corporateStats} />
          <a
            href="/jobs"
            className="font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              marginTop: "32px",
              height: "48px",
              padding: "0 28px",
              borderRadius: "9999px",
              backgroundColor: "#CCA662",
              color: "#141F31",
              fontSize: "13px",
              letterSpacing: "3px",
            }}
          >
            See Corporate Roles
          </a>
        </div>
      </div>

      <style jsx>{`
        .markets-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
        }
        .markets-divider {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background-color: #cca662;
          transform: translateX(-50%);
          z-index: 2;
        }
        :global(.industries-stat-row) {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
        }

        @media (max-width: 767px) {
          .markets-grid {
            grid-template-columns: 1fr;
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .markets-col {
            padding-left: 0 !important;
            padding-right: 0 !important;
            padding-top: 0 !important;
            padding-bottom: 40px !important;
          }
          .markets-col:last-of-type {
            padding-top: 40px !important;
            border-top: 1px solid rgba(204, 166, 98, 0.3);
          }
          .markets-col :global(a) {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
