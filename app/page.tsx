import {
  Bell,
  BookOpen,
  CalendarDays,
  FileText,
  Gift,
  GraduationCap
} from "lucide-react";
import Link from "next/link";
import { jobs } from "./jobs";

export const metadata = {
  title: "All Naukri - All Jobs, All Sarkari Naukri and All Result Updates",
  description:
    "All Naukri provides All Jobs, All Sarkari Naukri, Sarkari Yojna, All Result and latest government job updates in one place.",
  keywords: [
    "All Naukri",
    "All Jobs",
    "All Sarkari Naukri",
    "All Result",
    "Sarkari Naukri",
    "Sarkari Yojna",
    "Government Job Updates"
  ],
  alternates: {
    canonical: "/"
  }
};

const highlights = [
  {
    icon: GraduationCap,
    title: "All Sarkari Naukri",
    body: "Exam dates, admit cards, entrance alerts and result announcements.",
    href: "/sarkari-naukri"
  },
  {
    icon: Gift,
    title: "Sarkari Yojna",
    body: "Scholarship, yojna, subsidy and government benefit updates.",
    href: "/sarkari-yojna"
  },
  {
    icon: FileText,
    title: "Results",
    body: "Board results, date sheets, marksheets and compartment notices.",
    href: "/results"
  }
];

export default function Home() {
  return (
    <main>
      <section className="heroBand">
        <div className="hero">
          <div className="eyebrow">
            <span />
            Live All Naukri updates
          </div>
          <h1>All Naukri Update</h1>
          <p>
            Latest Sarkari Naukri, Sarkari Yojna, Results, and Government Job Updates - All in One
            Place.
          </p>
        </div>
      </section>

      <section className="container highlightGrid" aria-label="Update categories">
        {highlights.map(({ icon: Icon, title, body, href }) => {
          const card = (
            <article className="softPanel highlight">
              <span className="iconBubble">
                <Icon size={19} />
              </span>
              <div>
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
            </article>
          );

          return href ? (
            <Link className="highlightLink" href={href} key={title}>
              {card}
            </Link>
          ) : (
            <div key={title}>{card}</div>
          );
        })}
      </section>

      <DashboardSection
        title="Latest All Sarkari Naukri"
        subtitle="Live notices, exam alerts and official updates"
        icon={<Bell size={19} />}
      >
        <div className="cardRail">
          {jobs.map((job) => (
            <Link className="jobCardLink" href={`/naukri/${job.slug}`} key={job.slug}>
              <article className="noticeCard">
                <span className="chip">{job.type}</span>
                <h3>{job.title}</h3>
                <p>{job.body}</p>
                <footer>
                  <span>{job.org}</span>
                  <span>
                    <CalendarDays size={13} />
                    {job.date}
                  </span>
                </footer>
              </article>
            </Link>
          ))}
        </div>
      </DashboardSection>

      <DashboardSection
        title="Latest Naukri Details"
        subtitle="Job update ko complete details format me padhein"
        icon={<BookOpen size={19} />}
      >
        <div className="cardRail blogRail">
          {jobs.map((job) => (
            <Link className="jobCardLink" href={`/naukri-details/${job.slug}`} key={job.slug}>
              <article className="blogCard">
                <div className="blogArt">
                  <FileText size={32} />
                </div>
                <div className="blogBody">
                  <span>{job.type}</span>
                  <h3>{job.title} Full Details</h3>
                  <p>{job.body} Eligibility, dates, fee aur apply process simple language me.</p>
                  <footer>
                    <small>{job.org}</small>
                    <small>
                      <CalendarDays size={12} />
                      {job.date}
                    </small>
                  </footer>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </DashboardSection>

    </main>
  );
}

function DashboardSection({
  title,
  subtitle,
  icon,
  children
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="container dashboardSection">
      <div className="sectionHead">
        <div className="sectionTitle">
          <span className="iconBubble">{icon}</span>
          <div>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}
