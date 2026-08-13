import type { MetadataRoute } from "next";

// Explicitly welcome AI/search crawlers (GPTBot, OAI-SearchBot, ClaudeBot,
// PerplexityBot etc. all obey the wildcard rule).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://hotelcoroana.ro/sitemap.xml",
  };
}
