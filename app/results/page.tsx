import { ArrowLeft, Clock3, FileCheck2 } from "lucide-react";
import Link from "next/link";

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
    <main className="notFoundPage">
      <section className="container notFoundPanel softPanel">
        <span className="iconBubble">
          <FileCheck2 size={22} />
        </span>
        <span className="chip">Results</span>
        <h1>Coming Soon</h1>
        <p>
          Results section abhi prepare ho raha hai. Latest Sarkari Result, board result aur exam
          result updates jald hi yahan add kiye jayenge.
        </p>
        <div className="comingSoonMeta">
          <span>
            <Clock3 size={15} />
            Update coming soon
          </span>
          <span>All Result</span>
        </div>
        <div className="notFoundActions">
          <Link href="/">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
