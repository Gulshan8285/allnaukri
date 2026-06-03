import { Gift } from "lucide-react";
import { UpdateDirectoryFilters } from "../update-directory-filters";
import { schemes } from "../updates";

export const metadata = {
  title: "Sarkari Yojna Updates - Government Schemes | All Naukri",
  description:
    "Search Sarkari Yojna updates, government schemes, benefit details, status links and official apply information on All Naukri.",
  keywords: ["Sarkari Yojna", "All Naukri", "Government Schemes", "Yojana Updates"],
  alternates: {
    canonical: "/sarkari-yojna"
  }
};

export default function SarkariYojnaPage() {
  return (
    <main className="directoryPage">
      <section className="container directoryHero">
        <span className="iconBubble">
          <Gift size={19} />
        </span>
        <div>
          <span className="chip">Sarkari Yojna</span>
          <h1>Search aur state filter ke saath latest sarkari yojna</h1>
          <p>
            Yojna name se search karein, state select karein, phir detail page par jaakar official
            website se apply ya status check karein.
          </p>
        </div>
      </section>

      <UpdateDirectoryFilters
        detailBasePath="/sarkari-yojna"
        emptyText="Search text ya state filter change karke phir try karein."
        items={schemes}
        searchPlaceholder="Yojna name se search karein"
        unitLabel="yojna"
      />
    </main>
  );
}
