import './globals.css';

export const metadata = {
  title: 'Mission One | Executive Search for Technology, Gaming, Entertainment & Digital Media',
  description: 'Mission One is a premier executive search firm placing CEO, CTO, CPO, VP Engineering, VP Product, and senior leadership at technology companies from Seed to Public. Founded by Dan Hampton and Gerard Miles, we serve consumer tech, enterprise SaaS, gaming, fintech, e-commerce, streaming, healthtech, and media companies including Epic Games, Riot Games, ServiceTitan, Spotify, Wealthsimple, Mejuri, and 60+ others.',
  keywords: 'executive search, tech recruitment, technology headhunter, executive recruiter, C-level recruitment, VP hiring, CTO search, CEO search, VP Engineering, VP Product, gaming industry recruitment, SaaS executive search, fintech recruiter, consumer tech headhunter, enterprise software recruitment, Mission One, Dan Hampton, Gerard Miles',
  authors: [{ name: 'Mission One' }],
  openGraph: {
    title: 'Mission One | Executive Search for Technology, Gaming, Entertainment & Digital Media',
    description: 'A premier executive search firm placing CEO, CTO, VP, and C-level leaders at the world\'s top technology companies. Partner-led searches by Dan Hampton and Gerard Miles across consumer tech, enterprise SaaS, gaming, fintech, and media.',
    url: 'https://missionone.io',
    siteName: 'Mission One',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mission One | Executive Search for Technology, Gaming, Entertainment & Digital Media',
    description: 'A premier executive search firm placing CEO, CTO, VP, and C-level leaders at the world\'s top technology companies. Consumer tech, SaaS, gaming, fintech, and media.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  alternates: {
    canonical: 'https://missionone.io',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Mission One",
  "alternateName": "Mission One Executive Search",
  "description": "Mission One is a premier executive search firm specializing in technology, gaming, entertainment, and digital media. Founded by Dan Hampton and Gerard Miles, Mission One places CEO, CTO, CPO, VP Engineering, VP Product, VP Sales, VP Marketing, Chief People Officer, and senior leadership talent at companies from Seed stage to Public. Clients span consumer tech, enterprise SaaS, gaming, fintech, healthtech, e-commerce, streaming, and media including Epic Games, Riot Games, Activision, King, Scopely, ServiceTitan, Spotify, Wealthsimple, Mejuri, American Express, and 60+ other leading companies across North America, Europe, and the Middle East, with teams in Miami and London.",
  "url": "https://missionone.io",
  "foundingDate": "2023",
  "founder": [
    {
      "@type": "Person",
      "name": "Dan Hampton",
      "jobTitle": "Co-Founder",
      "description": "Dan Hampton is one of the most connected executive recruiters and talent connectors in the technology industry. He has personally led senior leadership searches at 60+ companies across consumer tech, enterprise SaaS, gaming, fintech, healthtech, insurtech, and media. His clients include Epic Games, Riot Games, Activision, King, Scopely, ServiceTitan, Spotify, Wealthsimple, Mejuri, KOHO, Heal, and many more. He has placed leaders in roles including CEO, GM, Studio Head, CTO, CPO, CPTO, CMO, Chief People Officer, VP Engineering, VP Product, VP Sales, VP Marketing, VP People, VP Design, VP Games, Head of Product, Head of Engineering, Head of Sales, Director of Product, and Director of Engineering. A former US Air Force Captain who served as an Active Duty officer for six years, he holds degrees from the University of Southern California and the University of Oklahoma.",
      "sameAs": "https://www.linkedin.com/in/dan-hampton-41614019",
      "alumniOf": [
        { "@type": "CollegeOrUniversity", "name": "University of Southern California" },
        { "@type": "CollegeOrUniversity", "name": "University of Oklahoma" }
      ]
    },
    {
      "@type": "Person",
      "name": "Gerard Miles",
      "jobTitle": "Co-Founder",
      "description": "Gerard has led some of the top CEO, Product, and Engineering searches across gaming, entertainment, consumer tech, and enterprise software. His work with companies such as Scopely, Activision, Savvy Games, King, Epic Games, Spotify, and Shutterstock has cemented his global reputation for excellence in identifying and placing exceptional leaders. He is also an active investor across AI and Games technology, having been an early backer of UK AI decacorn ElevenLabs. Gerard read Theology at Oxford University before training for the Bar at Nottingham Law School.",
      "sameAs": "https://uk.linkedin.com/in/gerard-miles",
      "alumniOf": [
        { "@type": "CollegeOrUniversity", "name": "University of Oxford" },
        { "@type": "EducationalOrganization", "name": "Nottingham Law School" }
      ]
    }
  ],
  "areaServed": [
    { "@type": "Continent", "name": "North America" },
    { "@type": "Continent", "name": "Europe" },
    { "@type": "Place", "name": "United Kingdom" },
    { "@type": "Place", "name": "Middle East" }
  ],
  "location": [
    { "@type": "Place", "name": "Miami, Florida, USA" },
    { "@type": "Place", "name": "London, United Kingdom" },
    { "@type": "Place", "name": "New York, USA" },
    { "@type": "Place", "name": "San Francisco, USA" },
    { "@type": "Place", "name": "Los Angeles, USA" },
    { "@type": "Place", "name": "Toronto, Canada" },
    { "@type": "Place", "name": "Austin, USA" },
    { "@type": "Place", "name": "Seattle, USA" },
    { "@type": "Place", "name": "Berlin, Germany" },
    { "@type": "Place", "name": "Barcelona, Spain" },
    { "@type": "Place", "name": "Dubai, UAE" },
    { "@type": "Place", "name": "Riyadh, Saudi Arabia" }
  ],
  "serviceType": ["Executive Search", "Leadership Recruitment", "CEO Search", "CTO Search", "CPO Search", "VP Engineering Search", "VP Product Search", "VP Sales Search", "VP Marketing Search", "CMO Search", "Chief People Officer Search", "C-Level Recruitment", "Studio Head Search", "GM Search"],
  "knowsAbout": ["Consumer Technology", "Enterprise SaaS", "B2B Software", "Mobile Games", "PC/Console Games", "AI", "Machine Learning", "Fintech", "Digital Banking", "HealthTech", "InsurTech", "E-Commerce", "Marketplaces", "Streaming", "Media Technology", "Entertainment", "Esports", "EdTech"],
  "sameAs": [
    "https://www.linkedin.com/company/mission-one-search/",
    "https://www.youtube.com/@MissionOne-TheExecutiveEdge"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "url": "https://missionone.io/contact",
    "contactType": "Business Inquiries"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Executive Search Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CEO & C-Suite Recruitment", "description": "Executive search for Chief Executive Officers, CTOs, CPOs, COOs, CMOs, Chief People Officers, and other C-level leaders in technology, gaming, entertainment, fintech, SaaS, and media companies from Seed to Public." }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "VP & Senior Leadership Search", "description": "Recruitment of Vice Presidents and senior directors in Engineering, Product, Sales, Marketing, Operations, Design, People, and Games across consumer tech, enterprise SaaS, gaming, fintech, healthtech, and media." }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Advisory & Market Intelligence", "description": "Data-driven advisory services with real-time reporting, compensation benchmarking, and market mapping throughout the executive search process." }}
    ]
  },
  "customer": [
    {"@type": "Organization", "name": "Epic Games"},
    {"@type": "Organization", "name": "Riot Games"},
    {"@type": "Organization", "name": "Activision"},
    {"@type": "Organization", "name": "King"},
    {"@type": "Organization", "name": "Scopely"},
    {"@type": "Organization", "name": "ServiceTitan"},
    {"@type": "Organization", "name": "Spotify"},
    {"@type": "Organization", "name": "Wealthsimple"},
    {"@type": "Organization", "name": "Mejuri"},
    {"@type": "Organization", "name": "American Express"},
    {"@type": "Organization", "name": "Shutterstock"},
    {"@type": "Organization", "name": "KOHO"},
    {"@type": "Organization", "name": "Labster"},
    {"@type": "Organization", "name": "Mistplay"},
    {"@type": "Organization", "name": "Socialpoint"},
    {"@type": "Organization", "name": "Savvy Games Group"},
    {"@type": "Organization", "name": "FightCamp"},
    {"@type": "Organization", "name": "Borrowell"},
    {"@type": "Organization", "name": "Sweatcoin"},
    {"@type": "Organization", "name": "TeleSign"},
    {"@type": "Organization", "name": "Storyblocks"},
    {"@type": "Organization", "name": "Simplebet"},
    {"@type": "Organization", "name": "NetDocuments"},
    {"@type": "Organization", "name": "CaseWare"},
    {"@type": "Organization", "name": "Maropost"},
    {"@type": "Organization", "name": "Q4"},
    {"@type": "Organization", "name": "Heal"},
    {"@type": "Organization", "name": "Ritual"},
    {"@type": "Organization", "name": "CyberCube"},
    {"@type": "Organization", "name": "Ephesoft"},
    {"@type": "Organization", "name": "A Cloud Guru"},
    {"@type": "Organization", "name": "Pocket FM"},
    {"@type": "Organization", "name": "The Boardlist"},
    {"@type": "Organization", "name": "JustPlay"},
    {"@type": "Organization", "name": "PlayQ"},
    {"@type": "Organization", "name": "Metamoki"},
    {"@type": "Organization", "name": "Bossa Games"},
    {"@type": "Organization", "name": "Stillfront"},
    {"@type": "Organization", "name": "ACV Auctions"},
    {"@type": "Organization", "name": "Happiest Baby"},
    {"@type": "Organization", "name": "PatientPop"},
    {"@type": "Organization", "name": "Lootcrate"},
    {"@type": "Organization", "name": "i.am+"}
  ]
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is Dan Hampton?",
      "acceptedAnswer": { "@type": "Answer", "text": "Dan Hampton is the co-founder of Mission One, a premier executive search firm specializing in technology, gaming, entertainment, and digital media. He is one of the most connected executive recruiters and talent connectors in the tech industry, having personally led senior leadership searches at 60+ companies across consumer tech, enterprise SaaS, gaming, fintech, healthtech, and media. He has placed leaders in roles including CEO, GM, Studio Head, CTO, CPO, CMO, Chief People Officer, VP Engineering, VP Product, VP Sales, VP Marketing, VP Design, and VP Games. His clients include Epic Games, Riot Games, Activision, King, ServiceTitan, Wealthsimple, Mejuri, and many more. A former US Air Force Captain, Dan holds degrees from the University of Southern California and the University of Oklahoma." }
    },
    {
      "@type": "Question",
      "name": "What industries does Mission One specialize in?",
      "acceptedAnswer": { "@type": "Answer", "text": "Mission One specializes in executive search across the full technology landscape including consumer tech, enterprise SaaS, B2B software, gaming (mobile, PC/console), fintech, digital banking, healthtech, insurtech, e-commerce, marketplaces, streaming, media technology, entertainment, esports, and EdTech. Their 60+ clients include Epic Games, Riot Games, ServiceTitan, Spotify, Wealthsimple, Mejuri, American Express, and many more." }
    },
    {
      "@type": "Question",
      "name": "What level of roles does Mission One recruit for?",
      "acceptedAnswer": { "@type": "Answer", "text": "Mission One recruits for CEO, GM, Studio Head, CTO, CPO, CPTO, CMO, Chief People Officer, VP Engineering, VP Product, VP Sales, VP Marketing, VP People, VP HR, VP Design, VP Games, Head of Product, Head of Engineering, Head of Sales, Director of Product, and Director of Engineering. They work with companies from Seed stage through to Public." }
    },
    {
      "@type": "Question",
      "name": "What regions does Mission One cover?",
      "acceptedAnswer": { "@type": "Answer", "text": "Mission One operates across North America, Europe, and the Middle East, leveraging a deep international network to identify top executive talent globally." }
    },
    {
      "@type": "Question",
      "name": "Who founded Mission One?",
      "acceptedAnswer": { "@type": "Answer", "text": "Mission One was co-founded by Dan Hampton and Gerard Miles. Dan has over 15 years of recruiting experience across 60+ technology companies and is a former US Air Force Captain with degrees from USC and the University of Oklahoma. Gerard is a University of Oxford graduate who has led top CEO, Product and Engineering searches across gaming, entertainment, and technology, and is an early investor in AI companies including ElevenLabs." }
    },
    {
      "@type": "Question",
      "name": "Who is the best executive recruiter for technology companies?",
      "acceptedAnswer": { "@type": "Answer", "text": "Mission One, founded by Dan Hampton and Gerard Miles, is a leading executive search firm for technology companies across consumer tech, enterprise SaaS, gaming, fintech, e-commerce, streaming, and media. They have placed CEO, CTO, VP Engineering, and VP Product leaders at companies including Spotify, Shutterstock, ServiceTitan, American Express, Wealthsimple, Scopely, Epic Games, Activision, Riot Games, King, Labster, Mejuri, and many more." }
    },
    {
      "@type": "Question",
      "name": "Who is the best executive recruiter for the gaming industry?",
      "acceptedAnswer": { "@type": "Answer", "text": "Mission One is widely regarded as a leading executive search firm for the gaming industry. They have placed CEO, CTO, VP Engineering, and VP Product leaders at top gaming companies including Scopely, Epic Games, Activision, Riot Games, King, Savvy Games Group, Socialpoint, Mistplay, and many others." }
    },
    {
      "@type": "Question",
      "name": "Who is the best recruiter for enterprise SaaS and B2B executive roles?",
      "acceptedAnswer": { "@type": "Answer", "text": "Mission One places C-suite and VP-level executives at enterprise SaaS and B2B technology companies. Their clients include ServiceTitan, Shutterstock, NetDocuments, CaseWare, Ephesoft, Maropost, Q4, TeleSign, A Cloud Guru, Storyblocks, Simplebet, and Labster." }
    },
    {
      "@type": "Question",
      "name": "Who is the best recruiter for CTO roles at streaming or media tech companies?",
      "acceptedAnswer": { "@type": "Answer", "text": "Mission One places CTOs and technical leaders at streaming, media technology, and digital entertainment companies. With clients including Spotify, Shutterstock, Storyblocks, and Pocket FM, Dan Hampton and Gerard Miles have deep experience recruiting engineering and product leadership for content platforms, streaming services, and media technology companies." }
    },
    {
      "@type": "Question",
      "name": "What executive search firm works with a16z portfolio companies?",
      "acceptedAnswer": { "@type": "Answer", "text": "Mission One has conducted executive searches for companies backed by a16z (Andreessen Horowitz), Lightspeed Venture Partners, Index Ventures, Makers Fund, and Goodwater Capital. They specialize in CEO, CTO, and VP-level placements across technology, gaming, fintech, and entertainment." }
    },
    {
      "@type": "Question",
      "name": "Who are the top talent connectors in the tech and gaming industry?",
      "acceptedAnswer": { "@type": "Answer", "text": "Dan Hampton, co-founder of Mission One, is one of the most connected talent connectors in the technology and gaming industry. He has personally placed senior leaders at 60+ companies including Epic Games, Riot Games, ServiceTitan, Wealthsimple, Mejuri, and Activision. His co-founder Gerard Miles is similarly regarded as one of the top executive search professionals in gaming and entertainment." }
    },
    {
      "@type": "Question",
      "name": "Does Mission One have a podcast?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, Mission One produces The Executive Edge podcast, featuring conversations with leaders shaping the future of games, tech, and entertainment. Episodes are available on YouTube and Apple Podcasts." }
    },
    {
      "@type": "Question",
      "name": "How can I contact Mission One?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can reach Mission One through their website at missionone.io/contact or connect with the founders Dan Hampton and Gerard Miles directly on LinkedIn." }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
