import { ArrowLeft, Clock3, FileCheck2 } from "lucide-react";
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
    title: `${item.title} | Coming Soon`,
    description: `${item.title} result details are coming soon on All Naukri.`,
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
    <main className="notFoundPage">
      <section className="container notFoundPanel softPanel">
        <span className="iconBubble">
          <FileCheck2 size={22} />
        </span>
        <span className="chip">{item.type}</span>
        <h1>Coming Soon</h1>
        <p>
          {item.title} ka detailed result page abhi prepare ho raha hai. Latest result update jald
          hi yahan add kiya jayega.
        </p>
        <div className="comingSoonMeta">
          <span>
            <Clock3 size={15} />
            Update coming soon
          </span>
          <span>{item.org}</span>
        </div>
        <div className="notFoundActions">
          <Link href="/results">
            <ArrowLeft size={16} />
            Back to Results
          </Link>
          <Link href="/">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
