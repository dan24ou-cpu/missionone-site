import Link from "next/link";

export default function Footer() {
  return (
    <>
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
        &copy; {new Date().getFullYear()} Mission One. All Rights Reserved.
      </div>
    </>
  );
}
