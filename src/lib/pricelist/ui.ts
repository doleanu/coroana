/* admin-kit · owner-facing texts. PURE (client-safe). Add a language by adding an entry. */

export type UiLang = "es" | "ro";

export type Ui = {
  // editor
  confirmRemove(name: string | undefined, noun: string): string;
  confirmDiscard: string;
  fixRows(n: number, noun: { one: string; many: string }): string;
  statusSaved: string;
  statusSaving: string;
  statusDirty: string;
  statusClean: string;
  errConflict: string;
  errSession: string;
  errOffline: string;
  errSave: string;
  discard: string;
  save: string;
  reload: string;
  searchPlaceholder(noun: string): string;
  searchLabel: string;
  count(total: number, many: string, untranslated: number): string;
  hide: string;
  show: string;
  more: string;
  less: string;
  remove: string;
  up: string;
  down: string;
  add(noun: string, cat: string): string;
  hiddenCount(n: number): string;
  chipNew: string;
  chipHidden: string;
  chipHighlight: string;
  chipUntranslated: string;
  namePlaceholder(noun: string): string;
  nameLabel: string;
  priceLabel: string;
  noteLabel: string;
  highlightLabel(noun: string): string;
  priceHint(hint: string): string;
  translationsHelp: string;
  langName(lang: string): string;
  langNote(lang: string): string;
  // row errors
  errName: string;
  errNameLong(max: number): string;
  errPriceMissing: string;
  errPriceInvalid: string;
  errNoteLong(max: number): string;
  // admin pages
  pageTitle: string;
  pageSubtitle(many: string): string;
  viewSite: string;
  logout: string;
  loginTitle: string;
  loginEmail: string;
  loginPassword: string;
  loginSubmit: string;
  loginNotConfigured: string;
  loginBad: string;
  loginFailed: string;
  loginOffline: string;
};

const es: Ui = {
  confirmRemove: (name, noun) => `¿Eliminar «${name || `este ${noun}`}»?\n\nSi solo quieres que no salga por ahora, usa «Ocultar».`,
  confirmDiscard: "¿Descartar todos los cambios sin guardar?",
  fixRows: (n, noun) => `Hay ${n} ${n === 1 ? noun.one : noun.many} con datos que corregir (marcados en rojo).`,
  statusSaved: "✓ Guardado. La web se actualiza en unos segundos.",
  statusSaving: "Guardando…",
  statusDirty: "Tienes cambios sin guardar.",
  statusClean: "Sin cambios.",
  errConflict: "Los datos se han cambiado desde otro dispositivo o pestaña.",
  errSession: "La sesión ha caducado. Vuelve a entrar (tus cambios siguen aquí hasta que cierres la página).",
  errOffline: "Sin conexión. Inténtalo de nuevo.",
  errSave: "No se pudo guardar. Inténtalo de nuevo.",
  discard: "Descartar",
  save: "Guardar",
  reload: "Recargar",
  searchPlaceholder: (noun) => `Buscar ${noun}…`,
  searchLabel: "Buscar",
  count: (total, many, un) => `${total} ${many}${un > 0 ? ` · ${un} sin alguna traducción (en esos idiomas sale el español)` : ""}`,
  hide: "Ocultar",
  show: "Mostrar",
  more: "Más",
  less: "Menos",
  remove: "Eliminar",
  up: "Subir",
  down: "Bajar",
  add: (noun, cat) => `+ Añadir ${noun} a ${cat}`,
  hiddenCount: (n) => `${n} oculto${n > 1 ? "s" : ""}`,
  chipNew: "Nuevo",
  chipHidden: "Oculto en la web",
  chipHighlight: "Destacado",
  chipUntranslated: "Sin traducir",
  namePlaceholder: (noun) => `Nombre del ${noun}`,
  nameLabel: "Nombre",
  priceLabel: "Precio",
  noteLabel: "Descripción (opcional)",
  highlightLabel: (noun) => `Destacar este ${noun} en la web`,
  priceHint: (h) => `Precio: ${h}`,
  translationsHelp:
    "Las traducciones son opcionales: si las dejas vacías, en ese idioma saldrá el texto en español. Si cambias el nombre, revisa también sus traducciones.",
  langName: (l) => `${l} · nombre`,
  langNote: (l) => `${l} · descripción`,
  errName: "Falta el nombre.",
  errNameLong: (m) => `El nombre es demasiado largo (máx. ${m}).`,
  errPriceMissing: "Falta el precio.",
  errPriceInvalid: "Precio no válido.",
  errNoteLong: (m) => `La descripción es demasiado larga (máx. ${m}).`,
  pageTitle: "Precios",
  pageSubtitle: (many) => `Cambia precios, añade o quita ${many}. La web se actualiza sola.`,
  viewSite: "Ver web",
  logout: "Salir",
  loginTitle: "Panel de precios",
  loginEmail: "Correo",
  loginPassword: "Contraseña",
  loginSubmit: "Entrar",
  loginNotConfigured: "El panel todavía no está configurado.",
  loginBad: "Correo o contraseña incorrectos.",
  loginFailed: "No se pudo entrar. Inténtalo de nuevo.",
  loginOffline: "Sin conexión. Inténtalo de nuevo.",
};

