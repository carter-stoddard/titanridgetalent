import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Titan Ridge Talent is committed to digital accessibility. Our ongoing efforts, supported features, known limitations, and how to report an accessibility issue.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <LegalLayout
          title="Accessibility Statement"
          lastUpdated="April 26, 2026"
        >
          <div className="legal-divider" aria-hidden="true" />

          <h2>Our Commitment</h2>
          <p>
            Titan Ridge Talent Solutions LLC is committed to providing a
            website that is accessible to the widest possible audience,
            regardless of ability. We strive to align with the Web Content
            Accessibility Guidelines (WCAG) 2.1, Level AA, and we continue
            to make improvements as part of our ongoing work on the Site.
          </p>

          <h2>Standards We Target</h2>
          <p>
            We design and build with the following standards in mind:
          </p>
          <ul>
            <li>
              <strong>WCAG 2.1, Level AA</strong> — the international
              standard for web accessibility, published by the World Wide Web
              Consortium (W3C)
            </li>
            <li>
              <strong>Section 504 of the Rehabilitation Act</strong> —
              applicable to federal contractors and federally funded programs
            </li>
            <li>
              <strong>Title III of the Americans with Disabilities Act
              (ADA)</strong> — applicable to places of public accommodation,
              including websites that offer goods or services
            </li>
            <li>
              <strong>California Unruh Civil Rights Act</strong> — California
              statutory civil rights protections including digital access
            </li>
          </ul>

          <h2>Accessibility Features Supported</h2>
          <p>
            Our development and design practices include, among others:
          </p>
          <ul>
            <li>
              <strong>Semantic HTML</strong> — landmarks, headings, lists,
              and form controls are used appropriately so assistive
              technologies can convey structure
            </li>
            <li>
              <strong>Alt text on images</strong> — meaningful images include
              descriptive alternative text; decorative images are marked as
              such
            </li>
            <li>
              <strong>Keyboard navigation</strong> — interactive elements are
              reachable and operable with a keyboard alone
            </li>
            <li>
              <strong>Color contrast</strong> — text and meaningful UI
              elements meet or exceed WCAG AA color-contrast ratios
            </li>
            <li>
              <strong>Reduced motion</strong> — animations and smooth-scroll
              effects automatically defer to the operating system&apos;s
              &ldquo;reduce motion&rdquo; preference
            </li>
            <li>
              <strong>Form labels</strong> — inputs are programmatically
              associated with labels and provide appropriate error messaging
            </li>
            <li>
              <strong>Resizable text</strong> — text can be resized up to
              200% without loss of content or functionality
            </li>
            <li>
              <strong>ARIA where appropriate</strong> — landmark roles,
              aria-label, and aria-live regions are used where standard HTML
              alone is insufficient
            </li>
          </ul>

          <h2>Known Limitations</h2>
          <p>
            We work toward continuous improvement and are aware of the
            following limitations. We are actively addressing them:
          </p>
          <ul>
            <li>
              <strong>Third-party embeds</strong> — portions of our Site that
              are rendered by third-party services (for example, the
              Avionté-powered careers page) may not fully conform to our
              accessibility standards. We work with vendors to advocate for
              improvements but do not control their rendered output.
            </li>
            <li>
              <strong>User-generated content</strong> — content submitted by
              users (e.g., resume attachments) may not meet accessibility
              standards.
            </li>
            <li>
              <strong>Older content</strong> — content published prior to our
              current accessibility standards may not yet be fully remediated;
              we update as we identify it.
            </li>
          </ul>

          <h2>Ongoing Efforts</h2>
          <p>
            We treat accessibility as an ongoing program, not a one-time
            project. We:
          </p>
          <ul>
            <li>Review accessibility considerations during design and build</li>
            <li>
              Test new functionality with assistive technologies and against
              WCAG 2.1 AA criteria
            </li>
            <li>Provide accessibility training to team members</li>
            <li>
              Monitor user feedback and address reported issues promptly
            </li>
            <li>
              Re-evaluate the Site periodically and remediate findings on a
              prioritized basis
            </li>
          </ul>

          <h2>How to Report an Accessibility Issue</h2>
          <p>
            If you encounter an accessibility barrier on the Site, please let
            us know. We welcome feedback and will work to resolve issues
            promptly. When contacting us, please include:
          </p>
          <ul>
            <li>The URL of the page where the issue occurred</li>
            <li>A description of the issue</li>
            <li>
              The assistive technology, browser, and operating system you
              were using, if known
            </li>
            <li>
              The best way to reach you for follow-up (and an alternative
              format we can use to share information with you if helpful)
            </li>
          </ul>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@titanridgetalent.com">
              support@titanridgetalent.com
            </a>
            <br />
            <strong>Phone:</strong> (714) 552-4334
            <br />
            <strong>Mail:</strong> Titan Ridge Talent Solutions LLC, 112 E.
            Amerige Ave #106, Fullerton, CA 92832
          </p>
          <p>
            We aim to acknowledge accessibility reports within five business
            days and provide an update on remediation timeframes.
          </p>

          <h2>Alternative Access</h2>
          <p>
            If you would like to apply, submit a resume, or otherwise engage
            our services and the Site is not accessible to you for any
            reason, please contact us using the information above. We will
            work with you to provide the information or complete the
            engagement through an alternative method.
          </p>

          <h2>Disclaimer</h2>
          <p>
            Despite our best efforts, some content on the Site may not be
            fully accessible to all users at all times. Accessibility is an
            ongoing journey, and we make no guarantee that the Site is or
            will at all times be free of accessibility barriers. This
            Statement does not waive any rights or remedies available under
            applicable law.
          </p>
        </LegalLayout>
      </main>
      <Footer />
    </>
  );
}
