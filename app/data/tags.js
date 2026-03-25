export const TAGS = {
  "gaming": {
    name: "Gaming Industry",
    description: "Executive hiring insights for the gaming industry — from mobile gaming product leaders to studio heads at AAA publishers. Mission One has placed leaders at Epic Games, Riot Games, Activision, King, Scopely, Savvy Games Group, and dozens more gaming companies worldwide.",
    relatedTags: ["product-leadership", "leadership"]
  },
  "hiring-process": {
    name: "Executive Hiring Process",
    description: "How to design and run an executive hiring process that actually works — from defining the business problem to structuring interviews, building scorecards, and closing top talent. Practical frameworks from Mission One's experience across 90+ senior leadership placements.",
    relatedTags: ["interviewing", "outreach", "stakeholder-alignment"]
  },
  "compensation": {
    name: "Executive Compensation",
    description: "Navigating executive compensation — from researching market value and structuring offers to negotiating packages and evaluating startup equity. Insights from both the candidate and hiring manager perspective.",
    relatedTags: ["career-growth", "job-search"]
  },
  "career-growth": {
    name: "Career Growth & Advancement",
    description: "Strategies for executive career acceleration — moving from VP to the C-suite, making bold career moves, choosing the right roles, and building momentum through smart risk-taking and continuous learning.",
    relatedTags: ["c-suite", "job-search", "leadership"]
  },
  "job-search": {
    name: "Executive Job Search",
    description: "A comprehensive guide to running an executive job search — from preparation and target-company mapping to networking, working with headhunters, and positioning your profile for maximum visibility.",
    relatedTags: ["networking", "career-growth"]
  },
  "c-suite": {
    name: "C-Suite Leadership",
    description: "What it takes to operate at the C-suite level — the shift from tactical to strategic leadership, developing gravitas, navigating board dynamics, and making high-stakes decisions with incomplete information.",
    relatedTags: ["career-growth", "leadership", "hiring-process"]
  },
  "leadership": {
    name: "Leadership & Management",
    description: "Leadership principles for senior executives — building high-performing cultures, communicating vision, developing teams, and the personal trade-offs of senior leadership that nobody talks about.",
    relatedTags: ["c-suite", "career-growth"]
  },
  "product-leadership": {
    name: "Product Leadership",
    description: "Hiring and developing product leaders in technology and gaming — identifying needle-movers, evaluating real impact, and understanding the unique demands of product leadership across different company stages and industries.",
    relatedTags: ["gaming", "hiring-process"]
  },
  "interviewing": {
    name: "Executive Interviewing",
    description: "Mastering the executive interview — from tailoring answers to different stakeholders and framing metrics with context to asking questions that differentiate you and using scorecards to keep evaluations objective.",
    relatedTags: ["hiring-process", "career-growth"]
  },
  "networking": {
    name: "Professional Networking",
    description: "Building and activating professional networks for executive career advancement — the four-channel networking strategy, working with headhunters, and staying visible in recruiter databases.",
    relatedTags: ["job-search", "career-growth"]
  },
  "outreach": {
    name: "Candidate Outreach & Sourcing",
    description: "How elite hiring teams approach research, target mapping, and outreach as a precision craft — including Mission One's signature Russian Doll Method for narrowing target lists and personalizing executive-level outreach.",
    relatedTags: ["hiring-process"]
  },
  "onboarding": {
    name: "Executive Onboarding",
    description: "The critical period between offer acceptance and day one — using the pre-start period for retention, conducting references that strengthen rather than undermine the relationship, and setting new executives up for success.",
    relatedTags: ["hiring-process"]
  },
  "stakeholder-alignment": {
    name: "Stakeholder Alignment",
    description: "Aligning stakeholders before and during an executive search — preventing hidden vetoes, managing sensitive dynamics with subordinates and peers, and building consensus on role scope and success metrics.",
    relatedTags: ["hiring-process", "c-suite"]
  }
};

export function getTagBySlug(slug) {
  return TAGS[slug] || null;
}

export function getAllTagSlugs() {
  return Object.keys(TAGS);
}
