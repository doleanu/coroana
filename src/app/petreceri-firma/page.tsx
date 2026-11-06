import type { Metadata } from "next";
import EventLanding, { type LandingConfig } from "@/components/EventLanding";

export const metadata: Metadata = {
  title: "Petrecere de firmă de sfârșit de an lângă Iași — meniu 135 lei/persoană | Coroana",
  description:
    "Petrecerea de Crăciun a firmei, la Coroana: meniu 135 lei/persoană cu TVA (fel principal, papanași, cocktail, băuturi, șampanie din partea casei), grupuri de la 10 persoane și 20% reducere la cazare.",
  alternates: { canonical: "/petreceri-firma" },
  openGraph: {
    title: "Petrecere de firmă de sfârșit de an la Coroana — 135 lei/persoană",
    description:
      "Meniu complet cu cocktail și șampanie din partea casei, de la 10 persoane, plus 20% reducere la cazare — la km 31, între Iași și Târgu Frumos.",
    url: "/petreceri-firma",
    locale: "ro_RO",
    type: "website",
  },
};

const config: LandingConfig = {
  slug: "petreceri-firma",
  breadcrumbName: "Petreceri de firmă",
  navLabel: "Petreceri de firmă",
  heroImage: "/photos/banq-1.jpg",
  heroAlt: "Salon de banchet Coroana pregătit pentru o petrecere de firmă",
  kicker: "Petreceri de firmă · Sfârșit de an",
  h1: "Petrecerea de sfârșit de an a echipei,",
  h1Italic: "fără bătăi de cap.",
  lead: "Un meniu complet la 135 lei de persoană, cu TVA, pentru instituții și firme private. Grupuri de la 10 persoane, parcare gratuită și cazare cu reducere.",
  mailSubject: "Cerere ofertă petrecere de firmă",
  ctaLabel: "Rezervă data",
  offer: {
    label: "Meniul de sfârșit de an",
    big: "135 lei",
    unit: "/ persoană · TVA inclus",
    items: [
      "Fel principal",
      "Papanași",
      "Cocktail alcoolic sau nealcoolic",
      "Apă, suc și cafea",
      "Șampanie din partea casei",
      "Cazare cu 20% reducere",
    ],
    note: "Grup minim: 10 persoane. Pentru data dorită, sună sau scrie-ne să verificăm disponibilitatea.",
  },
  whyTitle: "Petrecerea echipei, într-un singur loc.",
  why: [
    {
      title: "Preț clar, fără surprize",
      text: "135 lei de persoană, cu TVA, include tot meniul: fel principal, desert, cocktail, băuturi și șampanie din partea casei.",
    },
    {
      title: "De la 10 persoane",
      text: "Echipă mică sau instituție întreagă: primim grupuri de la 10 persoane, în saloane potrivite ca mărime.",
    },
    {
      title: "Cazare cu 20% reducere",
      text: "Cine vrea să rămână peste noapte nu mai conduce după petrecere. Camerele au 20% reducere pentru grupurile care iau meniul.",
    },
    {
      title: "Parcare gratuită pentru 300 de mașini",
      text: "Toată lumea ajunge cu mașina proprie, iar parcarea este gratuită. Avem și locuri de cazare pe loc, în hotel.",
    },
  ],
  halls: {
    title: "Saloane pentru fiecare dimensiune de echipă.",
    intro:
      "De la o echipă de zece persoane la o petrecere cu sute de invitați, avem salonul potrivit. Capacitățile sunt pentru dispunere cu mese.",
    rows: [
      { name: "Prestige", cap: "400 – 600 invitați", pct: 100 },
      { name: "Moonlight", cap: "200 – 350 invitați", pct: 58 },
      { name: "Celeste", cap: "100 – 180 invitați", pct: 30 },
      { name: "Serenity", cap: "Până la 50 invitați", pct: 12 },
    ],
    note: "Alegem împreună salonul în funcție de numărul de participanți.",
  },
  faq: [
    {
      q: "Ce include meniul de 135 lei?",
      a: "Fel principal, papanași, cocktail alcoolic sau nealcoolic, apă, suc și cafea și șampanie din partea casei. Prețul este cu TVA inclus.",
    },
    {
      q: "Care este numărul minim de persoane?",
      a: "Grupul minim este de 10 persoane.",
    },
    {
      q: "Se aplică reducere la cazare?",
      a: "Da, cazarea are 20% reducere pentru grupurile care organizează petrecerea la Coroana.",
    },
    {
      q: "Putem veni ca firmă de stat sau instituție?",
      a: "Da, organizăm petreceri atât pentru firme private, cât și pentru instituții de stat.",
    },
    {
      q: "Cum rezerv data?",
      a: "Sună la +40 786 298 932 sau scrie la events@hotelcoroana.ro cu data dorită și numărul de persoane. Verificăm disponibilitatea și îți confirmăm.",
    },
  ],
  closing: "Alege data și numărul de persoane. Noi ne ocupăm de restul.",
  serviceJsonLd: {
    name: "Petrecere de firmă de sfârșit de an — Coroana",
    serviceType: "Petreceri corporate",
    description:
      "Meniu de 135 lei/persoană cu TVA (fel principal, papanași, cocktail, apă, suc, cafea, șampanie din partea casei), grup minim 10 persoane, cazare cu 20% reducere.",
    offers: {
      "@type": "Offer",
      price: "135",
      priceCurrency: "RON",
      description: "Preț per persoană, TVA inclus. Grup minim 10 persoane.",
    },
  },
};

export default function Page() {
  return <EventLanding c={config} />;
}
