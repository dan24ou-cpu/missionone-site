"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav({ activePage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/podcast", label: "Podcast" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <Link href="/">
          <img src="/mission_one.png" alt="Mission One" className="nav-logo" />
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              style={{
                textDecoration: "none",
                color: activePage === link.href ? "var(--green-accent)" : "inherit",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="mobile-menu-link"
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
