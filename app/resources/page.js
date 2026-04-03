import Link from "next/link";
import { guides } from "../data/guides";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Resources | Mission One",
  description: "Expert guides on executive hiring, career development, and leadership from Mission One. Browse how-to guides, role-specific search insights, and sector expertise.",
  openGraph: {
    title: "Resources | Mission One",
    description: "Expert guides on executive hiring, career development, and leadership from Mission One.",
    url: "https://missionone.io/resources",
  },
  alternates: {
    canonical: "https://missionone.io/resources",
  },
};

export default function ResourcesPage() {
  const howtoGuides = guides.filter((g) => g.type === "howto");
  const roleGuides = guides.filter((g) => g.type === "role");
  const sectorGuides = guides.filter((g) => g.type === "sector");

  const GuideCard = ({ guide }) => (
    <Link
      href={`/insights/${guide.id}`}
      style={{
        display: "block",
        padding: 24,
        borderRadius: 12,
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.02)",
        textDecoration: "none",
        color: "inherit",
        transition: "border-color 0.2s",
      }}
      className="topic-card-link"
    >
      <h3 style={{ fontFamily: "var(--font-body)", fontSize: 18, marginBottom: 8, fontWeight: 400 }}>
        {guide.title}
      </h3>
      <p className="section-text" style={{ fontSize: 14, lineHeight: 1.6 }}>
        {guide.summary.substring(0, 160)}...
      </p>
      <span style={{ color: "var(--green-accent)", fontSize: 13, marginTop: 12, display: "inline-block", fontFamily: "var(--font-body)" }}>
        Read more &rarr;
      </span>
    </Link>
  );

  return (
    <>
      <Nav activePage="/resources" />

      <section className="section section-dark" style={{ paddingTop: 180 }}>
        <div className="section-label">Resources</div>
        <h1 className="section-heading">
          Expert <em>Guides</em>
        </h1>
        <p className="section-text" style={{ maxWidth: 640, marginBottom: 48 }}>
          Insights on executive hiring, career development, and leadership from Mission One.
        </p>
      </section>

      {/* HOW-TO GUIDES */}
      <section className="section">
        <h2 style={{ fontFamily: "var(--font-body)", fontSize: 24, marginBottom: 32, fontWeight: 400 }}>
          How-To Guides
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20, maxWidth: 960 }}>
          {howtoGuides.map((g) => <GuideCard key={g.id} guide={g} />)}
        </div>
      </section>

      {/* ROLE PAGES */}
      <section className="section section-dark">
        <h2 style={{ fontFamily: "var(--font-body)", fontSize: 24, marginBottom: 32, fontWeight: 400 }}>
          Executive Search by Role
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20, maxWidth: 960 }}>
          {roleGuides.map((g) => <GuideCard key={g.id} guide={g} />)}
        </div>
      </section>

      {/* SECTOR PAGES */}
      <section className="section">
        <h2 style={{ fontFamily: "var(--font-body)", fontSize: 24, marginBottom: 32, fontWeight: 400 }}>
          Executive Search by Sector
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20, maxWidth: 960 }}>
          {sectorGuides.map((g) => <GuideCard key={g.id} guide={g} />)}
        </div>
      </section>

      <Footer />
    </>
  );
}
