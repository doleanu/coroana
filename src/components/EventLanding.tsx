import Image from "next/image";
import LegalLine from "@/components/LegalLine";
import Reveal from "@/components/Reveal";

export const TEL_RECEPTION = "+40232711500";
export const TEL_EVENTS = "+40786298932";
export const EMAIL_EVENTS = "events@hotelcoroana.ro";
const MAPS_URL = "https://maps.app.goo.gl/XToMctMBVkWNofkR9";

export type LandingConfig = {
  slug: string;
  breadcrumbName: string;
  navLabel: string;
  heroImage: string;
  heroAlt: string;
  kicker: string;
  h1: string;
  h1Italic: string;
  lead: string;
  mailSubject: string;
  ctaLabel: string;
  offer?: {
    label: string;
    big: string;
    unit: string;
    items: string[];
    note: string;
  };
  whyTitle: string;
  why: { title: string; text: string }[];
  halls?: {
    title: string;
    intro: string;
    rows: { name: string; cap: string; pct: number }[];
    note: string;
  };
  extra?: { label: string; title: string; text: string; cta: string; href?: string };
  photoSection?: { src: string; alt: string; title: string; text: string };
  faq: { q: string; a: string }[];
  closing: string;
  serviceJsonLd: Record<string, unknown>;
};

const OTHER_PAGES = [
  { href: "/conferinte", label: "Conferințe" },
  { href: "/petreceri-firma", label: "Petreceri de firmă" },
  { href: "/catering-firme", label: "Catering pentru firme" },
  { href: "/pomeniri-praznice", label: "Pomeniri și praznice" },
  { href: "/nunta", label: "Nunți & evenimente" },
];

function SectionHead({ n, label, dark = false }: { n: string; label: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-4">
      <span
        className={`font-serif text-lg italic leading-none ${dark ? "text-gold-bright" : "text-gold-dim"}`}
      >
        {n}
      </span>
      <span className={`small-caps-label ${dark ? "text-gold-bright" : "text-gold-dim"}`}>{label}</span>
      <span className={`h-px flex-1 ${dark ? "bg-gold/25" : "bg-gold/35"}`} />
    </div>
  );
}

