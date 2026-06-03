import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./site-chrome";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://allnaukri.com";
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
    description: siteDescription
  },
  twitter: {
    card: "summary",
    title: "All Naukri - All Jobs and Sarkari Naukri Updates",
    description: siteDescription
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  alternates: {
    canonical: "/"
  }
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  alternateName: ["All Naukri Update", "All Jobs", "All Sarkari Naukri", "All Result"],
  url: siteUrl,
  description: siteDescription,
  publisher: {
    "@type": "Organization",
    name: siteName,
    url: siteUrl
  }
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
