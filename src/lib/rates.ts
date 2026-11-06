import { DICTS, type Locale } from "@/lib/dict";
import { formatPrice, pick, type PriceListData } from "@/lib/pricelist/model";
import { cfg, pl, WINGS } from "@/lib/pricelist/instance";

type Rows = [string, string][];
export type Rates = { rowsA: Rows; rowsB: Rows };

/** The room-rate rows as the page renders them (name, price text). Hidden rooms are left out. */
export function renderRates(data: PriceListData, lang: Locale): Rates {
  const byId = new Map(data.categories.map((c) => [c.id, c]));
  const rows = (id: string): Rows =>
    (byId.get(id)?.items ?? []).filter((it) => !it.hidden).map((it) => [pick(it.name, lang, cfg), formatPrice(it.price, lang, cfg)]);
  return { rowsA: rows(WINGS[0].id), rowsB: rows(WINGS[1].id) };
}

/** "150–390 RON" for the Hotel JSON-LD, from the cheapest and dearest visible room. */
export function priceRange(data: PriceListData): string {
  const all = data.categories.flatMap((c) => c.items.filter((i) => !i.hidden).flatMap((i) => (i.price.kind === "amount" ? i.price.amounts : [])));
  if (all.length === 0) return "150–390 RON";
  return `${Math.min(...all)}–${Math.max(...all)} RON`;
}

export async function getLiveRates(lang: Locale) {
  const { data } = await pl.getData();
  return { rates: renderRates(data, lang), priceRange: priceRange(data), data };
}

export const fallbackRates = (lang: Locale): Rates => ({ rowsA: DICTS[lang].hotel.rates.rowsA, rowsB: DICTS[lang].hotel.rates.rowsB });
