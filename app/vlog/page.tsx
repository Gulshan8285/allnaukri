import { BookOpen, CalendarDays, Gift } from "lucide-react";
import Link from "next/link";
import { schemes } from "../updates";

export const metadata = {
  title: "Sarkari Yojna Details - Government Scheme Guides",
  description:
    "Read Sarkari Yojna details, eligibility, benefits, required documents, status and official apply process on All Naukri.",
  keywords: ["Sarkari Yojna Details", "Sarkari Yojna", "Government Schemes", "All Naukri"],
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
          <h1>Sarkari Yojna Details</h1>
          <p>Yojna updates ko complete details format me padhein.</p>
        </div>
      </section>

      <section className="container vlogGrid" aria-label="Sarkari Yojna Details">
        {schemes.map((scheme) => (
          <Link className="jobCardLink" href={`/naukri-details/${scheme.slug}`} key={scheme.slug}>
            <article className="blogCard">
              <div className="blogArt">
                <Gift size={32} />
              </div>
              <div className="blogBody">
                <span>{scheme.type}</span>
                <h3>{scheme.title} Details</h3>
                <p>{scheme.summary} Eligibility, benefits, documents aur apply process simple language me.</p>
                <footer>
                  <small>{scheme.org}</small>
                  <small>
                    <CalendarDays size={12} />
                    {scheme.date}
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
