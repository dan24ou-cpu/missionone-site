import { notFound } from "next/navigation";
import Link from "next/link";
import { episodes, getEpisodeBySlug, getRelatedEpisodes } from "../../data/episodes";
import { TAGS } from "../../data/tags";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export function generateStaticParams() {
  return episodes.map((ep) => ({ slug: ep.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);
  if (!episode) return {};
  return {
    title: `${episode.title} | Mission One Podcast`,
    description: episode.metaDescription,
    openGraph: {
      title: `${episode.title} | Mission One Podcast`,
      description: episode.metaDescription,
      url: `https://missionone.io/podcast/${episode.id}`,
      siteName: "Mission One",
      type: "article",
      images: [`https://img.youtube.com/vi/${episode.youtubeId}/maxresdefault.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: episode.title,
      description: episode.metaDescription,
    },
    alternates: {
      canonical: `https://missionone.io/podcast/${episode.id}`,
    },
  };
}

export default async function EpisodePage({ params }) {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);
  if (!episode) notFound();

  const related = getRelatedEpisodes(episode.id);

  const podcastEpisodeSchema = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: episode.title,
    description: episode.summary,
    datePublished: episode.publishDate,
    timeRequired: episode.duration,
    url: `https://missionone.io/podcast/${episode.id}`,
    associatedMedia: {
      "@type": "VideoObject",
      name: episode.title,
      description: episode.summary,
      thumbnailUrl: `https://img.youtube.com/vi/${episode.youtubeId}/maxresdefault.jpg`,
      uploadDate: episode.publishDate,
      embedUrl: `https://www.youtube.com/embed/${episode.youtubeId}`,
    },
    partOfSeries: {
      "@type": "PodcastSeries",
      name: "Mission One: The Executive Edge",
      url: "https://missionone.io/podcast",
    },
    publisher: {
      "@type": "Organization",
      name: "Mission One",
      url: "https://missionone.io",
    },
  };

  const faqSchema = episode.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: episode.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(podcastEpisodeSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Nav activePage="/podcast" />

      <article className="section section-dark" style={{ paddingTop: 160 }}>
        {/* Breadcrumb */}
        <nav style={{ marginBottom: 32, fontSize: 14, opacity: 0.6, fontFamily: "var(--font-body)" }}>
          <Link href="/podcast" style={{ color: "var(--green-accent)", textDecoration: "none", fontFamily: "var(--font-body)" }}>
            Podcast
          </Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span>Episode</span>
        </nav>

        <div className="section-label">The Executive Edge</div>
        <h1 className="section-heading" style={{ fontSize: "clamp(28px, 4vw, 44px)", maxWidth: 800 }}>
          {episode.title}
        </h1>

        {/* Meta info */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32, fontSize: 14, opacity: 0.7 }}>
          <span>{new Date(episode.publishDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          <span>{episode.durationLabel}</span>
          {episode.guest && (
            <span>Guest: {episode.guest.name}, {episode.guest.title} at {episode.guest.company}</span>
          )}
        </div>

        {/* YouTube embed */}
        <div className="podcast-embed" style={{ maxWidth: 720, marginBottom: 48 }}>
          <iframe
            src={`https://www.youtube.com/embed/${episode.youtubeId}`}
            title={episode.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Summary */}
        <section style={{ maxWidth: 720, marginBottom: 48 }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 24, marginBottom: 16 }}>Episode Summary</h2>
          <p className="section-text" style={{ lineHeight: 1.8 }}>{episode.summary}</p>
        </section>

        {/* Key Takeaways */}
        <section style={{ maxWidth: 720, marginBottom: 48 }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 24, marginBottom: 16 }}>Key Takeaways</h2>
          <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 12 }}>
            {episode.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="section-text" style={{ lineHeight: 1.7 }}>{takeaway}</li>
            ))}
          </ol>
        </section>

        {/* Topics */}
        <section style={{ maxWidth: 720, marginBottom: 48 }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 24, marginBottom: 16 }}>Topics Discussed</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {episode.tags.map((tag) => (
              <Link
                key={tag}
                href={`/podcast/topics/${tag}`}
                style={{
                  display: "inline-block",
                  padding: "6px 14px",
                  borderRadius: 20,
                  border: "1px solid rgba(14, 138, 34, 0.4)",
                  color: "var(--green-accent)",
                  fontSize: 13,
                  textDecoration: "none",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.02em",
                }}
              >
                {TAGS[tag]?.name || tag}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        {episode.faqs.length > 0 && (
          <section style={{ maxWidth: 720, marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 24, marginBottom: 24 }}>Frequently Asked Questions</h2>
            {episode.faqs.map((faq, i) => (
              <div key={i} style={{ marginBottom: 24 }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 18, marginBottom: 8, color: "var(--green-accent)" }}>
                  {faq.q}
                </h3>
                <p className="section-text" style={{ lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </section>
        )}

        {/* Related Episodes */}
        {related.length > 0 && (
          <section style={{ maxWidth: 720, marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 24, marginBottom: 24 }}>Related Episodes</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
              {related.map((ep) => (
                <Link
                  key={ep.id}
                  href={`/podcast/${ep.id}`}
                  className="podcast-card"
                  style={{ textDecoration: "none" }}
                >
                  <div className="podcast-thumb-wrap">
                    <img
                      src={`https://img.youtube.com/vi/${ep.youtubeId}/mqdefault.jpg`}
                      alt={ep.title}
                      className="podcast-thumb"
                    />
                    <div className="podcast-play-icon">&#9654;</div>
                  </div>
                  <h3 className="podcast-card-title">{ep.title}</h3>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section style={{ maxWidth: 720, marginBottom: 48, textAlign: "center", padding: "40px 0" }}>
          <p className="section-text" style={{ marginBottom: 24 }}>
            Looking for an executive search partner who understands your industry?
          </p>
          <Link
            href="/contact"
            className="podcast-channel-link"
            style={{ textDecoration: "none" }}
          >
            Work with Mission One &rarr;
          </Link>
        </section>
      </article>

      <Footer />
    </>
  );
}
