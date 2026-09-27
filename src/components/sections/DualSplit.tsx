"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { JOBS_VISIBLE } from "@/lib/features";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    key: "employers",
    eyebrow: "For Employers",
    headline: "Done Sending Resumes That Go Nowhere?",
    body:
      "We don't send you a stack of resumes and wish you luck. We learn your operation, your culture, and what good actually looks like in your environment. Then we find the person who fits, and who stays.",
    descriptor: "Industrial and administrative placements. Every search treated the same way.",
    cta: { label: "Find Talent", href: "/contact?role=company" },
    micro: "No commitment. Just a conversation.",
    image: { src: "/images/hiring-manager-employer-staffing-solutions-orange-county.webp", alt: "Smiling hiring manager holding a laptop in a modern office" },
  },
  {
    key: "candidates",
    eyebrow: "For Candidates",
    headline: "Ready For a Recruiter Who Actually Calls You Back?",
    body:
      "We're not a job board. We work with you directly, understanding where you've been and where you want to go. When we reach out about a role, it's because we genuinely think it's right for you.",
    descriptor: "Industrial and administrative roles. We only reach out when it's the right fit.",
    cta: { label: "Find a Job", href: JOBS_VISIBLE ? "/jobs" : "/careers" },
    micro: "No forms. No automated responses.",
    image: { src: "/images/warehouse-worker-industrial-job-seeker-southern-california.webp", alt: "Smiling warehouse worker inspecting inventory in a distribution center" },
  },
];

export default function DualSplit() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      rowRefs.current.forEach((row) => {
        if (!row) return;
        const img = row.querySelector<HTMLElement>(".pair-media");
        const items = row.querySelectorAll<HTMLElement>("[data-reveal]");
        const tl = gsap.timeline({ scrollTrigger: { trigger: row, start: "top 75%", once: true } });
        if (img) tl.fromTo(img, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }, 0);
        tl.fromTo(items, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.08 }, 0.1);
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pair tr-section relative"
      aria-label="Who we work with"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)", paddingTop: 0 }}
    >
      <div className="tr-container">
        {panels.map((p, i) => (
          <div
            key={p.key}
            ref={(el) => {
              rowRefs.current[i] = el;
            }}
            className={`pair-row ${i % 2 === 1 ? "is-flipped" : ""}`}
          >
            <div className="pair-media" style={{ opacity: 0 }}>
              <img src={p.image.src} alt={p.image.alt} className="pair-img" />
            </div>

            <div className="pair-text">
              <p className="tr-eyebrow" data-reveal>
                {p.eyebrow}
              </p>
              <h2 className="tr-h2" data-reveal style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
                {p.headline}
              </h2>
              <p className="tr-body" data-reveal style={{ color: "var(--tr-ink)", marginTop: "22px" }}>
                {p.body}
              </p>
              <p className="pair-desc font-display" data-reveal>
                {p.descriptor}
              </p>
              <div className="pair-actions" data-reveal>
                <Link href={p.cta.href} className="tr-btn tr-btn-gold">
                  {p.cta.label}
                </Link>
                <span className="pair-micro font-display">{p.micro}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .pair-row {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
          gap: clamp(32px, 6vw, 96px);
          align-items: center;
          padding: clamp(48px, 6vw, 88px) 0;
        }
        .pair-row.is-flipped .pair-media {
          order: 2;
        }
        .pair-media {
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: var(--tr-cream-deep);
        }
        .pair-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: saturate(0.9);
          transform: scale(1.01);
          transition: transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .pair-row:hover .pair-img {
          transform: scale(1.05);
        }
        .pair-desc {
          margin-top: 18px;
          font-size: 14px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--tr-gold-text);
          font-weight: 600;
          max-width: 52ch;
        }
        .pair-actions {
          margin-top: 34px;
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
        }
        .pair-micro {
          font-size: 13px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(20, 31, 49, 0.65);
        }
        [data-reveal] {
          opacity: 0;
        }
        @media (max-width: 1023px) {
          .pair-row {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .pair-row.is-flipped .pair-media {
            order: 0;
          }
          .pair-media {
            aspect-ratio: 16 / 11;
          }
        }
        @media (max-width: 639px) {
          .pair-actions {
            align-items: stretch;
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
