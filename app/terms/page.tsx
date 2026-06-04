import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms | All Naukri Update",
  description:
    "Read the Terms and Conditions for All Naukri Update, including website use, information accuracy, intellectual property, advertisements and liability.",
  alternates: {
    canonical: "/terms"
  }
};

export default function TermsPage() {
  return (
    <main className="legalPage">
      <section className="container legalShell">
        <div className="legalHero softPanel">
          <span className="iconBubble">
            <FileText size={19} />
          </span>
          <div>
            <span className="chip">Terms</span>
            <h1>Terms and Conditions</h1>
            <p>
              Welcome to All Naukri Update. By accessing and using this website, you agree to comply
              with and be bound by the following Terms and Conditions.
            </p>
          </div>
        </div>

        <article className="legalContent softPanel">
          <section className="legalBlock">
            <h2>Terms and Conditions</h2>
            <p>
              If you do not agree with any part of these terms, please do not use our website.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Use of Website</h2>
            <p>
              The content available on All Naukri Update is provided for informational and
              educational purposes only. Users are responsible for verifying all information through
              official sources before making any decisions, submitting applications, or taking any
              action.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Information Accuracy</h2>
            <p>
              We strive to provide accurate and up-to-date information regarding Sarkari Jobs,
              Government Schemes, Results, Admit Cards, Admissions, and other related updates.
              However, we do not guarantee the completeness, accuracy, reliability, or availability
              of any information published on this website.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Intellectual Property</h2>
            <p>
              All content published on this website, including text, graphics, logos, and design
              elements, is the property of All Naukri Update unless otherwise stated. Unauthorized
              copying, reproduction, or distribution of website content is prohibited without prior
              permission.
            </p>
          </section>

          <section className="legalBlock">
            <h2>External Links</h2>
            <p>
              Our website may contain links to third-party websites for additional information and
              convenience. We do not control or endorse the content, policies, or practices of these
              external websites and are not responsible for any loss or damage resulting from their
              use.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Advertisement and Third-Party Services</h2>
            <p>
              This website may display advertisements provided by third-party advertising networks,
              including Google AdSense. These services may use cookies and other technologies to
              deliver relevant advertisements and improve user experience.
            </p>
            <p>For information about how Google collects and uses data, please visit:</p>
            <p>
              <a href="https://policies.google.com/technologies/partner-sites" rel="noreferrer" target="_blank">
                https://policies.google.com/technologies/partner-sites
              </a>
            </p>
          </section>

          <section className="legalBlock">
            <h2>Limitation of Liability</h2>
            <p>
              All Naukri Update shall not be held liable for any direct, indirect, incidental, or
              consequential loss or damage arising from the use of information available on this
              website. Users should always verify information through official sources before relying
              on it.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify or update these Terms and Conditions at any time without
              prior notice. Continued use of the website after changes are posted constitutes
              acceptance of the revised terms.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed and interpreted in accordance with the
              applicable laws of India.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Contact Us</h2>
            <p>If you have any questions regarding these Terms and Conditions, please contact us:</p>
            <p>
              Email: <a href="mailto:Gulshanyadav62000@gmail.com">Gulshanyadav62000@gmail.com</a>
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
