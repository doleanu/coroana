import type { Metadata } from "next";
import EventLanding, { type LandingConfig } from "@/components/EventLanding";

export const metadata: Metadata = {
  title: "Conferințe lângă Iași — săli de 10 până la 800 de persoane, cazare și parcare | Coroana",
  description:
    "Organizează conferința la Coroana, la 31 km de Iași: 4 săli de la 10 la 800 de persoane, proiector și ecran 6×4 m, sonorizare, 100 de locuri de cazare, parcare pentru 300 de mașini și coffee break.",
  alternates: { canonical: "/conferinte" },
  openGraph: {
    title: "Conferințe la Coroana — săli de 10 până la 800 de persoane",
    description:
      "4 săli, ecran 6×4 m, sonorizare, 100 de locuri de cazare și parcare pentru 300 de mașini — la km 31, între Iași și Târgu Frumos.",
    url: "/conferinte",
    locale: "ro_RO",
    type: "website",
  },
};

const config: LandingConfig = {
  slug: "conferinte",
  breadcrumbName: "Conferințe",
  navLabel: "Conferințe",
  heroImage: "/photos/conf-2.jpg",
  heroAlt: "Sală de conferințe Coroana cu ecran de proiecție",
  kicker: "Conferințe · Seminarii · Traininguri",
  h1: "Conferința ta, într-un loc cu",
  h1Italic: "de toate.",
  lead: "Patru săli de la 10 până la 800 de persoane, echipament audio-video, 100 de locuri de cazare și parcare pentru 300 de mașini — totul la același loc, la 31 km de Iași.",
  mailSubject: "Cerere ofertă conferință",
  ctaLabel: "Cere ofertă",
  whyTitle: "Tot ce îți trebuie, fără să trimiți participanții în altă parte.",
  why: [
    {
      title: "Patru săli, de la 10 la 800 de persoane",
      text: "De la o ședință restrânsă la o conferință națională: ai sala potrivită pentru 10–50, 50–250, 250–500 sau 500–800 de participanți.",
    },
    {
      title: "Proiector și ecran de 6 × 4 metri",
      text: "Prezentările se văd de la ultimul rând. Ecranul de 6 × 4 m și proiectorul sunt disponibile pentru evenimentul tău.",
    },
    {
      title: "Sonorizare",
      text: "Sistem de sonorizare pentru ca fiecare vorbitor să fie auzit clar, în orice sală.",
    },
    {
      title: "100 de locuri de cazare",
      text: "Participanții din alte orașe înnoptează pe loc, în cele 43 de camere ale hotelului. Fără transferuri, fără întârzieri dimineața.",
    },
    {
      title: "Parcare pentru 300 de mașini",
      text: "Parcare gratuită, în fața complexului. Toți participanții ajung cu mașina proprie, fără probleme de loc.",
    },
    {
      title: "Coffee break, cu mâncare și băuturi",
      text: "Putem asigura coffee break pentru participanți, cu mâncare și băuturi, în pauzele conferinței.",
    },
    {
      title: "Restaurant și Wi-Fi gratuit",
      text: "Restaurantul hotelului este la câțiva pași de sală, iar internetul Wi-Fi este gratuit în tot complexul.",
    },
  ],
  halls: {
    title: "Alege sala după numărul de participanți.",
    intro:
      "Capacitățile de mai jos sunt pentru dispunere de conferință (rânduri de scaune, fără mese multe), de aceea sunt mai mari decât cele pentru petreceri. Îți spunem exact ce sală se potrivește la cererea de ofertă.",
    rows: [
      { name: "Sală pentru grupuri mici", cap: "10 – 50 persoane", pct: 6 },
      { name: "Sală medie", cap: "50 – 250 persoane", pct: 31 },
      { name: "Sală mare", cap: "250 – 500 persoane", pct: 62 },
      { name: "Sala cea mare", cap: "500 – 800 persoane", pct: 100 },
    ],
    note: "Capacități orientative pentru dispunere de conferință. Confirmăm sala în funcție de formatul evenimentului.",
  },
  faq: [
    {
      q: "Cum cer o ofertă pentru conferință?",
      a: "Sună la +40 786 298 932 sau scrie la events@hotelcoroana.ro cu data, numărul de participanți și dacă ai nevoie de cazare. Revenim cu sala potrivită și oferta.",
    },
    {
      q: "Se poate organiza conferința pentru un grup mic?",
      a: "Da. Avem săli și pentru grupuri de 10–50 de persoane, deci ședințele și traininguri restrânse sunt binevenite.",
    },
    {
      q: "Participanții pot înnopta la hotel?",
      a: "Da, avem 100 de locuri de cazare în 43 de camere, chiar în complex.",
    },
    {
      q: "Avem parcare pentru toți participanții?",
      a: "Da, parcarea are loc pentru 300 de mașini și este gratuită.",
    },
    {
      q: "Se poate comanda coffee break?",
      a: "Da, putem asigura coffee break, cu mâncare și băuturi, pentru pauzele conferinței. Spune-ne numărul de participanți și momentele din program și îți facem oferta.",
    },
    {
      q: "Ce echipamente sunt disponibile?",
      a: "Proiector, ecran de 6 × 4 metri și sonorizare. Dacă ai nevoie de altceva, spune-ne la cererea de ofertă.",
    },
  ],
  closing: "Spune-ne data și câți participanți aveți. Revenim cu oferta.",
  serviceJsonLd: {
    name: "Săli de conferințe — Coroana",
    serviceType: "Închiriere săli de conferințe",
    description:
      "Patru săli de conferințe (10–50, 50–250, 250–500, 500–800 de persoane), proiector și ecran 6×4 m, sonorizare, 100 de locuri de cazare, parcare pentru 300 de mașini și coffee break cu mâncare și băuturi.",
  },
};

export default function Page() {
  return <EventLanding c={config} />;
}
