import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | All Naukri Update",
  description:
    "Read the Privacy Policy for All Naukri Update, including information collection, cookies, Google AdSense, third-party links and data security.",
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
              At All Naukri Update, we value your privacy and are committed to protecting your
              personal information.
            </p>
          </div>
        </div>

        <article className="legalContent softPanel">
          <section className="legalBlock">
            <h2>Privacy Policy</h2>
            <p>
              This Privacy Policy explains how we collect, use, and safeguard information when you
              visit our website.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Information We Collect</h2>
            <p>
              We may collect non-personal information such as browser type, device information, IP
              address, and pages visited to improve our website and user experience.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Cookies</h2>
            <p>
              Our website may use cookies to enhance user experience, analyze website traffic, and
              improve our services. Cookies are small files stored on your device that help us
              understand how visitors interact with our website.
            </p>
            <p>
              You can choose to disable cookies through your browser settings. However, some
              features of the website may not function properly if cookies are disabled.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Google AdSense</h2>
            <p>
              We may use Google AdSense to display advertisements on our website. Google may use
              cookies and similar technologies to serve ads based on your visits to this and other
              websites.
            </p>
            <p>
              Google's advertising partners may use cookies to personalize advertisements and
              measure ad performance.
            </p>
            <p>For more information about how Google uses data, please visit:</p>
            <p>
              <a href="https://policies.google.com/technologies/partner-sites" rel="noreferrer" target="_blank">
                https://policies.google.com/technologies/partner-sites
              </a>
            </p>
            <p>You can also learn more about Google's Privacy Policy here:</p>
            <p>
              <a href="https://policies.google.com/privacy" rel="noreferrer" target="_blank">
                https://policies.google.com/privacy
              </a>
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
            <h2>Data Security</h2>
            <p>
              We take reasonable measures to protect the information collected through our website.
              However, no method of transmission over the internet is completely secure.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page with an updated effective date.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: <a href="mailto:Gulshanyadav62000@gmail.com">Gulshanyadav62000@gmail.com</a>
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
