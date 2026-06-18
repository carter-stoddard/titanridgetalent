"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { JOBS_VISIBLE } from "@/lib/features";

gsap.registerPlugin(ScrollTrigger);

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IndeedIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.566 21.5633v-8.762c.2553.0231.5009.0346.758.0346 1.2225 0 2.3739-.3206 3.3506-.8928v9.6182c0 .8219-.1957 1.4287-.5757 1.8338-.378.4033-.8808.6049-1.491.6049-.6007 0-1.0766-.2016-1.468-.6183-.3781-.4032-.5739-1.01-.5739-1.8184zM11.589.5659c2.5447-.8929 5.4424-.8449 7.6186.987.405.3687.8673.8334 1.0515 1.3806.2207.6913-.7695-.073-.9057-.167-.71-.4532-1.4182-.8334-2.2127-1.0946C12.8614.3873 8.8122 2.709 6.2945 6.315c-1.0516 1.5939-1.7367 3.2721-2.299 5.1174-.0614.2017-.1094.4647-.2207.6413-.1113.2036-.048-.5453-.048-.5702.0845-.7623.2438-1.4997.4414-2.237C5.3292 5.3375 7.897 2.0655 11.5891.5658zm4.9281 7.0587c0 1.6686-1.353 3.0224-3.0205 3.0224-1.6677 0-3.0186-1.3538-3.0186-3.0224 0-1.6687 1.351-3.0224 3.0186-3.0224 1.6676 0 3.0205 1.3518 3.0205 3.0224Z" />
  </svg>
);

const GlassdoorIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.1093.0006c-.0749-.0074-.1348.0522-.1348.127v3.451c0 .0673.0537.1194.121.127 2.619.172 4.6092.9501 4.6092 3.6814H13.086a.1343.1343 0 0 0-.1348.1347v8.9644c0 .0748.06.1347.1348.1347h10.0034c.0748 0 .1347-.0599.1347-.1347V7.342c0-2.2374-.7996-4.0558-2.4159-5.3279C19.3191.8469 17.0874.1428 14.1093.0006ZM.9107 7.387a.1342.1342 0 0 0-.1347.1347v8.9566c0 .0748.06.1347.1347.1347h5.6189c0 2.7313-1.9902 3.5094-4.6091 3.6815-.0674.0075-.1192.0596-.1192.127v3.451c0 .0747.06.1343.1348.1269 2.9781-.1422 5.2078-.8463 6.6969-2.0136 1.6163-1.272 2.4159-3.0905 2.4159-5.3278V7.5217a.1343.1343 0 0 0-.1348-.1347z" />
  </svg>
);

