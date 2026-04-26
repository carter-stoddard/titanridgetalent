"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FoundersAdrian() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textItemsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      };

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -30, scale: 0.98 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: trigger,
        }
      );

      gsap.fromTo(
        textItemsRef.current.filter(Boolean),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.08,
          delay: 0.2,
          scrollTrigger: trigger,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const setTextRef = (i: number) => (el: HTMLElement | null) => {
    textItemsRef.current[i] = el;
  };

  return (
    <section
      ref={sectionRef}
      className="founders-adrian relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="adrian-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div className="adrian-grid">
          {/* LEFT — Contained headshot */}
          <div
            ref={imageRef}
            className="flex items-center justify-center adrian-image-col"
            style={{ padding: "24px", opacity: 0 }}
          >
            <div
              className="relative w-full overflow-hidden mx-auto"
              style={{
                aspectRatio: "1 / 1",
                borderRadius: "9999px",
                backgroundColor: "#141F31",
                maxWidth: "440px",
                border: "3px solid #CCA662",
                boxShadow: "0 0 0 1px rgba(204, 166, 98, 0.25), 0 18px 40px rgba(20, 31, 49, 0.15)",
              }}
            >
              <img
                src="/images/adrian-headshot.webp"
                alt="Adrian Ibarra, founder of Titan Ridge Talent"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "center top" }}
              />
            </div>
          </div>

          {/* RIGHT — Bio */}
          <div className="flex flex-col justify-center adrian-text-col">
            <p
              ref={setTextRef(0)}
              className="font-display font-medium uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "12px",
                opacity: 0,
              }}
            >
              Founder
            </p>

            <h2
              ref={setTextRef(1)}
              className="font-display font-semibold uppercase"
              style={{
                fontSize: "clamp(36px, 4.5vw, 52px)",
                lineHeight: 0.95,
                color: "#141F31",
                marginBottom: "8px",
                opacity: 0,
              }}
            >
              Adrian Ibarra
            </h2>

            <p
              ref={setTextRef(2)}
              className="font-display"
              style={{
                fontSize: "18px",
                fontWeight: 600,
                letterSpacing: "1px",
                color: "#CCA662",
                marginBottom: "32px",
                opacity: 0,
              }}
            >
              Aerospace, Food &amp; Beverage, &amp; IT
            </p>

            <div
              ref={setTextRef(3)}
              className="h-[1px] w-full"
              style={{
                backgroundColor: "#CCA662",
                marginBottom: "32px",
                opacity: 0,
              }}
            />

            <div
              ref={setTextRef(4)}
              className="flex flex-col"
              style={{ gap: "16px", marginBottom: "40px", opacity: 0 }}
            >
              <p
                className="font-body"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#2A2A2A",
                }}
              >
                Adrian Ibarra is the founder of Titan Ridge Talent, working
                across industrial and corporate markets. His career has been
                built on one principle: that the right placement starts with a
                real conversation. Not a resume submission.
              </p>
              <p
                className="font-body"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#2A2A2A",
                }}
              >
                Throughout his career Adrian has developed deep expertise in
                Aerospace, Food &amp; Beverage, and IT, working directly with hiring managers,
                operations leaders, and executives to understand not just what a
                role requires on paper, but what it demands in practice. That
                ground-level understanding is what separates a good placement
                from a permanent one.
              </p>
              <p
                className="font-body"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#2A2A2A",
                }}
              >
                When Adrian isn&apos;t working a search, he&apos;s building the
                relationships that make future searches possible. At Titan
                Ridge, that&apos;s not a strategy. It&apos;s just how he
                operates.
              </p>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .adrian-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 767px) {
          .founders-adrian {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .adrian-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .adrian-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .adrian-image-col {
            order: 2;
          }
          .adrian-text-col {
            order: 1;
          }
        }
      `}</style>
    </section>
  );
}
