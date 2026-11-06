import { getLiveRates } from "@/lib/rates";

// /llms.txt for AI assistants. Static text, except the room rates, which follow the owner-edited price list
// (/admin/precios) — a static public/llms.txt would go stale the first time a price changes.
export const revalidate = 86400;

const HEAD = "# Hotel & Restaurant Coroana — Războieni, Iași, Romania\n\n> Hotel, restaurant and the largest events venue in the Moldova region of Romania,\n> at km 31 on the Iași – Târgu Frumos road (DN28), 705311 Războieni, Iași county.\n\n## Key facts (verified)\n- 43 modern rooms\n- Google rating: 4.5★ from 2,348 reviews\n- Free Wi-Fi, free private parking (300 spaces), room service, terraces\n- Restaurant with Romanian cuisine — guests praise the taste, fast service and fair prices\n- Coroana Events: 4 halls — Prestige (400–600), Moonlight (200–350), Celeste (100–180),\n  Serenity (up to 50) — up to 1,000 guests in total; weddings, christenings, conferences,\n  corporate events\n\n";

const TAIL = "## Contact\n- Hotel reception: +40 232 711 500 / +40 755 081 783 · receptie@hotelcoroana.ro\n- Events department: +40 786 298 932 · events@hotelcoroana.ro\n- Map: https://maps.app.goo.gl/XToMctMBVkWNofkR9\n\n## Pages\n- [Română](https://hotelcoroana.ro/): main site (RO)\n- [English](https://hotelcoroana.ro/en)\n- [Italiano](https://hotelcoroana.ro/it)\n- [Español](https://hotelcoroana.ro/es)\n- [Deutsch](https://hotelcoroana.ro/de)\n";

export async function GET() {
  const { rates } = await getLiveRates("en");
  const wing = (rows: [string, string][]) => rows.map(([name, price]) => `${name}: ${price}`).join("; ");
  const body = `${HEAD}## Room rates (per night, may vary by period)
- Wing A: ${wing(rates.rowsA)}
- Wing B: ${wing(rates.rowsB)}

${TAIL}`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
