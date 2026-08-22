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
    ];
  },
};

export default nextConfig;
