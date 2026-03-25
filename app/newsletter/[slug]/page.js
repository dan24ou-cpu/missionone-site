import { notFound } from "next/navigation";
import Link from "next/link";
import { newsletters, getNewsletterBySlug } from "../../data/newsletters";
import { getEpisodeBySlug } from "../../data/episodes";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export function generateStaticParams() {
  return newsletters.map((nl) => ({ slug: nl.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const nl = getNewsletterBySlug(slug);
  if (!nl) return {};
  return {
    title: `${nl.title} | Mission One Newsletter`,
    description: nl.metaDescription,
    openGraph: {
      title: `${nl.title} | Mission One Newsletter`,
      description: nl.metaDescription,
      url: `https://missionone.io/newsletter/${nl.id}`,
      type: "article",
    },
    alternates: {
      canonical: `https://missionone.io/newsletter/${nl.id}`,
    },
  };
}

export default async function NewsletterArticlePage({ params }) {
  const { slug } = await params;
  const nl = getNewsletterBySlug(slug);
  if (!nl) notFound();

  const relatedEpisode = nl.relatedEpisodeId ? getEpisodeBySlug(nl.relatedEpisodeId) : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: nl.title,
    description: nl.metaDescription,
    datePublished: nl.publishDate,
    url: `https://missionone.io/newsletter/${nl.id}`,
    author: [
      { "@type": "Person", name: "Gerard Miles" },
      { "@type": "Person", name: "Dan Hampton" },
    ],
    publisher: {
      "@type": "Organization",
      name: "Mission One",
      url: "https://missionone.io",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Nav activePage="/newsletter" />

      <article className="section section-dark" style={{ paddingTop: 160 }}>
        <nav style={{ marginBottom: 32, fontSize: 14, opacity: 0.6, fontFamily: "var(--font-body)" }}>
          <Link href="/newsletter" style={{ color: "var(--green-accent)", textDecoration: "none" }}>
            Newsletter
          </Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span>Article</span>
        </nav>

        <div className="section-label">The Executive Edge</div>
        <h1 className="section-heading" style={{ fontSize: "clamp(28px, 4vw, 44px)", maxWidth: 800 }}>
          {nl.title}
        </h1>

        <div style={{ fontSize: 14, opacity: 0.6, marginBottom: 48, fontFamily: "var(--font-body)" }}>
          {new Date(nl.publishDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          {" "}&middot; By Gerard Miles &amp; Dan Hampton
        </div>

        <div style={{ maxWidth: 720 }}>
          {nl.content.map((section, i) => (
            <section key={i} style={{ marginBottom: 32 }}>
              {section.heading && (
                <h2 style={{ fontFamily: "var(--font-body)", fontSize: 22, marginBottom: 12, color: "var(--green-accent)", fontWeight: 500 }}>
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((p, j) => (
                <p key={j} className="section-text" style={{ lineHeight: 1.8, marginBottom: 16 }}>
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        {relatedEpisode && (
          <div style={{ maxWidth: 720, marginTop: 48, padding: 24, borderRadius: 12, border: "1px solid rgba(14, 138, 34, 0.3)", background: "rgba(14, 138, 34, 0.05)" }}>
            <p style={{ fontSize: 13, fontFamily: "var(--font-mono)", color: "var(--green-accent)", marginBottom: 8, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Related Podcast Episode
            </p>
            <Link href={`/podcast/${relatedEpisode.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <h3 style={{ fontFamily: "var(--font-body)", fontSize: 18, marginBottom: 8, fontWeight: 400 }}>
                {relatedEpisode.title}
              </h3>
              <p className="section-text" style={{ fontSize: 14 }}>
                {relatedEpisode.durationLabel} &middot; Watch the full episode &rarr;
              </p>
            </Link>
          </div>
        )}

        <section style={{ maxWidth: 720, textAlign: "center", padding: "48px 0" }}>
          <p className="section-text" style={{ marginBottom: 24 }}>
            Looking for an executive search partner who understands your industry?
          </p>
          <Link href="/contact" className="podcast-channel-link" style={{ textDecoration: "none" }}>
            Work with Mission One &rarr;
          </Link>
        </section>
      </article>

      <Footer />
    </>
  );
}
