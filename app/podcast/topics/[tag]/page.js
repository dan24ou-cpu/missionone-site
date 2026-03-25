import { notFound } from "next/navigation";
import Link from "next/link";
import { TAGS, getAllTagSlugs } from "../../../data/tags";
import { getEpisodesByTag } from "../../../data/episodes";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";

export function generateStaticParams() {
  return getAllTagSlugs().map((tag) => ({ tag }));
}

export async function generateMetadata({ params }) {
  const { tag } = await params;
  const tagData = TAGS[tag];
  if (!tagData) return {};
  return {
    title: `${tagData.name} — Executive Insights | Mission One Podcast`,
    description: tagData.description,
    openGraph: {
      title: `${tagData.name} — Executive Insights | Mission One Podcast`,
      description: tagData.description,
      url: `https://missionone.io/podcast/topics/${tag}`,
    },
    alternates: {
      canonical: `https://missionone.io/podcast/topics/${tag}`,
    },
  };
}

export default async function TopicPage({ params }) {
  const { tag } = await params;
  const tagData = TAGS[tag];
  if (!tagData) notFound();

  const tagEpisodes = getEpisodesByTag(tag);
  const relatedTags = (tagData.relatedTags || []).filter((t) => TAGS[t]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${tagData.name} — Mission One Podcast Episodes`,
    description: tagData.description,
    url: `https://missionone.io/podcast/topics/${tag}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: tagEpisodes.length,
      itemListElement: tagEpisodes.map((ep, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://missionone.io/podcast/${ep.id}`,
        name: ep.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <Nav activePage="/podcast" />

      <section className="section section-dark" style={{ paddingTop: 160 }}>
        <nav style={{ marginBottom: 32, fontSize: 14, opacity: 0.6 }}>
          <Link href="/podcast" style={{ color: "var(--green-accent)", textDecoration: "none" }}>Podcast</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <Link href="/podcast/topics" style={{ color: "var(--green-accent)", textDecoration: "none" }}>Topics</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span>{tagData.name}</span>
        </nav>

        <div className="section-label">{tagData.name}</div>
        <h1 className="section-heading" style={{ maxWidth: 800 }}>
          {tagData.name}: <em>Executive Insights</em>
        </h1>
        <p className="section-text" style={{ maxWidth: 720, marginBottom: 48, lineHeight: 1.8 }}>
          {tagData.description}
        </p>

        {/* Episode list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32, maxWidth: 720, marginBottom: 48 }}>
          {tagEpisodes.map((ep) => (
            <Link
              key={ep.id}
              href={`/podcast/${ep.id}`}
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: 20,
                padding: 20,
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.02)",
                textDecoration: "none",
                color: "inherit",
                alignItems: "start",
              }}
              className="topic-card-link"
            >
              <div className="podcast-thumb-wrap" style={{ borderRadius: 8, overflow: "hidden" }}>
                <img
                  src={`https://img.youtube.com/vi/${ep.youtubeId}/mqdefault.jpg`}
                  alt={ep.title}
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 18, marginBottom: 8 }}>
                  {ep.title}
                </h2>
                <p style={{ fontSize: 13, opacity: 0.5, marginBottom: 8, fontFamily: "var(--font-mono)" }}>
                  {ep.durationLabel} &middot; {new Date(ep.publishDate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                </p>
                <p className="section-text" style={{ fontSize: 14, lineHeight: 1.6 }}>
                  {ep.summary.substring(0, 200)}...
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Related topics */}
        {relatedTags.length > 0 && (
          <section style={{ maxWidth: 720, marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 20, marginBottom: 16 }}>Related Topics</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {relatedTags.map((rt) => (
                <Link
                  key={rt}
                  href={`/podcast/topics/${rt}`}
                  style={{
                    display: "inline-block",
                    padding: "6px 14px",
                    borderRadius: 20,
                    border: "1px solid rgba(14, 138, 34, 0.4)",
                    color: "var(--green-accent)",
                    fontSize: 13,
                    textDecoration: "none",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {TAGS[rt].name}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section style={{ maxWidth: 720, textAlign: "center", padding: "40px 0" }}>
          <p className="section-text" style={{ marginBottom: 24 }}>
            Need help hiring executive talent?
          </p>
          <Link href="/contact" className="podcast-channel-link" style={{ textDecoration: "none" }}>
            Work with Mission One &rarr;
          </Link>
        </section>
      </section>

      <Footer />
    </>
  );
}
