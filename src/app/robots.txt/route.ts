
// Hand-written (instead of robots.ts) because MetadataRoute.Robots cannot
// emit the Content-Signal directive.
export const dynamic = "force-static";

export function GET() {
  const body = [
    "User-agent: *",
    "Content-Signal: ai-train=no, search=yes, ai-input=yes",
    "Allow: /",
    "Disallow: /admin",
    "",
    "Sitemap: https://hotelcoroana.ro/sitemap.xml",
  ].join("\n");
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
