"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useStaggerReveal(
  sectionRef: React.RefObject<HTMLElement | null>,
  imageRef: React.RefObject<HTMLDivElement | null>,
  textEls: React.RefObject<(HTMLElement | null)[]>
) {
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
        imageRef.current,
        { opacity: 0, scale: 0.97 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
        0
      );

      const delays = [0, 0.12, 0.12, 0.1, 0.15];
      let acc = 0;
      textEls.current.forEach((el, i) => {
        if (!el) return;
        acc += delays[i] || 0;
        tl.fromTo(
          el,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          acc
        );
      });
    });

    return () => ctx.revert();
  }, [sectionRef, imageRef, textEls]);
}

export default function DualSplit() {
  const empSection = useRef<HTMLElement>(null);
  const empImage = useRef<HTMLDivElement>(null);
  const empText = useRef<(HTMLElement | null)[]>([]);

  const candSection = useRef<HTMLElement>(null);
  const candImage = useRef<HTMLDivElement>(null);
  const candText = useRef<(HTMLElement | null)[]>([]);

  useStaggerReveal(empSection, empImage, empText);
  useStaggerReveal(candSection, candImage, candText);

  return (
    <>
      {/* ===================== FOR EMPLOYERS ===================== */}
      <section
        ref={empSection}
        className="employer-section relative w-full"
        style={{
          backgroundColor: "#F5F4F0",
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >
        <div
          className="employer-inner"
          style={{ paddingLeft: "80px", paddingRight: "80px" }}
        >
          <div className="employer-grid">
            {/* LEFT — Text */}
            <div className="flex flex-col justify-center">
              <p
                ref={(el) => { empText.current[0] = el; }}
                className="font-display font-medium uppercase"
                style={{
                  fontSize: "11px",
                  letterSpacing: "4px",
                  color: "#CCA662",
                  marginBottom: "20px",
                  opacity: 0,
                }}
              >
                For Employers
              </p>
              <h2
                ref={(el) => { empText.current[1] = el; }}
                className="font-display font-semibold uppercase"
                style={{
                  fontSize: "clamp(36px, 4.5vw, 52px)",
                  lineHeight: 0.92,
                  color: "#141F31",
                  marginBottom: "28px",
                  opacity: 0,
                }}
              >
                Done Sending Resumes That Go Nowhere?
              </h2>
              <p
                ref={(el) => { empText.current[2] = el; }}
                className="font-body"
                style={{
                  fontSize: "17px",
                  lineHeight: 1.7,
                  color: "#2A2A2A",
                  maxWidth: "480px",
                  marginBottom: "16px",
                  opacity: 0,
                }}
              >
                We don&apos;t send you a stack of resumes and wish you luck.
                We learn your operation, your culture, and what good actually
                looks like in your environment. Then we find the person who
                fits, and who stays.
              </p>
              <p
                ref={(el) => { empText.current[3] = el; }}
                className="font-body italic"
                style={{
                  fontSize: "16px",
                  color: "#CCA662",
                  marginBottom: "40px",
                  opacity: 0,
                }}
              >
                Industrial and corporate placements. Every search treated the
                same way.
              </p>
              <div
                ref={(el) => { empText.current[4] = el; }}
                style={{ opacity: 0 }}
              >
                <Link
                  href="/contact"
                  className="font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0 employer-cta"
                  style={{
                    height: "56px",
                    padding: "0 36px",
                    borderRadius: "9999px",
                    backgroundColor: "#CCA662",
                    color: "#141F31",
                    fontSize: "15px",
                    letterSpacing: "3px",
                  }}
                >
                  Let&apos;s Talk Hiring
                </Link>
                <div
                  className="flex items-center"
                  style={{ marginTop: "20px" }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "1px",
                      backgroundColor: "#CCA662",
                    }}
                  />
                  <span
                    className="font-display uppercase"
                    style={{
                      fontSize: "12px",
                      letterSpacing: "2px",
                      color: "#141F31",
                      marginLeft: "12px",
                    }}
                  >
                    No commitment. Just a conversation.
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT — Contained image */}
            <div
              className="flex items-center justify-center"
              style={{ padding: "24px" }}
            >
              <div
                ref={empImage}
                className="relative w-full overflow-hidden"
                style={{
                  borderRadius: "8px",
                  aspectRatio: "1 / 1",
                  opacity: 0,
                }}
              >
                <img
                  src="/images/employer-industrial.webp"
                  alt="Industrial employer reviewing operations on the floor"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOR CANDIDATES ===================== */}
      <section
        ref={candSection}
        className="candidate-section relative w-full"
        style={{
          backgroundColor: "#F5F4F0",
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >

        <div
          className="candidate-inner"
          style={{ paddingLeft: "80px", paddingRight: "80px" }}
        >
          <div className="candidate-grid">
            {/* LEFT — Contained image */}
            <div
              className="flex items-center justify-center candidate-image-col"
              style={{ padding: "24px" }}
            >
              <div
                ref={candImage}
                className="relative w-full overflow-hidden"
                style={{
                  borderRadius: "8px",
                  aspectRatio: "1 / 1",
                  opacity: 0,
                }}
              >
                <img
                  src="/images/candidate-corporate.webp"
                  alt="Professional candidate in a confident corporate setting"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </div>

            {/* RIGHT — Text */}
            <div className="flex flex-col justify-center candidate-text-col">
              <p
                ref={(el) => { candText.current[0] = el; }}
                className="font-display font-medium uppercase"
                style={{
                  fontSize: "11px",
                  letterSpacing: "4px",
                  color: "#CCA662",
                  marginBottom: "20px",
                  opacity: 0,
                }}
              >
                For Candidates
              </p>
              <h2
                ref={(el) => { candText.current[1] = el; }}
                className="font-display font-semibold uppercase"
                style={{
                  fontSize: "clamp(36px, 4.5vw, 52px)",
                  lineHeight: 0.92,
                  color: "#141F31",
                  marginBottom: "28px",
                  opacity: 0,
                }}
              >
                Ready For a Recruiter Who Actually Calls You Back?
              </h2>
              <p
                ref={(el) => { candText.current[2] = el; }}
                className="font-body"
                style={{
                  fontSize: "17px",
                  lineHeight: 1.7,
                  color: "#2A2A2A",
                  maxWidth: "480px",
                  marginBottom: "16px",
                  opacity: 0,
                }}
              >
                We&apos;re not a job board. We work with you directly,
                understanding where you&apos;ve been and where you want to
                go. When we reach out about a role, it&apos;s because we
                genuinely think it&apos;s right for you.
              </p>
              <p
                ref={(el) => { candText.current[3] = el; }}
                className="font-body italic"
                style={{
                  fontSize: "16px",
                  color: "#CCA662",
                  marginBottom: "40px",
                  opacity: 0,
                }}
              >
                Industrial and corporate roles. We only reach out when
                it&apos;s the right fit.
              </p>
              <div
                ref={(el) => { candText.current[4] = el; }}
                style={{ opacity: 0 }}
              >
                <Link
                  href="/jobs"
                  className="font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-titan-navy/25 hover:-translate-y-0.5 active:translate-y-0 candidate-cta"
                  style={{
                    height: "56px",
                    padding: "0 36px",
                    borderRadius: "9999px",
                    backgroundColor: "#141F31",
                    color: "#F5F4F0",
                    fontSize: "15px",
                    letterSpacing: "3px",
                  }}
                >
                  See Open Roles
                </Link>
                <div
                  className="flex items-center"
                  style={{ marginTop: "20px" }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "1px",
                      backgroundColor: "#CCA662",
                    }}
                  />
                  <span
                    className="font-display uppercase"
                    style={{
                      fontSize: "12px",
                      letterSpacing: "2px",
                      color: "#141F31",
                      marginLeft: "12px",
                    }}
                  >
                    No forms. No automated responses.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .employer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .candidate-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        @media (max-width: 767px) {
          .employer-section,
          .candidate-section {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          .employer-inner,
          .candidate-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .employer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .candidate-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .candidate-image-col {
            order: 2;
          }
          .candidate-text-col {
            order: 1;
          }
          .employer-cta,
          .candidate-cta {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
