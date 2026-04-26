import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing the use of titanridgetalent.com and the services offered by Titan Ridge Talent.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalLayout title="Terms of Use" lastUpdated="April 26, 2026">
          <div className="legal-divider" aria-hidden="true" />

          <h2>Acceptance</h2>
          <p>
            By accessing titanridgetalent.com, you agree to these Terms of
            Use. If you do not agree, please do not use the site.
          </p>

          <h2>Who We Are</h2>
          <p>
            Titan Ridge Talent is a recruiting firm. The site provides
            information about our services and a way to contact us. Use of the
            site does not, by itself, create a candidate-recruiter or
            client-firm relationship.
          </p>

          <h2>Use of the Site</h2>
          <p>You may use the site for lawful purposes only. You agree not to:</p>
          <ul>
            <li>Disrupt or interfere with the site&apos;s operation</li>
            <li>Submit false, misleading, or unauthorized information</li>
            <li>
              Attempt to access areas of the site that are not publicly
              available
            </li>
            <li>Scrape, mine, or harvest content or data without permission</li>
            <li>Transmit viruses, malware, or any malicious code</li>
            <li>
              Impersonate any person or misrepresent your affiliation with any
              person or entity
            </li>
          </ul>

          <h2>Submissions</h2>
          <p>
            Information you submit through our contact form, by email, or
            through any resume you share is handled as outlined in our{" "}
            <a href="/privacy">Privacy Policy</a>. By submitting information,
            you confirm that it is accurate and that you have the right to
            share it.
          </p>

          <h2>No Employment Guarantee</h2>
          <p>
            Submitting your resume or contacting us does not create any
            employment relationship, candidate-recruiter agreement, or
            guarantee of placement. Recruiting is a relationship business; we
            evaluate every connection on its merits and do not promise
            interviews, offers, or employment outcomes.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on the site — including text, design, logos, and
            images — is owned by Titan Ridge Talent or used with permission.
            You may not copy, reproduce, distribute, or create derivative works
            from any portion of the site without our written consent, except
            for personal, non-commercial reference.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            The site may contain links to third-party websites. We do not
            control those sites and are not responsible for their content,
            practices, or policies. Visiting them is at your own risk.
          </p>

          <h2>Disclaimers</h2>
          <p>
            The site is provided &ldquo;as is&rdquo; without warranties of any
            kind, express or implied. We do not guarantee uninterrupted
            availability, error-free operation, or that the site is free of
            harmful components.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Titan Ridge Talent is not
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising from your use of the site or services,
            even if we have been advised of the possibility of such damages.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold Titan Ridge Talent harmless from
            any claim or demand, including reasonable attorneys&apos; fees,
            arising out of your breach of these Terms or your misuse of the
            site.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the
            site after changes are posted means you accept the updated Terms.
            The &ldquo;Last Updated&rdquo; date above reflects the most recent
            revision.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of California,
            without regard to conflict-of-law principles. Any disputes will be
            resolved exclusively in the state or federal courts located in
            California.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms? Email{" "}
            <a href="mailto:support@titanridgetalent.com">
              support@titanridgetalent.com
            </a>
            .
          </p>
        </LegalLayout>
      </main>
      <Footer />
    </>
  );
}
