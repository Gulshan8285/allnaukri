import { BookOpen, CalendarDays, FileText } from "lucide-react";
import Link from "next/link";
import { jobs } from "../jobs";

export const metadata = {
  title: "All Jobs Details - Latest Naukri Updates and Guides",
  description:
    "Read All Jobs details, latest Naukri updates, eligibility, dates, fees and official apply process on All Naukri.",
  keywords: ["All Jobs", "All Naukri", "Naukri Details", "Sarkari Naukri Details"],
  alternates: {
    canonical: "/vlog"
  }
};

export default function VlogPage() {
  return (
    <main className="directoryPage">
      <section className="container directoryHero">
        <span className="iconBubble">
          <BookOpen size={19} />
        </span>
        <div>
          <span className="chip">Vlog</span>
          <h1>Latest Naukri Details</h1>
          <p>Job updates ko complete details format me padhein.</p>
        </div>
      </section>

      <section className="container vlogGrid" aria-label="Latest Naukri Details">
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
      </section>
    </main>
  );
}
