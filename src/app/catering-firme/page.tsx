import type { Metadata } from "next";
import EventLanding, { type LandingConfig } from "@/components/EventLanding";

export const metadata: Metadata = {
  title: "Catering pentru firme în județul Iași — petreceri și zile onomastice la sediu | Coroana",
  description:
    "Catering la sediul firmei tale, în județul Iași: petreceri de firmă și zile onomastice, de la 75 lei/persoană și de la 10 persoane. Fețe de masă, tacâmuri și pahare se pot asigura la cerere. Catering și pentru pomeniri și praznice.",
  alternates: { canonical: "/catering-firme" },
  openGraph: {
    title: "Catering pentru firme în județul Iași — de la 75 lei/persoană",
    description:
      "Venim la sediul firmei cu mâncarea; fețe de masă, tacâmuri și pahare la cerere. De la 75 lei/persoană, de la 10 persoane.",
    url: "/catering-firme",
    locale: "ro_RO",
    type: "website",
  },
};

const config: LandingConfig = {
  slug: "catering-firme",
  breadcrumbName: "Catering pentru firme",
  navLabel: "Catering firme",
  heroImage: "/photos/food-2.jpg",
  heroAlt: "Platou cu preparate din bucătăria Coroana",
  kicker: "Catering · Petreceri de firmă · Zile onomastice",
  h1: "Petrecerea vine la voi,",
  h1Italic: "cu tot ce trebuie.",
  lead: "Catering la sediul firmei, în tot județul Iași. Aducem mâncarea și, dacă ai nevoie, putem asigura și fețe de masă, tacâmuri și pahare. Voi doar sărbătoriți.",
  mailSubject: "Cerere ofertă catering firmă",
  ctaLabel: "Cere ofertă",
  offer: {
    label: "Catering la sediul firmei",
    big: "de la 75 lei",
    unit: "/ persoană",
    items: [
      "Mâncare din bucătăria Coroana",
      "Meniu ales în funcție de buget",
      "Pentru petreceri de firmă și zile onomastice",
      "Fețe de masă, tacâmuri și pahare: la cerere",
    ],
    note: "Prețul final depinde de meniul ales și de serviciile oferite. Fețele de masă, tacâmurile și paharele nu sunt incluse în preț, dar le putem asigura la cerere. Minim 10 persoane în zona apropiată (până la 20 km). Pentru municipiul Iași și peste 20 km: minim 20 de persoane. Livrăm doar în județul Iași.",
  },
  whyTitle: "Mâncare bună și zero griji de organizare.",
  why: [
    {
      title: "Fețe de masă, tacâmuri, pahare: la cerere",
      text: "Nu sunt incluse în preț, dar le putem asigura dacă ai nevoie. Spune-ne la ofertă și nu mai cumperi și nu mai împrumuți nimic.",
    },
    {
      title: "Pentru orice ocazie în firmă",
      text: "Petreceri de firmă, zile onomastice, aniversări ale echipei. Venim la sediul vostru, în ziua și ora stabilite.",
    },
    {
      title: "Prețuri de la 75 lei de persoană",
      text: "Alegi meniul în funcție de buget. Prețul final depinde de meniul ales și de serviciile oferite.",
    },
    {
      title: "Bucătăria Coroana",
      text: "Mâncarea este pregătită în bucătăria restaurantului Coroana, cu aceeași grijă ca la evenimentele din salon.",
    },
  ],
  faq: [
    {
      q: "Care este numărul minim de persoane?",
      a: "Minim 10 persoane în zona apropiată de Războieni (până la 20 km). Pentru municipiul Iași și pentru distanțe de peste 20 km, minimul este de 20 de persoane.",
    },
    {
      q: "În ce zonă livrați?",
      a: "Doar în raza județului Iași.",
    },
    {
      q: "Ce este inclus în preț?",
      a: "Prețul, de la 75 lei de persoană, acoperă mâncarea; suma finală depinde de meniul ales și de serviciile oferite. Fețele de masă, tacâmurile și paharele nu sunt incluse, dar le putem asigura la cerere. Spune-ne la ofertă ce ai nevoie.",
    },
    {
      q: "Faceți catering și pentru pomeniri și praznice?",
      a: "Da, avem o ofertă separată, de la 129 lei de persoană. Vezi pagina „Pomeniri și praznice” și spune-ne data, locul și numărul de persoane.",
    },
    {
      q: "Putem comanda pentru o zi onomastică sau o petrecere mică?",
      a: "Da, de la 10 persoane în zona apropiată. Spune-ne data, locația și numărul de persoane și îți pregătim oferta.",
    },
    {
      q: "Cum cer o ofertă?",
      a: "Sună la +40 786 298 932 sau scrie la events@hotelcoroana.ro cu locația, data și numărul de persoane.",
    },
  ],
  extra: {
    label: "Pomeniri și praznice",
    title: "Pomeniri și praznice, la o pagină separată.",
    text: "Pentru pomeniri și praznice, la restaurantul Coroana sau în locația dorită, avem o ofertă dedicată, de la 129 lei de persoană.",
    cta: "Vezi pagina pentru pomeniri și praznice",
    href: "/pomeniri-praznice",
  },
  closing: "Spune-ne unde, când și câți sunteți. Restul e treaba noastră.",
  serviceJsonLd: {
    name: "Catering pentru firme — Coroana",
    serviceType: "Catering corporate",
    description:
      "Catering la sediul firmei în județul Iași, de la 75 lei/persoană, minim 10 persoane; fețe de masă, tacâmuri și pahare la cerere. Catering și pentru pomeniri și praznice.",
  },
};

export default function Page() {
  return <EventLanding c={config} />;
}
