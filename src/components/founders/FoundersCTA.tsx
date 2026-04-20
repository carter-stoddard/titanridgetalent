"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FoundersCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftItemsRef = useRef<(HTMLElement | null)[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardItemsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      };

      gsap.fromTo(
        leftItemsRef.current.filter(Boolean),
        { opacity: 0, y: 24 },
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
        cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.15,
          scrollTrigger: trigger,
        }
      );

      gsap.fromTo(
        cardItemsRef.current.filter(Boolean),
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.07,
          delay: 0.35,
          scrollTrigger: trigger,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const setLeft = (i: number) => (el: HTMLElement | null) => {
    leftItemsRef.current[i] = el;
  };
  const setCardItem = (i: number) => (el: HTMLElement | null) => {
    cardItemsRef.current[i] = el;
  };

  return (
    <section
      ref={sectionRef}
      className="founders-cta relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "88px",
        paddingBottom: "88px",
      }}
    >
      <div
        className="founders-cta-inner"
        style={{ paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div className="founders-cta-grid">
          {/* LEFT — Text + buttons */}
          <div>
            <p
              ref={setLeft(0)}
              className="font-display font-medium uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "16px",
                opacity: 0,
              }}
            >
              Work With Us
            </p>

            <h2
              ref={setLeft(1)}
              className="font-display font-semibold uppercase"
              style={{
                fontSize: "clamp(36px, 4.5vw, 52px)",
                lineHeight: 0.95,
                color: "#141F31",
                marginBottom: "16px",
                opacity: 0,
              }}
            >
              Ready to Start the Conversation?
            </h2>

            <p
              ref={setLeft(2)}
              className="font-body"
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#2A2A2A",
                marginBottom: "36px",
                opacity: 0,
              }}
            >
              Whether you&apos;re looking to build a team or find your next
              role, the Titan Ridge team is ready to talk. No forms, no
              automated responses. Just a real conversation.
            </p>

            <div
              ref={setLeft(3) as (el: HTMLDivElement | null) => void}
              className="flex flex-col sm:flex-row"
              style={{ gap: "16px", opacity: 0 }}
            >
              <Link
                href="/contact"
                className="font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0"
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
                Let&apos;s Talk Hiring
              </Link>
              <Link
                href="/jobs"
                className="font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:bg-titan-navy hover:text-titan-offwhite hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  height: "52px",
                  padding: "0 32px",
                  borderRadius: "9999px",
                  backgroundColor: "transparent",
                  border: "1.5px solid #141F31",
                  color: "#141F31",
                  fontSize: "14px",
                  letterSpacing: "3px",
                }}
              >
                See Open Roles
              </Link>
            </div>
          </div>

          {/* RIGHT — Dark contact card */}
          <div
            ref={cardRef}
            className="founders-contact-card"
            style={{
              backgroundColor: "#141F31",
              borderRadius: "8px",
              padding: "36px 40px",
              maxWidth: "480px",
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              opacity: 0,
            }}
          >
            <p
              ref={setCardItem(0)}
              className="font-display font-medium uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "12px",
                opacity: 0,
              }}
            >
              Get in Touch Directly
            </p>
            <h3
              ref={setCardItem(1)}
              className="font-display font-bold"
              style={{
                fontSize: "clamp(24px, 2.4vw, 30px)",
                color: "#FFFFFF",
                lineHeight: 1.15,
                marginBottom: "28px",
                opacity: 0,
              }}
            >
              Prefer to reach out directly?
            </h3>

            {/* Email row */}
            <a
              ref={setCardItem(2)}
              href="mailto:support@titanridgetalent.com"
              className="contact-row"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "12px 0",
                color: "#F5F4F0",
                transition: "color 0.2s ease",
                opacity: 0,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(204, 166, 98, 0.12)",
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CCA662" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <span
                className="font-display contact-text"
                style={{ fontSize: "17px", letterSpacing: "0.5px", fontWeight: 500 }}
              >
                support@titanridgetalent.com
              </span>
            </a>

            {/* Phone row */}
            <a
              ref={setCardItem(3)}
              href="tel:+18005551234"
              className="contact-row"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "12px 0",
                color: "#F5F4F0",
                transition: "color 0.2s ease",
                opacity: 0,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(204, 166, 98, 0.12)",
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CCA662" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span
                className="font-display contact-text"
                style={{ fontSize: "17px", letterSpacing: "0.5px", fontWeight: 500 }}
              >
                (800) 555-1234
              </span>
            </a>

            {/* Social icons */}
            <p
              ref={setCardItem(4)}
              className="font-display font-medium uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginTop: "28px",
                marginBottom: "16px",
                opacity: 0,
              }}
            >
              Find Us On
            </p>
            <div
              ref={setCardItem(5) as (el: HTMLDivElement | null) => void}
              className="flex items-center"
              style={{ gap: "12px", opacity: 0 }}
            >
              <a
                href="#"
                aria-label="LinkedIn"
                className="cta-social"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(204, 166, 98, 0.12)",
                  color: "#CCA662",
                  transition: "all 0.2s ease",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Indeed"
                className="cta-social"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(204, 166, 98, 0.12)",
                  color: "#CCA662",
                  transition: "all 0.2s ease",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.566 21.5633v-8.762c.2553.0231.5009.0346.758.0346 1.2225 0 2.3739-.3206 3.3506-.8928v9.6182c0 .8219-.1957 1.4287-.5757 1.8338-.378.4033-.8808.6049-1.491.6049-.6007 0-1.0766-.2016-1.468-.6183-.3781-.4032-.5739-1.01-.5739-1.8184zM11.589.5659c2.5447-.8929 5.4424-.8449 7.6186.987.405.3687.8673.8334 1.0515 1.3806.2207.6913-.7695-.073-.9057-.167-.71-.4532-1.4182-.8334-2.2127-1.0946C12.8614.3873 8.8122 2.709 6.2945 6.315c-1.0516 1.5939-1.7367 3.2721-2.299 5.1174-.0614.2017-.1094.4647-.2207.6413-.1113.2036-.048-.5453-.048-.5702.0845-.7623.2438-1.4997.4414-2.237C5.3292 5.3375 7.897 2.0655 11.5891.5658zm4.9281 7.0587c0 1.6686-1.353 3.0224-3.0205 3.0224-1.6677 0-3.0186-1.3538-3.0186-3.0224 0-1.6687 1.351-3.0224 3.0186-3.0224 1.6676 0 3.0205 1.3518 3.0205 3.0224Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Glassdoor"
                className="cta-social"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(204, 166, 98, 0.12)",
                  color: "#CCA662",
                  transition: "all 0.2s ease",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.1093.0006c-.0749-.0074-.1348.0522-.1348.127v3.451c0 .0673.0537.1194.121.127 2.619.172 4.6092.9501 4.6092 3.6814H13.086a.1343.1343 0 0 0-.1348.1347v8.9644c0 .0748.06.1347.1348.1347h10.0034c.0748 0 .1347-.0599.1347-.1347V7.342c0-2.2374-.7996-4.0558-2.4159-5.3279C19.3191.8469 17.0874.1428 14.1093.0006ZM.9107 7.387a.1342.1342 0 0 0-.1347.1347v8.9566c0 .0748.06.1347.1347.1347h5.6189c0 2.7313-1.9902 3.5094-4.6091 3.6815-.0674.0075-.1192.0596-.1192.127v3.451c0 .0747.06.1343.1348.1269 2.9781-.1422 5.2078-.8463 6.6969-2.0136 1.6163-1.272 2.4159-3.0905 2.4159-5.3278V7.5217a.1343.1343 0 0 0-.1348-.1347z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .founders-cta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .contact-row:hover {
          color: #cca662 !important;
        }
        .cta-social:hover {
          background-color: #cca662 !important;
          color: #141f31 !important;
        }

        @media (max-width: 767px) {
          .founders-cta {
            padding-top: 56px !important;
            padding-bottom: 56px !important;
          }
          .founders-cta-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .founders-cta-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .founders-cta-inner :global(a) {
            width: 100% !important;
          }
          .founders-contact-card {
            max-width: none !important;
            padding: 28px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
