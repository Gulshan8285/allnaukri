import {
  ArrowLeft,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  FileText,
  MapPin,
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

  const details = buildDetails(job);
  const overviewRows = [
    ["Post Name", job.title],
    ["Department", job.org],
    ["State", job.state],
    ["Total Vacancy", job.vacancies],
    ["Last Date", job.date]
  ];
  const eligibilityRows = [
    ["Qualification", job.qualification],
    ["Age Limit", job.ageLimit],
    ["Application Fee", job.fee],
    ["Selection", job.selectionProcess.join(", ")]
  ];

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
              <MapPin size={15} />
              {job.state}
            </span>
            <span>
              <CalendarDays size={15} />
              Last date: {job.date}
            </span>
          </div>
        </header>

        <section className="vlogContent softPanel">
          <div className="vlogLead">
            <span className="iconBubble">
              <BriefcaseBusiness size={19} />
            </span>
            <div>
              <h2>Latest All Sarkari Naukri</h2>
              <p>Is vacancy update ko short, clear aur student-friendly format me samjhaya gaya hai.</p>
            </div>
          </div>

          <section className="yojnaArticleGrid" aria-label="Job overview">
            <div className="yojnaTableCard">
              <div className="yojnaMiniHead">
                <ClipboardList size={18} />
                <h3>Quick Overview</h3>
              </div>
              <div className="yojnaTableWrap">
                <table className="yojnaTable">
                  <tbody>
                    {overviewRows.map(([label, value]) => (
                      <tr key={label}>
                        <th scope="row">{label}</th>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="yojnaTableCard yojnaHighlightCard">
              <div className="yojnaMiniHead">
                <ShieldCheck size={18} />
                <h3>Vacancy Check</h3>
              </div>
              <p>{job.body} Apply karne se pehle eligibility, fee aur official dates zaroor verify karein.</p>
              <div className="yojnaBadgeList">
                <span>{job.type}</span>
                <span>{job.state}</span>
                <span>{job.vacancies}</span>
              </div>
            </div>
          </section>

          {details.sections.map((section) => (
            <section className="vlogBlock" key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </section>
          ))}

          <section className="vlogBlock">
            <h3>Important Dates</h3>
            <div className="yojnaPointGrid">
              {job.importantDates.map((item) => (
                <div className="yojnaPointCard" key={item}>
                  <span>{item.split(":")[0]}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="vlogBlock">
            <h3>Selection Process</h3>
            <div className="yojnaStepGrid">
              {job.selectionProcess.map((item, index) => (
                <div className="yojnaStepCard" key={item}>
                  <strong>{index + 1}</strong>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="vlogBlock">
            <h3>Eligibility Table</h3>
            <div className="yojnaTableWrap">
              <table className="yojnaTable">
                <thead>
                  <tr>
                    <th scope="col">Field</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {eligibilityRows.map(([label, value]) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="vlogBlock">
            <h3>How to Apply</h3>
            <div className="yojnaStepGrid">
              {job.howToApply.map((item, index) => (
                <div className="yojnaStepCard" key={item}>
                  <strong>{index + 1}</strong>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="vlogBlock">
            <h3>Apply Karne Se Pehle</h3>
            <div className="yojnaNote">
              <p>Official notification, eligibility, age limit, fee aur dates carefully verify karein.</p>
              <p>Name, date of birth, category, photo, signature aur documents submit se pehle match karein.</p>
              <p>Application submit hone ke baad registration number aur final printout save rakhein.</p>
            </div>
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
        body: `${job.body} Agar aap ${job.type.toLowerCase()} ki taiyari kar rahe hain, to ye update aapke liye important ho sakta hai. Is page me vacancy, qualification, age limit, fee, dates aur apply process simple language me diya gaya hai.`
      },
      {
        title: "Kaun Apply Kar Sakta Hai",
        body: `Is vacancy ke liye qualification hai: ${job.qualification} Age limit: ${job.ageLimit} Apply karne se pehle apni category, age relaxation aur document details official notification se match kar lena zaroori hai.`
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
