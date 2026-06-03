import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  FileText,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJobBySlug, jobs } from "../../jobs";

type Job = (typeof jobs)[number];

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
      title: "Naukri Details Not Found"
    };
  }

  return {
    title: `${job.title} Full Details | All Jobs`,
    description: `${job.title} eligibility, dates, fee, vacancy and official apply process in complete details format on All Naukri.`,
    keywords: [
      `${job.title} full details`,
      job.type,
      "All Jobs",
      "All Naukri",
      "Sarkari Naukri Details",
      "Government Job Updates"
    ],
    alternates: {
      canonical: `/naukri-details/${job.slug}`
    }
  };
}

export default async function NaukriDetailsPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const details = buildDetails(job);

  return (
    <main className="vlogPage">
      <article className="container vlogShell">
        <header className="vlogHero softPanel">
          <span className="chip">{job.type} Details</span>
          <h1>{job.title} ka complete update</h1>
          <p>{details.intro}</p>
          <div className="detailMeta">
            <span>{job.org}</span>
            <span>
              <CalendarDays size={15} />
              Last date: {job.date}
            </span>
          </div>
        </header>

        <section className="vlogContent softPanel">
          <div className="vlogLead">
            <span className="iconBubble">
              <FileText size={19} />
            </span>
            <div>
              <h2>Complete Details</h2>
              <p>Is job update ko short, clear aur student-friendly format me samjhaya gaya hai.</p>
            </div>
          </div>

          {details.sections.map((section) => (
            <section className="vlogBlock" key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </section>
          ))}

          <section className="vlogBlock">
            <h3>Important Dates</h3>
            <ul>
              {job.importantDates.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="vlogBlock">
            <h3>Selection Process</h3>
            <ul>
              {job.selectionProcess.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="vlogBlock">
            <h3>Apply Karne Ka Tarika</h3>
            <ul>
              {job.howToApply.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </section>

        <aside className="vlogSummary softPanel" aria-label="Quick summary">
          <div>
            <FileText size={21} />
            <span>Total Vacancy</span>
            <strong>{job.vacancies}</strong>
          </div>
          <div>
            <CheckCircle2 size={21} />
            <span>Qualification</span>
            <strong>{job.qualification}</strong>
          </div>
          <div>
            <ShieldCheck size={21} />
            <span>Application Fee</span>
            <strong>{job.fee}</strong>
          </div>
        </aside>

        <footer className="vlogOfficial softPanel">
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
      </article>
    </main>
  );
}

function buildDetails(job: Job) {
  return {
    intro: `Namaskar dosto, aaj hum baat kar rahe hain ${job.title} ke baare me. ${job.org} ki taraf se ye update aaya hai, aur isme ${job.vacancies} ke liye candidates ko chance mil raha hai.`,
    sections: [
      {
        title: "Aaj Ki Main Update",
        body: `${job.body} Agar aap ${job.type.toLowerCase()} ki taiyari kar rahe hain, to ye update aapke liye important ho sakta hai. Is page me qualification, age limit, fee, dates aur apply process simple language me diya gaya hai.`
      },
      {
        title: "Kaun Apply Kar Sakta Hai",
        body: `Is vacancy ke liye qualification hai: ${job.qualification} Age limit: ${job.ageLimit} Apply karne se pehle apni category aur document details official notification se match kar lena zaroori hai.`
      },
      {
        title: "Fee Aur Form Bharne Se Pehle",
        body: `Application fee detail: ${job.fee} Form submit karne se pehle name, date of birth, category, photo, signature aur document upload clearly check kar lein, kyunki galat detail se form reject ho sakta hai.`
      },
      {
        title: "Final Advice",
        body: `Last date ${job.date} di gayi hai. End moment ka wait mat karein, kyunki website slow ya payment issue aa sakta hai. Pehle official notification padhein, phir hi application submit karein.`
      }
    ]
  };
}
