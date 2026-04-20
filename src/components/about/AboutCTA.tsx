"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current.filter(Boolean),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.08,
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

  const setItem = (i: number) => (el: HTMLElement | null) => {
    itemsRef.current[i] = el;
  };

  return (
    <section
      ref={sectionRef}
      className="about-cta relative w-full"
      style={{
        backgroundColor: "#141F31",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="flex flex-col items-center text-center px-6">
        <p
          ref={setItem(0)}
          className="font-display font-medium uppercase"
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            color: "#CCA662",
            marginBottom: "16px",
            opacity: 0,
          }}
        >
          The People Behind It
        </p>

        <h2
          ref={setItem(1)}
          className="font-display font-semibold uppercase"
          style={{
            fontSize: "clamp(36px, 4.5vw, 48px)",
            lineHeight: 0.95,
            color: "#FFFFFF",
            marginBottom: "16px",
            opacity: 0,
          }}
        >
          Meet the Founder.
        </h2>

        <p
          ref={setItem(2)}
          className="font-body italic"
          style={{
            fontSize: "17px",
            lineHeight: 1.6,
            color: "rgba(255, 255, 255, 0.55)",
            marginBottom: "40px",
            maxWidth: "640px",
            opacity: 0,
          }}
        >
          Thirty years of combined experience. Three people who built this
          because they believed it could be done better.
        </p>

        <Link
          ref={setItem(3) as (el: HTMLAnchorElement | null) => void}
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
            opacity: 0,
          }}
        >
          Meet the Founder
        </Link>
      </div>
    </section>
  );
}
