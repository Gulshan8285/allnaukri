import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  FileText,
  Gift,
  MapPin,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSchemeBySlug, schemes } from "../../updates";

type Scheme = (typeof schemes)[number];

export function generateStaticParams() {
  return schemes.map((scheme) => ({
    slug: scheme.slug
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const scheme = getSchemeBySlug(slug);

  if (!scheme) {
    return {
      title: "Latest All Sarkari Yojna Not Found"
    };
  }

  return {
    title: `${scheme.title} Details | Sarkari Yojna`,
    description: `${scheme.title} eligibility, benefits, documents, status and official apply process in complete details format on All Naukri.`,
    keywords: [
      `${scheme.title} details`,
      scheme.type,
      scheme.state,
      "Latest All Sarkari Yojna",
      "Government Schemes",
      "All Naukri",
      "Yojna Updates"
    ],
    alternates: {
      canonical: `/naukri-details/${scheme.slug}`
    }
  };
}

export default async function NaukriDetailsPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scheme = getSchemeBySlug(slug);

  if (!scheme) {
    notFound();
  }

  const details = buildDetails(scheme);
  const overviewRows = [
    ["Yojna Name", scheme.title],
    ["Department", scheme.org],
    ["State", scheme.state],
    ["Current Status", scheme.date],
    ["Official Action", scheme.actionText]
  ];
  const documentRows = [
    ["Identity", "Aadhaar card, mobile number ya official ID details"],
    ["Address", "Residence proof ya state/district related document"],
    ["Bank", "Bank account, IFSC aur beneficiary payment details"],
    ["Eligibility", "Income, category, student/beneficiary ya course details as per yojna"]
  ];

  return (
    <main className="vlogPage">
      <article className="container vlogShell">
        <header className="vlogHero softPanel">
          <span className="chip">{scheme.type} Details</span>
          <h1>{scheme.title} ka complete update</h1>
          <p>{details.intro}</p>
          <div className="detailMeta">
            <span>{scheme.org}</span>
            <span>
              <MapPin size={15} />
              {scheme.state}
            </span>
            <span>
              <CalendarDays size={15} />
              {scheme.date}
            </span>
          </div>
        </header>

        <section className="vlogContent softPanel">
          <div className="vlogLead">
            <span className="iconBubble">
              <Gift size={19} />
            </span>
            <div>
              <h2>Latest All Sarkari Yojna</h2>
              <p>Is yojna update ko short, clear aur student-friendly format me samjhaya gaya hai.</p>
            </div>
          </div>

          <section className="yojnaArticleGrid" aria-label="Yojna overview">
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
                <h3>Benefit Check</h3>
              </div>
              <p>{scheme.summary}</p>
              <div className="yojnaBadgeList">
                <span>{scheme.type}</span>
                <span>{scheme.state}</span>
                <span>{scheme.date}</span>
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
            <h3>Important Points</h3>
            <div className="yojnaPointGrid">
              {scheme.details.map((item, index) => (
                <div className="yojnaPointCard" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="vlogBlock">
            <h3>Apply / Status Process</h3>
            <div className="yojnaStepGrid">
              {scheme.steps.map((item, index) => (
                <div className="yojnaStepCard" key={item}>
                  <strong>{index + 1}</strong>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="vlogBlock">
            <h3>Required Documents Table</h3>
            <div className="yojnaTableWrap">
              <table className="yojnaTable">
                <thead>
                  <tr>
                    <th scope="col">Document Type</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {documentRows.map(([label, value]) => (
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
            <h3>Apply Karne Se Pehle</h3>
            <div className="yojnaNote">
              <p>Eligibility, benefit amount, documents aur dates official website par verify karein.</p>
              <p>Personal, Aadhaar, bank aur education details carefully match karein.</p>
              <p>Submit ke baad acknowledgement ya application number save rakhein.</p>
            </div>
          </section>
        </section>

        <aside className="vlogSummary softPanel" aria-label="Quick summary">
          <div>
            <FileText size={21} />
            <span>Yojna Type</span>
            <strong>{scheme.type}</strong>
          </div>
          <div>
            <CheckCircle2 size={21} />
            <span>State</span>
            <strong>{scheme.state}</strong>
          </div>
          <div>
            <ShieldCheck size={21} />
            <span>Status</span>
            <strong>{scheme.date}</strong>
          </div>
        </aside>

        <footer className="vlogOfficial softPanel">
          <div>
            <span className="chip">Official Link</span>
            <h2>Apply sirf official website se karein</h2>
            <p>
              Yojna form bharne se pehle eligibility, documents, benefit details aur dates official
              website par verify kar lein.
            </p>
          </div>
          <a href={scheme.officialLink} rel="noreferrer" target="_blank">
            {scheme.actionText}
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

function buildDetails(scheme: Scheme) {
  return {
    intro: `Namaskar dosto, aaj hum baat kar rahe hain ${scheme.title} ke baare me. ${scheme.org} ki taraf se ye update aaya hai, aur eligible applicants is yojna ka benefit official process se le sakte hain.`,
    sections: [
      {
        title: "Aaj Ki Main Update",
        body: `${scheme.body} Agar aap ${scheme.state} se related government scheme updates dekh rahe hain, to ye yojna important ho sakti hai. Is page me benefit, eligibility, documents, status aur apply process simple language me diya gaya hai.`
      },
      {
        title: "Kaun Apply Kar Sakta Hai",
        body: `${scheme.summary} Apply karne se pehle applicant ko apni eligibility, state, category, income ya student/beneficiary details official portal par verify kar leni chahiye.`
      },
      {
        title: "Documents Aur Form Bharne Se Pehle",
        body: `Form submit karne se pehle name, mobile number, Aadhaar, bank details, residence proof, income/category certificate ya education documents carefully check kar lein. Galat detail se application reject ya verification delay ho sakta hai.`
      },
      {
        title: "Final Advice",
        body: `Current status: ${scheme.date}. End moment ka wait mat karein, kyunki portal slow ya verification issue aa sakta hai. Pehle official notice padhein, phir hi application ya status check karein.`
      }
    ]
  };
}
