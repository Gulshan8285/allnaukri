import { BookOpenCheck } from "lucide-react";

export const metadata = {
  title: "About Us | All Naukri Update",
  description:
    "Learn about All Naukri Update, a platform for Sarkari Job notifications, Government Schemes, Results, Admit Cards, Admissions and Exam Updates.",
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
              Welcome to All Naukri Update, your trusted destination for the latest Sarkari Job
              notifications, Government Schemes, Results, Admit Cards, Admissions, and Exam Updates
              across India.
            </p>
          </div>
        </div>

        <article className="legalContent softPanel">
          <section className="legalBlock">
            <h2>About Us</h2>
            <p>
              Our goal is to provide accurate, timely, and easy-to-understand information that helps
              students, job seekers, and aspirants stay informed about important opportunities and
              announcements. We regularly update our platform with the latest notifications from
              government departments, recruitment boards, universities, and examination authorities.
            </p>
            <p>
              At All Naukri Update, we believe that access to reliable information can make a
              significant difference in a candidate's career journey. That is why we are committed to
              delivering useful updates in a simple and user-friendly format.
            </p>
            <p>
              Whether you are preparing for government exams, looking for new job opportunities,
              checking results, or exploring government schemes, All Naukri Update is here to keep
              you informed every step of the way.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
