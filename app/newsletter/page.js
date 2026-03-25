import Link from "next/link";
import { newsletters } from "../data/newsletters";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Newsletter | Mission One: The Executive Edge",
  description: "Expert insights on executive hiring, C-suite careers, and leadership from Mission One founders Gerard Miles and Dan Hampton. Read the full newsletter archive.",
  openGraph: {
    title: "Newsletter | Mission One: The Executive Edge",
    description: "Expert insights on executive hiring, C-suite careers, and leadership from Mission One.",
    url: "https://missionone.io/newsletter",
  },
  alternates: {
    canonical: "https://missionone.io/newsletter",
  },
};

export default function NewsletterPage() {
  return (
    <>
      <Nav activePage="/newsletter" />

      <section className="section section-dark" style={{ paddingTop: 180 }}>
        <div className="section-label">Newsletter</div>
        <h1 className="section-heading">
          The <em>Executive Edge</em> Newsletter
        </h1>
        <p className="section-text" style={{ maxWidth: 640, marginBottom: 24 }}>
          Expert insights on executive hiring, C-suite careers, and leadership from Mission One founders Gerard Miles and Dan Hampton. Companion articles to our podcast episodes.
        </p>
        <a
          href="https://www.linkedin.com/newsletters/the-executive-edge-7316167581498626048/"
          target="_blank"
          rel="noopener noreferrer"
          className="podcast-channel-link"
        >
          Subscribe on LinkedIn &rarr;
        </a>
      </section>

      <section className="section">
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 760 }}>
          {newsletters.map((nl) => (
            <Link
              key={nl.id}
              href={`/newsletter/${nl.id}`}
              style={{
                display: "block",
                padding: 24,
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.02)",
                textDecoration: "none",
                color: "inherit",
              }}
              className="topic-card-link"
            >
              <p style={{ fontSize: 13, opacity: 0.5, marginBottom: 8, fontFamily: "var(--font-mono)", letterSpacing: "0.02em" }}>
                {new Date(nl.publishDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 22, marginBottom: 8 }}>
                {nl.title}
              </h2>
              <p className="section-text" style={{ fontSize: 14, lineHeight: 1.6 }}>
                {nl.summary}
              </p>
              <span style={{ color: "var(--green-accent)", fontSize: 13, marginTop: 12, display: "inline-block" }}>
                Read more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
