"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(loaderRef.current, {
            opacity: 0,
            duration: 0.45,
            ease: "power2.inOut",
            onComplete,
          });
        },
      });

      gsap.set(logoRef.current, { opacity: 0, scale: 0.94 });

      tl.to(logoRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      });

      tl.to({}, { duration: 0.2 });
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="loader-wrapper"
      aria-label="Loading Titan Ridge Talent"
      role="status"
    >
      <div className="w-[280px] sm:w-[360px] md:w-[420px]">
        <img
          ref={logoRef}
          src="/images/titan-ridge-logo.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
