import { ArrowLeft, CalendarDays, CheckCircle2, ExternalLink, FileText, MapPin } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSchemeBySlug, schemes } from "../../updates";

export function generateStaticParams() {
  return schemes.map((item) => ({
    slug: item.slug
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getSchemeBySlug(slug);

  if (!item) {
    return {
      title: "Yojna Not Found"
    };
  }

  return {
    title: `${item.title} | Sarkari Yojna`,
    description: `${item.body} Check Sarkari Yojna eligibility, benefits, status and official apply link on All Naukri.`,
    keywords: [item.title, item.type, item.state, "Sarkari Yojna", "Government Schemes", "All Naukri"],
    alternates: {
      canonical: `/sarkari-yojna/${item.slug}`
    }
  };
}

export default async function YojnaDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getSchemeBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="detailPage">
      <section className="container detailShell">
        <div className="detailHero softPanel">
          <span className="chip">{item.type}</span>
          <h1>{item.title}</h1>
          <p>{item.summary}</p>

          <div className="detailMeta">
            <span>{item.org}</span>
            <span>
              <MapPin size={15} />
              {item.state}
            </span>
            <span>
              <CalendarDays size={15} />
              {item.date}
            </span>
          </div>
        </div>

        <div className="detailGrid">
          <article className="detailCard softPanel">
            <FileText size={22} />
            <h2>Yojna Details</h2>
            <p>{item.body}</p>
            <dl>
              <div>
                <dt>Department</dt>
                <dd>{item.org}</dd>
              </div>
              <div>
                <dt>State</dt>
                <dd>{item.state}</dd>
              </div>
            </dl>
          </article>

          <article className="detailCard softPanel">
            <CheckCircle2 size={22} />
            <h2>Important Points</h2>
            <ul>
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>

          <article className="detailCard softPanel">
            <ExternalLink size={22} />
            <h2>Apply Process</h2>
            <ul>
              {item.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </article>

          <article className="detailCard softPanel">
            <CheckCircle2 size={22} />
            <h2>Before Apply</h2>
            <ul>
              <li>Eligibility, last date aur document list official website par verify karein.</li>
              <li>Personal, bank aur Aadhaar details carefully fill karein.</li>
              <li>Submit ke baad acknowledgement ya application number save rakhein.</li>
            </ul>
          </article>
        </div>

        <footer className="detailActions detailActionsBottom softPanel">
          <div>
            <span className="chip">Official Link</span>
            <h2>Apply sirf official website se karein</h2>
            <p>
              Yojna form bharne se pehle eligibility, documents, benefit details aur dates official
              website par verify kar lein.
            </p>
          </div>
          <a href={item.officialLink} rel="noreferrer" target="_blank">
            {item.actionText}
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
