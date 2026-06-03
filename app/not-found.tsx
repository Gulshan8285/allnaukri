import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container notFoundPage">
      <section className="softPanel notFoundPanel">
        <span className="chip">Page not found</span>
        <h1>Update nahi mila</h1>
        <p>
          Yeh link abhi available nahi hai. Latest naukri updates, notices aur details ke liye
          home page par wapas ja sakte hain.
        </p>
        <Link href="/">Back to Home</Link>
      </section>
    </main>
  );
}
