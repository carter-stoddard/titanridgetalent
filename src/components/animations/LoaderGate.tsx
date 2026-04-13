"use client";

import { useState, useEffect } from "react";
import Loader from "./Loader";

export default function LoaderGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("titan-loaded");
    if (!hasVisited) {
      setLoading(true);
    }
    setMounted(true);
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem("titan-loaded", "true");
    setLoading(false);
  };

  // Avoid hydration mismatch — show nothing until mounted
  if (!mounted) {
    return <div className="opacity-0">{children}</div>;
  }

  return (
    <>
      {loading && <Loader onComplete={handleComplete} />}
      <div
        className={`transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
