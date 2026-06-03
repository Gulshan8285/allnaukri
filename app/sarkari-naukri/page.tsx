import { BriefcaseBusiness } from "lucide-react";
import { jobs } from "../jobs";
import { SarkariNaukriFilters } from "./sarkari-naukri-filters";

export const metadata = {
  title: "All Sarkari Naukri - Latest Government Jobs and All Jobs",
  description:
    "Find All Sarkari Naukri, All Jobs and latest government job updates by job name, state, vacancy, eligibility and official apply link.",
  keywords: ["All Sarkari Naukri", "All Jobs", "All Naukri", "Sarkari Naukri", "Government Jobs"],
  alternates: {
    canonical: "/sarkari-naukri"
  }
};

export default function SarkariNaukriPage() {
  return (
    <main className="directoryPage">
      <section className="container directoryHero">
        <span className="iconBubble">
          <BriefcaseBusiness size={19} />
        </span>
        <div>
          <span className="chip">All Sarkari Naukri</span>
          <h1>All Sarkari Naukri aur All Jobs updates</h1>
          <p>
            Job name se search karein, state select karein, phir detail page par jaakar official
            website se apply karein.
          </p>
        </div>
      </section>

      <SarkariNaukriFilters jobs={jobs} />
    </main>
  );
}
