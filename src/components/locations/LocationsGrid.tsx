import Link from "next/link";
import { regions } from "@/lib/locations";

export default function LocationsGrid() {
  return (
    <section className="tr-section" aria-labelledby="locations-heading" style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)" }}>
      <style>{`
        .loc-grid { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); gap: clamp(40px, 6vw, 96px); align-items: start; }
        .loc-list { list-style: none; margin: 0; padding: 0; border-top: 1px solid rgba(20, 31, 49, 0.14); }
        .loc-item { border-bottom: 1px solid rgba(20, 31, 49, 0.14); }
        .loc-link { display: grid; grid-template-columns: 1fr auto; gap: 6px 24px; padding: 22px 0; color: var(--tr-navy); text-decoration: none; transition: padding-left 0.25s cubic-bezier(0.2, 0.8, 0.2, 1); }
        .loc-link:hover { padding-left: 8px; }
        .loc-name { font-weight: 600; text-transform: uppercase; font-size: clamp(22px, 2vw, 28px); line-height: 1; }
        .loc-cities { grid-row: 2; font-size: 16px; color: var(--tr-ink); }
        .loc-arrow { grid-row: 1 / span 2; align-self: center; font-size: 12px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--tr-gold-text); }
        @media (max-width: 1023px) { .loc-grid { grid-template-columns: 1fr; gap: 32px; } }
      `}</style>
      <div className="tr-container">
        <div className="loc-grid">
          <div>
            <p className="tr-eyebrow">Southern California</p>
            <h2 id="locations-heading" className="tr-h2" style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
              Based in Fullerton. Working across Southern California
            </h2>
            <p className="tr-body" style={{ color: "var(--tr-ink)", marginTop: "24px" }}>
              Our office is in Fullerton, in the heart of Orange County. Most of our on-site work happens within a
              two-hour drive of it: Orange County, Los Angeles County, the Inland Empire, and San Diego County. We
              also run searches for employers outside California, handled remotely with the same process.
            </p>
          </div>

          <ul className="loc-list">
            {regions.map((r) => (
              <li key={r.slug} className="loc-item">
                <Link href={`/locations/${r.slug}`} className="loc-link">
                  <span className="loc-name font-display">{r.name}</span>
                  <span className="loc-cities font-body">{r.featured.join(" · ")}</span>
                  <span className="loc-arrow font-display" aria-hidden="true">
                    View
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  );
}
