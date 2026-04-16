"use client";

import Link from "next/link";

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IndeedIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.566 21.5633v-8.762c.2553.0231.5009.0346.758.0346 1.2225 0 2.3739-.3206 3.3506-.8928v9.6182c0 .8219-.1957 1.4287-.5757 1.8338-.378.4033-.8808.6049-1.491.6049-.6007 0-1.0766-.2016-1.468-.6183-.3781-.4032-.5739-1.01-.5739-1.8184zM11.589.5659c2.5447-.8929 5.4424-.8449 7.6186.987.405.3687.8673.8334 1.0515 1.3806.2207.6913-.7695-.073-.9057-.167-.71-.4532-1.4182-.8334-2.2127-1.0946C12.8614.3873 8.8122 2.709 6.2945 6.315c-1.0516 1.5939-1.7367 3.2721-2.299 5.1174-.0614.2017-.1094.4647-.2207.6413-.1113.2036-.048-.5453-.048-.5702.0845-.7623.2438-1.4997.4414-2.237C5.3292 5.3375 7.897 2.0655 11.5891.5658zm4.9281 7.0587c0 1.6686-1.353 3.0224-3.0205 3.0224-1.6677 0-3.0186-1.3538-3.0186-3.0224 0-1.6687 1.351-3.0224 3.0186-3.0224 1.6676 0 3.0205 1.3518 3.0205 3.0224Z" />
  </svg>
);

const GlassdoorIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.1093.0006c-.0749-.0074-.1348.0522-.1348.127v3.451c0 .0673.0537.1194.121.127 2.619.172 4.6092.9501 4.6092 3.6814H13.086a.1343.1343 0 0 0-.1348.1347v8.9644c0 .0748.06.1347.1348.1347h10.0034c.0748 0 .1347-.0599.1347-.1347V7.342c0-2.2374-.7996-4.0558-2.4159-5.3279C19.3191.8469 17.0874.1428 14.1093.0006ZM.9107 7.387a.1342.1342 0 0 0-.1347.1347v8.9566c0 .0748.06.1347.1347.1347h5.6189c0 2.7313-1.9902 3.5094-4.6091 3.6815-.0674.0075-.1192.0596-.1192.127v3.451c0 .0747.06.1343.1348.1269 2.9781-.1422 5.2078-.8463 6.6969-2.0136 1.6163-1.272 2.4159-3.0905 2.4159-5.3278V7.5217a.1343.1343 0 0 0-.1348-.1347z" />
  </svg>
);

