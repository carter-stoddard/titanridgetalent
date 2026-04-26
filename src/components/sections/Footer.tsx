"use client";

import Image from "next/image";
import Link from "next/link";
import { JOBS_VISIBLE } from "@/lib/features";

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Indeed",
    href: "#",
    svg: (
      <svg
        className="icon-indeed"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M11.566 21.5633v-8.762c.2553.0231.5009.0346.758.0346 1.2225 0 2.3739-.3206 3.3506-.8928v9.6182c0 .8219-.1957 1.4287-.5757 1.8338-.378.4033-.8808.6049-1.491.6049-.6007 0-1.0766-.2016-1.468-.6183-.3781-.4032-.5739-1.01-.5739-1.8184zM11.589.5659c2.5447-.8929 5.4424-.8449 7.6186.987.405.3687.8673.8334 1.0515 1.3806.2207.6913-.7695-.073-.9057-.167-.71-.4532-1.4182-.8334-2.2127-1.0946C12.8614.3873 8.8122 2.709 6.2945 6.315c-1.0516 1.5939-1.7367 3.2721-2.299 5.1174-.0614.2017-.1094.4647-.2207.6413-.1113.2036-.048-.5453-.048-.5702.0845-.7623.2438-1.4997.4414-2.237C5.3292 5.3375 7.897 2.0655 11.5891.5658zm4.9281 7.0587c0 1.6686-1.353 3.0224-3.0205 3.0224-1.6677 0-3.0186-1.3538-3.0186-3.0224 0-1.6687 1.351-3.0224 3.0186-3.0224 1.6676 0 3.0205 1.3518 3.0205 3.0224Z" />
      </svg>
    ),
  },
  {
    label: "Glassdoor",
    href: "#",
    svg: (
      <svg
        className="icon-glassdoor"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M14.1093.0006c-.0749-.0074-.1348.0522-.1348.127v3.451c0 .0673.0537.1194.121.127 2.619.172 4.6092.9501 4.6092 3.6814H13.086a.1343.1343 0 0 0-.1348.1347v8.9644c0 .0748.06.1347.1348.1347h10.0034c.0748 0 .1347-.0599.1347-.1347V7.342c0-2.2374-.7996-4.0558-2.4159-5.3279C19.3191.8469 17.0874.1428 14.1093.0006ZM.9107 7.387a.1342.1342 0 0 0-.1347.1347v8.9566c0 .0748.06.1347.1347.1347h5.6189c0 2.7313-1.9902 3.5094-4.6091 3.6815-.0674.0075-.1192.0596-.1192.127v3.451c0 .0747.06.1343.1348.1269 2.9781-.1422 5.2078-.8463 6.6969-2.0136 1.6163-1.272 2.4159-3.0905 2.4159-5.3278V7.5217a.1343.1343 0 0 0-.1348-.1347z" />
      </svg>
    ),
  },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Mission", href: "/mission" },
  { label: "Founder", href: "/founders" },
  { label: "Industries", href: "/industries" },
  { label: "Testimonials", href: "/testimonials" },
];

