import { AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Disclaimer | All Naukri Update",
  description: "Read the disclaimer for All Naukri Update."
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
              All Naukri Update is an independent information website. We are not an official
              government, university, board or recruitment portal.
            </p>
          </div>
        </div>

        <article className="legalContent softPanel">
          <section className="legalBlock">
            <h2>No Government Affiliation</h2>
            <p>
              This website is not affiliated with any government department, recruitment board,
              university, school board or official authority. Names and links are used only for
              informational reference.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Information Purpose Only</h2>
            <p>
              Content on this website is written to help users understand updates in simple language.
              It should not be considered legal, financial, educational or official advice.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Official Links</h2>
            <p>
              Apply, download, result check or payment actions should be completed only on official
              websites. Users are responsible for checking the correct official link before taking
              action.
            </p>
          </section>

          <section className="legalBlock">
            <h2>User Responsibility</h2>
            <p>
              Dates, fees, eligibility and selection process can change without notice. Always read
              the official notification and verify every detail before submitting forms or documents.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
