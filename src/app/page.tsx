import type { Metadata } from "next";
import Site from "@/components/Site";
import { HREFLANG_LANGUAGES } from "@/lib/dict";
import { getLiveRates } from "@/lib/rates";

// Room rates come from the owner-edited price list (/admin/precios); refreshed on demand when he saves.
export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/", languages: HREFLANG_LANGUAGES },
};

export default async function Home() {
  const { rates, priceRange } = await getLiveRates("ro");
  return <Site locale="ro" rates={rates} priceRange={priceRange} />;
}
