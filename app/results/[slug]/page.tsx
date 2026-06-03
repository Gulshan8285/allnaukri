import { ArrowLeft, CalendarDays, CheckCircle2, ExternalLink, FileText, MapPin } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getResultBySlug, results } from "../../updates";

export function generateStaticParams() {
  return results.map((item) => ({
    slug: item.slug
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getResultBySlug(slug);

  if (!item) {
    return {
      title: "Result Not Found"
    };
  }

  return {
    title: `${item.title} | All Result`,
    description: `${item.body} Check official result link, status and details on All Naukri.`,
    keywords: [item.title, item.type, item.state, "All Result", "Sarkari Result", "All Naukri"],
    alternates: {
      canonical: `/results/${item.slug}`
    }
  };
}

export default async function ResultDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getResultBySlug(slug);

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
            <h2>Result Details</h2>
            <p>{item.body}</p>
            <dl>
              <div>
                <dt>Organization</dt>
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
            <h2>Check Process</h2>
            <ul>
              {item.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </article>

          <article className="detailCard softPanel">
            <CheckCircle2 size={22} />
            <h2>After Result</h2>
            <ul>
              <li>Roll number, marks aur qualifying status carefully check karein.</li>
              <li>Online result provisional ho sakta hai, official marksheet notice follow karein.</li>
              <li>Next stage ya counselling update official website par dekhte rahen.</li>
            </ul>
          </article>
        </div>

        <footer className="detailActions detailActionsBottom softPanel">
          <div>
            <span className="chip">Official Link</span>
            <h2>Result sirf official website par check karein</h2>
            <p>
              Result check karne se pehle roll number, registration detail aur latest official
              notice verify kar lein.
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
