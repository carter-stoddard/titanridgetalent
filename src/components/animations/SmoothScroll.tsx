"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    // Keep Lenis + ScrollTrigger in sync when page height changes mid-flight
    // (third-party widgets like Avionté inject DOM after Lenis initialized).
    let refreshTimer: number | null = null;
    const refreshScroll = () => {
      if (refreshTimer) window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(() => {
        lenis.resize();
        ScrollTrigger.refresh();
      }, 120);
    };

    const resizeObserver = new ResizeObserver(refreshScroll);
    resizeObserver.observe(document.body);

    return () => {
      if (refreshTimer) window.clearTimeout(refreshTimer);
      resizeObserver.disconnect();
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
