"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LISTINGS = [
  {
    src: "/images/listings/listing-cnc-lathe-machinist.webp",
    alt: "Now hiring: CNC Lathe Machinist — Victorville, CA. $23–$30/hr, full-time, on-site. Apply at titanridgetalent.com.",
  },
  {
    src: "/images/listings/listing-it-help-desk-technician.webp",
    alt: "Now hiring: IT Help Desk Technician — Orange, CA. $22–$35/hr, full-time, on-site. Apply at titanridgetalent.com.",
  },
  {
    src: "/images/listings/listing-maintenance-mechanic.webp",
    alt: "Now hiring: Maintenance Mechanic — West Covina, CA. $32–$47/hr, full-time, on-site. Apply at titanridgetalent.com.",
  },
  {
    src: "/images/listings/listing-sanitation-manager.webp",
    alt: "Now hiring: Sanitation Manager — Cerritos, CA. $90K–$100K, full-time, on-site. Apply at titanridgetalent.com.",
  },
];

export default function FeaturedListings() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Close on Escape + lock body scroll while the lightbox is open
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
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

  const setCard = (i: number) => (el: HTMLDivElement | null) => {
    cardsRef.current[i] = el;
  };

  return (
    <section
      ref={sectionRef}
      className="featured-listings tr-section relative w-full"
      aria-labelledby="featured-listings-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)", paddingTop: 0 }}
    >
      <div className="tr-container">
        <div className="featured-listings-header">
          <div>
            <p className="tr-eyebrow">Now Hiring</p>
            <h2
              id="featured-listings-heading"
              className="tr-h2"
              style={{ marginTop: "20px", color: "var(--tr-navy)" }}
            >
              Featured Openings
            </h2>
          </div>

          <a
            href="https://www.linkedin.com/company/titanridgetalent/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Titan Ridge Talent on LinkedIn"
            className="featured-linkedin font-display uppercase"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="var(--tr-gold)"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Follow us on LinkedIn
          </a>
        </div>

        <div className="featured-listings-grid">
          {LISTINGS.map((listing, i) => (
            <div
              key={listing.src}
              ref={setCard(i)}
              className="featured-listing relative overflow-hidden"
              style={{ opacity: 0 }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`View full listing: ${listing.alt}`}
                style={{
                  display: "block",
                  width: "100%",
                  padding: 0,
                  border: "none",
                  background: "none",
                  cursor: "zoom-in",
                }}
              >
                <Image
                  src={listing.src}
                  alt={listing.alt}
                  width={1200}
                  height={1500}
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="w-full h-auto"
                  style={{ display: "block" }}
                />
              </button>
            </div>
          ))}
        </div>
        <p
          className="font-display font-semibold uppercase"
          style={{
            fontSize: "clamp(20px, 2.2vw, 28px)",
            lineHeight: 1.1,
            color: "var(--tr-navy)",
            textAlign: "center",
            marginTop: "64px",
          }}
        >
          Apply directly below{" "}
          <span aria-hidden="true" style={{ color: "var(--tr-gold-text)" }}>
            ↓
          </span>
        </p>
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={LISTINGS[openIndex].alt}
          onClick={() => setOpenIndex(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            backgroundColor: "rgba(20, 31, 49, 0.92)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            overflowY: "auto",
            padding: "48px 16px",
            cursor: "zoom-out",
          }}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpenIndex(null)}
            style={{
              position: "fixed",
              top: "20px",
              right: "24px",
              zIndex: 1001,
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              background: "rgba(20, 31, 49, 0.8)",
              color: "#FFFFFF",
              fontSize: "20px",
              lineHeight: 1,
              cursor: "pointer",
            }}
          >
            ✕
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              margin: "auto",
              width: "min(860px, 100%)",
              cursor: "default",
              overflow: "hidden",
              boxShadow: "0 24px 80px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Image
              src={LISTINGS[openIndex].src}
              alt={LISTINGS[openIndex].alt}
              width={1200}
              height={1500}
              sizes="860px"
              quality={90}
              className="w-full h-auto"
              style={{ display: "block" }}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .featured-listings-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 48px;
        }
        .featured-linkedin {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.12em;
          color: var(--tr-navy);
          white-space: nowrap;
          padding-bottom: 6px;
        }
        .featured-listings-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }
        @media (max-width: 1023px) {
          .featured-listings-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 767px) {
          .featured-listings-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .featured-listings-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}
