import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const TEL_RECEPTION = "+40232711500";
const TEL_EVENTS = "+40786298932";
const MAPS_URL = "https://maps.app.goo.gl/XToMctMBVkWNofkR9";

export const metadata: Metadata = {
  title: "Nuntă la Coroana — Cea mai mare locație de evenimente din Moldova | Războieni, Iași",
  description:
    "Organizează-ți nunta la Coroana Events, între Iași și Târgu Frumos: 4 saloane pentru 50–1.000 de invitați, cazare pe loc pentru oaspeți (43 de camere) și catering din bucătăria proprie a restaurantului.",
  alternates: { canonical: "/nunta" },
  openGraph: {
    title: "Nuntă la Coroana — Cea mai mare locație de evenimente din Moldova",
    description:
      "4 saloane, până la 1.000 de invitați și cazare pe loc pentru oaspeți — la km 31, între Iași și Târgu Frumos.",
    url: "/nunta",
    locale: "ro_RO",
    type: "website",
    images: ["/photos/ball-1.jpg"],
  },
};

const WHY = [
  {
    title: "Cea mai mare locație de evenimente din Moldova",
    text: "Patru saloane, de la petreceri intime până la nunți cu 400–600 de invitați.",
  },
  {
    title: "Oaspeții pot rămâne peste noapte",
    text: "43 de camere de hotel chiar pe domeniu — la câțiva pași de salon.",
  },
  {
    title: "Catering din bucătărie proprie",
    text: "Aceeași echipă care ține plin restaurantul Coroana în fiecare zi se ocupă și de mesele de nuntă.",
  },
  {
    title: "Parcare proprie, 300 de locuri",
    text: "Suficientă pentru cele mai mari evenimente găzduite pe domeniu.",
  },
];

const HALLS = [
  { name: "Salon Prestige", cap: "400–600", pct: 100 },
  { name: "Salon Moonlight", cap: "200–350", pct: 58 },
  { name: "Salon Celeste", cap: "100–180", pct: 30 },
  { name: "Salon Serenity", cap: null, pct: 12 },
];

const FAQ = [
  {
    q: "Câți invitați poate găzdui Coroana Events?",
    a: "Între câteva zeci și 1.000 de persoane, în funcție de salonul ales — de la Serenity (până la 50 de invitați) la Prestige (400–600 de invitați, extensibil pentru evenimente foarte mari).",
  },
  {
    q: "Este loc de cazare pentru invitați?",
    a: "Da. Hotelul Coroana are 43 de camere chiar pe domeniu — nașii, familia sau invitații din alte orașe pot rămâne peste noapte, la câțiva pași de salon.",
  },
  {
    q: "Meniul este asigurat de voi?",
    a: "Da. Catering-ul pentru evenimente este pregătit de bucătăria restaurantului Coroana, aceeași echipă care ține sala restaurantului plină în fiecare zi.",
  },
  {
    q: "Este parcare la fața locului?",
    a: "Da, parcare proprie cu 300 de locuri, suficientă pentru cele mai mari evenimente găzduite.",
  },
  {
    q: "Cum rezerv o dată pentru nuntă?",
    a: "Cel mai simplu e telefonic, la departamentul de evenimente — +40 786 298 932 — sau prin e-mail la events@hotelcoroana.ro. Vă recomandăm să sunați din timp, mai ales pentru sezonul de vară.",
  },
];