const ro: Ui = {
  confirmRemove: (name, noun) => `Ștergi „${name || `acest ${noun}`}”?\n\nDacă vrei doar să nu apară momentan, folosește „Ascunde”.`,
  confirmDiscard: "Renunți la toate modificările nesalvate?",
  fixRows: (n) => `${n === 1 ? "Un rând are" : `${n} rânduri au`} date de corectat (marcate cu roșu).`,
  statusSaved: "✓ Salvat. Site-ul se actualizează în câteva secunde.",
  statusSaving: "Se salvează…",
  statusDirty: "Ai modificări nesalvate.",
  statusClean: "Nicio modificare.",
  errConflict: "Datele au fost modificate de pe alt dispozitiv sau altă filă.",
  errSession: "Sesiunea a expirat. Intră din nou (modificările rămân aici până închizi pagina).",
  errOffline: "Fără conexiune. Încearcă din nou.",
  errSave: "Nu s-a putut salva. Încearcă din nou.",
  discard: "Renunță",
  save: "Salvează",
  reload: "Reîncarcă",
  searchPlaceholder: () => "Caută…",
  searchLabel: "Caută",
  count: (total, many, un) => `${total} ${many}${un > 0 ? ` · ${un} fără o traducere (în acele limbi apare textul în română)` : ""}`,
  hide: "Ascunde",
  show: "Arată",
  more: "Mai mult",
  less: "Mai puțin",
  remove: "Șterge",
  up: "Sus",
  down: "Jos",
  add: (noun, cat) => `+ Adaugă ${noun} în ${cat}`,
  hiddenCount: (n) => `${n} ascuns${n > 1 ? "e" : ""}`,
  chipNew: "Nou",
  chipHidden: "Ascuns pe site",
  chipHighlight: "Evidențiat",
  chipUntranslated: "Netradus",
  namePlaceholder: () => "Denumire",
  nameLabel: "Denumire",
  priceLabel: "Preț",
  noteLabel: "Descriere (opțional)",
  highlightLabel: () => "Evidențiază pe site",
  priceHint: (h) => `Preț: ${h}`,
  translationsHelp:
    "Traducerile sunt opționale: dacă le lași goale, în acea limbă apare textul în română. Dacă schimbi denumirea, verifică și traducerile ei.",
  langName: (l) => `${l} · denumire`,
  langNote: (l) => `${l} · descriere`,
  errName: "Lipsește denumirea.",
  errNameLong: (m) => `Denumirea e prea lungă (max. ${m}).`,
  errPriceMissing: "Lipsește prețul.",
  errPriceInvalid: "Preț invalid.",
  errNoteLong: (m) => `Descrierea e prea lungă (max. ${m}).`,
  pageTitle: "Prețuri",
  pageSubtitle: (many) => `Schimbă prețurile, adaugă sau șterge ${many}. Site-ul se actualizează singur.`,
  viewSite: "Vezi site-ul",
  logout: "Ieși",
  loginTitle: "Panou prețuri",
  loginEmail: "E-mail",
  loginPassword: "Parolă",
  loginSubmit: "Intră",
  loginNotConfigured: "Panoul nu este încă configurat.",
  loginBad: "E-mail sau parolă greșite.",
  loginFailed: "Nu s-a putut intra. Încearcă din nou.",
  loginOffline: "Fără conexiune. Încearcă din nou.",
};

export const UI: Record<UiLang, Ui> = { es, ro };
