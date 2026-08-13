const BASE = "https://hotelcoroana.ro";

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Șoseaua Iași – Târgu Frumos KM31 (DN28)",
  addressLocality: "Războieni",
  addressRegion: "Iași",
  postalCode: "705311",
  addressCountry: "RO",
};

// All values below are verified facts (site + Google profile) — nothing invented.
const GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Hotel",
      "@id": `${BASE}/#hotel`,
      name: "Hotel & Restaurant Coroana",
      description:
        "Hotel cu 43 de camere moderne cu mic dejun inclus, restaurant și Coroana Events — cea mai mare locație de evenimente din Moldova, la km 31 pe șoseaua Iași – Târgu Frumos.",
      url: `${BASE}/`,
      image: `${BASE}/photos/venue-pano.jpg`,
      logo: `${BASE}/logo-coroana.png`,
      telephone: "+40 232 711 500",
      email: "receptie@hotelcoroana.ro",
      numberOfRooms: 43,
      priceRange: "150–390 RON",
      address: ADDRESS,
      hasMap: "https://maps.app.goo.gl/XToMctMBVkWNofkR9",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.4",
        bestRating: "5",
        reviewCount: "2329",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Mic dejun inclus", value: true },
        { "@type": "LocationFeatureSpecification", name: "Wi-Fi gratuit", value: true },
        {
          "@type": "LocationFeatureSpecification",
          name: "Parcare gratuită (300 de locuri)",
          value: true,
        },
        { "@type": "LocationFeatureSpecification", name: "Room service", value: true },
      ],
      sameAs: [
        "https://www.facebook.com/HotelCoroanaIasi",
        "https://www.facebook.com/CoroanaEvents",
        "https://www.instagram.com/coroana.events",
      ],
      containsPlace: [{ "@id": `${BASE}/#restaurant` }, { "@id": `${BASE}/#events` }],
    },
    {
      "@type": "Restaurant",
      "@id": `${BASE}/#restaurant`,
      name: "Restaurant Coroana",
      url: `${BASE}/#restaurant`,
      image: `${BASE}/photos/rest-3.jpg`,
      servesCuisine: "Bucătărie românească",
      telephone: "+40 232 711 500",
      address: ADDRESS,
    },
    {
      "@type": "EventVenue",
      "@id": `${BASE}/#events`,
      name: "Coroana Events",
      description:
        "Cea mai mare locație de evenimente din Moldova: 4 saloane (Prestige 400–600, Moonlight 200–350, Celeste 100–180, Serenity până la 50), în total până la 1.000 de invitați — nunți, botezuri, conferințe și petreceri de firmă.",
      url: `${BASE}/#evenimente`,
      image: `${BASE}/photos/ball-1.jpg`,
      maximumAttendeeCapacity: 1000,
      telephone: "+40 786 298 932",
      email: "events@hotelcoroana.ro",
      address: ADDRESS,
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(GRAPH) }}
    />
  );
}
