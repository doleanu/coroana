/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // hotelcoroanaiasi.eu is a brand-mirror domain, not an independently
      // indexed site: send every request straight to the canonical domain
      // instead of letting Google see two copies of the same content.
      {
        source: "/:path*",
        has: [{ type: "host", value: "hotelcoroanaiasi.eu" }],
        destination: "https://hotelcoroana.ro/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.hotelcoroanaiasi.eu" }],
        destination: "https://hotelcoroana.ro/:path*",
        permanent: true,
      },
      // Legacy URLs from the old multi-page site. The redesign folded these
      // into anchored sections on the homepage instead of separate routes,
      // so the old paths currently 404 both for visitors and for Google.
      { source: "/restaurant", destination: "/#restaurant", permanent: true },
      { source: "/restaurant/", destination: "/#restaurant", permanent: true },
      { source: "/evenimente", destination: "/#evenimente", permanent: true },
      { source: "/evenimente/", destination: "/#evenimente", permanent: true },
      { source: "/botez", destination: "/#evenimente", permanent: true },
      { source: "/botez/", destination: "/#evenimente", permanent: true },
      { source: "/hotelrestaurant", destination: "/", permanent: true },
      { source: "/hotelrestaurant/", destination: "/", permanent: true },
      { source: "/contact-hotel", destination: "/#contact", permanent: true },
      { source: "/contact-hotel/", destination: "/#contact", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/contact/", destination: "/#contact", permanent: true },
      // No terms-of-service page exists on the redesign; send to the
      // homepage rather than 404. Wildcard also catches the malformed
      // /termeni-si-conditii/www.hotelcoroanaiasi.ro variant GSC found.
      { source: "/termeni-si-conditii", destination: "/", permanent: true },
      { source: "/termeni-si-conditii/:path*", destination: "/", permanent: true },
      // WordPress author archives have no equivalent on this site.
      { source: "/author/:path*", destination: "/", permanent: true },
      // English (/eng/*) mirrors of the same legacy routes.
      { source: "/eng", destination: "/en", permanent: true },
      { source: "/eng/", destination: "/en", permanent: true },
      { source: "/eng/hotel", destination: "/en#hotel", permanent: true },
      { source: "/eng/hotel/", destination: "/en#hotel", permanent: true },
      { source: "/eng/restaurant", destination: "/en#restaurant", permanent: true },
      { source: "/eng/restaurant/", destination: "/en#restaurant", permanent: true },
      { source: "/eng/contact-hotel", destination: "/en#contact", permanent: true },
      { source: "/eng/contact-hotel/", destination: "/en#contact", permanent: true },
      { source: "/eng/contact", destination: "/en#contact", permanent: true },
      { source: "/eng/contact/", destination: "/en#contact", permanent: true },
      // /nunta has no English translation route; send to the RO page.
      { source: "/eng/nunta", destination: "/nunta", permanent: true },
      { source: "/eng/nunta/", destination: "/nunta", permanent: true },
    ];
  },
};

export default nextConfig;