const workLinks = [
  { label: "I'm Hiring", href: "/contact" },
  ...(JOBS_VISIBLE
    ? [
        { label: "I'm Looking for Work", href: "/jobs" },
        { label: "Jobs Available", href: "/jobs" },
      ]
    : []),
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="footer-wrapper relative w-full"
      style={{ backgroundColor: "#141F31", margin: 0, padding: 0 }}
    >
      {/* Main Footer Body */}
      <div className="footer-body">
        <div className="footer-grid">
          {/* COLUMN 1 — Brand */}
          <div className="footer-col footer-col-brand">
            <Image
              src="/images/titan-ridge-logo.svg"
              alt="Titan Ridge Talent"
              width={260}
              height={165}
              className="footer-logo"
            />

            <p
              className="font-body italic footer-tagline"
              style={{
                fontSize: "14px",
                lineHeight: 1.6,
                color: "rgba(255, 255, 255, 0.45)",
                marginTop: "20px",
              }}
            >
              Built on Relationships. Driven by Results.
            </p>

            {/* Social icons */}
            <div
              className="footer-socials flex"
              style={{ gap: "16px", marginTop: "24px", color: "#CCA662" }}
            >
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={`Titan Ridge Talent on ${s.label}`}
                  className="footer-social-icon inline-flex items-center justify-center"
                  style={{ color: "#CCA662", transition: "color 0.2s ease" }}
                >
                  {s.svg}
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN 2 — Company */}
          <div className="footer-col">
            <p
              className="font-display font-bold uppercase footer-label"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "20px",
              }}
            >
              Company
            </p>
            <ul className="footer-links">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="footer-link font-display"
                    style={{
                      fontSize: "15px",
                      color: "rgba(255, 255, 255, 0.65)",
                      display: "inline-block",
                      borderLeft: "2px solid transparent",
                      paddingLeft: "12px",
                      marginLeft: "-14px",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 — Work With Us */}
          <div className="footer-col">
            <p
              className="font-display font-bold uppercase footer-label"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "20px",
              }}
            >
              Work With Us
            </p>
            <ul className="footer-links">
              {workLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="footer-link font-display"
                    style={{
                      fontSize: "15px",
                      color: "rgba(255, 255, 255, 0.65)",
                      display: "inline-block",
                      borderLeft: "2px solid transparent",
                      paddingLeft: "12px",
                      marginLeft: "-14px",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 — Get In Touch */}
          <div className="footer-col">
            <p
              className="font-display font-bold uppercase footer-label"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "20px",
              }}
            >
              Get In Touch
            </p>
            <a
              href="mailto:support@titanridgetalent.com"
              className="footer-email font-body"
              style={{
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.65)",
                display: "block",
                marginBottom: "28px",
                transition: "color 0.2s ease",
              }}
            >
              support@titanridgetalent.com
            </a>
            <a
              href="/contact"
              className="font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0"
              style={{
                height: "44px",
                padding: "0 24px",
                borderRadius: "9999px",
                backgroundColor: "#CCA662",
                color: "#141F31",
                fontSize: "13px",
                letterSpacing: "3px",
              }}
            >
              Start the Conversation
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-wrap">
        <div
          className="w-full"
          style={{ height: "1px", backgroundColor: "#CCA662" }}
        />
        <div className="footer-bottom">
          <p
            className="font-display"
            style={{
              fontSize: "12px",
              letterSpacing: "1px",
              color: "rgba(255, 255, 255, 0.35)",
            }}
          >
            © 2026 Titan Ridge Talent LLC. All rights reserved.
          </p>
          <div className="footer-legal-row">
            <Link
              href="/privacy"
              className="footer-legal font-display"
              style={{
                fontSize: "12px",
                color: "rgba(255, 255, 255, 0.35)",
                transition: "color 0.2s ease",
              }}
            >
              Privacy Policy
            </Link>
            <span
              style={{
                fontSize: "12px",
                color: "rgba(255, 255, 255, 0.35)",
              }}
            >
              ·
            </span>
            <Link
              href="/terms"
              className="footer-legal font-display"
              style={{
                fontSize: "12px",
                color: "rgba(255, 255, 255, 0.35)",
                transition: "color 0.2s ease",
              }}
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-logo {
          height: 80px;
          width: auto;
        }
        .footer-body {
          padding: 100px 80px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 48px;
          align-items: start;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-bottom-wrap {
          position: relative;
          z-index: 1;
        }
        .footer-bottom {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 24px 80px;
          gap: 12px;
        }
        .footer-legal-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .footer-link:hover {
          color: #ffffff !important;
          border-left-color: #cca662 !important;
        }
        .footer-legal:hover {
          color: rgba(255, 255, 255, 0.7) !important;
        }
        .footer-email:hover {
          color: #cca662 !important;
        }
        .footer-social-icon:hover {
          color: #ffffff !important;
        }

        @media (max-width: 767px) {
          .footer-body {
            padding: 60px 24px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          .footer-col {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .footer-col-brand {
            margin-bottom: 0;
          }
          .footer-logo {
            margin: 0 auto;
          }
          .footer-tagline {
            text-align: center;
          }
          .footer-socials {
            justify-content: center;
            margin-top: 32px !important;
          }
          .footer-label {
            text-align: center;
          }
          .footer-links {
            align-items: center;
          }
          .footer-link {
            margin-left: 0 !important;
            padding-left: 0 !important;
            border-left: none !important;
          }
          .footer-link:hover {
            border-left: none !important;
            color: #cca662 !important;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 24px;
            gap: 8px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
