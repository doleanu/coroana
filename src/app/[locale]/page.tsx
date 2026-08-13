import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Site from "@/components/Site";
import { DICTS, type Locale } from "@/lib/dict";

const SUB_LOCALES = ["en", "it", "es", "de"] as const;

export const dynamicParams = false;

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
    openGraph: {
      title: d.metaTitle,
      description: d.metaDescription,
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
  return <Site locale={locale as Locale} />;
}
