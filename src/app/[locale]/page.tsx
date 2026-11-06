import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Site from "@/components/Site";
import { DICTS, HREFLANG_LANGUAGES, type Locale } from "@/lib/dict";
import { getLiveRates } from "@/lib/rates";

const SUB_LOCALES = ["en", "it", "es", "de"] as const;


// Room rates come from the owner-edited price list (/admin/precios); refreshed on demand when he saves.
export const revalidate = 86400;

export function generateStaticParams() {
  return SUB_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const d = DICTS[locale as Locale];
  if (!d) return {};
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    alternates: { canonical: `/${locale}`, languages: HREFLANG_LANGUAGES },
    openGraph: {
      title: d.metaTitle,
      description: d.metaDescription,
      url: `/${locale}`,
      type: "website",
      images: ["/photos/venue-pano.jpg"],
    },
  };
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!SUB_LOCALES.includes(locale as (typeof SUB_LOCALES)[number])) notFound();
  const { rates, priceRange } = await getLiveRates(locale as Locale);
  return <Site locale={locale as Locale} rates={rates} priceRange={priceRange} />;
}