export default function ContactMain() {
  return (
    <section className="contact-main" style={{ backgroundColor: "#F5F4F0" }}>
      <div className="contact-main-inner">
        <div className="contact-grid">
          {/* LEFT — Form */}
          <div className="contact-form-col">
            <p
              className="font-display font-bold uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#CCA662",
                marginBottom: "8px",
              }}
            >
              Send Us a Message
            </p>
            <p
              className="font-body italic"
              style={{
                fontSize: "14px",
                color: "#2A2A2A",
                marginBottom: "32px",
              }}
            >
              We typically respond within one business day.
            </p>

            <form
              className="flex flex-col"
              style={{ gap: "20px" }}
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Row 1 */}
              <div className="form-row">
                <Field label="Full Name" id="name" type="text" required />
                <Field label="Company Name" id="company" type="text" />
              </div>

              {/* Row 2 */}
              <div className="form-row">
                <Field label="Email Address" id="email" type="email" required />
                <Field label="Phone Number" id="phone" type="tel" />
              </div>

              {/* Row 3 */}
              <div className="form-field">
                <label htmlFor="role" className="form-label">
                  I am a...
                </label>
                <select id="role" className="form-input" defaultValue="">
                  <option value="" disabled>
                    — Select one —
                  </option>
                  <option value="company">Company looking to hire</option>
                  <option value="professional">
                    Professional looking for work
                  </option>
                </select>
              </div>

              {/* Row 4 */}
              <div className="form-field">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-input"
                  placeholder="Tell us what you're looking for..."
                  style={{ minHeight: "140px", resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                className="form-submit font-display font-bold uppercase"
                style={{
                  marginTop: "12px",
                  height: "56px",
                  width: "100%",
                  backgroundColor: "#CCA662",
                  color: "#141F31",
                  fontSize: "15px",
                  letterSpacing: "3px",
                  borderRadius: "4px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                Send Message
              </button>

              <p
                className="font-body italic text-center"
                style={{
                  fontSize: "13px",
                  color: "rgba(0, 0, 0, 0.35)",
                  marginTop: "4px",
                }}
              >
                Your information is never shared or sold. Ever.
              </p>
            </form>
          </div>

          {/* RIGHT — Contact Info */}
          <div className="contact-info-col">
            <div className="flex flex-col" style={{ gap: "40px" }}>
              <InfoBlock
                label="Email Us"
                descriptor="We respond within one business day."
              >
                <a
                  href="mailto:support@titanridgetalent.com"
                  className="info-link font-display"
                  style={{
                    fontSize: "18px",
                    color: "#141F31",
                    fontWeight: 600,
                  }}
                >
                  support@titanridgetalent.com
                </a>
              </InfoBlock>

              <InfoBlock
                label="Call Us"
                descriptor="Monday – Friday, 8am – 6pm"
              >
                <a
                  href="tel:+18005551234"
                  className="info-link font-display"
                  style={{
                    fontSize: "18px",
                    color: "#141F31",
                    fontWeight: 600,
                  }}
                >
                  (800) 555-1234
                </a>
              </InfoBlock>

              <InfoBlock label="Connect">
                <div
                  className="flex items-center"
                  style={{ gap: "16px", color: "#CCA662", marginTop: "4px" }}
                >
                  <Link
                    href="#"
                    aria-label="LinkedIn"
                    className="contact-social"
                    style={{ color: "#CCA662", transition: "color 0.2s ease" }}
                  >
                    <LinkedInIcon />
                  </Link>
                  <Link
                    href="#"
                    aria-label="Indeed"
                    className="contact-social"
                    style={{ color: "#CCA662", transition: "color 0.2s ease" }}
                  >
                    <IndeedIcon />
                  </Link>
                  <Link
                    href="#"
                    aria-label="Glassdoor"
                    className="contact-social"
                    style={{ color: "#CCA662", transition: "color 0.2s ease" }}
                  >
                    <GlassdoorIcon />
                  </Link>
                </div>
              </InfoBlock>
            </div>

            {/* Dark card */}
            <div
              style={{
                marginTop: "60px",
                backgroundColor: "#141F31",
                borderRadius: "8px",
                padding: "32px",
              }}
            >
              <p
                className="font-display font-bold uppercase"
                style={{
                  fontSize: "11px",
                  letterSpacing: "4px",
                  color: "#CCA662",
                  marginBottom: "12px",
                }}
              >
                Looking for Open Roles?
              </p>
              <h3
                className="font-display font-bold"
                style={{
                  fontSize: "22px",
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                  marginBottom: "12px",
                }}
              >
                Browse our current job listings.
              </h3>
              <p
                className="font-body italic"
                style={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "rgba(255, 255, 255, 0.55)",
                  marginBottom: "24px",
                }}
              >
                We update our job board regularly. If you don&apos;t see the
                right fit today, check back. Or send us your resume and
                we&apos;ll keep you in mind.
              </p>
              <Link
                href="/jobs"
                className="font-display font-bold uppercase inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-titan-gold/25 hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  height: "44px",
                  padding: "0 28px",
                  borderRadius: "9999px",
                  backgroundColor: "#CCA662",
                  color: "#141F31",
                  fontSize: "13px",
                  letterSpacing: "3px",
                }}
              >
                See Open Roles
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-main {
          padding: 120px 80px;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .form-field {
          display: flex;
          flex-direction: column;
        }
        :global(.form-label) {
          font-family: var(--font-barlow-condensed);
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #141f31;
          margin-bottom: 6px;
        }
        :global(.form-input) {
          background-color: #ffffff;
          border: 1px solid #d4d0c8;
          border-radius: 4px;
          padding: 14px 16px;
          font-family: var(--font-lora);
          font-size: 15px;
          color: #2a2a2a;
          outline: none;
          transition: all 0.2s ease;
          width: 100%;
        }
        :global(.form-input:focus) {
          border-color: #cca662;
          box-shadow: 0 0 0 3px rgba(204, 166, 98, 0.12);
        }
        :global(.form-input::placeholder) {
          color: rgba(42, 42, 42, 0.45);
        }
        .form-submit:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(204, 166, 98, 0.25);
        }
        .info-link:hover {
          color: #cca662 !important;
        }
        .contact-social:hover {
          color: #ffffff !important;
        }

        @media (max-width: 767px) {
          .contact-main {
            padding: 80px 24px;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
          .contact-main :global(a[style*="borderRadius"]) {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  id,
  type,
  required,
}: {
  label: string;
  id: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="form-input"
      />
    </div>
  );
}

function InfoBlock({
  label,
  descriptor,
  children,
}: {
  label: string;
  descriptor?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        borderLeft: "4px solid #CCA662",
        paddingLeft: "20px",
      }}
    >
      <p
        className="font-display font-bold uppercase"
        style={{
          fontSize: "11px",
          letterSpacing: "4px",
          color: "#CCA662",
          marginBottom: "8px",
        }}
      >
        {label}
      </p>
      {children}
      {descriptor ? (
        <p
          className="font-body italic"
          style={{
            fontSize: "13px",
            color: "rgba(0, 0, 0, 0.45)",
            marginTop: "6px",
          }}
        >
          {descriptor}
        </p>
      ) : null}
    </div>
  );
}
