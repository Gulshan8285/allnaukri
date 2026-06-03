import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | All Naukri Update",
  description: "Read the privacy policy for All Naukri Update.",
  alternates: {
    canonical: "/privacy-policy"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="legalPage">
      <section className="container legalShell">
        <div className="legalHero softPanel">
          <span className="iconBubble">
            <ShieldCheck size={19} />
          </span>
          <div>
            <span className="chip">Privacy Policy</span>
            <h1>Privacy Policy</h1>
            <p>
              This policy explains how All Naukri Update handles basic information when users visit
              and use this website.
            </p>
          </div>
        </div>

        <article className="legalContent softPanel">
          <section className="legalBlock">
            <h2>Information We May Collect</h2>
            <p>
              We may collect basic technical information such as browser type, device information,
              pages visited and general usage data to improve website performance and user
              experience.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Contact Information</h2>
            <p>
              If you contact us by email, we may use your email address and message only to respond
              to your query, correction request or feedback.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Cookies And Local Storage</h2>
            <p>
              The website may use browser storage for simple preferences such as dark mode or light
              mode. This helps keep your selected theme active on your device.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Third-Party Links</h2>
            <p>
              Our pages may contain links to official government, university, board or recruitment
              websites. We are not responsible for the privacy practices or content of third-party
              websites.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Policy Updates</h2>
            <p>
              We may update this privacy policy when required. Users should review this page
              periodically for the latest information.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
