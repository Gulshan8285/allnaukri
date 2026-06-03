import { FileCheck2 } from "lucide-react";
import { UpdateDirectoryFilters } from "../update-directory-filters";
import { results } from "../updates";

export const metadata = {
  title: "All Result - Sarkari Result and Exam Result Updates",
  description:
    "Check All Result updates including Sarkari Result, board result, job result and official result links on All Naukri.",
  keywords: ["All Result", "Sarkari Result", "Job Result", "Board Result", "All Naukri"],
  alternates: {
    canonical: "/results"
  }
};

export default function ResultsPage() {
  return (
    <main className="directoryPage">
      <section className="container directoryHero">
        <span className="iconBubble">
          <FileCheck2 size={19} />
        </span>
        <div>
          <span className="chip">Results</span>
          <h1>All Result aur latest Sarkari Result updates</h1>
          <p>
            Result name se search karein, state select karein, phir detail page par jaakar official
            website par result check karein.
          </p>
        </div>
      </section>

      <UpdateDirectoryFilters
        detailBasePath="/results"
        emptyText="Search text ya state filter change karke phir try karein."
        items={results}
        searchPlaceholder="Result name se search karein"
        unitLabel="result"
      />
    </main>
  );
}
