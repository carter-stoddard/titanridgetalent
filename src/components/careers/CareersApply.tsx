"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CareersApply() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
      tl.fromTo(headRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, 0);
      tl.fromTo(cardRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, 0.15);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);
  const modalOpen = status === "success" || status === "error";
  const closeModal = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  useEffect(() => {
    if (!modalOpen) return;
    lastFocusRef.current = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    const focusables = () =>
      Array.from(
        dialog?.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') ?? []
      );
    // Move focus into the dialog (WCAG 2.4.3), on the primary action button.
    const initial = focusables();
    (initial[initial.length - 1] ?? initial[0])?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
        return;
      }
      if (e.key === "Tab") {
        const els = focusables();
        if (!els.length) return;
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      // Return focus to where the user was (the submit button) when the dialog closes.
      lastFocusRef.current?.focus();
    };
  }, [modalOpen]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/careers", { method: "POST", body: data });
      const result = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
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
      id="apply"
      className="careers-apply tr-section relative w-full"
      aria-labelledby="careers-apply-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)", paddingTop: 0 }}
    >
      <div className="tr-container">
        <div className="careers-apply-grid">
          <div ref={headRef} className="careers-apply-head" style={{ opacity: 0 }}>
            <p className="tr-eyebrow">Get Started</p>
            <h2
              id="careers-apply-heading"
              className="tr-h2"
              style={{ marginTop: "20px", color: "var(--tr-navy)" }}
            >
              Tell us about yourself
            </h2>
            <p className="tr-body" style={{ color: "var(--tr-ink)", marginTop: "24px", maxWidth: "40ch" }}>
              A few quick fields. We&apos;ll be in touch.
            </p>
          </div>

          <div ref={cardRef} className="careers-apply-form" style={{ opacity: 0 }}>
            <form className="flex flex-col" style={{ gap: "24px" }} onSubmit={handleSubmit} noValidate>
              {/* Honeypot */}
              <div
                aria-hidden="true"
                style={{ position: "absolute", left: "-10000px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}
              >
                <label htmlFor="careers-website">Website</label>
                <input type="text" id="careers-website" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="apply-row">
                <div className="apply-field">
                  <label htmlFor="careers-first-name" className="apply-label">First Name <span aria-hidden="true">*</span><span className="sr-only"> (required)</span></label>
                  <input id="careers-first-name" name="firstName" type="text" required autoComplete="given-name" className="apply-input" />
                </div>
                <div className="apply-field">
                  <label htmlFor="careers-last-name" className="apply-label">Last Name <span aria-hidden="true">*</span><span className="sr-only"> (required)</span></label>
                  <input id="careers-last-name" name="lastName" type="text" required autoComplete="family-name" className="apply-input" />
                </div>
              </div>

              <div className="apply-row">
                <div className="apply-field">
                  <label htmlFor="careers-title" className="apply-label">Current or Most Recent Title <span aria-hidden="true">*</span><span className="sr-only"> (required)</span></label>
                  <input
                    id="careers-title"
                    name="title"
                    type="text"
                    required
                    autoComplete="organization-title"
                    className="apply-input"
                    placeholder="e.g. Forklift Operator, HR Manager"
                  />
                </div>
                <div className="apply-field">
                  <label htmlFor="careers-work-type" className="apply-label">Type of Work</label>
                  <select id="careers-work-type" name="workType" className="apply-input" defaultValue="">
                    <option value="">— Select one —</option>
                    <option value="industrial">Industrial</option>
                    <option value="administrative">Administrative</option>
                    <option value="either">Open to either</option>
                  </select>
                </div>
              </div>

              <div className="apply-row">
                <div className="apply-field">
                  <label htmlFor="careers-email" className="apply-label">Email Address <span aria-hidden="true">*</span><span className="sr-only"> (required)</span></label>
                  <input id="careers-email" name="email" type="email" required autoComplete="email" className="apply-input" />
                </div>
                <div className="apply-field">
                  <label htmlFor="careers-phone" className="apply-label">Phone Number</label>
                  <input id="careers-phone" name="phone" type="tel" autoComplete="tel" className="apply-input" />
                </div>
              </div>

              <div className="apply-actions">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="apply-submit tr-btn tr-btn-gold"
                  style={{ cursor: status === "submitting" ? "wait" : "pointer", border: "none" }}
                >
                  {status === "submitting" ? "Sending…" : "Submit"}
                </button>
              </div>

              <p className="font-body" style={{ fontSize: "14px", color: "rgba(42, 42, 42, 0.7)", marginTop: "-8px" }}>
                Your information is never shared or sold. Ever.
              </p>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .careers-apply-grid {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
          gap: clamp(32px, 6vw, 96px);
          align-items: start;
        }
        .apply-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .apply-field {
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .apply-label {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--tr-navy);
          margin-bottom: 8px;
        }
        .apply-input {
          background-color: #ffffff;
          border: 1px solid rgba(20, 31, 49, 0.55);
          padding: 15px 16px;
          font-family: var(--font-body);
          font-size: 17px;
          color: var(--tr-ink);
          outline: none;
          transition: all 0.2s ease;
          width: 100%;
        }
        .apply-input:focus {
          border-color: var(--tr-gold-text);
          box-shadow: 0 0 0 3px rgba(204, 166, 98, 0.28);
        }
        .apply-input::placeholder {
          color: rgba(42, 42, 42, 0.5);
        }
        .apply-actions {
          margin-top: 8px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .apply-submit:disabled {
          opacity: 0.7;
          transform: none;
          box-shadow: none;
        }

        @media (max-width: 1023px) {
          .careers-apply-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 767px) {
          .apply-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Result modal */}
      {modalOpen ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="careers-modal-title"
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
          }}
        >
          <div
            style={{
              position: "relative",
              backgroundColor: "var(--tr-cream)",
              maxWidth: "480px",
              width: "100%",
              padding: "56px 40px 44px",
              textAlign: "center",
              boxShadow: "0 24px 80px rgba(20, 31, 49, 0.35)",
            }}
          >
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
                color: "var(--tr-navy)",
                fontSize: "20px",
                lineHeight: 1,
              }}
            >
              ×
            </button>

            <div
              aria-hidden="true"
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "9999px",
                border: `1.5px solid ${status === "success" ? "var(--tr-gold)" : "#a8261a"}`,
                color: status === "success" ? "var(--tr-gold)" : "#a8261a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
              }}
            >
              {status === "success" ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              )}
            </div>

            <p className="tr-eyebrow">
              {status === "success" ? "Received" : "Couldn’t Send"}
            </p>
            <h3
              id="careers-modal-title"
              className="font-display font-semibold uppercase"
              style={{ fontSize: "clamp(26px, 3vw, 32px)", lineHeight: 1.05, color: "var(--tr-navy)", marginTop: "16px", marginBottom: "16px" }}
            >
              {status === "success" ? "Thanks. You're in our network." : "Something went wrong."}
            </h3>
            <p className="font-body" style={{ fontSize: "17px", lineHeight: 1.65, color: "var(--tr-ink)", marginBottom: "32px" }}>
              {status === "success"
                ? "We have your info and will reach out when a role fits."
                : errorMessage || "Please try again, or email support@titanridgetalent.com directly."}
            </p>
            <button type="button" onClick={closeModal} className="tr-btn tr-btn-gold" style={{ border: "none", cursor: "pointer" }}>
              {status === "success" ? "Got It" : "Try Again"}
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
