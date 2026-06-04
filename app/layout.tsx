import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./site-chrome";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://allnaukri.in";
const siteName = "All Naukri";
const siteDescription =
  "All Naukri brings All Jobs, All Sarkari Naukri, All Result, Sarkari Yojna and government job updates in one place.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "All Naukri - All Jobs, Sarkari Naukri, Results and Yojna Updates",
    template: "%s | All Naukri"
  },
  description: siteDescription,
  keywords: [
    "All Naukri",
    "All Jobs",
    "All Sarkari Naukri",
    "All Result",
    "Sarkari Naukri",
    "Sarkari Yojna",
    "Government Jobs",
    "Latest Jobs",
    "Job Result",
    "Admit Card"
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "All Naukri - All Jobs and Sarkari Naukri Updates",
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "All Naukri - All Jobs and Sarkari Naukri Updates"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "All Naukri - All Jobs and Sarkari Naukri Updates",
    description: siteDescription,
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

export const viewport: Viewport = {
  themeColor: "#08c7df",
  colorScheme: "light dark"
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/icon.svg`,
      sameAs: []
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      alternateName: ["All Naukri Update", "All Jobs", "All Sarkari Naukri", "All Result"],
      url: siteUrl,
      description: siteDescription,
      publisher: {
        "@id": `${siteUrl}/#organization`
      }
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#main-sections`,
      name: "All Naukri Main Sections",
      itemListElement: [
        { "@type": "SiteNavigationElement", position: 1, name: "All Sarkari Naukri", url: `${siteUrl}/sarkari-naukri` },
        { "@type": "SiteNavigationElement", position: 2, name: "Sarkari Yojna", url: `${siteUrl}/sarkari-yojna` },
        { "@type": "SiteNavigationElement", position: 3, name: "All Result", url: `${siteUrl}/results` },
        { "@type": "SiteNavigationElement", position: 4, name: "Sarkari Yojna Details", url: `${siteUrl}/vlog` }
      ]
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
