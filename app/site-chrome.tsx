"use client";

import {
  Bell,
  BookOpen,
  BriefcaseBusiness,
  FileCheck2,
  Gift,
  Home,
  Menu,
  Moon,
  ShieldCheck,
  Sun,
  Wifi,
  X
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { jobs } from "./jobs";

const tickerItems = jobs.map((job) => `${job.title} - ${job.state}`);

const notificationItems = [
  {
    title: "Latest Sarkari Naukri",
    body: "New state-wise job filter page ready hai.",
    href: "/sarkari-naukri"
  },
  {
    title: "Sarkari Yojna",
    body: "Yojna updates ko search aur state filter ke saath dekhein.",
    href: "/sarkari-yojna"
  },
  {
    title: "Results",
    body: "Latest result updates detail page ke saath available hain.",
    href: "/results"
  }
];

const footerLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" }
];

const navLinks = [
  { label: "Home", href: "/", activePaths: ["/"], icon: Home },
  {
    label: "All Sarkari Naukri",
    href: "/sarkari-naukri",
    activePaths: ["/sarkari-naukri", "/naukri"],
    icon: BriefcaseBusiness
  },
  { label: "Sarkari Yojna", href: "/sarkari-yojna", activePaths: ["/sarkari-yojna"], icon: Gift },
  { label: "Results", href: "/results", activePaths: ["/results"], icon: FileCheck2 },
  { label: "Vlog", href: "/vlog", activePaths: ["/vlog", "/naukri-details"], icon: BookOpen }
];

function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      className="logoMarkSvg"
      fill="none"
      height={size}
      viewBox="0 0 64 64"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect height="58" rx="14" width="58" x="3" y="3" />
      <path d="M19 42V22L32 42V22" />
      <path d="M37 42L45 22L53 42" />
      <path d="M40 35H50" />
      <path d="M19 48H53" />
      <path d="M16 17L22 11L28 17" />
      <path d="M46 16L50 20L58 10" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const initialTheme = savedTheme === "dark" ? "dark" : "light";

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setNotificationsOpen(false);
  }, [pathname]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  }

  function isNavActive(item: (typeof navLinks)[number]) {
    return item.activePaths.some((activePath) =>
      activePath === "/" ? pathname === "/" : pathname.startsWith(activePath)
    );
  }

  return (
    <>
      <header className="topbar">
        <Link className="brand" href="/">
          <span className="brandMark">
            <LogoMark size={25} />
          </span>
          <span>
            <strong>All Naukri</strong>
            <small>Naukri Portal</small>
          </span>
        </Link>

        <nav
          className={mobileMenuOpen ? "navPills mobileOpen" : "navPills"}
          aria-label="Primary navigation"
        >
          {navLinks.map((item) => (
            <Link
              className={isNavActive(item) ? "active" : ""}
              href={item.href}
              key={item.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="topActions">
          <button
            aria-expanded={notificationsOpen}
            aria-label="Notifications"
            className="notificationButton"
            onClick={() => {
              setNotificationsOpen((isOpen) => !isOpen);
              setMobileMenuOpen(false);
            }}
            type="button"
          >
            <Bell size={16} />
            <span>{notificationItems.length}</span>
          </button>
          {notificationsOpen ? (
            <div className="notificationMenu">
              <div className="notificationMenuHead">
                <strong>Notifications</strong>
                <small>{notificationItems.length} new updates</small>
              </div>
              {notificationItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.title}
                  onClick={() => setNotificationsOpen(false)}
                >
                  <span>{item.title}</span>
                  <small>{item.body}</small>
                </Link>
              ))}
            </div>
          ) : null}
          <button
            aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
            className="themeToggleButton"
            onClick={toggleTheme}
            type="button"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            aria-expanded={mobileMenuOpen}
            aria-label="Menu"
            className="menuToggleButton"
            onClick={() => {
              setMobileMenuOpen((isOpen) => !isOpen);
              setNotificationsOpen(false);
            }}
            type="button"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {mobileMenuOpen ? (
        <div className="mobileMenuOverlay">
          <div className="mobileMenuPanel">
            <div className="mobileMenuHead">
              <div className="mobileMenuBrand">
                <span className="brandMark">
                  <LogoMark size={30} />
                </span>
                <span>
                  <strong>All Naukri</strong>
                  <small>Naukri Portal</small>
                </span>
              </div>
              <button
                aria-label="Close menu"
                className="mobileMenuClose"
                onClick={() => setMobileMenuOpen(false)}
                type="button"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="mobileMenuLinks" aria-label="Mobile navigation">
              {navLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    className={isNavActive(item) ? "active" : ""}
                    href={item.href}
                    key={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon size={22} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="mobileMenuFoot">
              <span className="liveConnected">
                <Wifi size={17} />
                Live connected
              </span>
              <button className="mobileThemeButton" onClick={toggleTheme} type="button">
                {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
                <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <section className="ticker" aria-label="Live updates">
        <span className="live">LIVE</span>
        <div className="tickerTrack">
          <div className="tickerItems">
            {tickerItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="bottomStrip">
      <div className="footerPanel">
        <div className="footerBrand">
          <strong>All Naukri</strong>
          <span>All Naukri updates in one place.</span>
        </div>

        <nav className="footerLinks" aria-label="Footer navigation">
          {footerLinks.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="footerDeclaration">
          <ShieldCheck size={22} />
          <p>
            <strong>Declaration:</strong> All Sarkari Naukri, Yojana, Result, Admit Card, and
            Admission information is provided for informational purposes only. Please verify details
            from the official source.
          </p>
        </div>
      </div>
    </footer>
  );
}
