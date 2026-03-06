"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xyknyprb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  return (
    <div className="contact-page">
      <nav className="nav" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,10,10,0.95)", backdropFilter: "blur(12px)", padding: "0 48px", height: 80, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <img src="https://missionone.io/wp-content/uploads/2023/05/mission-one-logo-large.png" alt="Mission One" style={{ height: 72, filter: "brightness(0.5) sepia(1) hue-rotate(85deg) saturate(4) brightness(0.75)", cursor: "pointer" }} />
        </Link>
        <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
          <Link href="/" className="contact-nav-link">Home</Link>
          <Link href="/contact" className="contact-nav-link active">Contact</Link>
        </div>
      </nav>

      <main className="contact-main">
        <div className="contact-container">
          <div className="contact-intro">
            <div className="contact-label">Get in Touch</div>
            <h1 className="contact-heading">
              Work with <em>Mission One</em>
            </h1>
            <p className="contact-text">
              If you&apos;re a founder or executive looking for a partner to help you hire exceptional talent, we&apos;d love to hear from you. Send us your details and we&apos;ll respond within 24 hours.
            </p>
            <div className="contact-email-block">
              <div className="contact-email-label">Email us directly</div>
              <a href="mailto:dan@missionone.io" className="contact-email-link">dan@missionone.io</a>
              <br />
              <a href="mailto:gerard@missionone.io" className="contact-email-link">gerard@missionone.io</a>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">✓</div>
                <h2>Thank you!</h2>
                <p>Your message has been received. We&apos;ll get back to you within 24 hours.</p>
                <Link href="/" className="contact-back-link">← Back to home</Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <input type="hidden" name="_cc" value="gerard@missionone.io" />
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input type="text" name="name" required className="form-input" placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company *</label>
                    <input type="text" name="company" required className="form-input" placeholder="Company name" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input type="email" name="email" required className="form-input" placeholder="you@company.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input type="tel" name="phone" className="form-input" placeholder="Optional" />
                  </div>
                </div>
                <div className="form-group full">
                  <label className="form-label">How did you hear about us?</label>
                  <select name="source" className="form-input form-select">
                    <option value="">Select one...</option>
                    <option value="referral">Referral</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="podcast">Podcast</option>
                    <option value="search">Google / Search</option>
                    <option value="ai">AI Assistant (ChatGPT, Claude, etc.)</option>
                    <option value="previous-client">Previously a client</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label className="form-label">How can we help? *</label>
                  <textarea name="message" required className="form-input form-textarea" rows={5} placeholder="Tell us about the role you're looking to fill, your company stage, and any other details..." />
                </div>
                <button type="submit" className="form-submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <footer className="contact-footer">
        <p>© {new Date().getFullYear()} Mission One. All rights reserved.</p>
      </footer>

      <style jsx>{`
        .contact-page {
          min-height: 100vh;
          background: #0a0a0a;
          color: #e8e8e8;
          font-family: 'DM Sans', sans-serif;
          color-scheme: dark;
          display: flex;
          flex-direction: column;
        }
        .contact-nav-link, .contact-nav-link:visited {
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          transition: color 0.3s;
        }
        .contact-nav-link:hover, .contact-nav-link.active, .contact-nav-link.active:visited {
          color: #0E8A22;
        }
        .contact-main {
          padding: 160px 48px 80px;
          max-width: 1100px;
          margin: 0 auto;
          flex: 1;
          width: 100%;
          box-sizing: border-box;
        }
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: start;
        }
        .contact-label {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #0E8A22;
          margin-bottom: 24px;
        }
        .contact-heading {
          font-size: 42px;
          font-weight: 300;
          line-height: 1.2;
          margin: 0 0 24px;
          color: #fff;
        }
        .contact-heading em {
          color: #0E8A22;
          font-style: normal;
        }
        .contact-text {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255,255,255,0.6);
          margin-bottom: 48px;
        }
        .contact-email-block {
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .contact-email-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.4);
          margin-bottom: 8px;
        }
        .contact-email-link {
          color: #0E8A22;
          text-decoration: none;
          font-size: 18px;
          font-weight: 500;
          transition: opacity 0.3s;
        }
        .contact-email-link:hover { opacity: 0.7; }
        .contact-form-wrap {
          background: #111111;
          border-radius: 12px;
          padding: 48px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .form-group.full { width: 100%; }
        .form-label {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: rgba(255,255,255,0.5);
          font-weight: 500;
        }
        .form-input {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 6px;
          padding: 14px 16px;
          color: #fff;
          font-size: 15px;
          font-family: 'DM Sans', sans-serif;
          transition: border-color 0.3s;
          outline: none;
          width: 100%;
          box-sizing: border-box;
        }
        .form-input::placeholder { color: rgba(255,255,255,0.25); }
        .form-input:focus { border-color: #0E8A22; }
        .form-select {
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
          background-color: rgba(255,255,255,0.04);
          color: #fff;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 40px;
        }
        .form-select option { background-color: #1a1a1a; color: #e8e8e8; }
        .form-textarea { resize: vertical; min-height: 120px; }
        .form-submit {
          background: #0E8A22;
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 16px 32px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          transition: opacity 0.3s;
          font-family: 'DM Sans', sans-serif;
          align-self: flex-start;
        }
        .form-submit:hover { opacity: 0.85; }
        .form-submit:disabled { opacity: 0.5; cursor: not-allowed; }
        .contact-success {
          text-align: center;
          padding: 40px 20px;
        }
        .contact-success-icon {
          width: 64px; height: 64px;
          border-radius: 50%;
          background: rgba(14,138,34,0.15);
          color: #0E8A22;
          font-size: 28px;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 24px;
        }
        .contact-success h2 {
          font-size: 28px; font-weight: 400; color: #fff; margin: 0 0 12px;
        }
        .contact-success p {
          color: rgba(255,255,255,0.6); font-size: 16px; margin: 0 0 32px;
        }
        .contact-back-link {
          color: #0E8A22;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .contact-footer {
          padding: 40px 48px;
          border-top: 1px solid rgba(255,255,255,0.06);
          text-align: center;
          width: 100%;
          margin-top: auto;
        }
        .contact-footer p {
          color: rgba(255,255,255,0.3);
          font-size: 13px;
          margin: 0;
        }
        @media (max-width: 768px) {
          .contact-main { padding: 120px 20px 60px; }
          .contact-container { grid-template-columns: 1fr; gap: 48px; }
          .form-row { grid-template-columns: 1fr; }
          .contact-form-wrap { padding: 28px; }
          .contact-heading { font-size: 32px; }
        }
      `}</style>
    </div>
  );
}
