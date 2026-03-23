"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

const FEATURED_VIDEO = {
  id: "ICHhPrpEXd0",
  title: "Hiring the Right Product Leader Can Turn a Game Into a Billion-Dollar Franchise",
};

const episodes = [
  { id: "kELaDI6mbVw", title: "Negotiating Your Worth: The Executive Playbook for Compensation" },
  { id: "IJ0LWcyZhUQ", title: "Why Top Executives Turn Down Offers" },
  { id: "hZMJF46Qp-c", title: "The Biggest Executive Hiring Mistake is Letting Perfect Kill Good" },
  { id: "KlowD9sU8eA", title: "How to 10x Your Response Rate in Executive Hiring: The Russian Doll Method" },
  { id: "RbVVgAKFf2g", title: "The 7 Rules of Executive Hiring Every C-Suite Leader Learns Too Late" },
  { id: "TD56HErhA6Y", title: "The First Step Leaders Miss in Executive Hiring And Why It Derails Searches" },
  { id: "C7aWgPSjvP0", title: "Executive Career Acceleration: How Alexis Bonte Chooses Roles, Takes Smart Risks & Builds Momentum" },
  { id: "c-VRl8BQuXg", title: "From Sims to Wordle: Jonathan Knight (NYT Games) on Hiring Potential & Building Creative Cultures" },
  { id: "bhBenoO4JCo", title: "How to Run an Executive Job Search (Part 3)" },
  { id: "F4Fwdap5cu8", title: "How to Run an Executive Job Search (Part 2)" },
  { id: "zwHmZSkJ9qQ", title: "How to Run an Executive Job Search (Part 1)" },
  { id: "lS3EW2sMlmA", title: "Prepare for an Executive Interview" },
  { id: "C2OOTXG7QE4", title: "How to Move from VP to the C-Suite" },
  { id: "frw_H4hFLms", title: "Mission One: The Executive Edge - The Inside Track to C-Suite Success" },
];

export default function PodcastPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const videoStructuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": FEATURED_VIDEO.title,
    "description": "Conversations with the leaders shaping the future of games, tech, and entertainment. Hosted by Dan Hampton and Gerard Miles of Mission One.",
    "thumbnailUrl": `https://img.youtube.com/vi/${FEATURED_VIDEO.id}/maxresdefault.jpg`,
    "uploadDate": "2025-01-01",
    "embedUrl": `https://www.youtube.com/embed/${FEATURED_VIDEO.id}`,
    "publisher": {
      "@type": "Organization",
      "name": "Mission One",
      "url": "https://missionone.io"
    }
  };

  return (
    <>
      <Script
        id="video-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoStructuredData) }}
      />

      {/* NAV */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <Link href="/">
          <img src="/mission_one.png" alt="Mission One" className="nav-logo" />
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link" style={{ textDecoration: "none", color: "inherit" }}>Home</Link>
          <Link href="/podcast" className="nav-link" style={{ textDecoration: "none", color: "var(--green-accent)" }}>Podcast</Link>
          <Link href="/contact" className="nav-link" style={{ textDecoration: "none", color: "inherit" }}>Contact</Link>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link href="/" className="mobile-menu-link" style={{ textDecoration: "none", color: "inherit" }} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/podcast" className="mobile-menu-link" style={{ textDecoration: "none", color: "inherit" }} onClick={() => setMenuOpen(false)}>Podcast</Link>
        <Link href="/contact" className="mobile-menu-link" style={{ textDecoration: "none", color: "inherit" }} onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      {/* HEADER */}
      <section className="section section-dark" style={{ paddingTop: 180 }}>
        <div className="section-label">The Executive Edge</div>
        <h1 className="section-heading">
          The <em>Mission One</em> Podcast
        </h1>
        <p className="section-text" style={{ marginBottom: 24 }}>
          Welcome to Mission One: The Executive Edge, where executive recruiters Gerard Miles and Dan Hampton share the real story behind landing top jobs in tech, gaming, and entertainment.
        </p>
        <a href="https://www.youtube.com/@MissionOne-TheExecutiveEdge" target="_blank" rel="noopener noreferrer" className="podcast-channel-link">
          Subscribe on YouTube →
        </a>
      </section>

      {/* FEATURED */}
      <section className="section">
        <div className="podcast-featured-label">Featured Episode</div>
        <div className="podcast-embed" style={{ maxWidth: 720 }}>
          <iframe
            src={`https://www.youtube.com/embed/${FEATURED_VIDEO.id}`}
            title={FEATURED_VIDEO.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <h2 className="podcast-featured-title">{FEATURED_VIDEO.title}</h2>
      </section>

      {/* ALL EPISODES */}
      <section className="section section-dark">
        <div className="section-label">All Episodes</div>
        <h2 className="section-heading" style={{ marginBottom: 48 }}>
          Watch &amp; <em>Listen</em>
        </h2>
        <div className="podcast-grid">
          {episodes.map((ep) => (
            <a
              key={ep.id}
              href={`https://www.youtube.com/watch?v=${ep.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="podcast-card"
            >
              <div className="podcast-thumb-wrap">
                <img
                  src={`https://img.youtube.com/vi/${ep.id}/mqdefault.jpg`}
                  alt={ep.title}
                  className="podcast-thumb"
                />
                <div className="podcast-play-icon">▶</div>
              </div>
              <h3 className="podcast-card-title">{ep.title}</h3>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" role="contentinfo">
        <div>
          <img src="/mission_one.png" alt="Mission One" className="footer-logo" />
        </div>
        <div className="footer-links">
          <Link href="/" className="footer-link" style={{ textDecoration: "none", color: "inherit" }}>Home</Link>
          <Link href="/podcast" className="footer-link" style={{ textDecoration: "none", color: "inherit" }}>Podcast</Link>
          <Link href="/contact" className="footer-link" style={{ textDecoration: "none", color: "inherit" }}>Contact</Link>
        </div>
      </footer>
      <div className="footer-copy">
        © {new Date().getFullYear()} Mission One. All Rights Reserved.
      </div>
    </>
  );
}
