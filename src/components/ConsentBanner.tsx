"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LOCALES } from "@/lib/dict";

const AW_ID = "AW-477870583";
const CONVERSION_CALL = `${AW_ID}/oMErCJiC1OsBEPfz7uMB`;
const CONVERSION_EMAIL = `${AW_ID}/InQECN-qxesBEPfz7uMB`;
const STORAGE_KEY = "coroana-consent";
const OPEN_EVENT = "coroana:open-consent";

const COPY: Record<
  string,
  { text: string; accept: string; refuse: string; details: string; settings: string }
> = {
  ro: {
    text: "Folosim un cookie Google Ads doar ca să vedem dacă reclamele noastre aduc cereri. Nu se încarcă nimic până nu accepți.",
    accept: "Accept",
    refuse: "Refuz",
    details: "Detalii",
    settings: "Setări cookie-uri",
  },
  en: {
    text: "We use a Google Ads cookie only to see whether our ads bring in enquiries. Nothing loads until you accept.",
    accept: "Accept",
    refuse: "Decline",
    details: "Details",
    settings: "Cookie settings",
  },
  it: {
    text: "Usiamo un cookie di Google Ads solo per capire se i nostri annunci portano richieste. Non viene caricato nulla finché non accetti.",
    accept: "Accetto",
    refuse: "Rifiuto",
    details: "Dettagli",
    settings: "Impostazioni cookie",
  },
  es: {
    text: "Usamos una cookie de Google Ads solo para ver si nuestros anuncios traen solicitudes. No se carga nada hasta que aceptes.",
    accept: "Acepto",
    refuse: "Rechazo",
    details: "Detalles",
    settings: "Ajustes de cookies",
  },
  de: {
    text: "Wir verwenden ein Google-Ads-Cookie nur, um zu sehen, ob unsere Anzeigen Anfragen bringen. Es wird nichts geladen, bevor du zustimmst.",
    accept: "Akzeptieren",
    refuse: "Ablehnen",
    details: "Details",
    settings: "Cookie-Einstellungen",
  },
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let granted = false;
let tagLoaded = false;

function readChoice(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveChoice(choice: "granted" | "denied") {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Storage blocked: the choice holds for this page view only.
  }
}

function grant() {
  granted = true;
  if (tagLoaded) {
    window.gtag("consent", "update", { ad_storage: "granted", ad_user_data: "granted" });
    return;
  }
  tagLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    // gtag.js only recognises the raw arguments object, not an array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("consent", "default", {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", AW_ID, { allow_ad_personalization_signals: false });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${AW_ID}`;
  document.head.appendChild(script);
}

function revoke() {
  granted = false;
  if (tagLoaded) {
    window.gtag("consent", "update", { ad_storage: "denied", ad_user_data: "denied" });
  }
  const domains = ["", `; domain=${window.location.hostname}`, `; domain=.${window.location.hostname}`];
  for (const entry of document.cookie.split(";")) {
    const name = entry.split("=")[0].trim();
    if (!name.startsWith("_gcl")) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
    }
  }
}

function useCopy() {
  const first = usePathname().split("/")[1];
  return COPY[(LOCALES as readonly string[]).includes(first) ? first : "ro"];
}

/** Reopens the consent banner so a visitor can change their mind later. */
export function CookieSettingsButton() {
  const copy = useCopy();
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      className="underline underline-offset-2 hover:text-gold-bright"
    >
      {copy.settings}
    </button>
  );
}

/**
 * The Google Ads tag loads only after an explicit accept, so a visitor who
 * declines or ignores the banner never contacts Google from this site.
 */
export default function ConsentBanner() {
  const copy = useCopy();
  const [open, setOpen] = useState(false);
  // the owner admin (/admin/*) is not the public site: no banner and no ad tag there
  const isAdmin = usePathname().startsWith("/admin");

  useEffect(() => {
    if (isAdmin) return;
    const choice = readChoice();
    if (choice === "granted") grant();
    else if (choice !== "denied") setOpen(true);

    const onOpen = () => setOpen(true);
    const onClick = (event: MouseEvent) => {
      if (!granted) return;
      const link = (event.target as Element).closest?.("a[href]");
      const href = link?.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) {
        window.gtag("event", "conversion", { send_to: CONVERSION_CALL });
      } else if (href.startsWith("mailto:")) {
        window.gtag("event", "conversion", { send_to: CONVERSION_EMAIL });
      }
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    document.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener(OPEN_EVENT, onOpen);
      document.removeEventListener("click", onClick, true);
    };
  }, [isAdmin]);

  if (isAdmin || !open) return null;

  const choose = (choice: "granted" | "denied") => {
    saveChoice(choice);
    if (choice === "granted") grant();
    else revoke();
    setOpen(false);
  };

  const button =
    "min-h-11 flex-1 border border-gold px-5 font-sans text-[0.72rem] font-bold uppercase tracking-label text-ivory transition-colors hover:bg-gold hover:text-ink-deep sm:flex-none";

  return (
    <div
      role="region"
      aria-label={copy.settings}
      className="fixed inset-x-0 bottom-0 z-[100] bg-ink-deep px-5 py-4 text-ivory shadow-[0_-8px_30px_rgba(16,27,49,0.35)] sm:px-8"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <p className="font-sans text-sm leading-relaxed text-ivory/85">
          {copy.text}{" "}
          <a href="/confidentialitate" className="whitespace-nowrap text-gold-bright underline underline-offset-2">
            {copy.details}
          </a>
        </p>
        <div className="flex shrink-0 gap-3">
          <button type="button" className={button} onClick={() => choose("denied")}>
            {copy.refuse}
          </button>
          <button type="button" className={button} onClick={() => choose("granted")}>
            {copy.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
