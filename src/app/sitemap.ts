import type { MetadataRoute } from "next";

const BASE = "https://hotelcoroana.ro";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    ro: `${BASE}/`,
    en: `${BASE}/en`,
    it: `${BASE}/it`,
    es: `${BASE}/es`,
    de: `${BASE}/de`,
  };
  return [
    { url: `${BASE}/`, priority: 1, alternates: { languages } },
    { url: `${BASE}/en`, priority: 0.8, alternates: { languages } },
    { url: `${BASE}/it`, priority: 0.8, alternates: { languages } },
    { url: `${BASE}/es`, priority: 0.8, alternates: { languages } },
    { url: `${BASE}/de`, priority: 0.8, alternates: { languages } },
  ];
}
