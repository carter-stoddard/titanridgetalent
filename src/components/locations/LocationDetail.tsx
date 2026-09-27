import Link from "next/link";
import type { Region } from "@/lib/locations";
import { HQ, regions } from "@/lib/locations";

export default function LocationDetail({ region }: { region: Region }) {
  const others = regions.filter((r) => r.slug !== region.slug);
  return (
    <>
      <section className="tr-section" aria-labelledby="loc-intro-heading" style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)" }}>
      <style>{`
        .locd-grid { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); gap: clamp(40px, 6vw, 96px); align-items: start; }
        .locd-side { display: flex; flex-direction: column; gap: 28px; }
        .locd-block { padding-top: 18px; border-top: 1px solid rgba(20, 31, 49, 0.14); }
        .locd-label { font-size: 12px; font-weight: 700; letter-spacing: 0.28em; text-transform: uppercase; color: var(--tr-gold-text); margin-bottom: 12px; }
        .locd-cities { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px 20px; }
        .locd-cities li { font-weight: 600; font-size: 17px; line-height: 1.25; color: var(--tr-navy); }
        .locd-others { list-style: none; margin: 28px 0 0; padding: 0; display: flex; flex-wrap: wrap; gap: 12px; }
        .locd-other { display: inline-flex; align-items: center; min-height: 44px; padding: 0 22px; border: 1.5px solid rgba(20, 31, 49, 0.7); border-radius: 9999px; color: var(--tr-navy); text-decoration: none; font-weight: 700; font-size: 14px; letter-spacing: 0.15em; text-transform: uppercase; transition: background-color 0.25s ease, color 0.25s ease; }
        .locd-other:hover { background: var(--tr-navy); color: var(--tr-cream); }
        @media (max-width: 1023px) { .locd-grid { grid-template-columns: 1fr; gap: 40px; } }
        @media (max-width: 767px) { .locd-cities { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
      `}</style>
        <div className="tr-container">
          <div className="locd-grid">
            <div>
              <p className="tr-eyebrow">How We Work Here</p>
              <h2 id="loc-intro-heading" className="tr-h2" style={{ marginTop: "20px", color: "var(--tr-navy)" }}>
                Industrial and administrative recruiting in {region.shortName}
              </h2>
              <p className="tr-body" style={{ color: "var(--tr-ink)", marginTop: "24px" }}>
                {region.intro}
              </p>
              <p className="tr-body" style={{ color: "var(--tr-ink)", marginTop: "18px" }}>
                Temporary staffing, temp-to-hire, direct hire, and confidential searches. One recruiter owns the
                search from the first conversation to the follow-up after the start date.
              </p>
              <div style={{ marginTop: "34px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/contact?role=company" className="tr-btn tr-btn-gold">
                  Find Talent
                </Link>
                <Link href="/careers" className="tr-btn tr-btn-ghost-dark">
                  Find a Job
                </Link>
              </div>
            </div>

            <div className="locd-side">
              <div className="locd-block">
                <p className="locd-label font-display">Cities We Serve · {region.cities.length}</p>
                <ul className="locd-cities">
                  {region.cities.map((c) => (
                    <li key={c} className="font-display">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="locd-block">
                <p className="locd-label font-display">Industrial</p>
                <p className="tr-body" style={{ color: "var(--tr-ink)", fontSize: "17px" }}>
                  {region.industrialFocus.join(", ")}
                </p>
              </div>
              <div className="locd-block">
                <p className="locd-label font-display">Administrative</p>
                <p className="tr-body" style={{ color: "var(--tr-ink)", fontSize: "17px" }}>
                  {region.administrativeFocus.join(", ")}
                </p>
              </div>
              <div className="locd-block">
                <p className="locd-label font-display">Office</p>
                <p className="tr-body" style={{ color: "var(--tr-ink)", fontSize: "17px" }}>
                  {HQ.street}, {HQ.city}, {HQ.region} {HQ.postal}
                  <br />
                  <a href={`tel:${HQ.phoneE164}`} style={{ color: "var(--tr-navy)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                    {HQ.phone}
                  </a>
                  <br />
                  By appointment only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tr-section" aria-labelledby="loc-other-heading" style={{ backgroundColor: "var(--tr-cream)", color: "var(--tr-navy)", paddingTop: 0 }}>
        <div className="tr-container">
          <p className="tr-eyebrow">Also Serving</p>
          <h2 id="loc-other-heading" className="tr-h2" style={{ marginTop: "20px", color: "var(--tr-navy)", fontSize: "clamp(28px, 3vw, 40px)" }}>
            Other Southern California regions
          </h2>
          <ul className="locd-others">
            {others.map((r) => (
              <li key={r.slug}>
                <Link href={`/locations/${r.slug}`} className="locd-other font-display">
                  {r.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/locations" className="locd-other font-display">
                All locations
              </Link>
            </li>
          </ul>
        </div>
      </section>

    </>
  );
}
