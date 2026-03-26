import { episodes } from "./data/episodes";
import { getAllTagSlugs } from "./data/tags";
import { newsletters } from "./data/newsletters";
import { guides } from "./data/guides";

export default function sitemap() {
  const staticPages = [
    {
      url: "https://missionone.io",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://missionone.io/podcast",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://missionone.io/newsletter",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://missionone.io/contact",
      lastModified: "2025-01-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://missionone.io/podcast/topics",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const episodePages = episodes.map((ep) => ({
    url: `https://missionone.io/podcast/${ep.id}`,
    lastModified: ep.publishDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const topicPages = getAllTagSlugs().map((tag) => ({
    url: `https://missionone.io/podcast/topics/${tag}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const newsletterPages = newsletters.map((nl) => ({
    url: `https://missionone.io/newsletter/${nl.id}`,
    lastModified: nl.publishDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const guidePages = guides.map((g) => ({
    url: `https://missionone.io/insights/${g.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...episodePages, ...topicPages, ...newsletterPages, ...guidePages];
}
