import { AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Disclaimer | All Naukri Update",
  description:
    "Read the Disclaimer for All Naukri Update, including government affiliation, official verification, external links and advertisement disclaimer.",
  alternates: {
    canonical: "/disclaimer"
  }
};

export default function DisclaimerPage() {
  return (
    <main className="legalPage">
      <section className="container legalShell">
        <div className="legalHero softPanel">
          <span className="iconBubble">
            <AlertTriangle size={19} />
          </span>
          <div>
            <span className="chip">Disclaimer</span>
            <h1>Disclaimer</h1>
            <p>
              The information provided on All Naukri Update is published in good faith and for
              general informational and educational purposes only.
            </p>
          </div>
        </div>

        <article className="legalContent softPanel">
          <section className="legalBlock">
            <h2>Disclaimer</h2>
            <p>
              While we strive to keep the information accurate, complete, and up to date, we make no
              warranties or representations regarding the accuracy, reliability, suitability, or
              availability of any information on this website.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Not an Official Government Website</h2>
            <p>
              All Naukri Update is <strong>not affiliated with, endorsed by, or associated with any
              government organization, ministry, department, or agency</strong>. We are an
              independent informational website that collects and shares publicly available
              information related to Sarkari Jobs, Government Schemes, Results, Admit Cards,
              Admissions, and other educational updates.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Verify Information from Official Sources</h2>
            <p>
              Although we make every effort to provide accurate information, users are strongly
              advised to verify all details through the official website, official notification, or
              authorized source before making any decision, submitting an application, paying fees,
              or taking any action.
            </p>
            <p>
              We will not be responsible for any loss, error, or inconvenience caused by the use of
              information available on this website.
            </p>
          </section>

          <section className="legalBlock">
            <h2>External Links Disclaimer</h2>
            <p>
              Our website may contain links to third-party websites for additional information and
              convenience. We do not control or guarantee the accuracy, relevance, or reliability of
              content on external websites and are not responsible for any loss or damage resulting
              from their use.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Advertisement Disclaimer</h2>
            <p>
              This website may display advertisements from third-party advertising partners,
              including Google AdSense. These advertisements may use cookies and similar technologies
              to provide personalized ads and improve advertising performance.
            </p>
            <p>For more information about how Google uses data, please visit:</p>
            <p>
              <a href="https://policies.google.com/technologies/partner-sites" rel="noreferrer" target="_blank">
                https://policies.google.com/technologies/partner-sites
              </a>
            </p>
          </section>

          <section className="legalBlock">
            <h2>Consent</h2>
            <p>
              By using our website, you hereby consent to this Disclaimer and agree to its terms.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Updates</h2>
            <p>
              We reserve the right to modify, update, or change this Disclaimer at any time without
              prior notice. Any updates will be posted on this page.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Contact Us</h2>
            <p>If you have any questions regarding this Disclaimer, please contact us:</p>
            <p>
              Email: <a href="mailto:your-Gulshanyadav62000@gmail.com">your-Gulshanyadav62000@gmail.com</a>
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
