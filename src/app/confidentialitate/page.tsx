import type { Metadata } from "next";
import { CookieSettingsButton } from "@/components/ConsentBanner";

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
        <p className="mt-3 font-sans text-sm text-stone">Ultima actualizare: noiembrie 2026</p>

        <div className="mt-10 space-y-8 font-sans text-base leading-relaxed text-charcoal/85">
          <section>
            <h2 className="font-serif text-xl italic text-ink-deep">Cine suntem</h2>
            <p className="mt-2">
              Acest site (hotelcoroana.ro) este operat de EURO D.E.C. SYSTEM SRL (CUI 17907129,
              J2005002177222), cu sediul în Sat Războieni, Comuna Ion Neculce, Str. Cuza Vodă nr. 183,
              jud. Iași, și prezintă serviciile Hotel & Restaurant Coroana,
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
              Dacă nu accepți cookie-urile, navigarea pe hotelcoroana.ro nu încarcă niciun
              instrument de urmărire sau de analiză a traficului și nu colectăm date personale.
            </p>
            <p className="mt-2">
              Când ne contactezi telefonic, prin e-mail sau prin formularele de rezervare
              (recepție sau departamentul de evenimente), primim datele pe care ni le oferi
              tu direct — de regulă nume, telefon și adresă de e-mail — și le folosim exclusiv
              pentru a răspunde solicitării tale și a gestiona rezervarea.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl italic text-ink-deep">Cookie-uri și Google Ads</h2>
            <p className="mt-2">
              Doar dacă accepți în bannerul de cookie-uri, încărcăm eticheta Google Ads, furnizată
              de Google Ireland Limited. O folosim ca să măsurăm dacă reclamele noastre aduc
              cereri: înregistrăm vizita venită dintr-o reclamă și clicul pe un număr de telefon
              sau pe o adresă de e-mail. Nu înregistrăm conținutul apelului sau al mesajului și
              nu folosim aceste date pentru reclame personalizate.
            </p>
            <p className="mt-2">
              Temeiul este consimțământul tău. Eticheta poate seta cookie-uri Google, precum{" "}
              <code>_gcl_au</code>, valabile de regulă 90 de zile, iar Google poate prelucra datele
              și în afara Uniunii Europene, inclusiv în SUA. Alegerea ta o păstrăm în browserul tău,
              ca să nu te întrebăm din nou.
            </p>
            <p className="mt-2">
              Îți poți schimba oricând alegerea: <CookieSettingsButton />. Dacă retragi acordul,
              ștergem cookie-urile Google Ads de pe site și nu mai trimitem măsurători.
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
