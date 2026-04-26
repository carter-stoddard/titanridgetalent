import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Titan Ridge Talent collects, uses, and protects information from visitors, candidates, and clients.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalLayout title="Privacy Policy" lastUpdated="April 26, 2026">
          <div className="legal-divider" aria-hidden="true" />

          <h2>Introduction</h2>
          <p>
            Titan Ridge Talent (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is
            a recruiting firm. This Privacy Policy explains how we collect,
            use, and protect information when you visit titanridgetalent.com or
            interact with our services. By using our site, you agree to the
            practices described here.
          </p>

          <h2>Information We Collect</h2>
          <h3>Information you provide</h3>
          <p>
            When you submit our contact form, send us a resume, or reach out by
            email, we collect what you choose to share — typically your name,
            email address, phone number (if provided), company name, role, and
            any details about the search you&apos;re running or the
            opportunity you&apos;re seeking.
          </p>
          <h3>Information collected automatically</h3>
          <p>
            Like most websites, we collect basic technical data when you visit:
            IP address, browser type, device, pages viewed, and time on site.
            We use this to keep the site running and to improve it.
          </p>
          <h3>Cookies</h3>
          <p>
            We use cookies for site functionality and basic analytics. You can
            disable cookies in your browser settings, but some parts of the
            site may not work as expected.
          </p>

          <h2>How We Use Information</h2>
          <ul>
            <li>To respond to your inquiries and run searches on your behalf</li>
            <li>To match candidates with appropriate roles</li>
            <li>To follow up after placements and maintain our relationships</li>
            <li>To improve the site and our services</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>How We Share Information</h2>
          <p>
            <strong>We do not sell or rent your personal information.</strong>{" "}
            We may share information with:
          </p>
          <ul>
            <li>
              <strong>Clients</strong> when presenting candidates for specific
              roles, with the candidate&apos;s awareness
            </li>
            <li>
              <strong>Service providers</strong> who help us operate the site
              (hosting, email, analytics) under appropriate confidentiality
              obligations
            </li>
            <li>
              <strong>Authorities</strong> if required by law or to protect
              rights, safety, or property
            </li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We retain candidate and client information for as long as needed to
            maintain working relationships and comply with legal requirements.
            You can request deletion at any time using the contact below.
          </p>

          <h2>Your Rights</h2>
          <p>You can:</p>
          <ul>
            <li>Request a copy of the information we hold about you</li>
            <li>Ask us to correct or update it</li>
            <li>Request deletion of your information</li>
            <li>Opt out of communications</li>
          </ul>
          <p>
            To make a request, email{" "}
            <a href="mailto:support@titanridgetalent.com">
              support@titanridgetalent.com
            </a>
            .
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our site is not directed to anyone under 16. We do not knowingly
            collect information from children. If you believe a child has
            submitted information through our site, please contact us so we can
            remove it.
          </p>

          <h2>Security</h2>
          <p>
            We take reasonable steps to protect the information you share with
            us. No method of transmission over the internet is completely
            secure, but we work to maintain industry-standard safeguards.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. The &ldquo;Last
            Updated&rdquo; date at the top reflects the latest revision.
            Material changes will be noted on this page.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Email{" "}
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
