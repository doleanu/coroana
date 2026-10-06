import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { DICTS, LOCALES, localePath, type Locale } from "@/lib/dict";

const TEL_RECEPTION = "+40232711500";
const TEL_RECEPTION_2 = "+40755081783";
const TEL_EVENTS = "+40786298932";
const MAPS_URL = "https://maps.app.goo.gl/XToMctMBVkWNofkR9";
const MENU_URL = "https://meniu.hotelcoroana.ro";

function SectionHeading({
  no,
  label,
  title,
  dark = false,
}: {
  no: string;
  label: string;
  title: React.ReactNode;
  dark?: boolean;
}) {
  const goldText = dark ? "text-gold-bright" : "text-gold-dim";
  return (
    <div>
      <div className="flex items-center gap-4">
        <span className={`font-serif text-lg italic leading-none ${goldText}`}>{no}</span>
        <span className={`small-caps-label ${goldText}`}>{label}</span>
        <span className={`h-px flex-1 ${dark ? "bg-gold/25" : "bg-gold/35"}`} />
      </div>
      <h2
        className={`heading-display mt-6 max-w-4xl font-serif text-4xl font-light leading-[1.05] sm:text-5xl lg:text-6xl ${
          dark ? "text-ivory" : "text-ink-deep"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

function Figure({
  src,
  alt,
  ratio,
  frameClassName = "",
  caption,
  className = "",
  eager = false,
}: {
  src: string;
  alt: string;
  ratio?: string;
  frameClassName?: string;
  caption?: string;
  className?: string;
  eager?: boolean;
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
          priority={eager}
        />
      </div>
      {caption ? (
        <figcaption className="mt-2 font-sans text-[0.68rem] uppercase tracking-label text-stone">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function LangSwitcher({
  current,
  className = "",
  linkClass = "",
  activeClass = "",
}: {
  current: Locale;
  className?: string;
  linkClass?: string;
  activeClass?: string;
}) {
  return (
    <nav aria-label="Languages" className={className}>
      {LOCALES.map((l) => (
        <a
          key={l}
          href={localePath(l)}
          hrefLang={l}
          aria-current={l === current ? "page" : undefined}
          className={`${linkClass} ${l === current ? activeClass : ""}`}
        >
          {l.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}

const HALLS = [
  { name: "Salon Prestige", cap: "400–600", pct: 100 },
  { name: "Salon Moonlight", cap: "200–350", pct: 58 },
  { name: "Salon Celeste", cap: "100–180", pct: 30 },
  { name: "Salon Serenity", cap: null, pct: 12 },
];

export default function Site({ locale }: { locale: Locale }) {
  const d = DICTS[locale];
  return (
    <main>
      <JsonLd />
      {/* ————————————————— Header ————————————————— */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-deep/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8">
          <a href={localePath(locale)} aria-label="Hotel & Restaurant Coroana">
            <Image
              src="/logo-coroana.png"
              alt="Coroana — A glamorous place to be"
              width={419}
              height={210}
              priority
              className="h-10 w-auto sm:h-11"
            />
          </a>
          <nav className="hidden items-center gap-8 font-sans text-[0.72rem] font-semibold uppercase tracking-label text-ivory/80 lg:flex">
            <a className="transition-colors hover:text-gold-bright" href="#hotel">
              {d.nav.hotel}
            </a>
            <a className="transition-colors hover:text-gold-bright" href="#restaurant">
              {d.nav.restaurant}
            </a>
            <a className="transition-colors hover:text-gold-bright" href="#evenimente">
              {d.nav.events}
            </a>
            <a className="transition-colors hover:text-gold-bright" href="#contact">
              {d.nav.contact}
            </a>
          </nav>
          <div className="flex items-center gap-4 sm:gap-5">
            <LangSwitcher
              current={locale}
              className="hidden items-center gap-2.5 font-sans text-[0.65rem] font-semibold tracking-[0.14em] text-ivory/50 md:flex"
              linkClass="transition-colors hover:text-gold-bright"
              activeClass="text-gold-bright"
            />
            <a
              href={`tel:${TEL_RECEPTION}`}
              className="rounded-full border border-gold/60 px-4 py-2 font-sans text-[0.72rem] font-bold uppercase tracking-label text-gold-bright transition-colors hover:bg-gold hover:text-ink-deep sm:px-5"
            >
              <span className="hidden sm:inline">+40 232 711 500</span>
              <span className="sm:hidden">{d.reserveShort}</span>
            </a>
          </div>
        </div>
      </header>

      {/* ————————————————— Hero ————————————————— */}
      <section className="relative flex min-h-[94svh] items-end overflow-hidden bg-ink-deep">
        <Image
          src="/photos/venue-pano.jpg"
          alt={d.hero.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/40 to-ink-deep/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep/80 via-ink-deep/35 to-transparent" />
        <div className="relative mx-auto w-full max-w-page px-5 pb-16 pt-40 sm:px-8 sm:pb-20">
          <Reveal>
            <p className="small-caps-label text-ivory/75">{d.hero.kicker}</p>
            <h1 className="heading-display mt-5 max-w-3xl font-serif text-5xl font-light leading-[1.02] text-ivory sm:text-6xl lg:text-7xl">
              A glamorous <span className="italic text-gold-bright">place to be.</span>
            </h1>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-ivory/85 sm:text-lg">
              {d.hero.sub}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={`tel:${TEL_RECEPTION}`}
                className="inline-flex items-center justify-center bg-gold px-8 py-4 font-sans text-[0.72rem] font-bold uppercase tracking-label text-ink-deep transition-colors hover:bg-gold-bright"
              >
                {d.hero.ctaRoom}
              </a>
              <a
                href="#evenimente"
                className="inline-flex items-center justify-center border border-ivory/50 px-8 py-4 font-sans text-[0.72rem] font-bold uppercase tracking-label text-ivory transition-colors hover:border-gold-bright hover:text-gold-bright"
              >
                {d.hero.ctaEvent}
              </a>
            </div>
            <p className="mt-8 font-sans text-sm text-ivory/70">
              <span className="text-gold-bright">★</span>{" "}
              <strong className="font-bold text-ivory">4,5</strong> · {d.hero.rating}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ————————————————— Stats band ————————————————— */}
      <section className="border-b border-linen bg-paper texture-grain">
        <div className="mx-auto grid max-w-page grid-cols-2 gap-x-6 gap-y-8 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-4">
          {d.stats.map(([n, l]) => (
            <div key={l}>
              <p className="font-serif text-4xl font-light text-ink-deep sm:text-5xl">{n}</p>
              <p className="mt-1 font-sans text-[0.72rem] uppercase tracking-label text-stone">
                {l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ————————————————— 01 · Hotel ————————————————— */}
      <section id="hotel" className="scroll-mt-20 bg-paper texture-grain">
        <div className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionHeading no="01" label={d.hotel.label} title={d.hotel.title} />
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-7">
              <Figure
                src="/photos/room-1.jpg"
                alt={d.hotel.altRoom}
                ratio="4/3"
                caption={d.hotel.captionRenovated}
                eager
              />
              <div className="mt-5 grid grid-cols-2 gap-5">
                <Figure src="/photos/room-2.jpg" alt={d.hotel.altRoom2} ratio="1/1" />
                <Figure
                  src="/photos/room-5.jpg"
                  alt={d.hotel.altStandard}
                  ratio="1/1"
                  caption={d.hotel.captionStandard}
                />
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={120}>
              <p className="max-w-md font-sans text-base leading-relaxed text-charcoal/85">
                {d.hotel.para}
              </p>
              <ul className="mt-8 space-y-0 border-t border-linen">
                {d.hotel.amenities.map((f) => (
                  <li
                    key={f}
                    className="flex items-center justify-between border-b border-linen py-3.5 font-sans text-sm text-charcoal"
                  >
                    {f}
                    <span aria-hidden className="text-gold">
                      ✦
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={`tel:${TEL_RECEPTION}`}
                className="mt-9 inline-flex items-center justify-center bg-ink px-8 py-4 font-sans text-[0.72rem] font-bold uppercase tracking-label text-ivory transition-colors hover:bg-ink-soft"
              >
                {d.hotel.cta}
              </a>
            </Reveal>
          </div>

          {/* Rates */}
          <Reveal className="mt-16">
            <div className="flex items-center gap-4">
              <p className="small-caps-label text-gold-dim">{d.hotel.rates.label}</p>
              <span className="h-px flex-1 bg-gold/35" />
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {(
                [
                  [d.hotel.rates.wingA, d.hotel.rates.rowsA],
                  [d.hotel.rates.wingB, d.hotel.rates.rowsB],
                ] as [string, [string, string][]][]
              ).map(([wing, rows]) => (
                <div key={wing} className="border border-linen bg-ivory p-7 sm:p-9">
                  <p className="font-serif text-2xl italic text-ink-deep">{wing}</p>
                  <ul className="mt-4">
                    {rows.map(([name, price]) => (
                      <li
                        key={name}
                        className="flex items-baseline justify-between gap-4 border-b border-linen py-3.5 last:border-0"
                      >
                        <span className="font-sans text-sm text-charcoal">{name}</span>
                        <span className="whitespace-nowrap font-serif text-lg text-ink-deep">
                          {price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 font-sans text-xs italic text-stone">
              * {d.hotel.rates.note}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ————————————————— 02 · Restaurant ————————————————— */}
      <section
        id="restaurant"
        className="scroll-mt-20 border-t border-linen bg-ivory texture-grain"
      >
        <div className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionHeading no="02" label={d.restaurant.label} title={d.restaurant.title} />
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-charcoal/85">
              {d.restaurant.para}
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <Figure
              src="/photos/rest-3.jpg"
              alt={d.restaurant.altMain}
              ratio="21/10"
              caption={d.restaurant.caption}
            />
          </Reveal>

          <div className="mt-5 grid grid-cols-2 gap-5 lg:grid-cols-3">
            <Reveal>
              <Figure src="/photos/rest-4.jpg" alt={d.restaurant.altCorner} ratio="3/4" />
            </Reveal>
            <Reveal delay={90}>
              <Figure src="/photos/rest-5.jpg" alt={d.restaurant.altTables} ratio="3/4" />
            </Reveal>
            <Reveal className="col-span-2 lg:col-span-1" delay={180}>
              <Figure
                src="/photos/rest-6.jpg"
                alt={d.restaurant.altDetail}
                ratio="3/4"
                className="hidden lg:block"
              />
              <Figure
                src="/photos/rest-2.jpg"
                alt={d.restaurant.altEntrance}
                ratio="21/10"
                className="lg:hidden"
              />
            </Reveal>
          </div>

          <Reveal className="mt-16">
            <div className="flex items-center gap-4">
              <p className="small-caps-label text-gold-dim">{d.restaurant.kitchen}</p>
              <span className="h-px flex-1 bg-gold/35" />
            </div>
            <div className="strip mt-5 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-6 lg:gap-4 lg:overflow-visible lg:px-0">
              {d.restaurant.foods.map(([img, name]) => (
                <figure
                  key={img}
                  className="w-56 flex-none snap-start border border-linen bg-paper p-3 sm:w-64 lg:w-auto"
                >
                  <div className="photo-frame relative" style={{ aspectRatio: "3/2" }}>
                    <Image
                      src={`/photos/${img}.jpg`}
                      alt={name}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 16vw, 224px"
                    />
                  </div>
                  <figcaption className="mt-3 font-serif text-lg italic leading-snug text-ink-deep">
                    {name}
                  </figcaption>
                </figure>
              ))}
            </div>
            <a
              href={MENU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center justify-center bg-ink px-8 py-4 font-sans text-[0.72rem] font-bold uppercase tracking-label text-ivory transition-colors hover:bg-ink-soft"
            >
              {d.restaurant.viewMenu}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ————————————————— 03 · Coroana Events ————————————————— */}
      <section
        id="evenimente"
        className="scroll-mt-20 bg-ink-deep pb-20 pt-20 text-ivory texture-grain-dark sm:pb-28 sm:pt-28"
      >
        <div className="mx-auto max-w-page px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="font-serif text-lg italic leading-none text-gold-bright">
                03
              </span>
              <span className="small-caps-label text-gold-bright">{d.events.label}</span>
              <span className="h-px flex-1 bg-gold/25" />
              <Image
                src="/logo-events-alb.png"
                alt="Coroana Events"
                width={203}
                height={100}
                className="h-12 w-auto sm:h-14"
              />
            </div>
            <h2 className="heading-display mt-6 max-w-4xl font-serif text-4xl font-light leading-[1.05] text-ivory sm:text-5xl lg:text-6xl">
              {d.events.titlePre}
              <span className="italic text-gold-bright">{d.events.titleEm}</span>
              {d.events.titlePost}
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-ivory/80">
              {d.events.sub}
            </p>
          </Reveal>

          {/* Photo mosaic */}
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
            <Reveal className="col-span-2">
              <Figure src="/photos/ball-1.jpg" alt={d.events.altWedding} ratio="16/10" />
            </Reveal>
            <Reveal delay={90}>
              <Figure src="/photos/ball-5.jpg" alt={d.events.altTable} ratio="4/5" />
            </Reveal>
            <Reveal delay={150}>
              <Figure src="/photos/ball-4.jpg" alt={d.events.altCandy} ratio="4/5" />
            </Reveal>
            <Reveal>
              <Figure
                src="/photos/ball-2.jpg"
                alt={d.events.altHall}
                frameClassName="aspect-[4/3] lg:aspect-[6/7]"
              />
            </Reveal>
            <Reveal delay={90}>
              <Figure
                src="/photos/conf-1.jpg"
                alt={d.events.altConference}
                frameClassName="aspect-[4/3] lg:aspect-[6/7]"
              />
            </Reveal>
            <Reveal className="col-span-2" delay={150}>
              <Figure src="/photos/banq-2.jpg" alt={d.events.altBanquet} ratio="16/9" />
            </Reveal>
          </div>

          {/* Halls */}
          <Reveal className="mt-16">
            <div className="flex items-center gap-4">
              <p className="small-caps-label text-gold-bright">{d.events.hallsLabel}</p>
              <span className="h-px flex-1 bg-gold/25" />
            </div>
            <div className="mt-6 space-y-6">
              {HALLS.map((h) => (
                <div key={h.name}>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-serif text-xl italic text-ivory sm:text-2xl">
                      {h.name}
                    </p>
                    <p className="font-sans text-[0.7rem] uppercase tracking-label text-ivory/70">
                      {h.cap ?? d.events.upTo50} {d.events.persons}
                    </p>
                  </div>
                  <div className="mt-2.5 h-px w-full bg-white/10">
                    <div className="hall-bar h-px bg-gold" style={{ width: `${h.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 font-sans text-sm text-ivory/60">{d.events.types}</p>
          </Reveal>

          {/* Domain */}
          <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5">
            <Reveal className="col-span-2 lg:col-span-1">
              <Figure
                src="/photos/venue-day.jpg"
                alt={d.events.altEstate}
                frameClassName="aspect-[4/3] lg:aspect-[3/4]"
                caption={d.events.estateCaption}
              />
            </Reveal>
            <Reveal delay={90}>
              <Figure src="/photos/venue-garden.jpg" alt={d.events.altGarden} ratio="3/4" />
            </Reveal>
            <Reveal delay={150}>
              <Figure src="/photos/venue-night-1.jpg" alt={d.events.altNight} ratio="3/4" />
            </Reveal>
          </div>

          <Reveal className="mt-14">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={`tel:${TEL_EVENTS}`}
                className="inline-flex items-center justify-center bg-gold px-8 py-4 text-center font-sans text-[0.72rem] font-bold uppercase tracking-label text-ink-deep transition-colors hover:bg-gold-bright"
              >
                {d.events.ctaTel}
              </a>
              <a
                href="mailto:events@hotelcoroana.ro"
                className="inline-flex items-center justify-center border border-ivory/40 px-8 py-4 font-sans text-[0.72rem] font-bold uppercase tracking-label text-ivory transition-colors hover:border-gold-bright hover:text-gold-bright"
              >
                events@hotelcoroana.ro
              </a>
            </div>
            {locale === "ro" ? (
              <a
                href="/nunta"
                className="mt-6 inline-block border-b border-gold-bright/60 pb-0.5 font-sans text-[0.72rem] font-bold uppercase tracking-label text-gold-bright transition-colors hover:text-ivory"
              >
                {d.events.viewWeddingPage}
              </a>
            ) : null}
          </Reveal>
        </div>
      </section>

      {/* ————————————————— Night band ————————————————— */}
      <section className="relative flex min-h-[52svh] items-end overflow-hidden bg-ink-deep">
        <Image
          src="/photos/venue-night-2.jpg"
          alt={d.night.alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/90 via-transparent to-transparent" />
        <div className="relative mx-auto w-full max-w-page px-5 pb-14 pt-32 sm:px-8">
          <Reveal>
            <p className="heading-display max-w-2xl font-serif text-3xl font-light italic leading-snug text-ivory sm:text-4xl">
              {d.night.quote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ————————————————— 04 · Contact ————————————————— */}
      <section id="contact" className="scroll-mt-20 bg-paper texture-grain">
        <div className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionHeading no="04" label={d.contact.label} title={d.contact.title} />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full border border-linen bg-ivory p-8 sm:p-10">
                <p className="small-caps-label text-gold-dim">{d.contact.receptionLabel}</p>
                <p className="mt-5 font-serif text-2xl text-ink-deep">
                  <a className="hover:text-gold-dim" href={`tel:${TEL_RECEPTION}`}>
                    +40 232 711 500
                  </a>
                </p>
                <p className="mt-1 font-serif text-2xl text-ink-deep">
                  <a className="hover:text-gold-dim" href={`tel:${TEL_RECEPTION_2}`}>
                    +40 755 081 783
                  </a>
                </p>
                <p className="mt-3 font-serif text-lg italic text-charcoal/80">
                  <a className="hover:text-gold-dim" href="mailto:receptie@hotelcoroana.ro">
                    receptie@hotelcoroana.ro
                  </a>
                </p>
                <p className="mt-5 font-sans text-sm leading-relaxed text-stone">
                  {d.contact.receptionNote}
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full bg-ink p-8 text-ivory sm:p-10">
                <p className="small-caps-label text-gold-bright">{d.contact.eventsLabel}</p>
                <p className="mt-5 font-serif text-2xl">
                  <a className="hover:text-gold-bright" href={`tel:${TEL_EVENTS}`}>
                    +40 786 298 932
                  </a>
                </p>
                <p className="mt-3 font-serif text-lg italic text-ivory/85">
                  <a
                    className="hover:text-gold-bright"
                    href="mailto:events@hotelcoroana.ro"
                  >
                    events@hotelcoroana.ro
                  </a>
                </p>
                <p className="mt-5 font-sans text-sm leading-relaxed text-ivory/70">
                  {d.contact.eventsNote}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-14 text-center">
            <p className="font-serif text-xl text-ink-deep sm:text-2xl">
              {d.contact.address1}
            </p>
            <p className="mt-1 font-serif text-lg italic text-charcoal/75">
              {d.contact.address2}
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block border-b border-gold pb-0.5 font-sans text-[0.72rem] font-bold uppercase tracking-label text-gold-dim transition-colors hover:text-ink"
            >
              {d.contact.maps}
            </a>
            <p className="mt-10 font-sans text-[0.7rem] uppercase tracking-label text-stone">
              Facebook · Hotel Coroana Iași &nbsp;&nbsp; Facebook · Coroana Events
              &nbsp;&nbsp; Instagram · @coroana.events
            </p>
          </Reveal>
        </div>
      </section>

      {/* ————————————————— Footer ————————————————— */}
      <footer className="bg-ink-deep py-14 text-center texture-grain-dark">
        <Image
          src="/logo-coroana-alb.png"
          alt="Coroana"
          width={315}
          height={160}
          className="mx-auto h-16 w-auto"
        />
        <LangSwitcher
          current={locale}
          className="mt-7 flex items-center justify-center gap-4 font-sans text-[0.68rem] font-semibold tracking-[0.14em] text-ivory/45"
          linkClass="transition-colors hover:text-gold-bright"
          activeClass="text-gold-bright"
        />
        <p className="mt-6 font-sans text-sm text-ivory/65">{d.footer.copyright}</p>
        <p className="mt-4">
          <a
            href="/confidentialitate"
            className="font-sans text-[0.68rem] uppercase tracking-label text-ivory/45 transition-colors hover:text-gold-bright"
          >
            {d.footer.privacy}
          </a>
        </p>
      </footer>
    </main>
  );
}
