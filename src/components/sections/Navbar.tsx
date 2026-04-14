"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Mission", href: "/mission" },
  { label: "Founder", href: "/founders" },
  { label: "Jobs", href: "/jobs" },
  { label: "Industries", href: "/industries" },
  { label: "Testimonials", href: "/testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const darkHero = pathname !== "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled || menuOpen
            ? "bg-titan-navy/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
          <Link href="/" className="group flex items-center">
            <Image
              src="/images/titan-ridge-logo.svg"
              alt="Titan Ridge Talent"
              width={180}
              height={115}
              className="h-12 w-auto sm:h-14 transition-opacity duration-300 group-hover:opacity-80"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-display text-[13px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300 hover:text-titan-gold ${
                    scrolled ? "text-titan-offwhite/70" : darkHero ? "text-titan-offwhite/70" : "text-titan-navy"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side — CTA + mobile toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex font-display rounded-full bg-gold-gradient px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-titan-navy transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              Hire Talent
            </Link>

            {/* Hamburger toggle — visible below lg */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden relative inline-flex items-center justify-center"
              style={{
                width: "44px",
                height: "44px",
                color: scrolled || menuOpen || darkHero ? "#F5F4F0" : "#141F31",
              }}
            >
              <span
                aria-hidden="true"
                className="absolute block"
                style={{
                  width: "22px",
                  height: "1.5px",
                  backgroundColor: "currentColor",
                  transform: menuOpen
                    ? "translateY(0) rotate(45deg)"
                    : "translateY(-6px) rotate(0)",
                  transition: "transform 0.3s ease",
                }}
              />
              <span
                aria-hidden="true"
                className="absolute block"
                style={{
                  width: "22px",
                  height: "1.5px",
                  backgroundColor: "currentColor",
                  opacity: menuOpen ? 0 : 1,
                  transition: "opacity 0.2s ease",
                }}
              />
              <span
                aria-hidden="true"
                className="absolute block"
                style={{
                  width: "22px",
                  height: "1.5px",
                  backgroundColor: "currentColor",
                  transform: menuOpen
                    ? "translateY(0) rotate(-45deg)"
                    : "translateY(6px) rotate(0)",
                  transition: "transform 0.3s ease",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "#141F31" }}
      >
        <div
          className="flex h-full w-full flex-col items-start px-8"
          style={{ paddingTop: "100px" }}
        >
          <ul className="flex flex-col gap-6 w-full">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity 0.4s ease ${
                    i * 0.06
                  }s, transform 0.4s ease ${i * 0.06}s`,
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display font-semibold uppercase"
                  style={{
                    fontSize: "32px",
                    letterSpacing: "2px",
                    color: "#F5F4F0",
                    lineHeight: 1.1,
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="font-display font-bold uppercase inline-flex items-center justify-center w-full transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25"
            style={{
              marginTop: "32px",
              height: "52px",
              borderRadius: "9999px",
              backgroundColor: "#CCA662",
              color: "#141F31",
              fontSize: "14px",
              letterSpacing: "3px",
              opacity: menuOpen ? 1 : 0,
              transition: `opacity 0.4s ease ${navLinks.length * 0.06}s`,
            }}
          >
            Hire Talent
          </Link>

          <div
            className="w-full"
            style={{
              marginTop: "32px",
              height: "1px",
              backgroundColor: "rgba(204, 166, 98, 0.4)",
            }}
          />

          <div
            style={{
              marginTop: "32px",
              opacity: menuOpen ? 1 : 0,
              transition: "opacity 0.4s ease 0.4s",
            }}
          >
            <p
              className="font-display font-medium uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "12px",
              }}
            >
              Get in Touch
            </p>
            <a
              href="mailto:support@titanridgetalent.com"
              className="font-body italic block"
              style={{
                fontSize: "15px",
                color: "rgba(245, 244, 240, 0.65)",
                marginBottom: "6px",
              }}
            >
              support@titanridgetalent.com
            </a>
            <a
              href="tel:+18005551234"
              className="font-body italic block"
              style={{
                fontSize: "15px",
                color: "rgba(245, 244, 240, 0.65)",
              }}
            >
              (800) 555-1234
            </a>

            <div
              className="flex items-center"
              style={{ gap: "20px", marginTop: "24px" }}
            >
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                style={{ color: "#CCA662", transition: "color 0.2s ease" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Indeed */}
              <a
                href="#"
                aria-label="Indeed"
                style={{ color: "#CCA662", transition: "color 0.2s ease" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.566 21.5633v-8.762c.2553.0231.5009.0346.758.0346 1.2225 0 2.3739-.3206 3.3506-.8928v9.6182c0 .8219-.1957 1.4287-.5757 1.8338-.378.4033-.8808.6049-1.491.6049-.6007 0-1.0766-.2016-1.468-.6183-.3781-.4032-.5739-1.01-.5739-1.8184zM11.589.5659c2.5447-.8929 5.4424-.8449 7.6186.987.405.3687.8673.8334 1.0515 1.3806.2207.6913-.7695-.073-.9057-.167-.71-.4532-1.4182-.8334-2.2127-1.0946C12.8614.3873 8.8122 2.709 6.2945 6.315c-1.0516 1.5939-1.7367 3.2721-2.299 5.1174-.0614.2017-.1094.4647-.2207.6413-.1113.2036-.048-.5453-.048-.5702.0845-.7623.2438-1.4997.4414-2.237C5.3292 5.3375 7.897 2.0655 11.5891.5658zm4.9281 7.0587c0 1.6686-1.353 3.0224-3.0205 3.0224-1.6677 0-3.0186-1.3538-3.0186-3.0224 0-1.6687 1.351-3.0224 3.0186-3.0224 1.6676 0 3.0205 1.3518 3.0205 3.0224Z" />
                </svg>
              </a>
              {/* Glassdoor */}
              <a
                href="#"
                aria-label="Glassdoor"
                style={{ color: "#CCA662", transition: "color 0.2s ease" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.1093.0006c-.0749-.0074-.1348.0522-.1348.127v3.451c0 .0673.0537.1194.121.127 2.619.172 4.6092.9501 4.6092 3.6814H13.086a.1343.1343 0 0 0-.1348.1347v8.9644c0 .0748.06.1347.1348.1347h10.0034c.0748 0 .1347-.0599.1347-.1347V7.342c0-2.2374-.7996-4.0558-2.4159-5.3279C19.3191.8469 17.0874.1428 14.1093.0006ZM.9107 7.387a.1342.1342 0 0 0-.1347.1347v8.9566c0 .0748.06.1347.1347.1347h5.6189c0 2.7313-1.9902 3.5094-4.6091 3.6815-.0674.0075-.1192.0596-.1192.127v3.451c0 .0747.06.1343.1348.1269 2.9781-.1422 5.2078-.8463 6.6969-2.0136 1.6163-1.272 2.4159-3.0905 2.4159-5.3278V7.5217a.1343.1343 0 0 0-.1348-.1347z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
