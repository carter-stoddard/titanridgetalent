"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";

type Consent = "accepted" | "declined" | null;

const STORAGE_KEY = "trt_cookie_consent";
const GA_ID = "G-1SPN3NHNV7";
const BASE_OFFSET = 24; // px from viewport bottom when no footer in view

export default function ConsentGate() {
  const [consent, setConsent] = useState<Consent>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Lift the banner above the footer whenever the footer scrolls into view.
  useEffect(() => {
    if (consent !== null) return;
    const banner = bannerRef.current;
    if (!banner) return;

    const footer = document.querySelector("footer");
    if (!footer) return;

    let raf = 0;
    const updateOffset = () => {
      const rect = footer.getBoundingClientRect();
      const intrusion = Math.max(0, window.innerHeight - rect.top);
      banner.style.bottom = `${BASE_OFFSET + intrusion}px`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        updateOffset();
      });
    };

    updateOffset();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [consent, visible]);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Consent;
      if (stored === "accepted" || stored === "declined") {
        setConsent(stored);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (mounted && consent === null) {
      const t = setTimeout(() => setVisible(true), 250);
      return () => clearTimeout(t);
    }
  }, [mounted, consent]);

  const setChoice = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    setVisible(false);
    setTimeout(() => setConsent(choice), 350);
  };

  const showBanner = mounted && consent === null;

  return (
    <>
      {consent === "accepted" && <GoogleAnalytics gaId={GA_ID} />}

      {showBanner && (
        <div
          ref={bannerRef}
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-body"
          className="cookie-consent"
          style={{
            position: "fixed",
            right: "24px",
            bottom: `${BASE_OFFSET}px`,
            zIndex: 9000,
            width: "360px",
            maxWidth: "calc(100vw - 32px)",
            transform: visible ? "translateY(0)" : "translateY(20px)",
            opacity: visible ? 1 : 0,
            transition:
              "transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.35s ease, bottom 0.18s ease",
            willChange: "transform, opacity, bottom",
          }}
        >
          <div
            className="cookie-consent-card"
            style={{
              backgroundColor: "#141F31",
              borderRadius: "12px",
              padding: "22px 22px 18px",
              boxShadow:
                "0 16px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(204, 166, 98, 0.18)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Gold accent rule top-left */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "36px",
                height: "2px",
                backgroundColor: "#CCA662",
              }}
            />

            <p
              id="cookie-consent-title"
              className="font-display font-bold uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "10px",
                marginTop: "6px",
              }}
            >
              Cookies
            </p>

            <p
              id="cookie-consent-body"
              className="font-body"
              style={{
                fontSize: "13.5px",
                lineHeight: 1.55,
                color: "rgba(255, 255, 255, 0.72)",
                marginBottom: "18px",
              }}
            >
              We use cookies to analyze traffic and improve your experience.
              See our{" "}
              <Link
                href="/privacy"
                style={{
                  color: "#CCA662",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                Privacy Policy
              </Link>
              .
            </p>

            <div
              className="cookie-consent-buttons"
              style={{ display: "flex", gap: "10px" }}
            >
              <button
                type="button"
                onClick={() => setChoice("declined")}
                className="cookie-consent-decline font-display font-bold uppercase"
                style={{
                  flex: 1,
                  height: "40px",
                  borderRadius: "9999px",
                  backgroundColor: "transparent",
                  border: "1.5px solid rgba(255, 255, 255, 0.45)",
                  color: "#FFFFFF",
                  fontSize: "12px",
                  letterSpacing: "2px",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => setChoice("accepted")}
                className="cookie-consent-accept font-display font-bold uppercase"
                style={{
                  flex: 1,
                  height: "40px",
                  borderRadius: "9999px",
                  backgroundColor: "#CCA662",
                  color: "#141F31",
                  border: "none",
                  fontSize: "12px",
                  letterSpacing: "2px",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                Accept
              </button>
            </div>
          </div>

          <style jsx>{`
            .cookie-consent-decline:hover {
              border-color: #cca662 !important;
              color: #cca662 !important;
            }
            .cookie-consent-accept:hover {
              box-shadow: 0 6px 18px rgba(204, 166, 98, 0.32);
              transform: translateY(-1px);
            }
            @media (max-width: 480px) {
              .cookie-consent {
                right: 16px !important;
                bottom: 16px !important;
                left: 16px !important;
                width: auto !important;
                max-width: none !important;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
