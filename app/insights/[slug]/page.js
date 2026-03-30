import { notFound } from "next/navigation";
import Link from "next/link";
import { guides, getGuideBySlug } from "../../data/guides";
import { getEpisodeBySlug } from "../../data/episodes";
import { getNewsletterBySlug } from "../../data/newsletters";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | Mission One`,
    description: guide.metaDescription,
    openGraph: {
      title: `${guide.title} | Mission One`,
      description: guide.metaDescription,
      url: `https://missionone.io/insights/${guide.id}`,
      type: "article",
    },
    alternates: {
      canonical: `https://missionone.io/insights/${guide.id}`,
    },
  };
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const relatedEpisode = guide.relatedEpisodeId ? getEpisodeBySlug(guide.relatedEpisodeId) : null;
  const relatedNewsletter = guide.relatedNewsletterId ? getNewsletterBySlug(guide.relatedNewsletterId) : null;

  // HowTo schema for howto type
  const howToSchema = guide.type === "howto" && guide.steps ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: guide.title,
    description: guide.summary,
    step: guide.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
    author: { "@type": "Organization", name: "Mission One", url: "https://missionone.io" },
    publisher: {
      "@type": "Organization",
      name: "Mission One",
      url: "https://missionone.io",
    },
  } : null;

  // Article schema for role/sector types
  const articleSchema = guide.type !== "howto" ? {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.metaDescription,
    url: `https://missionone.io/insights/${guide.id}`,
    author: { "@type": "Organization", name: "Mission One", url: "https://missionone.io" },
    publisher: {
      "@type": "Organization",
      name: "Mission One",
      url: "https://missionone.io",
    },
  } : null;

  // FAQ schema for all
  const faqSchema = guide.faqs && guide.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  } : null;

  return (
    <>
      {howToSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      )}
      {articleSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      )}
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Minimal header — no full nav, just logo + back link */}
      <div style={{ padding: "24px 32px", display: "flex", alignItems: "center", gap: 16 }}>
        <Link href="/">
          <img src="/mission_one.png" alt="Mission One" style={{ height: 40 }} />
        </Link>
      </div>

      <article style={{ maxWidth: 780, margin: "0 auto", padding: "40px 24px 80px" }}>
        {/* Type badge */}
        <div style={{ fontSize: 12, fontFamily: "var(--font-body)", color: "var(--green-accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>
          {guide.type === "howto" ? "Guide" : guide.type === "role" ? "Executive Search by Role" : "Executive Search by Sector"}
        </div>

        <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.15, marginBottom: 24, fontWeight: 300 }}>
          {guide.title}
        </h1>

        <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", marginBottom: 48 }}>
          {guide.summary}
        </p>

        {/* HowTo steps summary */}
        {guide.steps && (
          <section style={{ marginBottom: 48, padding: 24, borderRadius: 12, border: "1px solid rgba(14, 138, 34, 0.2)", background: "rgba(14, 138, 34, 0.03)" }}>
            <h2 style={{ fontFamily: "var(--font-body)", fontSize: 20, marginBottom: 16, fontWeight: 500 }}>
              Quick Steps
            </h2>
            <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              {guide.steps.map((step, i) => (
                <li key={i} style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.8)" }}>
                  <strong style={{ color: "var(--green-accent)" }}>{step.name}</strong>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Main content */}
        {guide.content.map((section, i) => (
          <section key={i} style={{ marginBottom: 36 }}>
            {section.heading && (
              <h2 style={{ fontFamily: "var(--font-body)", fontSize: 22, marginBottom: 12, color: "var(--green-accent)", fontWeight: 500 }}>
                {section.heading}
              </h2>
            )}
            {section.paragraphs.map((p, j) => (
              <p key={j} style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 16 }}>
                {p}
              </p>
            ))}
          </section>
        ))}

        {/* HowTo detailed steps */}
        {guide.steps && (
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-body)", fontSize: 22, marginBottom: 24, color: "var(--green-accent)", fontWeight: 500 }}>
              Step-by-Step Guide
            </h2>
            {guide.steps.map((step, i) => (
              <div key={i} style={{ marginBottom: 24, paddingLeft: 20, borderLeft: "2px solid rgba(14, 138, 34, 0.3)" }}>
                <h3 style={{ fontFamily: "var(--font-body)", fontSize: 18, marginBottom: 8, fontWeight: 500 }}>
                  Step {i + 1}: {step.name}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.75)" }}>
                  {step.text}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* FAQ */}
        {guide.faqs && guide.faqs.length > 0 && (
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-body)", fontSize: 22, marginBottom: 24, fontWeight: 500 }}>
              Frequently Asked Questions
            </h2>
            {guide.faqs.map((faq, i) => (
              <div key={i} style={{ marginBottom: 24 }}>
                <h3 style={{ fontFamily: "var(--font-body)", fontSize: 17, marginBottom: 8, color: "var(--green-accent)", fontWeight: 500 }}>
                  {faq.q}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.75)" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* Related content */}
        {(relatedEpisode || relatedNewsletter) && (
          <section style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 16 }}>
            <h2 style={{ fontFamily: "var(--font-body)", fontSize: 20, marginBottom: 8, fontWeight: 500 }}>
              Related Content
            </h2>
            {relatedEpisode && (
              <Link href={`/podcast/${relatedEpisode.id}`} style={{ display: "block", padding: 20, borderRadius: 12, border: "1px solid rgba(14, 138, 34, 0.3)", background: "rgba(14, 138, 34, 0.05)", textDecoration: "none", color: "inherit" }}>
                <p style={{ fontSize: 12, fontFamily: "var(--font-body)", color: "var(--green-accent)", marginBottom: 4, letterSpacing: "0.05em", textTransform: "uppercase" }}>Podcast Episode</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 16 }}>{relatedEpisode.title}</p>
              </Link>
            )}
            {relatedNewsletter && (
              <Link href={`/newsletter/${relatedNewsletter.id}`} style={{ display: "block", padding: 20, borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)", textDecoration: "none", color: "inherit" }}>
                <p style={{ fontSize: 12, fontFamily: "var(--font-body)", color: "var(--green-accent)", marginBottom: 4, letterSpacing: "0.05em", textTransform: "uppercase" }}>Newsletter Article</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 16 }}>{relatedNewsletter.title}</p>
              </Link>
            )}
          </section>
        )}

        {/* CTA */}
        <section style={{ textAlign: "center", padding: "48px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.7)", marginBottom: 24 }}>
            Looking for an executive search partner who understands your industry?
          </p>
          <Link href="/contact" className="podcast-channel-link" style={{ textDecoration: "none" }}>
            Work with Mission One &rarr;
          </Link>
        </section>
      </article>
    </>
  );
}
