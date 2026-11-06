/* Hotel Coroana · admin-kit instance: room rates (Aripa A / Aripa B), 5 languages, lei, Romanian owner UI. */
import { createPriceList } from "./service";
import { blobStorage } from "./storage.blob";
import { getCookie } from "./handler";
import { ADMIN_COOKIE, isValidSession } from "./auth";
import { seedPrice, type Item, type LText, type PriceListConfig, type PriceListData } from "./model";
import { UI_LANG } from "./uiLang";
import type { EditorConfig } from "@/components/admin/PriceListEditor";
import { DICTS, LOCALES, type Locale } from "@/lib/dict";

const suffix = { decimalSep: ",", symbol: "suffix" } as const;

export const cfg: PriceListConfig = {
  siteId: "coroana",
  defaultLang: "ro",
  langs: LOCALES,
  langStyle: { ro: suffix, en: suffix, it: suffix, es: suffix, de: suffix },
  currency: "lei",
  decimals: "auto", // 290 lei, not 290,00 lei
  range: "unit-once", // 290 / 350 lei
  fromWord: { ro: "de la", en: "from", it: "da", es: "desde", de: "ab" },
};

// The two wings are the fixed categories (their titles live in dict.ts, per language).
export const WINGS = [
  { id: "aripa-a", key: "rowsA", titleKey: "wingA" },
  { id: "aripa-b", key: "rowsB", titleKey: "wingB" },
] as const;

export const CATEGORIES = WINGS.map((w) => ({ id: w.id, title: DICTS.ro.hotel.rates[w.titleKey], group: "camere" }));

const rowsOf = (l: Locale, key: "rowsA" | "rowsB") => DICTS[l].hotel.rates[key];

function seed(): PriceListData {
  return {
    version: 0,
    updatedAt: "",
    categories: WINGS.map((w) => ({
      id: w.id,
      items: rowsOf("ro", w.key).map((_row, i): Item => {
        const name: LText = {};
        const strings: Record<string, string> = {};
        for (const l of LOCALES) {
          const r = rowsOf(l, w.key)[i];
          if (!r) continue;
          name[l] = r[0];
          strings[l] = r[1];
        }
        return { id: `${w.id}-${i}`, name, price: seedPrice(strings, cfg) };
      }),
    })),
  };
}

export const pl = createPriceList({
  cfg,
  categoryIds: CATEGORIES.map((c) => c.id),
  storage: blobStorage(),
  seed,
  production: process.env.VERCEL_ENV === "production",
});

export const editorConfig: EditorConfig = {
  cfg,
  noun: { one: "cameră", many: "camere" },
  uiLang: UI_LANG,
  langs: [
    { code: "en", label: "English" },
    { code: "it", label: "Italiano" },
    { code: "es", label: "Español" },
    { code: "de", label: "Deutsch" },
  ],
  groups: [{ id: "camere", label: "Camere" }],
  categories: CATEGORIES,
  features: { note: false, highlight: false },
  endpoint: "/api/admin/pricelist",
  priceHint: "290 · 290 / 350 · de la 150 · La cerere",
  accent: "#8a6d1f",
  viewHref: "/#hotel",
};

export const isAuthed = (req: Request) => isValidSession(getCookie(req, ADMIN_COOKIE));
export const REVALIDATE_PATHS = ["/", "/en", "/it", "/es", "/de", "/llms.txt", "/admin/precios"];
