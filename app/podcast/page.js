import Link from "next/link";
import { episodes, FEATURED_EPISODE_ID, getEpisodeBySlug } from "../data/episodes";
import { TAGS, getAllTagSlugs } from "../data/tags";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "The Executive Edge Podcast | Mission One",
  description: "Conversations with the leaders shaping the future of games, tech, and entertainment. Hosted by executive recruiters Gerard Miles and Dan Hampton of Mission One. Episodes cover executive hiring, C-suite careers, compensation, and leadership.",
  openGraph: {
    title: "The Executive Edge Podcast | Mission One",
    description: "Conversations with the leaders shaping the future of games, tech, and entertainment. Hosted by Gerard Miles and Dan Hampton.",
    url: "https://missionone.io/podcast",
  },
  alternates: {
    canonical: "https://missionone.io/podcast",
  },
};

export default function PodcastPage() {
  const featured = getEpisodeBySlug(FEATURED_EPISODE_ID);
  const otherEpisodes = episodes.filter((ep) => ep.id !== FEATURED_EPISODE_ID);
  const tagSlugs = getAllTagSlugs();

  const podcastSeriesSchema = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: "Mission One: The Executive Edge",
    description: "Conversations with the leaders shaping the future of games, tech, and entertainment. Hosted by executive recruiters Gerard Miles and Dan Hampton of Mission One.",
    url: "https://missionone.io/podcast",
    author: [
      { "@type": "Person", name: "Dan Hampton" },
      { "@type": "Person", name: "Gerard Miles" },
    ],
    publisher: {
      "@type": "Organization",
      name: "Mission One",
      url: "https://missionone.io",
    },
    webFeed: "https://www.youtube.com/@MissionOne-TheExecutiveEdge",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(podcastSeriesSchema) }}
      />

      <Nav activePage="/podcast" />

      {/* HEADER */}
      <section className="section section-dark" style={{ paddingTop: 180 }}>
        <div className="section-label">The Executive Edge</div>
        <h1 className="section-heading">
          The <em>Mission One</em> Podcast
        </h1>
        <p className="section-text" style={{ marginBottom: 24 }}>
          Welcome to Mission One: The Executive Edge, where executive recruiters Gerard Miles and Dan Hampton share the real story behind landing top jobs in tech, gaming, and entertainment.
        </p>
        <a
          href="https://www.youtube.com/@MissionOne-TheExecutiveEdge"
          target="_blank"
          rel="noopener noreferrer"
          className="podcast-channel-link"
        >
          Subscribe on YouTube &rarr;
        </a>
      </section>

      {/* FEATURED */}
      {featured && (
        <section className="section">
          <div className="podcast-featured-label">Featured Episode</div>
          <div className="podcast-embed" style={{ maxWidth: 720 }}>
            <iframe
              src={`https://www.youtube.com/embed/${featured.youtubeId}`}
              title={featured.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <Link href={`/podcast/${featured.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <h2 style={{ fontFamily: "var(--font-body)", fontSize: 18, fontWeight: 400, color: "var(--text-primary)", marginTop: 16 }}>{featured.title}</h2>
          </Link>
          <p style={{ fontFamily: "var(--font-body)", maxWidth: 640, fontSize: 14, lineHeight: 1.7, marginTop: 12, color: "var(--text-secondary)" }}>
            {featured.summary.substring(0, 200)}...{" "}
            <Link href={`/podcast/${featured.id}`} style={{ color: "var(--green-accent)", fontFamily: "var(--font-body)" }}>Read more</Link>
          </p>
        </section>
      )}

      {/* ALL EPISODES */}
      <section className="section section-dark">
        <div className="section-label">All Episodes</div>
        <h2 className="section-heading" style={{ marginBottom: 48 }}>
          Watch &amp; <em>Listen</em>
        </h2>
        <div className="podcast-grid">
          {otherEpisodes.map((ep) => (
            <Link
              key={ep.id}
              href={`/podcast/${ep.id}`}
              className="podcast-card"
              style={{ textDecoration: "none", color: "inherit" }}
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
              <p style={{ fontSize: 12, opacity: 0.5, marginTop: 4, fontFamily: "var(--font-mono)" }}>
                {ep.durationLabel}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
