import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de confidențialitate — Hotel & Restaurant Coroana",
  description:
    "Politica de confidențialitate a site-ului hotelcoroana.ro: ce date colectăm, de ce, și cum ne poți contacta în legătură cu datele tale personale.",
  alternates: { canonical: "/confidentialitate" },
};

export default function ConfidentialitatePage() {
  return (
    <main className="bg-paper texture-grain">
      <div className="mx-auto max-w-2xl px-5 py-28 sm:px-8 sm:py-32">
        <a
          href="/"
          className="font-sans text-[0.72rem] font-bold uppercase tracking-label text-gold-dim transition-colors hover:text-ink"
        >
          ← Înapoi la Hotel & Restaurant Coroana
        </a>

        <h1 className="heading-display mt-8 font-serif text-4xl font-light leading-[1.05] text-ink-deep sm:text-5xl">
          Politica de confidențialitate
        </h1>
        <p className="mt-3 font-sans text-sm text-stone">Ultima actualizare: septembrie 2026</p>

        <div className="mt-10 space-y-8 font-sans text-base leading-relaxed text-charcoal/85">
          <section>
            <h2 className="font-serif text-xl italic text-ink-deep">Cine suntem</h2>
            <p className="mt-2">
              Acest site (hotelcoroana.ro) prezintă serviciile Hotel & Restaurant Coroana,
              situat pe Șoseaua Iași – Târgu Frumos KM31 (DN28), 705311 Războieni, jud. Iași.
              Pentru orice întrebare legată de datele tale personale, ne poți scrie la{" "}
              <a className="text-gold-dim hover:text-ink" href="mailto:receptie@hotelcoroana.ro">
                receptie@hotelcoroana.ro
              </a>{" "}
              sau suna la{" "}
              <a className="text-gold-dim hover:text-ink" href="tel:+40232711500">
                +40 232 711 500
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl italic text-ink-deep">
              Ce date colectăm prin acest site
            </h2>
            <p className="mt-2">
              Site-ul hotelcoroana.ro nu folosește cookie-uri, pixeli de tracking sau
              instrumente de analiză a traficului. Nu colectăm și nu stocăm date personale
              doar prin navigarea pe site.
            </p>
            <p className="mt-2">
              Când ne contactezi telefonic, prin e-mail sau prin formularele de rezervare
              (recepție sau departamentul de evenimente), primim datele pe care ni le oferi
              tu direct — de regulă nume, telefon și adresă de e-mail — și le folosim exclusiv
              pentru a răspunde solicitării tale și a gestiona rezervarea.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl italic text-ink-deep">
              Cât timp păstrăm datele
            </h2>
            <p className="mt-2">
              Păstrăm datele de contact legate de o rezervare doar atât cât este necesar
              pentru derularea acesteia și pentru eventuale obligații legale (de exemplu,
              evidența contabilă), după care le ștergem sau le anonimizăm.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl italic text-ink-deep">Drepturile tale</h2>
            <p className="mt-2">
              Conform Regulamentului General privind Protecția Datelor (GDPR), ai dreptul să
              soliciți accesul la datele tale, corectarea sau ștergerea lor, precum și
              restricționarea prelucrării. Pentru orice solicitare, scrie-ne la{" "}
              <a className="text-gold-dim hover:text-ink" href="mailto:receptie@hotelcoroana.ro">
                receptie@hotelcoroana.ro
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
