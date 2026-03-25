import Link from "next/link";
import { TAGS } from "../../data/tags";
import { getEpisodesByTag } from "../../data/episodes";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Podcast Topics | Mission One: The Executive Edge",
  description: "Browse executive hiring and career topics covered on Mission One: The Executive Edge podcast — from gaming industry recruitment and C-suite hiring to compensation negotiation and leadership development.",
  openGraph: {
    title: "Podcast Topics | Mission One: The Executive Edge",
    description: "Browse executive hiring and career topics from Mission One's podcast.",
    url: "https://missionone.io/podcast/topics",
  },
  alternates: {
    canonical: "https://missionone.io/podcast/topics",
  },
};

export default function TopicsIndexPage() {
  const tagSlugs = Object.keys(TAGS);

  return (
    <>
      <Nav activePage="/podcast" />

      <section className="section section-dark" style={{ paddingTop: 160 }}>
        <nav style={{ marginBottom: 32, fontSize: 14, opacity: 0.6, fontFamily: "var(--font-body)" }}>
          <Link href="/podcast" style={{ color: "var(--green-accent)", textDecoration: "none" }}>Podcast</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span>Topics</span>
        </nav>

        <div className="section-label">Browse by Topic</div>
        <h1 className="section-heading">
          Executive Hiring &amp; Career <em>Topics</em>
        </h1>
        <p className="section-text" style={{ maxWidth: 640, marginBottom: 48 }}>
          Explore insights from Mission One: The Executive Edge podcast organized by topic. Each topic page collects episodes, key takeaways, and FAQs from Dan Hampton and Gerard Miles.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20, maxWidth: 960 }}>
          {tagSlugs.map((slug) => {
            const tag = TAGS[slug];
            const episodeCount = getEpisodesByTag(slug).length;
            return (
              <Link
                key={slug}
                href={`/podcast/topics/${slug}`}
                style={{
                  display: "block",
                  padding: 24,
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.02)",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                className="topic-card-link"
              >
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 20, marginBottom: 8, color: "var(--green-accent)" }}>
                  {tag.name}
                </h2>
                <p style={{ fontSize: 14, opacity: 0.6, marginBottom: 12, fontFamily: "var(--font-mono)", letterSpacing: "0.02em" }}>
                  {episodeCount} episode{episodeCount !== 1 ? "s" : ""}
                </p>
                <p className="section-text" style={{ fontSize: 14, lineHeight: 1.6 }}>
                  {tag.description.substring(0, 150)}...
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
