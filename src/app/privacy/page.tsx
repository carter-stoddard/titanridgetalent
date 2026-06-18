import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Titan Ridge Talent collects, uses, shares, and protects information from visitors, candidates, and clients, including California (CCPA/CPRA) privacy rights.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <LegalLayout title="Privacy Policy" lastUpdated="April 26, 2026">
          <div className="legal-divider" aria-hidden="true" />

          <h2>Introduction</h2>
          <p>
            Titan Ridge Talent Solutions LLC (&ldquo;Titan Ridge Talent,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a
            recruiting and staffing firm headquartered in Fullerton,
            California. This Privacy Policy explains how we collect, use,
            share, and protect personal information when you visit{" "}
            <a href="https://titanridgetalent.com">titanridgetalent.com</a>{" "}
            (the &ldquo;Site&rdquo;) or otherwise interact with our services.
          </p>
          <p>
            By using the Site or submitting information to us, you agree to
            this Privacy Policy. If you do not agree, please do not use the
            Site or submit information to us.
          </p>

          <h2>Information We Collect</h2>
          <h3>Information You Provide Directly</h3>
          <p>
            When you submit our contact form, email us, send a resume, apply
            through our careers platform, or otherwise communicate with us, we
            may collect:
          </p>
          <ul>
            <li>
              <strong>Identifiers</strong> — name, email address, phone
              number, company name, job title
            </li>
            <li>
              <strong>Professional and employment-related information</strong>{" "}
              — resume contents, employment history, education, skills,
              certifications, references, desired role, compensation
              expectations, work authorization status, and similar
            </li>
            <li>
              <strong>Commercial information</strong> — for clients, details
              about the role being filled, your company, and hiring needs
            </li>
            <li>
              <strong>Communications</strong> — the content of messages, calls
              you initiate with us, and emails you send to us
            </li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <p>
            When you visit the Site, we and our service providers may
            automatically collect:
          </p>
          <ul>
            <li>
              <strong>Internet and device activity</strong> — IP address,
              browser type, operating system, device type, referring URL,
              pages viewed, links clicked, time and date of visit, and
              approximate location derived from IP address
            </li>
            <li>
              <strong>Cookies and similar technologies</strong> — see our{" "}
              <strong>Cookies and Tracking</strong> section below
            </li>
          </ul>

          <h3>Information from Third Parties</h3>
          <p>
            We may receive information about you from third parties such as
            professional references you authorize us to contact, public
            sources (e.g., LinkedIn profiles you have made public), or clients
            who refer candidates to us.
          </p>

          <h3>Sensitive Personal Information</h3>
          <p>
            In limited cases relevant to a recruiting engagement (for example,
            where required for background checks or verifying work
            authorization), we may collect sensitive personal information such
            as Social Security number, government-issued identification
            numbers, or driver&apos;s license number. We only collect this
            information when necessary for a specific permissible purpose, do
            not use it to infer characteristics about you, and protect it with
            appropriate safeguards.
          </p>

          <h2>How We Use Information</h2>
          <p>We use personal information to:</p>
          <ul>
            <li>
              Respond to your inquiries, requests, applications, and resume
              submissions
            </li>
            <li>
              Evaluate candidates for current and future roles, match
              candidates to opportunities, and present qualified candidates to
              clients
            </li>
            <li>
              Provide recruiting, staffing, and placement services to clients
            </li>
            <li>
              Conduct or facilitate, where lawful and with required consent,
              reference checks, employment verification, background checks,
              and work-authorization verification
            </li>
            <li>
              Send transactional, account, and service-related communications
            </li>
            <li>
              Operate, maintain, secure, and improve the Site and our
              services, including troubleshooting and analytics
            </li>
            <li>
              Comply with our legal obligations (including Equal Employment
              Opportunity, Fair Credit Reporting Act, Form I-9 employment
              eligibility verification, and similar laws), enforce our
              agreements, and respond to legal process
            </li>
            <li>
              Detect, prevent, and address fraud, security incidents, and
              other prohibited or illegal activity
            </li>
          </ul>

          <h2>How We Share Information</h2>
          <p>
            <strong>
              We do not sell your personal information for money, and we do
              not share your personal information for cross-context behavioral
              advertising as those terms are defined under California law.
            </strong>{" "}
            We may share personal information in the following circumstances:
          </p>
          <ul>
            <li>
              <strong>With clients</strong> — when presenting candidates for a
              specific role, with the candidate&apos;s awareness, we share
              relevant professional information (resume, qualifications,
              compensation expectations, etc.) with the hiring client
            </li>
            <li>
              <strong>With candidates</strong> — to inform potential
              candidates of relevant opportunities, we may share certain
              high-level client information
            </li>
            <li>
              <strong>With service providers</strong> — vendors and
              contractors who help us operate the Site and provide our
              services (see the next section)
            </li>
            <li>
              <strong>For legal reasons</strong> — to comply with applicable
              law, regulation, subpoena, court order, or other legal process,
              or to protect our rights, property, or safety, or that of our
              clients, candidates, or others
            </li>
            <li>
              <strong>In business transactions</strong> — in connection with a
              merger, acquisition, financing, reorganization, bankruptcy, or
              sale of all or part of our assets
            </li>
            <li>
              <strong>With your consent</strong> — for any other purpose with
              your consent
            </li>
          </ul>

          <h2>Third-Party Service Providers</h2>
          <p>
            We use the following categories of service providers to operate
            the Site and deliver our services. Each is contractually
            restricted from using your personal information for its own
            purposes:
          </p>
          <ul>
            <li>
              <strong>Hosting and infrastructure</strong> — Vercel Inc.
            </li>
            <li>
              <strong>Email and transactional messaging</strong> — Resend Inc.
            </li>
            <li>
              <strong>Analytics</strong> — Google LLC (Google Analytics 4),
              loaded only with your consent
            </li>
            <li>
              <strong>Applicant tracking and job board</strong> — Avionté
              (Compas Jobs Widget) on our <a href="/careers">careers</a> page;
              your interactions with the embedded job board may be governed by
              Avionté&apos;s own privacy notice
            </li>
            <li>
              <strong>Background checks and employment verification</strong>{" "}
              — when required for a specific engagement and only with your
              authorization, we may use third-party consumer reporting
              agencies in compliance with the federal Fair Credit Reporting
              Act (FCRA) and applicable state law
            </li>
          </ul>

          <h2>Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies to operate the Site,
            remember your preferences, and analyze how the Site is used. You
            can accept or decline non-essential analytics cookies through our
            cookie consent banner. Declining will not affect site
            functionality, but analytics events will not be collected from
            your browser. You can also disable cookies in your browser
            settings, though some features may not function correctly.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain personal information for as long as necessary to fulfill
            the purposes described in this Policy, including providing
            services to clients, presenting candidates for current and future
            opportunities, maintaining records of placements, and complying
            with our legal, accounting, or reporting obligations. Specific
            retention periods vary based on the type of information and the
            nature of the relationship. You may request deletion of your
            information as described below; we will honor your request unless
            we are required to retain certain information by law or to
            establish, exercise, or defend legal claims.
          </p>

          <h2>Your California Privacy Rights (CCPA / CPRA)</h2>
          <p>
            If you are a California resident, the California Consumer Privacy
            Act, as amended by the California Privacy Rights Act
            (collectively, &ldquo;CCPA&rdquo;), grants you the following
            rights, subject to certain exceptions:
          </p>
          <ul>
            <li>
              <strong>Right to know</strong> — request the categories and
              specific pieces of personal information we have collected about
              you, the categories of sources, the business or commercial
              purposes for collecting it, and the categories of third parties
              with whom we share it
            </li>
            <li>
              <strong>Right to delete</strong> — request that we delete
              personal information we collected from you
            </li>
            <li>
              <strong>Right to correct</strong> — request that we correct
              inaccurate personal information we maintain about you
            </li>
            <li>
              <strong>Right to opt out of sale or sharing</strong> — we do not
              sell or share personal information for cross-context behavioral
              advertising, but you may still exercise this right
            </li>
            <li>
              <strong>Right to limit use of sensitive personal information</strong>{" "}
              — we only use sensitive personal information for permissible
              business purposes; you may request that we limit this use
              further
            </li>
            <li>
              <strong>Right to non-discrimination</strong> — we will not
              discriminate against you for exercising any of these rights
            </li>
            <li>
              <strong>Right to appoint an authorized agent</strong> — you may
              designate an authorized agent to make a request on your behalf
            </li>
          </ul>
          <p>
            To exercise any of these rights, email{" "}
            <a href="mailto:support@titanridgetalent.com">
              support@titanridgetalent.com
            </a>{" "}
            with the subject line &ldquo;Privacy Rights Request.&rdquo; We
            will verify your request and respond within the time periods
            required by applicable law.
          </p>

          <h2>EU/UK Visitors (GDPR)</h2>
          <p>
            If you are located in the European Economic Area, the United
            Kingdom, or Switzerland, you may have the following rights with
            respect to your personal data: access, rectification, erasure,
            restriction of processing, data portability, objection to
            processing, and withdrawal of consent. To exercise these rights,
            contact us at the email address above. Our legal bases for
            processing include performance of a contract (recruiting
            services), legitimate interests (running our business), legal
            obligation, and consent.
          </p>

          <h2>Your Choices</h2>
          <p>You may, at any time:</p>
          <ul>
            <li>
              Update or correct information you have submitted by contacting
              us
            </li>
            <li>
              Opt out of marketing or non-essential communications by
              following the instructions in those messages
            </li>
            <li>
              Disable cookies in your browser settings or decline analytics
              cookies through our consent banner
            </li>
            <li>Request deletion of your information as described above</li>
          </ul>

          <h2>Children&apos;s Privacy</h2>
          <p>
            The Site is not directed to children under 16, and we do not
            knowingly collect personal information from children under 16. If
            you believe a child has submitted information through the Site,
            please contact us and we will take steps to remove it.
          </p>

          <h2>Security</h2>
          <p>
            We use commercially reasonable administrative, technical, and
            physical safeguards designed to protect personal information.
            However, no method of transmission over the internet or method of
            electronic storage is completely secure. We cannot guarantee
            absolute security.
          </p>

          <h2>International Data Transfers</h2>
          <p>
            Our service providers may store and process personal information
            in countries other than your country of residence, including the
            United States. By using the Site or submitting information to us,
            you consent to such transfer, where permitted by applicable law.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The
            &ldquo;Last Updated&rdquo; date at the top reflects the latest
            revision. Material changes will be posted on this page. Your
            continued use of the Site after changes means you accept the
            updated Policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            For questions about this Privacy Policy or to exercise any of your
            rights, contact:
          </p>
          <p>
            <strong>Titan Ridge Talent Solutions LLC</strong>
            <br />
            112 E. Amerige Ave #106
            <br />
            Fullerton, CA 92832
            <br />
            Email:{" "}
            <a href="mailto:support@titanridgetalent.com">
              support@titanridgetalent.com
            </a>
            <br />
            Phone: (714) 552-4334
          </p>
        </LegalLayout>
      </main>
      <Footer />
    </>
  );
}
