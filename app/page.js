'use client';

import { useState, useEffect, useRef } from "react";

function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsInView(true); obs.unobserve(el); }
    }, { threshold: 0.15, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, isInView];
}

function AnimateIn({ children, delay = 0, className = "" }) {
  const [ref, isInView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const testimonials = [
  { quote: "I can count on one hand the best executive search partners I've had the opportunity to work with and Gerard and Dan represent two of the best in the industry. They build instant credibility with business leaders.", author: "Eve Nam", title: "SVP Talent, Scopely" },
  { quote: "Gerard and Dan have been an excellent resource to source talent that is a genuine fit for our needs. Their professionalism, and ability to understand the needs of the client, is unique in the space.", author: "Josh Taub", title: "COO, Activision" },
  { quote: "I couldn't be happier with the results. From the moment we engaged with them, they were professional, responsive, and highly effective at identifying top talent in our industry. Gerard's Mobile Gaming industry knowledge was also remarkable.", author: "Joaquim Campa", title: "Chief People Officer, Socialpoint" },
  { quote: "Mission One has proven, from the very beginning, to be thoughtful and helpful partners who clearly know the Gaming sector exceptionally well and have strong connections. The team is truly a long-term partner for us.", author: "Sam Wholley", title: "Talent Partner, Lightspeed Venture Partners" },
  { quote: "Gerard and Dan recently played a pivotal role in our organization in the hiring of a key position. Mission One stood out as a true collaborator, surpassing our expectations and delivering unmatched value.", author: "Junaili Lie", title: "Co-Founder & CEO, AccelByte" },
  { quote: "Mission One delivered an outstanding global CPTO search, helping us successfully hire a top-tier leader with highly specific credentials. Their expertise in software leadership and rigorous vetting process made them a valuable partner in securing the right talent.", author: "Shawn Boom", title: "CEO, Labster, backed by a16z" },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % Math.ceil(testimonials.length / 2));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAV */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <img
          src="/mission_one.png"
          alt="Mission One — Executive Search for Games, Entertainment, and Technology"
          className="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
        <div className="nav-links">
          <button className="nav-link" onClick={() => scrollTo("clients")}>Clients</button>
          <button className="nav-link" onClick={() => scrollTo("podcast")}>Podcast</button>
          <button className="nav-link" onClick={() => scrollTo("team")}>Team</button>
          <a href="/contact" className="nav-link" style={{ textDecoration: "none", color: "inherit" }}>Contact</a>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="mobile-menu-link" onClick={() => scrollTo("clients")}>Clients</button>
        <button className="mobile-menu-link" onClick={() => scrollTo("podcast")}>Podcast</button>
        <button className="mobile-menu-link" onClick={() => scrollTo("team")}>Team</button>
        <a href="/contact" className="mobile-menu-link" style={{ textDecoration: "none", color: "inherit" }}>Contact</a>
      </div>

      {/* HERO */}
      <header className="hero" role="banner">
        <AnimateIn>
          <div className="hero-eyebrow">
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <span className="pulse-dot" /> Executive Search
            </span>
          </div>
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <h1 className="hero-title">
            We work with people<br />who have <em>big dreams</em><br />and the drive to make<br />them a reality.
          </h1>
        </AnimateIn>
        <AnimateIn delay={0.3}>
          <div className="hero-line" />
        </AnimateIn>
        <AnimateIn delay={0.4}>
          <p className="hero-sub">
            Mission One is an executive search firm for critical leadership hires at the world&apos;s most innovative companies. We leverage a deep international network, refined search playbook, and partner-led approach to help you make the hires that matter most.
          </p>
        </AnimateIn>
        
      </header>

        {/* CLIENTS */}
      <section className="section" id="clients" aria-label="Our Clients">
        <AnimateIn>
          <div className="section-label">Our Clients</div>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="section-heading">
            Trusted by the world&apos;s most<br /><em>innovative companies</em>
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <div className="clients-grid" role="list" aria-label="Client companies">
            {[
              { src: "/logos/scopely.png", alt: "Scopely" },
              { src: "/logos/epic-games.png", alt: "Epic Games" },
              { src: "/logos/riot-games.png", alt: "Riot Games" },
              { src: "/logos/activision.png", alt: "Activision" },
              { src: "/logos/socialpoint.png", alt: "Socialpoint" },
              { src: "/logos/spotify.png", alt: "Spotify" },
              { src: "/logos/king.png", alt: "King" },
              { src: "/logos/mistplay.png", alt: "Mistplay" },
              { src: "/logos/playq.png", alt: "PlayQ" },
              { src: "/logos/savvy-games.png", alt: "Savvy Games Group" },
              { src: "/logos/metamoki.png", alt: "Metamoki" },
              { src: "/logos/fightcamp.png", alt: "FightCamp" },
              { src: "/logos/labster.png", alt: "Labster" },
              { src: "/logos/koho.png", alt: "KOHO" },
              { src: "/logos/shutterstock.png", alt: "Shutterstock" },
              { src: "/logos/mejuri.png", alt: "Mejuri" },
              { src: "/logos/borrowell.png", alt: "Borrowell" },
              { src: "/logos/american-express.png", alt: "American Express" },
              { src: "/logos/sweatcoin.png", alt: "Sweatcoin" },
              { src: "/logos/justplay.png", alt: "JustPlay" },
              { src: "/logos/bossa-games.png", alt: "Bossa Games" },
              { src: "/logos/stillfront.png", alt: "Stillfront" },
              { src: "/logos/simplebet.png", alt: "Simplebet" },
              { src: "/logos/telesign.png", alt: "TeleSign" },
              { src: "/logos/storyblocks.png", alt: "Storyblocks" },
              { src: "/logos/a-cloud-guru.png", alt: "A Cloud Guru" },
              { src: "/logos/theboardlist.png", alt: "The Boardlist" },
              { src: "/logos/pocketfm.png", alt: "Pocket FM" },
              { src: "/logos/tolan.png", alt: "Tolan" },
              { src: "/logos/wealthsimple.png", alt: "Wealthsimple" },
              { src: "/logos/a16z.png", alt: "a16z" },
              { src: "/logos/makers-fund.png", alt: "Makers Fund" },
              { src: "/logos/index-ventures.png", alt: "Index Ventures" },
              { src: "/logos/lightspeed.png", alt: "Lightspeed" },
              { src: "/logos/goodwater.png", alt: "Goodwater Capital" },
            ].map((logo) => (
              <div key={logo.alt} className="client-cell" role="listitem">
                <img src={logo.src} alt={logo.alt} className="client-logo" />
              </div>
            ))}
          </div>
        </AnimateIn>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section-dark" id="testimonials" aria-label="Client Testimonials">
        <AnimateIn>
          <div className="section-label">Testimonials</div>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="section-heading">What our <em>clients say</em></h2>
        </AnimateIn>
        <div className="testimonials-grid">
          {[0, 1].map((offset) => {
            const idx = (activeTestimonial * 2 + offset) % testimonials.length;
            return (
              <div className="testimonial-card" key={`${activeTestimonial}-${offset}`}>
                <div className="testimonial-card-quote">
                  {testimonials[idx].quote}
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-author-line" />
                  <div>
                    <div className="testimonial-author-name">{testimonials[idx].author}</div>
                    <div className="testimonial-author-title">{testimonials[idx].title}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="testimonial-nav" aria-label="Select testimonial pair">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot ${i === activeTestimonial ? "active" : ""}`}
              onClick={() => setActiveTestimonial(i)}
              aria-label={`Testimonials ${i * 2 + 1}-${i * 2 + 2}`}
            />
          ))}
        </div>
      </section>

      {/* PODCAST */}
      <section className="section section-dark" id="podcast" aria-label="Podcast">
        <AnimateIn>
          <div className="section-label">Podcast</div>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="section-heading">
            The <em>Mission One</em> Podcast
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="section-text" style={{ maxWidth: 640, marginBottom: 48 }}>
            Conversations with the leaders shaping the future of games, tech, and entertainment.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.3}>
          <div className="podcast-embed">
            <iframe
              src="https://www.youtube.com/embed/frw_H4hFLms"
              title="Mission One Podcast"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </AnimateIn>
        <AnimateIn delay={0.4}>
          <a href="https://www.youtube.com/@MissionOne-TheExecutiveEdge" target="_blank" rel="noopener noreferrer" className="podcast-channel-link">
            View all episodes →
          </a>
        </AnimateIn>
      </section>

      {/* TEAM */}
      <section className="section" id="team" aria-label="Our Team">
        <AnimateIn>
          <div className="section-label">The Team</div>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="section-heading">
            Partner-led.<br /><em>Personally invested.</em>
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <p className="section-text">
            You can expect one of our partners to lead your search and stay deeply invested throughout.
          </p>
        </AnimateIn>
        <div className="team-grid">
          <AnimateIn>
            <div className="team-card">
              <h3 className="team-name">Dan Hampton</h3>
              <div className="team-role">Co-Founder</div>
              <p className="team-bio">
                Dan co-founded Mission One with over 15 years of recruiting experience. He has helped many innovative tech companies such as Scopely, Portola AI, Mistplay, Activision, Labster, and Mejuri to hire key leaders across Product, Engineering, Marketing, and CEO from Seed stage to Public. A former US Air Force Captain, Dan served as an Active Duty officer in the military for six years. He holds degrees from the University of Southern California and the University of Oklahoma.
              </p>
              <a href="https://www.linkedin.com/in/dan-hampton-41614019" target="_blank" rel="noopener noreferrer" className="team-link">
                Connect on LinkedIn →
              </a>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <div className="team-card">
              <h3 className="team-name">Gerard Miles</h3>
              <div className="team-role">Co-Founder</div>
              <p className="team-bio">
                Gerard has led on some of the top CEO, Product and Engineering searches in the world of computer games. His work with companies such as Scopely, Activision, Savvy Games, King and Epic Games has cemented his global reputation for excellence in identifying and placing exceptional leaders. He is also an active investor across AI &amp; Games technology, having been an early backer of UK AI decacorn, ElevenLabs. Gerard read Theology at Oxford University before training for the Bar at Nottingham Law School.
              </p>
              <a href="https://uk.linkedin.com/in/gerard-miles" target="_blank" rel="noopener noreferrer" className="team-link">
                Connect on LinkedIn →
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" role="contentinfo">
        <div>
          <img
            src="/mission_one.png"
            alt="Mission One"
            className="footer-logo"
          />
        </div>
        <div className="footer-links">
          <button className="footer-link" onClick={() => scrollTo("clients")}>Clients</button>
          <button className="footer-link" onClick={() => scrollTo("podcast")}>Podcast</button>
          <button className="footer-link" onClick={() => scrollTo("team")}>Team</button>
          <a href="/contact" className="footer-link" style={{ textDecoration: "none", color: "inherit" }}>Contact</a>
        </div>
      </footer>
      <div className="footer-copy">
        © {new Date().getFullYear()} Mission One. All Rights Reserved.
      </div>
    </>
  );
}