export default function EventLanding({ c }: { c: LandingConfig }) {
  const url = `https://hotelcoroana.ro/${c.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Acasă", item: "https://hotelcoroana.ro/" },
          { "@type": "ListItem", position: 2, name: c.breadcrumbName, item: url },
        ],
      },
      {
        ...c.serviceJsonLd,
        "@type": "Service",
        url,
        provider: {
          "@type": "Organization",
          name: "Coroana Events — Hotel & Restaurant Coroana",
          url: "https://hotelcoroana.ro/",
          telephone: "+40 786 298 932",
          email: EMAIL_EVENTS,
        },
        areaServed: "Județul Iași, România",
      },
    ],
  };

  const mailto = `mailto:${EMAIL_EVENTS}?subject=${encodeURIComponent(c.mailSubject)}`;
  let n = 0;
  const next = () => String(++n).padStart(2, "0");

  return (
    <main>
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
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
            <span className="text-gold-bright">{c.navLabel}</span>
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

      {/* Hero */}
      <section className="relative flex min-h-[80svh] items-end overflow-hidden bg-ink-deep">
        <Image src={c.heroImage} alt={c.heroAlt} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/55 to-ink-deep/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep/85 via-ink-deep/45 to-transparent" />
        <div className="relative mx-auto w-full max-w-page px-5 pb-16 pt-40 sm:px-8 sm:pb-20">
          <Reveal>
            <p className="small-caps-label text-ivory/75">{c.kicker}</p>
            <h1 className="heading-display mt-5 max-w-3xl font-serif text-5xl font-light leading-[1.02] text-ivory sm:text-6xl lg:text-7xl">
              {c.h1} <span className="italic text-gold-bright">{c.h1Italic}</span>
            </h1>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-ivory/85 sm:text-lg">{c.lead}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={`tel:${TEL_EVENTS}`}
                className="inline-flex items-center justify-center bg-gold px-8 py-4 font-sans text-[0.72rem] font-bold uppercase tracking-label text-ink-deep transition-colors hover:bg-gold-bright"
              >
                {c.ctaLabel} · +40 786 298 932
              </a>
              <a
                href={mailto}
                className="inline-flex items-center justify-center border border-ivory/50 px-8 py-4 font-sans text-[0.72rem] font-bold uppercase tracking-label text-ivory transition-colors hover:border-gold-bright hover:text-gold-bright"
              >
                Cere ofertă pe e-mail
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Offer */}
      {c.offer && (
        <section className="bg-ink-deep text-ivory texture-grain-dark">
          <div className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
            <Reveal>
              <div className="border border-gold/40 p-8 sm:p-12">
                <p className="small-caps-label text-gold-bright">{c.offer.label}</p>
                <p className="mt-4 font-serif text-6xl font-light text-ivory sm:text-7xl">
                  {c.offer.big}{" "}
                  <span className="font-sans text-sm uppercase tracking-label text-ivory/70">{c.offer.unit}</span>
                </p>
                <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                  {c.offer.items.map((it) => (
                    <li key={it} className="flex gap-3 font-sans text-base leading-relaxed text-ivory/90">
                      <span className="text-gold-bright">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 font-sans text-sm text-ivory/70">{c.offer.note}</p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Why */}
      <section className="bg-paper texture-grain">
        <div className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionHead n={next()} label="De ce Coroana" />
            <h2 className="heading-display mt-6 max-w-4xl font-serif text-4xl font-light leading-[1.05] text-ink-deep sm:text-5xl lg:text-6xl">
              {c.whyTitle}
            </h2>
          </Reveal>
          <div
            className={`mt-12 grid gap-x-8 gap-y-10 ${
              c.why.length === 3 ? "md:grid-cols-3" : "sm:grid-cols-2"
            }`}
          >
            {c.why.map((f) => (
              <Reveal key={f.title}>
                <p className="font-serif text-xl italic text-ink-deep sm:text-2xl">{f.title}</p>
                <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-charcoal/85">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Extra section */}
      {c.extra && (
        <section className="border-t border-linen bg-ivory texture-grain">
          <div className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-24">
            <Reveal>
              <SectionHead n={next()} label={c.extra.label} />
              <h2 className="heading-display mt-6 max-w-3xl font-serif text-3xl font-light leading-[1.1] text-ink-deep sm:text-4xl lg:text-5xl">
                {c.extra.title}
              </h2>
              <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-charcoal/85">{c.extra.text}</p>
              <a
                href={c.extra.href ?? `tel:${TEL_EVENTS}`}
                className="mt-8 inline-flex items-center justify-center bg-gold px-8 py-4 font-sans text-[0.72rem] font-bold uppercase tracking-label text-ink-deep transition-colors hover:bg-gold-bright"
              >
                {c.extra.href ? c.extra.cta : `${c.extra.cta} · +40 786 298 932`}
              </a>
            </Reveal>
          </div>
        </section>
      )}

      {/* Halls */}
      {c.halls && (
        <section className="border-t border-linen bg-ink-deep py-20 text-ivory texture-grain-dark sm:py-28">
          <div className="mx-auto max-w-page px-5 sm:px-8">
            <Reveal>
              <SectionHead n={next()} label="Sălile" dark />
              <h2 className="heading-display mt-6 max-w-4xl font-serif text-4xl font-light leading-[1.05] text-ivory sm:text-5xl lg:text-6xl">
                {c.halls.title}
              </h2>
              <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-ivory/80">{c.halls.intro}</p>
            </Reveal>
            <Reveal className="mt-14">
              <div className="space-y-6">
                {c.halls.rows.map((h) => (
                  <div key={h.name}>
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="font-serif text-xl italic text-ivory sm:text-2xl">{h.name}</p>
                      <p className="font-sans text-[0.7rem] uppercase tracking-label text-ivory/70">{h.cap}</p>
                    </div>
                    <div className="mt-2.5 h-px w-full bg-white/10">
                      <div className="hall-bar h-px bg-gold" style={{ width: `${h.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 font-sans text-sm text-ivory/60">{c.halls.note}</p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Photo section */}
      {c.photoSection && (
        <section className="border-t border-linen bg-ivory texture-grain">
          <div className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-28">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <Reveal className="lg:col-span-7">
                <figure>
                  <div className="photo-frame relative" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={c.photoSection.src}
                      alt={c.photoSection.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 58vw, 100vw"
                    />
                  </div>
                </figure>
              </Reveal>
              <Reveal className="lg:col-span-5" delay={120}>
                <SectionHead n={next()} label="În detaliu" />
                <h2 className="heading-display mt-6 font-serif text-3xl font-light leading-[1.05] text-ink-deep sm:text-4xl">
                  {c.photoSection.title}
                </h2>
                <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-charcoal/85">
                  {c.photoSection.text}
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="border-t border-linen bg-paper texture-grain">
        <div className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionHead n={next()} label="Întrebări frecvente" />
          </Reveal>
          <div className="mt-12 divide-y divide-linen border-t border-linen">
            {c.faq.map((item) => (
              <Reveal key={item.q}>
                <div className="py-7">
                  <p className="font-serif text-xl italic text-ink-deep sm:text-2xl">{item.q}</p>
                  <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-charcoal/85">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing / contact */}
      <section className="bg-ink-deep py-20 text-center text-ivory texture-grain-dark sm:py-28">
        <div className="mx-auto max-w-page px-5 sm:px-8">
          <Reveal>
            <p className="heading-display mx-auto max-w-2xl font-serif text-3xl font-light italic leading-snug text-ivory sm:text-4xl">
              {c.closing}
            </p>
            <p className="mt-6 font-serif text-2xl">
              <a className="hover:text-gold-bright" href={`tel:${TEL_EVENTS}`}>
                +40 786 298 932
              </a>
            </p>
            <p className="mt-2 font-serif text-lg italic text-ivory/85">
              <a className="hover:text-gold-bright" href={mailto}>
                {EMAIL_EVENTS}
              </a>
            </p>
            <p className="mt-10 font-serif text-xl text-ivory sm:text-2xl">Șoseaua Iași – Târgu Frumos KM31 (DN28)</p>
            <p className="mt-1 font-serif text-lg italic text-ivory/75">705311 Războieni, jud. Iași</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block border-b border-gold pb-0.5 font-sans text-[0.72rem] font-bold uppercase tracking-label text-gold-bright transition-colors hover:text-ivory"
            >
              Deschide în Google Maps
            </a>
            <p className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {OTHER_PAGES.filter((p) => p.href !== `/${c.slug}`).map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  className="font-sans text-[0.72rem] font-bold uppercase tracking-label text-ivory/60 transition-colors hover:text-gold-bright"
                >
                  {p.label}
                </a>
              ))}
            </p>
            <p className="mt-6">
              <a
                href="/"
                className="font-sans text-[0.72rem] font-bold uppercase tracking-label text-ivory/60 transition-colors hover:text-gold-bright"
              >
                ← Înapoi la Hotel & Restaurant Coroana
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink-deep py-10 text-center texture-grain-dark">
        <p className="font-sans text-[0.68rem] uppercase tracking-label text-ivory/35">
          © 2026 Hotel & Restaurant Coroana · Șoseaua Iași – Târgu Frumos KM31, Războieni, Iași
        </p>
        <LegalLine />
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
