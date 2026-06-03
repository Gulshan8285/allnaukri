import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms | All Naukri Update",
  description: "Read the terms of use for All Naukri Update.",
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
            <h1>Terms Of Use</h1>
            <p>
              By using All Naukri Update, you agree to use this website responsibly and verify all
              important information from official sources.
            </p>
          </div>
        </div>

        <article className="legalContent softPanel">
          <section className="legalBlock">
            <h2>Use Of Website</h2>
            <p>
              This website is provided for general information purposes. You may use the information
              for personal study, awareness and guidance, but you should not treat it as final
              official confirmation.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Official Verification</h2>
            <p>
              Before applying for any job, scheme, admission, result or notice, users must verify
              eligibility, dates, fees, documents and links from the official website.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Accuracy Of Information</h2>
            <p>
              We try to keep information clear and updated, but errors, delays or changes may happen.
              All Naukri Update is not liable for any loss caused by using outdated or incorrect
              information without official verification.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Prohibited Use</h2>
            <ul>
              <li>Do not misuse the website for spam, fraud or illegal activity.</li>
              <li>Do not copy content in a misleading way or claim it as official notice.</li>
              <li>Do not attempt to harm, overload or disrupt the website.</li>
            </ul>
          </section>
        </article>
      </section>
    </main>
  );
}
