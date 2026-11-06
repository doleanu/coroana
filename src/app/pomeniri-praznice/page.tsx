import type { Metadata } from "next";
import EventLanding, { type LandingConfig } from "@/components/EventLanding";

export const metadata: Metadata = {
  title: "Pomeniri și praznice lângă Iași — de la 129 lei/persoană. Pachete pentru parastas, la cerere | Coroana",
  description:
    "Organizăm pomeniri și praznice la restaurantul Coroana (Războieni, Iași) sau în locația dorită de familie. De la 129 lei/persoană: aperitiv, ciorbă, fel principal, cafea, apă și sucuri la discreție. Pregătim și pachete pentru parastas, la cerere.",
  alternates: { canonical: "/pomeniri-praznice" },
  openGraph: {
    title: "Pomeniri și praznice — de la 129 lei/persoană",
    description:
      "Aperitiv, ciorbă, fel principal, cafea, apă și sucuri la discreție. La restaurantul Coroana sau în locația dorită, cu calitate de patru stele.",
    url: "/pomeniri-praznice",
    locale: "ro_RO",
    type: "website",
  },
};

const config: LandingConfig = {
  slug: "pomeniri-praznice",
  breadcrumbName: "Pomeniri și praznice",
  navLabel: "Pomeniri și praznice",
  heroImage: "/photos/rest-3.jpg",
  heroAlt: "Sala restaurantului Coroana, pregătită pentru o masă de pomenire",
  kicker: "Pomeniri · Praznice · Pachete pentru parastas",
  h1: "O masă de pomenire,",
  h1Italic: "cu grijă și respect.",
  lead: "Organizăm pomeniri și praznice la restaurantul Coroana sau în locația aleasă de familie, cu serviciile și calitatea unui restaurant de patru stele, oriunde e nevoie.",
  mailSubject: "Cerere ofertă pomenire / praznic",
  ctaLabel: "Cere ofertă",
  offer: {
    label: "Meniu de pomenire",
    big: "de la 129 lei",
    unit: "/ persoană",
    items: [
      "Aperitiv",
      "Ciorbă",
      "Fel principal",
      "Cafea, apă și sucuri la discreție",
    ],
    note: "Preț cu TVA inclus. Prețul final depinde de meniul ales și de serviciile oferite. Spune-ne data, locul și numărul de persoane și revenim cu o ofertă.",
  },
  whyTitle: "Familia se ocupă de ce contează; restul rămâne în grija noastră.",
  why: [
    {
      title: "La noi sau la locul dorit",
      text: "Praznicul poate avea loc la restaurantul Coroana sau în locația aleasă de familie. Venim acolo unde e nevoie, cu tot ce înseamnă o masă bine organizată.",
    },
    {
      title: "Calitate de patru stele, oriunde",
      text: "Aducem la locul praznicului serviciile și standardul restaurantului Coroana, nu doar mâncare de bună calitate.",
    },
    {
      title: "Grijă pentru fiecare detaliu",
      text: "De la veselă și băuturi până la servire, masa e pregătită cu atenție. Putem asigura și servirea la masă de către ospătari profesioniști, de la aperitiv până la cafea, ca invitații să se simtă bine primiți, iar familia să nu fie nevoită să se ocupe de nimic.",
    },
  ],
  extra: {
    label: "Pachete pentru parastas",
    title: "Pregătim și pachete pentru parastas.",
    text: "Pe lângă masa de pomenire, putem pregăti pachete pentru parastas, oriunde în județul Iași. Spune-ne data, locul și numărul de pachete și revenim cu o ofertă.",
    cta: "Cere ofertă pentru pachete",
  },
  faq: [
    {
      q: "Pregătiți și pachete pentru parastas?",
      a: "Da, la cerere, oriunde în județul Iași. Spune-ne data, locul și numărul de pachete și revenim cu o ofertă.",
    },
    {
      q: "De la ce preț se organizează un praznic?",
      a: "De la 129 lei de persoană, cu TVA inclus, cu aperitiv, ciorbă, fel principal, cafea, apă și sucuri la discreție. Prețul final depinde de meniul ales și de serviciile oferite.",
    },
    {
      q: "Există un număr minim de persoane?",
      a: "Nu. Organizăm praznicul pentru orice număr de invitați, mic sau mare.",
    },
    {
      q: "Unde poate avea loc?",
      a: "La restaurantul Coroana, în Războieni (km 31, între Iași și Târgu Frumos), sau în locația dorită de familie, oriunde în județul Iași.",
    },
    {
      q: "Ce înseamnă „la discreție” la băuturi?",
      a: "Cafeaua, apa și sucurile se servesc la cerere, pe tot parcursul mesei.",
    },
    {
      q: "Cum cer o ofertă?",
      a: "Sună la +40 786 298 932 sau scrie la events@hotelcoroana.ro cu data, locul și numărul de persoane.",
    },
  ],
  closing: "Spune-ne data, locul și numărul de persoane. Revenim cu o ofertă.",
  serviceJsonLd: {
    name: "Pomeniri și praznice — Coroana",
    serviceType: "Catering pentru pomeniri și praznice",
    description:
      "Pomeniri și praznice la restaurantul Coroana sau în locația dorită, de la 129 lei/persoană: aperitiv, ciorbă, fel principal, cafea, apă și sucuri la discreție. Pachete pentru parastas, la cerere.",
  },
};

export default function Page() {
  return <EventLanding c={config} />;
}
