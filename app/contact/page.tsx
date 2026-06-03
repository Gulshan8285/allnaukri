import { Mail } from "lucide-react";

export const metadata = {
  title: "Contact | All Naukri Update",
  description: "Contact All Naukri Update for correction requests, feedback and general queries."
};

export default function ContactPage() {
  return (
    <main className="legalPage">
      <section className="container legalShell">
        <div className="legalHero softPanel">
          <span className="iconBubble">
            <Mail size={19} />
          </span>
          <div>
            <span className="chip">Contact</span>
            <h1>Contact All Naukri Update</h1>
            <p>
              For correction requests, feedback, content removal or general questions, you can
              contact our team through the details below.
            </p>
          </div>
        </div>

        <article className="legalContent softPanel">
          <section className="legalBlock">
            <h2>Email</h2>
            <p>
              Send your message to <strong>support@allnaukriupdate.com</strong>. Please include the
              page link, update title and a clear description of your request.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Correction Requests</h2>
            <p>
              If you find any outdated date, incorrect official link or missing detail, share the
              correct official source with us. We review correction requests and update the page as
              soon as possible.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Response Time</h2>
            <p>
              We try to respond within a reasonable time. Urgent official deadlines should always be
              checked directly on the official website because our portal is only an information
              guide.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
