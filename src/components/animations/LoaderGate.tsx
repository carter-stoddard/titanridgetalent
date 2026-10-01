"use client";

import { useState } from "react";
import Loader from "./Loader";

// The intro loader is an overlay on top of the page, never a gate around it.
// Page content is always rendered and painted underneath, so first paint and
// Largest Contentful Paint are not held back until JavaScript hydrates.
// Returning visitors (sessionStorage "titan-loaded") get the overlay hidden
// before first paint by the inline script in layout.tsx (html.tr-visited).
export default function LoaderGate({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);

  const handleComplete = () => {
    try {
      sessionStorage.setItem("titan-loaded", "true");
    } catch {
      /* storage unavailable (private mode) — loader simply shows each load */
    }
    setDone(true);
  };

  return (
    <>
      {!done && <Loader onComplete={handleComplete} />}
      {children}
    </>
  );
}
