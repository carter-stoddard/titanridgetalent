"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const textItemsRef = useRef<(HTMLElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);

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
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: trigger,
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 30, scale: 0.98 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.15,
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
      className="about-story relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="about-story-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div className="about-story-grid">
          {/* LEFT — Text */}
          <div>
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
              Who We Are
            </p>

            <h2
              ref={setText(1)}
              className="font-display font-semibold uppercase"
              style={{
                fontSize: "clamp(36px, 4.5vw, 52px)",
                lineHeight: 0.95,
                color: "#141F31",
                marginBottom: "32px",
                opacity: 0,
              }}
            >
              Built on Experience. Driven by Standards.
            </h2>

            <div
              ref={setText(2) as (el: HTMLDivElement | null) => void}
              className="flex flex-col"
              style={{ gap: "20px", opacity: 0 }}
            >
              <p
                className="font-body"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#2A2A2A",
                }}
              >
                Titan Ridge Talent was built by recruiting professionals
                who had seen the industry at its best, and watched it drift
                far from it. Years of experience across industrial floors and
                corporate boardrooms, placing thousands of people and building
                relationships that lasted long after the placement. We also
                watched too many firms reduce that process to a numbers game.
              </p>
              <p
                className="font-body"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#2A2A2A",
                }}
              >
                The problem isn&apos;t that recruiting is hard. It&apos;s that
                somewhere along the way, the industry decided relationships
                were inefficient. Resumes in, bodies out, repeat. Candidates
                became codes in a system. Clients became tickets in a queue.
                The people on both sides of the equation, the ones whose
                careers and companies were actually at stake, stopped being
                treated like people.
              </p>
              <p
                className="font-body"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#2A2A2A",
                }}
              >
                We built Titan Ridge because we believe the right placement
                starts with the right conversation. Not a form. Not an
                automated inbox. A real conversation with someone who actually
                listens, asks the right questions, and tells you the truth,
                even when the truth is that it&apos;s not the right fit.
              </p>
              <p
                className="font-body"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#2A2A2A",
                }}
              >
                That&apos;s not a differentiator. That&apos;s just how this
                should have always worked. We&apos;re not reinventing
                recruiting. We&apos;re returning it to what it was always
                supposed to be.
              </p>
            </div>

            <Link
              ref={setText(3) as (el: HTMLAnchorElement | null) => void}
              href="/founders"
              className="font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0"
              style={{
                height: "52px",
                padding: "0 32px",
                borderRadius: "9999px",
                backgroundColor: "#CCA662",
                color: "#141F31",
                fontSize: "14px",
                letterSpacing: "3px",
                marginTop: "40px",
                opacity: 0,
              }}
            >
              Meet the Founder
            </Link>
          </div>

          {/* RIGHT — Contained image */}
          <div
            ref={imageRef}
            className="flex items-center justify-center"
            style={{ padding: "24px", opacity: 0 }}
          >
            <div
              className="relative w-full overflow-hidden"
              style={{
                aspectRatio: "1 / 1",
                borderRadius: "8px",
                backgroundColor: "#141F31",
              }}
            >
              <img
                src="/images/about-story.webp"
                alt="Cinematic ridge at golden hour — the Titan Ridge story"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        @media (max-width: 767px) {
          .about-story {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .about-story-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .about-story-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-story-inner :global(a) {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