function Figure({
  src,
  alt,
  ratio,
  frameClassName = "",
  className = "",
}: {
  src: string;
  alt: string;
  ratio?: string;
  frameClassName?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div
        className={`photo-frame relative ${frameClassName}`}
        style={ratio ? { aspectRatio: ratio } : undefined}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, 50vw"
        />
      </div>
    </figure>
  );
}

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: "https://hotelcoroana.ro/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Nuntă & Evenimente",
          item: "https://hotelcoroana.ro/nunta",
        },
      ],
    },
    {
      "@type": "EventVenue",
      "@id": "https://hotelcoroana.ro/nunta#venue",
      name: "Coroana Events",
      description:
        "Cea mai mare locație de evenimente din Moldova: 4 saloane (Prestige 400–600, Moonlight 200–350, Celeste 100–180, Serenity până la 50), în total până la 1.000 de invitați — nunți, botezuri, conferințe și petreceri de firmă.",
      url: "https://hotelcoroana.ro/nunta",
      image: "https://hotelcoroana.ro/photos/ball-1.jpg",
      telephone: "+40 786 298 932",
      email: "events@hotelcoroana.ro",
      maximumAttendeeCapacity: 1000,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Șoseaua Iași – Târgu Frumos KM31 (DN28)",
        addressLocality: "Războieni",
        addressRegion: "Iași",
        postalCode: "705311",
        addressCountry: "RO",
      },
      geo: { "@type": "GeoCoordinates", latitude: 47.21972, longitude: 27.0620843 },
      isAccessibleForFree: false,
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Parcare gratuită (300 de locuri)", value: true },
        { "@type": "LocationFeatureSpecification", name: "Cazare pe loc pentru invitați (43 de camere)", value: true },
        { "@type": "LocationFeatureSpecification", name: "Catering din bucătărie proprie", value: true },
      ],
    },
  ],
};

