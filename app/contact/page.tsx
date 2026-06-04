import { Mail } from "lucide-react";

export const metadata = {
  title: "Contact | All Naukri Update",
  description:
    "Contact All Naukri Update and learn about our educational platform for Sarkari Jobs, Government Schemes, Results, Admit Cards and Exam Notifications.",
  alternates: {
    canonical: "/contact"
  }
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
              Welcome to All Naukri Update. We provide important education, job and government
              update information in one simple place.
            </p>
          </div>
        </div>

        <article className="legalContent softPanel">
          <section className="legalBlock">
            <h2>Welcome to All Naukri Update</h2>
            <p>
              All Naukri Update is an educational and informational platform dedicated to providing
              the latest updates on Sarkari Jobs, Government Schemes, Results, Admit Cards,
              Admissions, and Exam Notifications across India.
            </p>
            <p>
              Our goal is to help students, job seekers, and aspirants stay informed with accurate
              and timely information. We collect and present important updates from various
              government departments, recruitment boards, universities, and examination authorities
              in a simple and easy-to-understand format.
            </p>
          </section>

          <section className="legalBlock">
            <h2>What We Provide</h2>
            <ul>
              <li>Latest Sarkari Job Notifications</li>
              <li>Government Scheme (Yojana) Updates</li>
              <li>Exam Results</li>
              <li>Admit Cards</li>
              <li>Admission and Entrance Exam Information</li>
              <li>Board and University Notifications</li>
              <li>Recruitment News and Updates</li>
            </ul>
          </section>

          <section className="legalBlock">
            <h2>Our Mission</h2>
            <p>
              Our mission is to create a reliable platform where students and job seekers can access
              all important government-related updates in one place quickly and conveniently.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Contact Us</h2>
            <p>
              If you have any questions, suggestions, or concerns regarding the information
              available on our website, feel free to contact us.
            </p>
            <p>
              Email: <strong>your-Gulshanyadav62000@gmail.com</strong>
            </p>
            <p>
              We will do our best to respond as soon as possible.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
