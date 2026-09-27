"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const COMPAS_WIDGET_SRC = "https://hire.myavionte.com/app/careers/dist/jobs.js";
const COMPAS_DATA_BID = "jFGv1C2ly10";
const COMPAS_DATA_JBID = "CjvI3Im2yEo";

export default function CareersListings() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const widgetMountRef = useRef<HTMLDivElement>(null);

  // Mount the Avionté / Compas jobs widget
  useEffect(() => {
    const mount = widgetMountRef.current;
    if (!mount) return;
    if (mount.querySelector("#compas-jobs-widget")) return; // strict-mode guard

    const script = document.createElement("script");
    script.id = "compas-jobs-widget";
    script.type = "text/javascript";
    script.src = COMPAS_WIDGET_SRC;
    script.async = true;
    script.setAttribute("data-bid", COMPAS_DATA_BID);
    script.setAttribute("data-jbid", COMPAS_DATA_JBID);
    mount.appendChild(script);

    return () => {
      mount.innerHTML = "";
    };
  }, []);

  // Entry animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
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

  return (
    <section
      ref={sectionRef}
      className="careers-listings tr-section relative w-full"
      style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)", paddingTop: 0 }}
    >
      <div className="tr-container">
        <div
          ref={cardRef}
          className="careers-embed relative w-full"
          style={{ minHeight: "480px", opacity: 0 }}
        >
          {/* Avionté / Compas widget renders into this container */}
          <div
            ref={widgetMountRef}
            id="compas-jobs-target"
            className="compas-jobs-target w-full"
          />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .careers-embed {
            min-height: 380px !important;
          }
        }
      `}</style>
    </section>
  );
}
