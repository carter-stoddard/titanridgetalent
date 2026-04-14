"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    fetch("/images/titan-ridge-logo.svg")
      .then((res) => res.text())
      .then((text) => {
        setSvgContent(text);
      });
  }, []);

  useEffect(() => {
    if (!svgContent || !svgRef.current) return;

    const svg = svgRef.current;

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

    // Start: logo hidden, slightly scaled down
    gsap.set(svg, { opacity: 0, scale: 0.94 });

    // Cinematic fade + scale in
    tl.to(svg, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
    });

    // Brief hold for presence
    tl.to({}, { duration: 0.2 });

    return () => {
      tl.kill();
    };
  }, [svgContent, onComplete]);

  return (
    <div
      ref={loaderRef}
      className="loader-wrapper"
      aria-label="Loading Titan Ridge Talent"
      role="status"
    >
      <div className="w-[280px] sm:w-[360px] md:w-[420px]">
        {svgContent ? (
          <svg
            ref={svgRef}
            viewBox="0 0 1000.58 635.78"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            dangerouslySetInnerHTML={{
              __html: svgContent
                .replace(/<\?xml[^?]*\?>/, "")
                .replace(/<svg[^>]*>/, "")
                .replace(/<\/svg>/, ""),
            }}
          />
        ) : null}
      </div>
    </div>
  );
}
