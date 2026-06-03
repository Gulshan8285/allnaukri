import { BookOpenCheck } from "lucide-react";

export const metadata = {
  title: "About Us | All Naukri Update",
  description: "Learn about All Naukri Update and how we publish student and government updates.",
  alternates: {
    canonical: "/about-us"
  }
};

export default function AboutUsPage() {
  return (
    <main className="legalPage">
      <section className="container legalShell">
        <div className="legalHero softPanel">
          <span className="iconBubble">
            <BookOpenCheck size={19} />
          </span>
          <div>
            <span className="chip">About Us</span>
            <h1>All Naukri Update</h1>
            <p>
              All Naukri Update is an independent information portal made for students, job seekers
              and families who want quick access to naukri, result, sarkari yojna and education
              related updates.
            </p>
          </div>
        </div>

        <article className="legalContent softPanel">
          <section className="legalBlock">
            <h2>What We Do</h2>
            <p>
              We organize public updates in a simple format so users can search, filter and read
              important details before visiting the official website. Our goal is to make information
              easier to understand, especially for users who want details in clear language.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Our Focus</h2>
            <ul>
              <li>Latest sarkari naukri updates and application details.</li>
              <li>Sarkari yojna information with official apply/status links.</li>
              <li>Result updates, important dates and official result links.</li>
              <li>Student-friendly explanation of process, documents and next steps.</li>
            </ul>
          </section>

          <section className="legalBlock">
            <h2>Important Note</h2>
            <p>
              All Naukri Update is not a government website. We do not claim any official
              partnership with any government department, university, board or recruitment agency.
              Users should always verify final details from the official website before applying,
              paying fees or submitting documents.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
