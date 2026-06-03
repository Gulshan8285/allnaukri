import { ArrowLeft, ExternalLink, CalendarDays, CheckCircle2, FileText } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJobBySlug, jobs } from "../../jobs";

export function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.slug
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return {
      title: "Naukri Not Found"
    };
  }

  return {
    title: `${job.title} | All Sarkari Naukri`,
    description: `${job.body} Check vacancy, eligibility, last date and official apply link on All Naukri.`,
    keywords: [
      job.title,
      job.type,
      job.state,
      "All Naukri",
      "All Jobs",
      "All Sarkari Naukri",
      "Government Jobs"
    ],
    alternates: {
      canonical: `/naukri/${job.slug}`
    }
  };
}

export default async function NaukriDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return (
    <main className="detailPage">
      <section className="container detailShell">
        <div className="detailHero softPanel">
          <span className="chip">{job.type}</span>
          <h1>{job.title}</h1>
          <p>{job.body}</p>

          <div className="detailMeta">
            <span>{job.org}</span>
            <span>
              <CalendarDays size={15} />
              Last date: {job.date}
            </span>
          </div>

        </div>

        <div className="detailGrid">
          <article className="detailCard softPanel">
            <FileText size={22} />
            <h2>Job Details</h2>
            <dl>
              <div>
                <dt>Total Vacancy</dt>
                <dd>{job.vacancies}</dd>
              </div>
              <div>
                <dt>Qualification</dt>
                <dd>{job.qualification}</dd>
              </div>
              <div>
                <dt>Age Limit</dt>
                <dd>{job.ageLimit}</dd>
              </div>
              <div>
                <dt>Application Fee</dt>
                <dd>{job.fee}</dd>
              </div>
            </dl>
          </article>

          <article className="detailCard softPanel">
            <CheckCircle2 size={22} />
            <h2>Important Dates</h2>
            <ul>
              {job.importantDates.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="detailCard softPanel">
            <CheckCircle2 size={22} />
            <h2>Selection Process</h2>
            <ul>
              {job.selectionProcess.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="detailCard softPanel">
            <ExternalLink size={22} />
            <h2>How to Apply</h2>
            <ul>
              {job.howToApply.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <footer className="detailActions detailActionsBottom softPanel">
          <div>
            <span className="chip">Official Link</span>
            <h2>Apply sirf official website se karein</h2>
            <p>
              Form bharne se pehle notification, eligibility, fee aur dates official website par
              verify kar lein.
            </p>
          </div>
          <a href={job.officialLink} rel="noreferrer" target="_blank">
            {job.applyText}
            <ExternalLink size={16} />
          </a>
          <Link href="/">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </footer>
      </section>
    </main>
  );
}