export default function ContactMain() {
  const sectionRef = useRef<HTMLElement>(null);
  const formColRef = useRef<HTMLDivElement>(null);
  const infoBlocksRef = useRef<(HTMLDivElement | null)[]>([]);
  const darkCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      };

      gsap.fromTo(
        formColRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: trigger,
        }
      );

      gsap.fromTo(
        infoBlocksRef.current.filter(Boolean),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
          stagger: 0.1,
          delay: 0.2,
          scrollTrigger: trigger,
        }
      );

      gsap.fromTo(
        darkCardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.55,
          scrollTrigger: trigger,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const setBlock = (i: number) => (el: HTMLDivElement | null) => {
    infoBlocksRef.current[i] = el;
  };

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const modalOpen = status === "success" || status === "error";
  const closeModal = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [modalOpen]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      company: String(data.get("company") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      role: String(data.get("role") || ""),
      message: String(data.get("message") || ""),
      website: String(data.get("website") || ""), // honeypot
    };

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !result.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to send.");
    }
  };

  return (
    <section
      ref={sectionRef}
      className="contact-main"
      style={{ backgroundColor: "#F5F4F0" }}
    >
      <div className="contact-main-inner">
        <div className="contact-grid">
          {/* LEFT — Form */}
          <div
            ref={formColRef}
            className="contact-form-col"
            style={{ opacity: 0 }}
          >
            <p
              className="font-display font-bold uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "8px",
              }}
            >
              Send Us a Message
            </p>
            <p
              className="font-body italic"
              style={{
                fontSize: "14px",
                color: "#2A2A2A",
                marginBottom: "32px",
              }}
            >
              We typically respond within one business day.
            </p>

            <form
              className="flex flex-col"
              style={{ gap: "20px" }}
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Honeypot — hidden from real users */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-10000px",
                  top: "auto",
                  width: "1px",
                  height: "1px",
                  overflow: "hidden",
                }}
              >
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Row 1 */}
              <div className="form-row">
                <Field label="Full Name" id="name" type="text" required />
                <Field label="Company Name" id="company" type="text" />
              </div>

              {/* Row 2 */}
              <div className="form-row">
                <Field label="Email Address" id="email" type="email" required />
                <Field label="Phone Number" id="phone" type="tel" />
              </div>

              {/* Row 3 */}
              <div className="form-field">
                <label htmlFor="role" className="form-label">
                  I am a...
                </label>
                <select id="role" name="role" className="form-input" defaultValue="">
                  <option value="" disabled>
                    — Select one —
                  </option>
                  <option value="company">Company looking to hire</option>
                  <option value="professional">
                    Professional looking for work
                  </option>
                </select>
              </div>

              {/* Row 4 */}
              <div className="form-field">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input"
                  placeholder="Tell us what you're looking for..."
                  style={{ minHeight: "140px", resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="form-submit font-display font-bold uppercase"
                style={{
                  marginTop: "12px",
                  height: "56px",
                  width: "100%",
                  backgroundColor: status === "submitting" ? "#b89656" : "#CCA662",
                  color: "#141F31",
                  fontSize: "15px",
                  letterSpacing: "3px",
                  borderRadius: "4px",
                  border: "none",
                  cursor: status === "submitting" ? "wait" : "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {status === "submitting" ? "Sending…" : "Send Message"}
              </button>

              <p
                className="font-body italic text-center"
                style={{
                  fontSize: "14px",
                  color: "rgba(0, 0, 0, 0.35)",
                  marginTop: "4px",
                }}
              >
                Your information is never shared or sold. Ever.
              </p>
            </form>
          </div>

          {/* RIGHT — Contact Info */}
          <div className="contact-info-col">
            <div className="flex flex-col" style={{ gap: "40px" }}>
              <div ref={setBlock(0)} style={{ opacity: 0 }}>
                <div
                  style={{
                    backgroundColor: "#141F31",
                    borderRadius: "8px",
                    padding: "24px 28px",
                    borderTop: "2px solid #CCA662",
                  }}
                >
                  <p
                    className="font-display font-bold uppercase"
                    style={{
                      fontSize: "11px",
                      letterSpacing: "4px",
                      color: "#CCA662",
                      marginBottom: "10px",
                    }}
                  >
                    Please Note
                  </p>
                  <p
                    className="font-display font-bold"
                    style={{
                      fontSize: "18px",
                      color: "#FFFFFF",
                      lineHeight: 1.25,
                      marginBottom: "12px",
                    }}
                  >
                    By appointment only.
                  </p>
                  <p
                    className="font-body"
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.65,
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    We&apos;re not accepting walk-ins at this time. All
                    meetings are scheduled by appointment. Email{" "}
                    <a
                      href="mailto:support@titanridgetalent.com"
                      style={{ color: "#CCA662", textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      support@titanridgetalent.com
                    </a>{" "}
                    or call{" "}
                    <a
                      href="tel:+17145524334"
                      style={{ color: "#CCA662", textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      (714) 552-4334
                    </a>{" "}
                    and we&apos;ll get back to you. Looking forward to hearing
                    from you.
                  </p>
                </div>
              </div>

              <div ref={setBlock(1)} style={{ opacity: 0 }}>
              <InfoBlock
                label="Email Us"
                descriptor="We respond within one business day."
              >
                <a
                  href="mailto:support@titanridgetalent.com"
                  className="info-link font-display"
                  style={{
                    fontSize: "18px",
                    color: "#141F31",
                    fontWeight: 600,
                  }}
                >
                  support@titanridgetalent.com
                </a>
              </InfoBlock>
              </div>

              <div ref={setBlock(2)} style={{ opacity: 0 }}>
              <InfoBlock label="Call Us">
                <a
                  href="tel:+17145524334"
                  className="info-link font-display"
                  style={{
                    fontSize: "18px",
                    color: "#141F31",
                    fontWeight: 600,
                  }}
                >
                  (714) 552-4334
                </a>
              </InfoBlock>
              </div>

              <div ref={setBlock(3)} style={{ opacity: 0 }}>
              <InfoBlock label="Connect">
                <div
                  className="flex items-center"
                  style={{ gap: "16px", color: "#CCA662", marginTop: "4px" }}
                >
                  <Link
                    href="https://www.linkedin.com/company/titanridgetalent/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="contact-social"
                    style={{ color: "#CCA662", transition: "color 0.2s ease" }}
                  >
                    <LinkedInIcon />
                  </Link>
                  <Link
                    href="#"
                    aria-label="Indeed"
                    className="contact-social"
                    style={{ color: "#CCA662", transition: "color 0.2s ease" }}
                  >
                    <IndeedIcon />
                  </Link>
                  <Link
                    href="#"
                    aria-label="Glassdoor"
                    className="contact-social"
                    style={{ color: "#CCA662", transition: "color 0.2s ease" }}
                  >
                    <GlassdoorIcon />
                  </Link>
                </div>
              </InfoBlock>
              </div>
            </div>

            {/* Dark card */}
            {JOBS_VISIBLE && (
            <div
              ref={darkCardRef}
              style={{
                marginTop: "60px",
                backgroundColor: "#141F31",
                borderRadius: "8px",
                padding: "32px",
                opacity: 0,
              }}
            >
              <p
                className="font-display font-bold uppercase"
                style={{
                  fontSize: "11px",
                  letterSpacing: "4px",
                  color: "#CCA662",
                  marginBottom: "12px",
                }}
              >
                Looking for Open Roles?
              </p>
              <h3
                className="font-display font-bold"
                style={{
                  fontSize: "22px",
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                  marginBottom: "12px",
                }}
              >
                Browse our current job listings.
              </h3>
              <p
                className="font-body italic"
                style={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "rgba(255, 255, 255, 0.55)",
                  marginBottom: "24px",
                }}
              >
                We update our job board regularly. If you don&apos;t see the
                right fit today, check back. Or send us your resume and
                we&apos;ll keep you in mind.
              </p>
              <Link
                href="/jobs"
                className="font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  height: "44px",
                  padding: "0 28px",
                  borderRadius: "9999px",
                  backgroundColor: "#CCA662",
                  color: "#141F31",
                  fontSize: "14px",
                  letterSpacing: "3px",
                }}
              >
                See Open Roles
              </Link>
            </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-main {
          padding: 120px 80px;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .form-field {
          display: flex;
          flex-direction: column;
        }
        :global(.form-label) {
          font-family: var(--font-barlow-condensed);
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #141f31;
          margin-bottom: 6px;
        }
        :global(.form-input) {
          background-color: #ffffff;
          border: 1px solid #d4d0c8;
          border-radius: 4px;
          padding: 14px 16px;
          font-family: var(--font-lora);
          font-size: 15px;
          color: #2a2a2a;
          outline: none;
          transition: all 0.2s ease;
          width: 100%;
        }
        :global(.form-input:focus) {
          border-color: #cca662;
          box-shadow: 0 0 0 3px rgba(204, 166, 98, 0.28);
          outline: 2px solid transparent;
        }
        :global(.form-input::placeholder) {
          color: rgba(42, 42, 42, 0.45);
        }
        .form-submit:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(204, 166, 98, 0.25);
        }
        .info-link:hover {
          color: #cca662 !important;
        }
        .contact-social:hover {
          color: #ffffff !important;
        }

        @media (max-width: 767px) {
          .contact-main {
            padding: 80px 24px;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
          .contact-main :global(a[style*="borderRadius"]) {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
          }
        }
      `}</style>

      {/* Result modal */}
      {modalOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          className="contact-modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(20, 31, 49, 0.7)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            animation: "contact-modal-fade 220ms ease-out",
          }}
        >
          <div
            className="contact-modal-card"
            style={{
              position: "relative",
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              maxWidth: "480px",
              width: "100%",
              padding: "56px 48px 48px",
              textAlign: "center",
              boxShadow: "0 24px 80px rgba(20, 31, 49, 0.35)",
              borderTop: "3px solid #CCA662",
              animation: "contact-modal-lift 320ms cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
          >
            {/* Close button */}
            <button
              type="button"
              aria-label="Close"
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                width: "36px",
                height: "36px",
                borderRadius: "9999px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                color: "#141F31",
                fontSize: "20px",
                lineHeight: 1,
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(20, 31, 49, 0.06)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              ×
            </button>

            {/* Icon */}
            <div
              aria-hidden="true"
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "9999px",
                backgroundColor: status === "success" ? "#CCA662" : "#a8261a",
                color: status === "success" ? "#141F31" : "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
              }}
            >
              {status === "success" ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              )}
            </div>

            <p
              className="font-display font-medium uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "12px",
              }}
            >
              {status === "success" ? "Message Sent" : "Couldn’t Send"}
            </p>

            <h3
              id="contact-modal-title"
              className="font-display font-semibold uppercase"
              style={{
                fontSize: "clamp(24px, 3vw, 30px)",
                lineHeight: 1.1,
                color: "#141F31",
                marginBottom: "16px",
              }}
            >
              {status === "success" ? "Thanks for reaching out." : "Something went wrong."}
            </h3>

            <p
              className="font-body"
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                color: "#2A2A2A",
                marginBottom: "32px",
              }}
            >
              {status === "success"
                ? "We received your message and will reply within one business day."
                : errorMessage || "Please try again, or email support@titanridgetalent.com directly."}
            </p>

            <button
              type="button"
              onClick={closeModal}
              className="font-display font-bold uppercase"
              style={{
                height: "48px",
                padding: "0 32px",
                borderRadius: "9999px",
                backgroundColor: "#141F31",
                color: "#F5F4F0",
                fontSize: "14px",
                letterSpacing: "3px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {status === "success" ? "Got It" : "Try Again"}
            </button>
          </div>

          <style>{`
            @keyframes contact-modal-fade {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes contact-modal-lift {
              from { opacity: 0; transform: translateY(20px) scale(0.98); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
            @media (max-width: 480px) {
              .contact-modal-card {
                padding: 48px 32px 36px !important;
              }
            }
          `}</style>
        </div>
      ) : null}
    </section>
  );
}

function Field({
  label,
  id,
  type,
  required,
}: {
  label: string;
  id: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="form-input"
        autoComplete={
          id === "name"
            ? "name"
            : id === "email"
            ? "email"
            : id === "phone"
            ? "tel"
            : id === "company"
            ? "organization"
            : "off"
        }
      />
    </div>
  );
}

function InfoBlock({
  label,
  descriptor,
  children,
}: {
  label: string;
  descriptor?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        borderLeft: "4px solid #CCA662",
        paddingLeft: "20px",
      }}
    >
      <p
        className="font-display font-bold uppercase"
        style={{
          fontSize: "11px",
          letterSpacing: "4px",
          color: "#CCA662",
          marginBottom: "8px",
        }}
      >
        {label}
      </p>
      {children}
      {descriptor ? (
        <p
          className="font-body italic"
          style={{
            fontSize: "14px",
            color: "rgba(0, 0, 0, 0.45)",
            marginTop: "6px",
          }}
        >
          {descriptor}
        </p>
      ) : null}
    </div>
  );
}
