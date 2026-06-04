import { BookOpen, CalendarDays } from "lucide-react";
import Link from "next/link";
import { schemes } from "../updates";

export const metadata = {
  title: "Latest All Sarkari Yojna - Government Scheme Guides",
  description:
    "Read Sarkari Yojna details, eligibility, benefits, required documents, status and official apply process on All Naukri.",
  keywords: ["Latest All Sarkari Yojna", "Sarkari Yojna", "Government Schemes", "All Naukri"],
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
          <h1>Latest All Sarkari Yojna</h1>
          <p>Yojna updates ko complete details format me padhein.</p>
        </div>
      </section>

      <section className="container vlogGrid" aria-label="Latest All Sarkari Yojna">
        {schemes.map((scheme) => (
          <Link className="jobCardLink" href={`/naukri-details/${scheme.slug}`} key={scheme.slug}>
            <article className="noticeCard">
              <span className="chip">{scheme.type}</span>
              <h3>{scheme.title}</h3>
              <p>{scheme.summary}</p>
              <footer>
                <span>{scheme.org}</span>
                <span>
                  <CalendarDays size={13} />
                  {scheme.date}
                </span>
              </footer>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
