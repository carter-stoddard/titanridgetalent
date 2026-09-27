"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    label: "Employer",
    quote:
      "We'd worked with three other agencies before Titan Ridge. None of them took the time to actually understand our operation. Within two weeks they sent us one candidate, the right one. He's still with us eighteen months later.",
    name: "Michael R.",
    title: "Operations Director",
  },
  {
    label: "Candidate",
    quote:
      "I wasn't even actively looking. Adrian reached out, we had a real conversation, and he actually listened. Two months later I was in a role that fit better than anything I'd found on my own in two years of searching.",
    name: "Jessica S.",
    title: "Logistics Manager",
  },
  {
    label: "Employer",
    quote:
      "What separates Titan Ridge is accountability. They didn't disappear after the placement. They checked in, they followed up, and when we had a concern they addressed it directly. That's rare in this industry.",
    name: "David K.",
    title: "VP of Human Resources",
  },
];

const ROTATE_MS = 7000;

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeRef = useRef(0);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const busyRef = useRef(false);

  const swapTo = useCallback((index: number) => {
    if (!quoteRef.current || busyRef.current) return;
    busyRef.current = true;
    gsap.to(quoteRef.current, {
      opacity: 0,
      y: 12,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setActive(index);
        gsap.fromTo(
          quoteRef.current,
          { opacity: 0, y: -12 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", onComplete: () => { busyRef.current = false; } }
        );
      },
    });
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timerRef.current = setInterval(() => {
      swapTo((activeRef.current + 1) % testimonials.length);
    }, ROTATE_MS);
  }, [swapTo]);

  // Pause/resume the rotation (WCAG 2.2.2)
  useEffect(() => {
    if (paused || hovering) {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      startTimer();
    }
  }, [paused, hovering, startTimer]);

  const onTabKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const n = testimonials.length;
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (active + 1) % n;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (active - 1 + n) % n;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = n - 1;
    if (next === null) return;
    e.preventDefault();
    goTo(next);
    tabRefs.current[next]?.focus();
  };

  const goTo = (index: number) => {
    if (index === active) return;
    swapTo(index);
    if (!paused && !hovering) startTimer();
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
      });
      tl.fromTo(headRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, 0);
      tl.fromTo(quoteRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0.15);
    }, sectionRef);
    return () => {
      ctx.revert();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const t = testimonials[active];

  return (
    <section
      ref={sectionRef}
      className="testi tr-section relative"
      aria-labelledby="testi-heading"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)" }}
    >
      <div className="tr-container">
        <div className="testi-grid">
          <div ref={headRef} className="testi-head" style={{ opacity: 0 }}>
            <p className="tr-eyebrow">What They Say</p>
            <h2 id="testi-heading" className="tr-h2" style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
              Don&apos;t Take Our Word For It
            </h2>

            <div className="testi-nav" role="tablist" aria-label="Testimonials" onKeyDown={onTabKeyDown}>
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  id={`testi-tab-${i}`}
                  aria-selected={i === active}
                  aria-controls="testi-panel"
                  tabIndex={i === active ? 0 : -1}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  onClick={() => goTo(i)}
                  className={`testi-tab font-display ${i === active ? "is-active" : ""}`}
                >
                  <span className="testi-tab-name">{item.name}</span>
                  <span className="testi-tab-role">{item.label}</span>
                </button>
              ))}
            </div>

            <button
              type="button"
              className="testi-pause font-display"
              onClick={() => setPaused((p) => !p)}
              aria-pressed={paused}
              aria-label={paused ? "Resume automatic rotation of testimonials" : "Pause automatic rotation of testimonials"}
            >
              {paused ? "Play" : "Pause"} rotation
            </button>
          </div>

          <div
            ref={quoteRef}
            id="testi-panel"
            role="tabpanel"
            aria-labelledby={`testi-tab-${active}`}
            className="testi-quote"
            style={{ opacity: 0 }}
            aria-live="polite"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onFocus={() => setHovering(true)}
            onBlur={() => setHovering(false)}
          >
            <span className="testi-mark font-display" aria-hidden="true">
              &ldquo;
            </span>
            <p className="testi-text font-body">{t.quote}</p>
            <div className="testi-attr">
              <span className="testi-name font-display">{t.name}</span>
              <span className="testi-dot" aria-hidden="true" />
              <span className="testi-title font-display">{t.title}</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testi-grid {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
          gap: clamp(40px, 6vw, 96px);
          align-items: start;
        }
        .testi-nav {
          display: flex;
          flex-direction: column;
          margin: clamp(32px, 4vw, 56px) 0 0;
          padding: 0;
          border-top: 1px solid rgba(20, 31, 49, 0.14);
        }
        .testi-tab {
          width: 100%;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 0;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(20, 31, 49, 0.14);
          cursor: pointer;
          text-align: left;
          color: rgba(20, 31, 49, 0.7);
          transition: color 0.25s ease, padding-left 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .testi-tab:hover {
          color: var(--tr-navy);
        }
        .testi-tab.is-active {
          color: var(--tr-navy);
          padding-left: 10px;
          box-shadow: inset 3px 0 0 var(--tr-gold);
        }
        .testi-tab-name {
          font-weight: 700;
          font-size: 19px;
          letter-spacing: 0.02em;
        }
        .testi-tab-role {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--tr-gold-text);
        }
        .testi-pause {
          margin-top: 18px;
          min-height: 44px;
          padding: 0 4px;
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--tr-navy);
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .testi-quote {
          position: relative;
          padding-top: clamp(24px, 3vw, 48px);
          padding-left: clamp(0px, 2vw, 24px);
        }
        .testi-mark {
          position: absolute;
          top: -0.15em;
          left: -0.1em;
          font-weight: 900;
          font-size: clamp(140px, 16vw, 220px);
          line-height: 1;
          color: rgba(204, 166, 98, 0.18);
          pointer-events: none;
          user-select: none;
        }
        .testi-text {
          position: relative;
          font-size: clamp(24px, 2.6vw, 36px);
          line-height: 1.4;
          color: var(--tr-navy);
          max-width: 24em;
          text-wrap: pretty;
        }
        .testi-attr {
          margin-top: 32px;
          display: flex;
          align-items: baseline;
          gap: 12px;
          flex-wrap: wrap;
        }
        .testi-name {
          font-weight: 700;
          font-size: 17px;
          color: var(--tr-navy);
        }
        .testi-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--tr-gold);
          transform: translateY(-3px);
        }
        .testi-title {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--tr-gold-text);
        }
        @media (max-width: 1023px) {
          .testi-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .testi-pause {
          margin-top: 18px;
          min-height: 44px;
          padding: 0 4px;
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--tr-navy);
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .testi-quote {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
