export const PRIVACY_LINKS = [
  { href: "https://www.scopely.com/privacy", label: "Privacy Notice" },
  { href: "https://www.scopely.com/en/job-applicant-privacy-notice-for-ca-residents", label: "CA Job Applicant Privacy Notice" },
  { href: "https://www.scopely.com/en/eea-and-uk-job-applicant-privacy-notice", label: "EEA & UK Job Applicant Privacy Notice" },
];

export default function PrivacyLinks() {
  return (
    <nav className="footer-legal" aria-label="Privacy notices">
      {PRIVACY_LINKS.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
      ))}
    </nav>
  );
}