export default function NuntaPage() {
  return (
    <main>
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      {/* ————————————————— Header ————————————————— */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-deep/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8">
          <a href="/" aria-label="Hotel & Restaurant Coroana">
            <Image
              src="/logo-coroana.png"
              alt="Coroana — A glamorous place to be"
              width={419}
              height={210}
              priority
              className="h-10 w-auto sm:h-11"
            />
          </a>
          <nav className="hidden items-center gap-2 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ivory/50 sm:flex">
            <a href="/" className="transition-colors hover:text-gold-bright">
              Acasă
            </a>
            <span className="text-ivory/30">/</span>
            <span className="text-gold-bright">Nuntă & Evenimente</span>
          </nav>
          <a
            href={`tel:${TEL_EVENTS}`}
            className="rounded-full border border-gold/60 px-4 py-2 font-sans text-[0.72rem] font-bold uppercase tracking-label text-gold-bright transition-colors hover:bg-gold hover:text-ink-deep sm:px-5"
          >
            <span className="hidden sm:inline">+40 786 298 932</span>
            <span className="sm:hidden">Sună</span>
          </a>
        </div>
      </header>

      {/* ————————————————— Hero ————————————————— */}
      <section className="relative flex min-h-[80svh] items-end overflow-hidden bg-ink-deep">
        <Image
          src="/photos/ball-1.jpg"
          alt="Salon de nuntă Coroana Events, pregătit pentru petrecere"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/40 to-ink-deep/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep/80 via-ink-deep/35 to-transparent" />
        <div className="relative mx-auto w-full max-w-page px-5 pb-16 pt-40 sm:px-8 sm:pb-20">
          <Reveal>
            <p className="small-caps-label text-ivory/75">Coroana Events — Războieni, Iași</p>
            <h1 className="heading-display mt-5 max-w-3xl font-serif text-5xl font-light leading-[1.02] text-ivory sm:text-6xl lg:text-7xl">
              Nunta ta, <span className="italic text-gold-bright">într-un domeniu întreg.</span>
            </h1>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-ivory/85 sm:text-lg">
              Patru saloane, până la 1.000 de invitați și un domeniu construit pentru sărbători —
              între Iași și Târgu Frumos, la kilometrul 31. Aici seara nu se termină când pleacă
              ultimul invitat: oaspeții pot rămâne peste noapte, chiar pe domeniu.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={`tel:${TEL_EVENTS}`}
                className="inline-flex items-center justify-center bg-gold px-8 py-4 font-sans text-[0.72rem] font-bold uppercase tracking-label text-ink-deep transition-colors hover:bg-gold-bright"
              >
                Departament evenimente · +40 786 298 932
              </a>
              <a
                href="mailto:events@hotelcoroana.ro"
                className="inline-flex items-center justify-center border border-ivory/50 px-8 py-4 font-sans text-[0.72rem] font-bold uppercase tracking-label text-ivory transition-colors hover:border-gold-bright hover:text-gold-bright"
              >
                events@hotelcoroana.ro
              </a>
            </div>
            <p className="mt-8 font-sans text-sm text-ivory/70">
              <span className="text-gold-bright">★</span>{" "}
              <strong className="font-bold text-ivory">4,4</strong> · 2.329 de recenzii pe Google
            </p>
          </Reveal>
        </div>
      </section>

      {/* ————————————————— 01 · De ce Coroana ————————————————— */}
      <section className="bg-paper texture-grain">
        <div className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="font-serif text-lg italic leading-none text-gold-dim">01</span>
              <span className="small-caps-label text-gold-dim">De ce Coroana</span>
              <span className="h-px flex-1 bg-gold/35" />
            </div>
            <h2 className="heading-display mt-6 max-w-4xl font-serif text-4xl font-light leading-[1.05] text-ink-deep sm:text-5xl lg:text-6xl">
              Un domeniu, nu doar o sală închiriată.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {WHY.map((f) => (
              <Reveal key={f.title}>
                <p className="font-serif text-xl italic text-ink-deep sm:text-2xl">{f.title}</p>
                <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-charcoal/85">
                  {f.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————————————————— 02 · Saloanele ————————————————— */}
      <section className="border-t border-linen bg-ink-deep py-20 text-ivory texture-grain-dark sm:py-28">
        <div className="mx-auto max-w-page px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="font-serif text-lg italic leading-none text-gold-bright">02</span>
              <span className="small-caps-label text-gold-bright">Saloanele</span>
              <span className="h-px flex-1 bg-gold/25" />
            </div>
            <h2 className="heading-display mt-6 max-w-4xl font-serif text-4xl font-light leading-[1.05] text-ivory sm:text-5xl lg:text-6xl">
              Un salon potrivit pentru fiecare nuntă.
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-ivory/80">
              De la o petrecere restrânsă, de familie, până la o nuntă cu sute de invitați —
              fiecare salon are propria atmosferă, iar toate pornesc din același domeniu.
            </p>
          </Reveal>

          <Reveal className="mt-16">
            <div className="space-y-6">
              {HALLS.map((h) => (
                <div key={h.name}>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-serif text-xl italic text-ivory sm:text-2xl">{h.name}</p>
                    <p className="font-sans text-[0.7rem] uppercase tracking-label text-ivory/70">
                      {h.cap ?? "Până la 50"} de persoane
                    </p>
                  </div>
                  <div className="mt-2.5 h-px w-full bg-white/10">
                    <div className="hall-bar h-px bg-gold" style={{ width: `${h.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 font-sans text-sm text-ivory/60">
              Nunți · Botezuri · Conferințe · Prezentări · Petreceri de firmă
            </p>
          </Reveal>
        </div>
      </section>

      {/* ————————————————— 03 · Domeniul ————————————————— */}
      <section className="bg-ivory texture-grain">
        <div className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="font-serif text-lg italic leading-none text-gold-dim">03</span>
              <span className="small-caps-label text-gold-dim">Domeniul</span>
              <span className="h-px flex-1 bg-gold/35" />
            </div>
            <h2 className="heading-display mt-6 max-w-4xl font-serif text-4xl font-light leading-[1.05] text-ink-deep sm:text-5xl lg:text-6xl">
              Alei, grădină și colonade albe.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5">
            <Reveal className="col-span-2 lg:col-span-1">
              <Figure
                src="/photos/venue-day.jpg"
                alt="Domeniul Coroana Events, vedere de zi"
                frameClassName="aspect-[4/3] lg:aspect-[3/4]"
              />
            </Reveal>
            <Reveal delay={90}>
              <Figure src="/photos/venue-garden.jpg" alt="Grădina domeniului Coroana" ratio="3/4" />
            </Reveal>
            <Reveal delay={150}>
              <Figure src="/photos/venue-cols.jpg" alt="Colonadele albe din domeniul Coroana" ratio="3/4" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————————————————— 04 · Cazare pentru invitați ————————————————— */}
      <section className="border-t border-linen bg-paper texture-grain">
        <div className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-7">
              <Figure
                src="/photos/room-1.jpg"
                alt="Cameră renovată la Hotel Coroana"
                ratio="4/3"
              />
            </Reveal>
            <Reveal className="lg:col-span-5" delay={120}>
              <div className="flex items-center gap-4">
                <span className="font-serif text-lg italic leading-none text-gold-dim">04</span>
                <span className="small-caps-label text-gold-dim">Cazare pentru invitați</span>
              </div>
              <h2 className="heading-display mt-6 font-serif text-3xl font-light leading-[1.05] text-ink-deep sm:text-4xl">
                Nimeni nu mai are grijă de drumul spre casă.
              </h2>
              <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-charcoal/85">
                Hotelul Coroana are 43 de camere chiar pe domeniu. Nașii,
                părinții sau invitații veniți din alte orașe pot rămâne peste noapte, la câțiva
                pași de salon — fără taxi, fără drum lung după petrecere.
              </p>
              <a
                href={`tel:${TEL_RECEPTION}`}
                className="mt-9 inline-flex items-center justify-center bg-ink px-8 py-4 font-sans text-[0.72rem] font-bold uppercase tracking-label text-ivory transition-colors hover:bg-ink-soft"
              >
                Rezervări camere · +40 232 711 500
              </a>
              <p className="mt-3 font-sans text-[0.68rem] uppercase tracking-label text-stone">
                Camerele renovate
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————————————————— 05 · FAQ ————————————————— */}
      <section className="border-t border-linen bg-ivory texture-grain">
        <div className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="font-serif text-lg italic leading-none text-gold-dim">05</span>
              <span className="small-caps-label text-gold-dim">Întrebări frecvente</span>
              <span className="h-px flex-1 bg-gold/35" />
            </div>
          </Reveal>

          <div className="mt-12 divide-y divide-linen border-t border-linen">
            {FAQ.map((item) => (
              <Reveal key={item.q}>
                <div className="py-7">
                  <p className="font-serif text-xl italic text-ink-deep sm:text-2xl">{item.q}</p>
                  <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-charcoal/85">
                    {item.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————————————————— Contact / Closing ————————————————— */}
      <section className="bg-ink-deep py-20 text-center text-ivory texture-grain-dark sm:py-28">
        <div className="mx-auto max-w-page px-5 sm:px-8">
          <Reveal>
            <p className="heading-display mx-auto max-w-2xl font-serif text-3xl font-light italic leading-snug text-ivory sm:text-4xl">
              Hai să vorbim despre nunta voastră.
            </p>
            <p className="mt-6 font-serif text-2xl">
              <a className="hover:text-gold-bright" href={`tel:${TEL_EVENTS}`}>
                +40 786 298 932
              </a>
            </p>
            <p className="mt-2 font-serif text-lg italic text-ivory/85">
              <a className="hover:text-gold-bright" href="mailto:events@hotelcoroana.ro">
                events@hotelcoroana.ro
              </a>
            </p>
            <p className="mt-10 font-serif text-xl text-ivory sm:text-2xl">
              Șoseaua Iași – Târgu Frumos KM31 (DN28)
            </p>
            <p className="mt-1 font-serif text-lg italic text-ivory/75">
              705311 Războieni, jud. Iași
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block border-b border-gold pb-0.5 font-sans text-[0.72rem] font-bold uppercase tracking-label text-gold-bright transition-colors hover:text-ivory"
            >
              Deschide în Google Maps
            </a>
            <p className="mt-10">
              <a href="/" className="font-sans text-[0.72rem] font-bold uppercase tracking-label text-ivory/60 transition-colors hover:text-gold-bright">
                ← Înapoi la Hotel & Restaurant Coroana
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ————————————————— Footer ————————————————— */}
      <footer className="bg-ink-deep py-10 text-center texture-grain-dark">
        <p className="font-sans text-[0.68rem] uppercase tracking-label text-ivory/35">
          © 2026 Hotel & Restaurant Coroana · Șoseaua Iași – Târgu Frumos KM31, Războieni, Iași
        </p>
        <p className="mt-4">
          <a
            href="/confidentialitate"
            className="font-sans text-[0.68rem] uppercase tracking-label text-ivory/45 transition-colors hover:text-gold-bright"
          >
            Politica de confidențialitate
          </a>
        </p>
      </footer>
    </main>
  );
}
