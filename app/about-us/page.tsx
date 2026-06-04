import { Bell, BookOpenCheck, CheckCircle2, FileText, Gift, GraduationCap, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "About Us | All Naukri Update",
  description:
    "Learn about All Naukri Update, a platform for Sarkari Job notifications, Government Schemes, Results, Admit Cards, Admissions and Exam Updates.",
  alternates: {
    canonical: "/about-us"
  }
};

export default function AboutUsPage() {
  const updates = [
    {
      icon: GraduationCap,
      title: "Sarkari Job Notifications",
      body: "Latest recruitment updates, eligibility, dates and application details."
    },
    {
      icon: Gift,
      title: "Government Schemes",
      body: "Yojana updates, benefits, documents and official apply/status links."
    },
    {
      icon: FileText,
      title: "Results & Admit Cards",
      body: "Exam results, admit cards, board updates and important announcements."
    },
    {
      icon: Bell,
      title: "Exam Updates",
      body: "Admissions, entrance exams, university notices and education alerts."
    }
  ];
  const values = [
    "Accurate and timely updates from official/public sources.",
    "Simple language so students and job seekers can understand quickly.",
    "Organized information for jobs, schemes, results, admit cards and admissions.",
    "Helpful format for aspirants preparing for government exams across India."
  ];

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
              Your trusted destination for Sarkari Job notifications, Government Schemes, Results,
              Admit Cards, Admissions, and Exam Updates across India.
            </p>
          </div>
        </div>

        <article className="legalContent softPanel">
          <section className="aboutIntro">
            <div>
              <span className="chip">Who We Are</span>
              <h2>Reliable updates, simple format</h2>
              <p>
                All Naukri Update helps students, job seekers, and aspirants stay informed about
                important opportunities and announcements. We collect and present updates from
                government departments, recruitment boards, universities, and examination authorities
                in an easy-to-understand format.
              </p>
            </div>
            <div className="aboutTrustBox">
              <ShieldCheck size={24} />
              <strong>Information-first platform</strong>
              <p>We focus on clarity, usefulness, and quick access to important updates.</p>
            </div>
          </section>

          <section className="legalBlock">
            <h2>What We Cover</h2>
            <div className="aboutCardGrid">
              {updates.map(({ icon: Icon, title, body }) => (
                <div className="aboutInfoCard" key={title}>
                  <span className="iconBubble">
                    <Icon size={18} />
                  </span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="legalBlock">
            <h2>Why All Naukri Update?</h2>
            <div className="aboutPointGrid">
              {values.map((value) => (
                <div className="aboutPoint" key={value}>
                  <CheckCircle2 size={18} />
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="aboutMission">
            <span className="chip">Our Mission</span>
            <h2>Helping aspirants stay one step ahead</h2>
            <p>
              At All Naukri Update, we believe that access to reliable information can make a
              significant difference in a candidate's career journey. Whether you are preparing for
              government exams, looking for new job opportunities, checking results, or exploring
              government schemes, we are here to keep you informed every step of the way.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
