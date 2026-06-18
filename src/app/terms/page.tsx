import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing use of titanridgetalent.com and the recruiting and staffing services offered by Titan Ridge Talent Solutions LLC.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <LegalLayout title="Terms of Use" lastUpdated="April 26, 2026">
          <div className="legal-divider" aria-hidden="true" />

          <h2>Acceptance of These Terms</h2>
          <p>
            These Terms of Use (the &ldquo;Terms&rdquo;) form a binding
            agreement between you and Titan Ridge Talent Solutions LLC
            (&ldquo;Titan Ridge Talent,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using{" "}
            <a href="https://titanridgetalent.com">titanridgetalent.com</a>{" "}
            (the &ldquo;Site&rdquo;), submitting information through the Site,
            or engaging our recruiting or staffing services, you agree to be
            bound by these Terms and by our{" "}
            <a href="/privacy">Privacy Policy</a>. If you do not agree, do not
            use the Site or our services.
          </p>

          <h2>Who We Are</h2>
          <p>
            Titan Ridge Talent Solutions LLC is a recruiting and staffing firm
            headquartered in Fullerton, California, offering temporary
            staffing, temp-to-hire, direct hire, confidential search,
            professional search, and high-volume manufacturing support
            services. The Site provides information about our services and a
            way to contact us. Use of the Site does not, by itself, create a
            candidate-recruiter, client-firm, or employment relationship.
            Engagement of our services is governed by a separate written
            agreement.
          </p>

          <h2>Equal Employment Opportunity</h2>
          <p>
            Titan Ridge Talent is committed to equal employment opportunity.
            We do not discriminate against any applicant, candidate, or
            employee on the basis of race, color, religion, sex (including
            pregnancy, childbirth, breastfeeding, or related medical
            conditions), gender, gender identity, gender expression, sexual
            orientation, national origin, ancestry, citizenship status, age,
            physical or mental disability, medical condition, genetic
            information, marital status, military or veteran status, or any
            other basis protected by federal, state, or local law. All
            placement, sourcing, and screening decisions are made on the basis
            of legitimate, job-related qualifications.
          </p>

          <h2>Use of the Site</h2>
          <p>You may use the Site for lawful purposes only. You agree not to:</p>
          <ul>
            <li>Disrupt or interfere with the Site&apos;s operation</li>
            <li>
              Submit false, misleading, or unauthorized information, including
              misrepresenting your identity, qualifications, or authority to
              act on behalf of another person or entity
            </li>
            <li>
              Attempt to access areas of the Site that are not publicly
              available, or attempt to circumvent any security or access
              control measures
            </li>
            <li>
              Scrape, mine, harvest, or otherwise collect content, data, or
              candidate information from the Site without our prior written
              permission
            </li>
            <li>Transmit viruses, malware, or any other malicious code</li>
            <li>
              Use the Site to send unsolicited communications (spam), phishing
              attempts, or fraudulent solicitations
            </li>
            <li>
              Impersonate any person or misrepresent your affiliation with any
              person or entity
            </li>
            <li>
              Reverse engineer, decompile, or attempt to derive the source
              code of any portion of the Site
            </li>
            <li>Use the Site or our services in a manner that violates law</li>
          </ul>

          <h2>Submissions</h2>
          <p>
            Information you submit through the Site, by email, or through any
            resume you share is handled as outlined in our{" "}
            <a href="/privacy">Privacy Policy</a>. By submitting information,
            you represent and warrant that the information is accurate, that
            you have the right to share it, and that submission does not
            violate any third-party rights, including obligations to current
            or former employers. You grant us a non-exclusive, royalty-free,
            worldwide license to use that information for the purposes
            described in our Privacy Policy.
          </p>

          <h2>No Employment Guarantee</h2>
          <p>
            Submitting a resume, completing a profile, or otherwise contacting
            us does not create any employment relationship,
            candidate-recruiter representation agreement, or guarantee of
            placement, interview, offer, or any specific employment outcome.
            Recruiting is a relationship business; we evaluate every
            connection on its merits and do not promise interviews, offers,
            employment, or specific compensation.
          </p>

          <h2>Background Checks and Reference Verification</h2>
          <p>
            For certain engagements, we may, with your prior written
            authorization where required, conduct or facilitate reference
            checks, employment verification, and background checks through
            third-party consumer reporting agencies. These activities are
            conducted in compliance with the federal Fair Credit Reporting Act
            (FCRA), the California Investigative Consumer Reporting Agencies
            Act (ICRAA), and other applicable laws. You will be notified and
            provided with required disclosures prior to any consumer report
            being obtained about you.
          </p>

          <h2>Worker Classification</h2>
          <p>
            For temporary and temp-to-hire engagements, the entity that pays a
            worker for time worked is typically the worker&apos;s
            employer-of-record. For direct hire placements, the hiring client
            is the employer. Worker classification (employee vs. independent
            contractor) is determined on a case-by-case basis under applicable
            law, including the California ABC test under Labor Code Section
            2775 and related provisions. Nothing on the Site creates an
            independent contractor or employment relationship between you and
            Titan Ridge Talent absent a separate written agreement.
          </p>

          <h2>Workplace Conduct and Safety</h2>
          <p>
            For temporary placements, the workplace is controlled by the
            hiring client. The client is responsible for providing a safe
            working environment, complying with applicable safety, wage and
            hour, and anti-discrimination laws, providing required training,
            and maintaining required insurance. You agree to follow the
            client&apos;s reasonable workplace rules and report any safety
            concern or unlawful conduct to us promptly.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on the Site — including text, design, layout, logos,
            images, audio, video, and code — is owned by Titan Ridge Talent or
            used with permission and is protected by U.S. and international
            copyright, trademark, and other intellectual property laws. Except
            for limited personal, non-commercial reference and the rights
            expressly granted by these Terms, you may not copy, reproduce,
            distribute, publish, transmit, modify, create derivative works
            from, publicly display, publicly perform, sell, rent, license, or
            otherwise exploit any portion of the Site without our prior
            written consent. &ldquo;Titan Ridge Talent,&rdquo; the ridge mark
            logo, and related branding are our trademarks.
          </p>

          <h2>Third-Party Links and Services</h2>
          <p>
            The Site may contain links to third-party websites, services, and
            embedded content (including, for example, our Avionté-powered
            careers page and links to LinkedIn). We do not control those sites
            or services, do not endorse them, and are not responsible for
            their content, products, services, privacy practices, or
            availability. Your use of any third-party site or service is at
            your own risk and is governed by that third party&apos;s own terms
            and privacy policy.
          </p>

          <h2>Disclaimers</h2>
          <p>
            THE SITE AND ALL CONTENT AND SERVICES PROVIDED ON OR THROUGH IT
            ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE,&rdquo;
            WITH ALL FAULTS, AND WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
            IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
            WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, TITLE, AND
            ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF
            TRADE.
          </p>
          <p>
            WE DO NOT WARRANT THAT THE SITE OR ANY CONTENT IS ACCURATE,
            COMPLETE, RELIABLE, CURRENT, OR ERROR-FREE; THAT THE SITE WILL
            BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION; THAT DEFECTS
            WILL BE CORRECTED; OR THAT THE SITE OR ITS SERVERS ARE FREE OF
            VIRUSES OR OTHER HARMFUL COMPONENTS. WE MAKE NO REPRESENTATIONS
            ABOUT THE SUITABILITY, RELIABILITY, OR CONDUCT OF ANY CANDIDATE,
            CLIENT, OR USER.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL TITAN
            RIDGE TALENT, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS,
            AFFILIATES, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
            SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING
            LOST PROFITS, LOST DATA, LOST REVENUE, LOST BUSINESS
            OPPORTUNITIES, OR LOSS OF GOODWILL, ARISING OUT OF OR RELATING TO
            YOUR ACCESS TO OR USE OF THE SITE OR OUR SERVICES, WHETHER BASED
            ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR
            ANY OTHER LEGAL THEORY, AND WHETHER OR NOT WE HAVE BEEN ADVISED
            OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, OUR TOTAL CUMULATIVE
            LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS, THE SITE, OR
            OUR SERVICES WILL NOT EXCEED THE GREATER OF (A) ONE HUNDRED U.S.
            DOLLARS ($100), OR (B) THE TOTAL FEES YOU PAID TO US IN THE
            TWELVE (12) MONTHS PRECEDING THE CLAIM. SOME JURISDICTIONS DO NOT
            ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO SOME OF
            THESE LIMITATIONS MAY NOT APPLY TO YOU.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Titan Ridge
            Talent and our officers, directors, employees, agents, affiliates,
            and licensors from and against any claim, demand, loss, liability,
            damage, cost, or expense (including reasonable attorneys&apos;
            fees) arising out of or relating to: (a) your breach of these
            Terms; (b) your misuse of the Site or our services; (c) your
            violation of any law or third-party right; or (d) any content or
            information you submit through the Site.
          </p>

          <h2>Force Majeure</h2>
          <p>
            We will not be liable for any delay or failure to perform
            resulting from causes beyond our reasonable control, including
            acts of God, natural disasters, war, terrorism, riots, civil
            unrest, government action, pandemic, epidemic, public health
            emergency, labor disputes, internet or telecommunications
            failures, or any other event of force majeure.
          </p>

          <h2>Accessibility</h2>
          <p>
            We are committed to making the Site accessible to people with
            disabilities. See our{" "}
            <a href="/accessibility">Accessibility Statement</a> for details
            on our ongoing efforts, supported features, known limitations
            related to third-party embeds, and how to report an accessibility
            issue.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. The &ldquo;Last
            Updated&rdquo; date above reflects the most recent revision.
            Material changes will be posted on this page. Your continued use
            of the Site after changes are posted means you accept the updated
            Terms.
          </p>

          <h2>Governing Law and Venue</h2>
          <p>
            These Terms are governed by the laws of the State of California,
            without regard to its conflict-of-law principles. Except as
            otherwise required by applicable law, you and Titan Ridge Talent
            agree that any dispute arising out of or relating to these Terms
            or the Site will be resolved exclusively in the state or federal
            courts located in Orange County, California, and you submit to
            the personal jurisdiction of those courts.
          </p>

          <h2>Severability; No Waiver; Entire Agreement; Survival</h2>
          <p>
            If any provision of these Terms is held invalid or unenforceable,
            that provision will be modified to the minimum extent necessary
            and the remaining provisions will remain in full force and
            effect. Our failure to enforce any provision is not a waiver. These
            Terms, together with our Privacy Policy and any separate written
            agreement governing a particular engagement, constitute the
            entire agreement between you and us regarding the Site. The
            provisions that by their nature should survive termination
            (including disclaimers, limitations of liability,
            indemnification, intellectual property, and governing law) will
            survive.
          </p>

          <h2>Assignment</h2>
          <p>
            You may not assign or transfer these Terms or any rights or
            obligations under them without our prior written consent. We may
            assign these Terms at any time, with or without notice.
          </p>

          <h2>Contact</h2>
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
