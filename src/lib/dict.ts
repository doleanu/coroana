export const LOCALES = ["ro", "en", "it", "es", "de"] as const;
export type Locale = (typeof LOCALES)[number];

export type Dict = {
  langName: string;
  metaTitle: string;
  metaDescription: string;
  nav: { hotel: string; restaurant: string; events: string; contact: string };
  reserveShort: string;
  hero: {
    kicker: string;
    sub: string;
    ctaRoom: string;
    ctaEvent: string;
    rating: string;
    alt: string;
  };
  stats: [string, string][];
  hotel: {
    label: string;
    title: string;
    para: string;
    amenities: string[];
    captionRenovated: string;
    captionStandard: string;
    cta: string;
    rates: {
      label: string;
      wingA: string;
      wingB: string;
      note: string;
      rowsA: [string, string][];
      rowsB: [string, string][];
    };
    altRoom: string;
    altRoom2: string;
    altStandard: string;
  };
  restaurant: {
    label: string;
    title: string;
    para: string;
    caption: string;
    kitchen: string;
    foods: [string, string][];
    viewMenu: string;
    altMain: string;
    altCorner: string;
    altTables: string;
    altDetail: string;
    altEntrance: string;
  };
  events: {
    label: string;
    titlePre: string;
    titleEm: string;
    titlePost: string;
    sub: string;
    hallsLabel: string;
    persons: string;
    upTo50: string;
    types: string;
    estateCaption: string;
    ctaTel: string;
    viewWeddingPage: string;
    altWedding: string;
    altTable: string;
    altCandy: string;
    altHall: string;
    altConference: string;
    altBanquet: string;
    altEstate: string;
    altGarden: string;
    altNight: string;
  };
  night: { quote: string; alt: string };
  contact: {
    label: string;
    title: string;
    receptionLabel: string;
    receptionNote: string;
    eventsLabel: string;
    eventsNote: string;
    address1: string;
    address2: string;
    maps: string;
  };
  footer: { copyright: string; concept: string; privacy: string };
};

const ro: Dict = {
  langName: "Română",
  metaTitle:
    "Hotel & Restaurant Coroana — Războieni, Iași | Cazare, Restaurant & Coroana Events",
  metaDescription:
    "Hotel & Restaurant Coroana, la km 31 pe șoseaua Iași – Târgu Frumos: 43 de camere moderne, restaurant cu preparate savuroase și Coroana Events — cea mai mare locație de evenimente din Moldova, până la 1.000 de invitați.",
  nav: { hotel: "Hotel", restaurant: "Restaurant", events: "Evenimente", contact: "Contact" },
  reserveShort: "Rezervă",
  hero: {
    kicker: "Hotel · Restaurant · Evenimente — Războieni, Iași",
    sub: "Hotel cu 43 de camere, restaurant apreciat și cea mai mare locație de evenimente din Moldova — la kilometrul 31, pe drumul dintre Iași și Târgu Frumos.",
    ctaRoom: "Rezervă o cameră",
    ctaEvent: "Planifică un eveniment",
    rating: "2.348 de recenzii pe Google",
    alt: "Complexul Coroana — fațada domeniului de evenimente, cu alei și chiparoși",
  },
  stats: [
    ["43", "de camere moderne"],
    ["4,5★", "din 2.348 de recenzii"],
    ["4", "saloane de evenimente"],
    ["1.000", "de invitați la capacitate"],
  ],
  hotel: {
    label: "Cazare",
    title: "Camere odihnitoare, confort la kilometrul 31.",
    para: "Oaspeții revin pentru camerele spațioase și liniștea de la kilometrul 31. Mașina rămâne în parcarea proprie, iar recepția răspunde la orice oră.",
    amenities: [
      "Wi-Fi gratuit în tot hotelul",
      "Parcare proprie — 300 de locuri",
      "Room service",
      "Terase",
    ],
    captionRenovated: "Camerele renovate",
    captionStandard: "Camerele standard",
    cta: "Rezervări · +40 232 711 500",
    rates: {
      label: "Tarife",
      wingA: "Aripa A",
      wingB: "Aripa B",
      note: "Prețurile pot varia în funcție de perioadă.",
      rowsA: [["Cameră matrimonială (1–2 pers.)", "290 / 350 lei"], ["Cameră dublă", "290 lei"], ["Cameră single", "240 lei"], ["Cameră triplă", "390 lei"]],
      rowsB: [["Cameră dublă", "290 lei"], ["Cameră single", "240 lei"], ["Cameră triplă", "360 lei"], ["Cameră dublă · categoria 2★", "200 lei"], ["Cameră single · categoria 2★", "150 lei"]],
    },
    altRoom: "Cameră renovată, cu pat mare și accente turcoaz",
    altRoom2: "Cameră renovată — colț de relaxare cu fotoliu și tapet decorativ",
    altStandard: "Cameră standard luminoasă, cu două paturi",
  },
  restaurant: {
    label: "Restaurant",
    title: "Gustul pentru care se revine.",
    para: "Recenziile revin mereu la aceleași trei lucruri: mâncare gustoasă, servire promptă chiar și la ore aglomerate și prețuri corecte. Salonul restaurantului, reamenajat complet, e astăzi una dintre cele mai frumoase săli din zonă.",
    caption: "Salonul restaurantului, reamenajat",
    kitchen: "Din bucătărie",
    viewMenu: "Vezi meniul digital",
    foods: [
      ["food-1", "Sarmale cu mămăliguță"],
      ["food-2", "Grătar cu garnituri"],
      ["food-3", "Frigărui cu cartofi"],
      ["food-4", "Ciorbe de casă"],
      ["food-5", "Salate proaspete"],
      ["food-6", "Papanași cu smântână și dulceață"],
    ],
    altMain: "Salonul reamenajat al restaurantului — canapele verzi, arcade și lumină naturală",
    altCorner: "Colț de salon cu canapea verde catifelată",
    altTables: "Mese aranjate în salonul restaurantului",
    altDetail: "Detaliu de amenajare cu plante și arcade",
    altEntrance: "Salonul restaurantului văzut dinspre intrare",
  },
  events: {
    label: "Coroana Events",
    titlePre: "Cea mai mare locație de ",
    titleEm: "evenimente",
    titlePost: " din Moldova.",
    sub: "Patru saloane și până la 1.000 de invitați, într-un domeniu construit pentru sărbători: nunți, botezuri, conferințe și petreceri de firmă.",
    hallsLabel: "Saloanele",
    persons: "de persoane",
    upTo50: "până la 50",
    types: "Nunți · Botezuri · Conferințe · Prezentări · Petreceri de firmă",
    estateCaption: "Domeniul Coroana Events",
    ctaTel: "Departament evenimente · +40 786 298 932",
    viewWeddingPage: "Vezi pagina dedicată nunților →",
    altWedding: "Salon pregătit pentru nuntă, cu lumini arhitecturale și aranjamente florale",
    altTable: "Masă de eveniment cu aranjament floral",
    altCandy: "Candy bar pregătit pentru petrecere",
    altHall: "Salonul mare, cu candelabre și arcade",
    altConference: "Sală aranjată pentru conferință, cu ecran de proiecție",
    altBanquet: "Salon de banchet cu mese rotunde aranjate",
    altEstate: "Fațada albă a domeniului Coroana Events, cu colonade",
    altGarden: "Grădina domeniului, cu vegetație și colonade",
    altNight: "Aleile domeniului iluminate seara",
  },
  night: {
    quote: "Serile lungi fac parte din peisaj.",
    alt: "Domeniul Coroana noaptea, cu alei iluminate",
  },
  contact: {
    label: "Contact",
    title: "Între Iași și Târgu Frumos.",
    receptionLabel: "Recepție hotel",
    receptionNote: "Rezervări camere, restaurant și informații generale.",
    eventsLabel: "Departament evenimente",
    eventsNote: "Nunți, botezuri, conferințe și petreceri de firmă — Coroana Events.",
    address1: "Șoseaua Iași – Târgu Frumos KM31 (DN28)",
    address2: "705311 Războieni, jud. Iași",
    maps: "Deschide în Google Maps",
  },
  footer: {
    copyright:
      "© 2026 Hotel & Restaurant Coroana · Șoseaua Iași – Târgu Frumos KM31, Războieni, Iași",
    concept: "Concept de redesign",
    privacy: "Politica de confidențialitate",
  },
};

const en: Dict = {
  langName: "English",
  metaTitle:
    "Hotel & Restaurant Coroana — Războieni, Iași | Rooms, Restaurant & Coroana Events",
  metaDescription:
    "Hotel & Restaurant Coroana, at km 31 on the Iași – Târgu Frumos road: 43 modern rooms, a well-loved restaurant and Coroana Events — the largest events venue in the Moldova region, hosting up to 1,000 guests.",
  nav: { hotel: "Hotel", restaurant: "Restaurant", events: "Events", contact: "Contact" },
  reserveShort: "Book",
  hero: {
    kicker: "Hotel · Restaurant · Events — Războieni, Iași",
    sub: "A 43-room hotel, a well-loved restaurant and the largest events venue in the Moldova region — at kilometre 31 on the road between Iași and Târgu Frumos.",
    ctaRoom: "Book a room",
    ctaEvent: "Plan an event",
    rating: "2,348 Google reviews",
    alt: "The Coroana complex — the events estate facade, with driveways and cypress trees",
  },
  stats: [
    ["43", "modern rooms"],
    ["4.5★", "from 2,348 reviews"],
    ["4", "event halls"],
    ["1,000", "guests at capacity"],
  ],
  hotel: {
    label: "Rooms",
    title: "Restful rooms, quiet at kilometre 31.",
    para: "Guests come back for the spacious rooms and the quiet of kilometre 31. Your car stays in the hotel's own car park, and reception answers at any hour.",
    amenities: [
      "Free Wi-Fi throughout",
      "Private parking — 300 spaces",
      "Room service",
      "Terraces",
    ],
    captionRenovated: "The renovated rooms",
    captionStandard: "The standard rooms",
    cta: "Reservations · +40 232 711 500",
    rates: {
      label: "Rates",
      wingA: "Wing A",
      wingB: "Wing B",
      note: "Prices may vary depending on the period.",
      rowsA: [["Double room (1–2 guests)", "290 / 350 lei"], ["Twin room", "290 lei"], ["Single room", "240 lei"], ["Triple room", "390 lei"]],
      rowsB: [["Twin room", "290 lei"], ["Single room", "240 lei"], ["Triple room", "360 lei"], ["Twin room · 2★ category", "200 lei"], ["Single room · 2★ category", "150 lei"]],
    },
    altRoom: "Renovated room with a large bed and turquoise accents",
    altRoom2: "Renovated room — corner with armchair and patterned wallpaper",
    altStandard: "Bright standard twin room",
  },
  restaurant: {
    label: "Restaurant",
    title: "The taste people come back for.",
    para: "The reviews keep returning to the same three things: tasty food, prompt service even at busy hours, and fair prices. The restaurant's dining room, completely refurbished, is now one of the most beautiful rooms in the area.",
    caption: "The refurbished dining room",
    kitchen: "From the kitchen",
    viewMenu: "View digital menu",
    foods: [
      ["food-1", "Sarmale with polenta"],
      ["food-2", "Mixed grill with sides"],
      ["food-3", "Skewers with fries"],
      ["food-4", "Homemade soups"],
      ["food-5", "Fresh salads"],
      ["food-6", "Papanași — fried doughnuts with sour cream and jam"],
    ],
    altMain: "The refurbished dining room — green sofas, arches and natural light",
    altCorner: "Dining room corner with a green velvet sofa",
    altTables: "Set tables in the dining room",
    altDetail: "Interior detail with plants and arches",
    altEntrance: "The dining room seen from the entrance",
  },
  events: {
    label: "Coroana Events",
    titlePre: "The largest ",
    titleEm: "events venue",
    titlePost: " in the Moldova region.",
    sub: "Four halls and up to 1,000 guests, on an estate built for celebrations: weddings, christenings, conferences and corporate parties.",
    hallsLabel: "The halls",
    persons: "guests",
    upTo50: "up to 50",
    types: "Weddings · Christenings · Conferences · Presentations · Corporate parties",
    estateCaption: "The Coroana Events estate",
    ctaTel: "Events department · +40 786 298 932",
    viewWeddingPage: "See the wedding page →",
    altWedding: "Hall set for a wedding, with architectural lighting and floral arrangements",
    altTable: "Event table with a floral centrepiece",
    altCandy: "Candy bar set up for a party",
    altHall: "The grand hall, with chandeliers and arches",
    altConference: "Hall arranged for a conference, with a projection screen",
    altBanquet: "Banquet hall with round tables set",
    altEstate: "The white facade of the Coroana Events estate, with colonnades",
    altGarden: "The estate gardens, with greenery and colonnades",
    altNight: "The estate walkways lit up in the evening",
  },
  night: {
    quote: "Long evenings are part of the scenery.",
    alt: "The Coroana estate at night, with lit walkways",
  },
  contact: {
    label: "Contact",
    title: "Between Iași and Târgu Frumos.",
    receptionLabel: "Hotel reception",
    receptionNote: "Room reservations, restaurant and general information.",
    eventsLabel: "Events department",
    eventsNote: "Weddings, christenings, conferences and corporate parties — Coroana Events.",
    address1: "Iași – Târgu Frumos road, KM31 (DN28)",
    address2: "705311 Războieni, Iași county",
    maps: "Open in Google Maps",
  },
  footer: {
    copyright:
      "© 2026 Hotel & Restaurant Coroana · Iași – Târgu Frumos road KM31, Războieni, Iași",
    concept: "Redesign concept",
    privacy: "Privacy policy (RO)",
  },
};

const it: Dict = {
  langName: "Italiano",
  metaTitle:
    "Hotel & Restaurant Coroana — Războieni, Iași | Camere, Ristorante & Coroana Events",
  metaDescription:
    "Hotel & Restaurant Coroana, al km 31 sulla strada Iași – Târgu Frumos: 43 camere moderne, un ristorante apprezzato e Coroana Events — la più grande location per eventi della regione della Moldavia, fino a 1.000 invitati.",
  nav: { hotel: "Hotel", restaurant: "Ristorante", events: "Eventi", contact: "Contatti" },
  reserveShort: "Prenota",
  hero: {
    kicker: "Hotel · Ristorante · Eventi — Războieni, Iași",
    sub: "Un hotel con 43 camere, un ristorante apprezzato e la più grande location per eventi della regione della Moldavia — al chilometro 31, sulla strada tra Iași e Târgu Frumos.",
    ctaRoom: "Prenota una camera",
    ctaEvent: "Organizza un evento",
    rating: "2.348 recensioni su Google",
    alt: "Il complesso Coroana — la facciata della tenuta per eventi, con viali e cipressi",
  },
  stats: [
    ["43", "camere moderne"],
    ["4,5★", "da 2.348 recensioni"],
    ["4", "sale per eventi"],
    ["1.000", "invitati a piena capacità"],
  ],
  hotel: {
    label: "Camere",
    title: "Camere riposanti, al chilometro 31.",
    para: "Gli ospiti tornano per le camere spaziose e la quiete del chilometro 31. L'auto resta nel parcheggio dell'hotel e la reception risponde a qualsiasi ora.",
    amenities: [
      "Wi-Fi gratuito in tutto l'hotel",
      "Parcheggio privato — 300 posti",
      "Servizio in camera",
      "Terrazze",
    ],
    captionRenovated: "Le camere rinnovate",
    captionStandard: "Le camere standard",
    cta: "Prenotazioni · +40 232 711 500",
    rates: {
      label: "Tariffe",
      wingA: "Ala A",
      wingB: "Ala B",
      note: "I prezzi possono variare in base al periodo.",
      rowsA: [["Camera matrimoniale (1–2 pers.)", "290 / 350 lei"], ["Camera doppia", "290 lei"], ["Camera singola", "240 lei"], ["Camera tripla", "390 lei"]],
      rowsB: [["Camera doppia", "290 lei"], ["Camera singola", "240 lei"], ["Camera tripla", "360 lei"], ["Camera doppia · cat. 2★", "200 lei"], ["Camera singola · cat. 2★", "150 lei"]],
    },
    altRoom: "Camera rinnovata con letto grande e accenti turchesi",
    altRoom2: "Camera rinnovata — angolo con poltrona e carta da parati decorativa",
    altStandard: "Camera standard luminosa con due letti",
  },
  restaurant: {
    label: "Ristorante",
    title: "Il sapore per cui si ritorna.",
    para: "Le recensioni tornano sempre sulle stesse tre cose: cibo gustoso, servizio rapido anche nelle ore di punta e prezzi corretti. La sala del ristorante, completamente rinnovata, è oggi una delle più belle della zona.",
    caption: "La sala del ristorante, rinnovata",
    kitchen: "Dalla cucina",
    viewMenu: "Vedi il menu digitale",
    foods: [
      ["food-1", "Sarmale con polenta"],
      ["food-2", "Grigliata con contorni"],
      ["food-3", "Spiedini con patate"],
      ["food-4", "Zuppe della casa"],
      ["food-5", "Insalate fresche"],
      ["food-6", "Papanași — frittelle rumene con panna acida e marmellata"],
    ],
    altMain: "La sala rinnovata del ristorante — divani verdi, archi e luce naturale",
    altCorner: "Angolo della sala con divano in velluto verde",
    altTables: "Tavoli apparecchiati nella sala del ristorante",
    altDetail: "Dettaglio d'arredo con piante e archi",
    altEntrance: "La sala del ristorante vista dall'ingresso",
  },
  events: {
    label: "Coroana Events",
    titlePre: "La più grande location per ",
    titleEm: "eventi",
    titlePost: " della regione della Moldavia.",
    sub: "Quattro sale e fino a 1.000 invitati, in una tenuta costruita per le grandi occasioni: matrimoni, battesimi, conferenze e feste aziendali.",
    hallsLabel: "Le sale",
    persons: "persone",
    upTo50: "fino a 50",
    types: "Matrimoni · Battesimi · Conferenze · Presentazioni · Feste aziendali",
    estateCaption: "La tenuta Coroana Events",
    ctaTel: "Reparto eventi · +40 786 298 932",
    viewWeddingPage: "Vedi la pagina dedicata ai matrimoni →",
    altWedding: "Sala allestita per un matrimonio, con luci architetturali e composizioni floreali",
    altTable: "Tavolo per eventi con centrotavola floreale",
    altCandy: "Candy bar allestito per una festa",
    altHall: "La sala grande, con lampadari e archi",
    altConference: "Sala allestita per una conferenza, con schermo di proiezione",
    altBanquet: "Sala banchetti con tavoli rotondi apparecchiati",
    altEstate: "La facciata bianca della tenuta Coroana Events, con colonnati",
    altGarden: "I giardini della tenuta, con verde e colonnati",
    altNight: "I viali della tenuta illuminati di sera",
  },
  night: {
    quote: "Le serate lunghe fanno parte del paesaggio.",
    alt: "La tenuta Coroana di notte, con viali illuminati",
  },
  contact: {
    label: "Contatti",
    title: "Tra Iași e Târgu Frumos.",
    receptionLabel: "Reception dell'hotel",
    receptionNote: "Prenotazioni camere, ristorante e informazioni generali.",
    eventsLabel: "Reparto eventi",
    eventsNote: "Matrimoni, battesimi, conferenze e feste aziendali — Coroana Events.",
    address1: "Strada Iași – Târgu Frumos, KM31 (DN28)",
    address2: "705311 Războieni, provincia di Iași",
    maps: "Apri in Google Maps",
  },
  footer: {
    copyright:
      "© 2026 Hotel & Restaurant Coroana · Strada Iași – Târgu Frumos KM31, Războieni, Iași",
    concept: "Concept di redesign",
    privacy: "Informativa sulla privacy (RO)",
  },
};

const es: Dict = {
  langName: "Español",
  metaTitle:
    "Hotel & Restaurant Coroana — Războieni, Iași | Habitaciones, Restaurante & Coroana Events",
  metaDescription:
    "Hotel & Restaurant Coroana, en el km 31 de la carretera Iași – Târgu Frumos: 43 habitaciones modernas, un restaurante muy valorado y Coroana Events — la mayor sede de eventos de la región de Moldavia, con hasta 1.000 invitados.",
  nav: { hotel: "Hotel", restaurant: "Restaurante", events: "Eventos", contact: "Contacto" },
  reserveShort: "Reserva",
  hero: {
    kicker: "Hotel · Restaurante · Eventos — Războieni, Iași",
    sub: "Un hotel de 43 habitaciones, un restaurante muy valorado y la mayor sede de eventos de la región de Moldavia — en el kilómetro 31 de la carretera entre Iași y Târgu Frumos.",
    ctaRoom: "Reserva una habitación",
    ctaEvent: "Planifica un evento",
    rating: "2.348 reseñas en Google",
    alt: "El complejo Coroana — la fachada de la finca de eventos, con paseos y cipreses",
  },
  stats: [
    ["43", "habitaciones modernas"],
    ["4,5★", "de 2.348 reseñas"],
    ["4", "salones de eventos"],
    ["1.000", "invitados a plena capacidad"],
  ],
  hotel: {
    label: "Habitaciones",
    title: "Habitaciones para descansar, en el kilómetro 31.",
    para: "Los huéspedes vuelven por las habitaciones amplias y la tranquilidad del kilómetro 31. El coche se queda en el aparcamiento propio y la recepción responde a cualquier hora.",
    amenities: [
      "Wi-Fi gratis en todo el hotel",
      "Aparcamiento propio — 300 plazas",
      "Servicio de habitaciones",
      "Terrazas",
    ],
    captionRenovated: "Las habitaciones renovadas",
    captionStandard: "Las habitaciones estándar",
    cta: "Reservas · +40 232 711 500",
    rates: {
      label: "Tarifas",
      wingA: "Ala A",
      wingB: "Ala B",
      note: "Los precios pueden variar según la temporada.",
      rowsA: [["Habitación matrimonial (1–2 pers.)", "290 / 350 lei"], ["Habitación doble", "290 lei"], ["Habitación individual", "240 lei"], ["Habitación triple", "390 lei"]],
      rowsB: [["Habitación doble", "290 lei"], ["Habitación individual", "240 lei"], ["Habitación triple", "360 lei"], ["Habitación doble · cat. 2★", "200 lei"], ["Habitación individual · cat. 2★", "150 lei"]],
    },
    altRoom: "Habitación renovada con cama grande y acentos turquesa",
    altRoom2: "Habitación renovada — rincón con sillón y papel pintado decorativo",
    altStandard: "Habitación estándar luminosa con dos camas",
  },
  restaurant: {
    label: "Restaurante",
    title: "El sabor al que se vuelve.",
    para: "Las reseñas vuelven siempre a las mismas tres cosas: comida sabrosa, servicio rápido incluso en horas punta y precios justos. El salón del restaurante, totalmente reformado, es hoy uno de los más bonitos de la zona.",
    caption: "El salón del restaurante, reformado",
    kitchen: "De la cocina",
    viewMenu: "Ver el menú digital",
    foods: [
      ["food-1", "Sarmale con polenta"],
      ["food-2", "Parrillada con guarniciones"],
      ["food-3", "Brochetas con patatas"],
      ["food-4", "Sopas caseras"],
      ["food-5", "Ensaladas frescas"],
      ["food-6", "Papanași — buñuelos rumanos con nata agria y mermelada"],
    ],
    altMain: "El salón reformado del restaurante — sofás verdes, arcos y luz natural",
    altCorner: "Rincón del salón con sofá de terciopelo verde",
    altTables: "Mesas preparadas en el salón del restaurante",
    altDetail: "Detalle del interior con plantas y arcos",
    altEntrance: "El salón del restaurante visto desde la entrada",
  },
  events: {
    label: "Coroana Events",
    titlePre: "La mayor sede de ",
    titleEm: "eventos",
    titlePost: " de la región de Moldavia.",
    sub: "Cuatro salones y hasta 1.000 invitados, en una finca construida para celebrar: bodas, bautizos, conferencias y fiestas de empresa.",
    hallsLabel: "Los salones",
    persons: "personas",
    upTo50: "hasta 50",
    types: "Bodas · Bautizos · Conferencias · Presentaciones · Fiestas de empresa",
    estateCaption: "La finca Coroana Events",
    ctaTel: "Departamento de eventos · +40 786 298 932",
    viewWeddingPage: "Ver la página dedicada a bodas →",
    altWedding: "Salón preparado para una boda, con iluminación arquitectónica y arreglos florales",
    altTable: "Mesa de evento con centro floral",
    altCandy: "Candy bar preparado para una fiesta",
    altHall: "El gran salón, con lámparas de araña y arcos",
    altConference: "Sala preparada para una conferencia, con pantalla de proyección",
    altBanquet: "Salón de banquetes con mesas redondas preparadas",
    altEstate: "La fachada blanca de la finca Coroana Events, con columnatas",
    altGarden: "Los jardines de la finca, con vegetación y columnatas",
    altNight: "Los paseos de la finca iluminados por la noche",
  },
  night: {
    quote: "Las noches largas forman parte del paisaje.",
    alt: "La finca Coroana de noche, con paseos iluminados",
  },
  contact: {
    label: "Contacto",
    title: "Entre Iași y Târgu Frumos.",
    receptionLabel: "Recepción del hotel",
    receptionNote: "Reservas de habitaciones, restaurante e información general.",
    eventsLabel: "Departamento de eventos",
    eventsNote: "Bodas, bautizos, conferencias y fiestas de empresa — Coroana Events.",
    address1: "Carretera Iași – Târgu Frumos, KM31 (DN28)",
    address2: "705311 Războieni, provincia de Iași",
    maps: "Abrir en Google Maps",
  },
  footer: {
    copyright:
      "© 2026 Hotel & Restaurant Coroana · Carretera Iași – Târgu Frumos KM31, Războieni, Iași",
    concept: "Concepto de rediseño",
    privacy: "Política de privacidad (RO)",
  },
};

const de: Dict = {
  langName: "Deutsch",
  metaTitle:
    "Hotel & Restaurant Coroana — Războieni, Iași | Zimmer, Restaurant & Coroana Events",
  metaDescription:
    "Hotel & Restaurant Coroana, bei km 31 an der Straße Iași – Târgu Frumos: 43 moderne Zimmer, ein beliebtes Restaurant und Coroana Events — die größte Eventlocation der Region Moldau, für bis zu 1.000 Gäste.",
  nav: { hotel: "Hotel", restaurant: "Restaurant", events: "Events", contact: "Kontakt" },
  reserveShort: "Buchen",
  hero: {
    kicker: "Hotel · Restaurant · Events — Războieni, Iași",
    sub: "Ein Hotel mit 43 Zimmern, ein beliebtes Restaurant und die größte Eventlocation der Region Moldau — bei Kilometer 31 an der Straße zwischen Iași und Târgu Frumos.",
    ctaRoom: "Zimmer reservieren",
    ctaEvent: "Event planen",
    rating: "2.348 Google-Bewertungen",
    alt: "Der Coroana-Komplex — die Fassade des Event-Anwesens, mit Alleen und Zypressen",
  },
  stats: [
    ["43", "moderne Zimmer"],
    ["4,5★", "aus 2.348 Bewertungen"],
    ["4", "Veranstaltungssäle"],
    ["1.000", "Gäste bei Vollauslastung"],
  ],
  hotel: {
    label: "Zimmer",
    title: "Erholsame Zimmer, Ruhe bei Kilometer 31.",
    para: "Gäste kommen wieder — wegen der großzügigen Zimmer und der Ruhe bei Kilometer 31. Das Auto bleibt auf dem hoteleigenen Parkplatz, die Rezeption ist rund um die Uhr erreichbar.",
    amenities: [
      "Kostenloses WLAN im ganzen Haus",
      "Eigener Parkplatz — 300 Stellplätze",
      "Zimmerservice",
      "Terrassen",
    ],
    captionRenovated: "Die renovierten Zimmer",
    captionStandard: "Die Standardzimmer",
    cta: "Reservierungen · +40 232 711 500",
    rates: {
      label: "Preise",
      wingA: "Flügel A",
      wingB: "Flügel B",
      note: "Die Preise können je nach Zeitraum variieren.",
      rowsA: [["Doppelzimmer (1–2 Pers.)", "290 / 350 lei"], ["Zweibettzimmer", "290 lei"], ["Einzelzimmer", "240 lei"], ["Dreibettzimmer", "390 lei"]],
      rowsB: [["Zweibettzimmer", "290 lei"], ["Einzelzimmer", "240 lei"], ["Dreibettzimmer", "360 lei"], ["Zweibettzimmer · Kat. 2★", "200 lei"], ["Einzelzimmer · Kat. 2★", "150 lei"]],
    },
    altRoom: "Renoviertes Zimmer mit großem Bett und türkisfarbenen Akzenten",
    altRoom2: "Renoviertes Zimmer — Ecke mit Sessel und Mustertapete",
    altStandard: "Helles Standardzimmer mit zwei Betten",
  },
  restaurant: {
    label: "Restaurant",
    title: "Der Geschmack, für den man wiederkommt.",
    para: "Die Bewertungen kommen immer wieder auf dieselben drei Dinge zurück: gutes Essen, schneller Service auch zu Stoßzeiten und faire Preise. Der komplett neu gestaltete Speisesaal gehört heute zu den schönsten Räumen der Gegend.",
    caption: "Der neu gestaltete Speisesaal",
    kitchen: "Aus der Küche",
    viewMenu: "Digitale Speisekarte ansehen",
    foods: [
      ["food-1", "Sarmale mit Polenta"],
      ["food-2", "Grillteller mit Beilagen"],
      ["food-3", "Spieße mit Kartoffeln"],
      ["food-4", "Hausgemachte Suppen"],
      ["food-5", "Frische Salate"],
      ["food-6", "Papanași — rumänische Krapfen mit saurer Sahne und Marmelade"],
    ],
    altMain: "Der neu gestaltete Speisesaal — grüne Sofas, Bögen und Tageslicht",
    altCorner: "Ecke des Speisesaals mit grünem Samtsofa",
    altTables: "Eingedeckte Tische im Speisesaal",
    altDetail: "Einrichtungsdetail mit Pflanzen und Bögen",
    altEntrance: "Der Speisesaal vom Eingang aus gesehen",
  },
  events: {
    label: "Coroana Events",
    titlePre: "Die größte ",
    titleEm: "Eventlocation",
    titlePost: " der Region Moldau.",
    sub: "Vier Säle und bis zu 1.000 Gäste, auf einem Anwesen, das für Feste gebaut wurde: Hochzeiten, Taufen, Konferenzen und Firmenfeiern.",
    hallsLabel: "Die Säle",
    persons: "Personen",
    upTo50: "bis 50",
    types: "Hochzeiten · Taufen · Konferenzen · Präsentationen · Firmenfeiern",
    estateCaption: "Das Coroana-Events-Anwesen",
    ctaTel: "Event-Abteilung · +40 786 298 932",
    viewWeddingPage: "Zur Hochzeitsseite →",
    altWedding: "Für eine Hochzeit eingedeckter Saal mit Lichtarchitektur und Blumenschmuck",
    altTable: "Eventtisch mit Blumengesteck",
    altCandy: "Candy Bar für eine Feier",
    altHall: "Der große Saal mit Kronleuchtern und Bögen",
    altConference: "Für eine Konferenz bestuhlter Saal mit Leinwand",
    altBanquet: "Bankettsaal mit eingedeckten runden Tischen",
    altEstate: "Die weiße Fassade des Coroana-Events-Anwesens mit Kolonnaden",
    altGarden: "Die Gärten des Anwesens mit Grünanlagen und Kolonnaden",
    altNight: "Die abends beleuchteten Wege des Anwesens",
  },
  night: {
    quote: "Lange Abende gehören hier dazu.",
    alt: "Das Coroana-Anwesen bei Nacht, mit beleuchteten Wegen",
  },
  contact: {
    label: "Kontakt",
    title: "Zwischen Iași und Târgu Frumos.",
    receptionLabel: "Hotelrezeption",
    receptionNote: "Zimmerreservierungen, Restaurant und allgemeine Auskünfte.",
    eventsLabel: "Event-Abteilung",
    eventsNote: "Hochzeiten, Taufen, Konferenzen und Firmenfeiern — Coroana Events.",
    address1: "Straße Iași – Târgu Frumos, KM31 (DN28)",
    address2: "705311 Războieni, Kreis Iași",
    maps: "In Google Maps öffnen",
  },
  footer: {
    copyright:
      "© 2026 Hotel & Restaurant Coroana · Straße Iași – Târgu Frumos KM31, Războieni, Iași",
    concept: "Redesign-Konzept",
    privacy: "Datenschutzerklärung (RO)",
  },
};

export const DICTS: Record<Locale, Dict> = { ro, en, it, es, de };

export function localePath(locale: Locale): string {
  return locale === "ro" ? "/" : `/${locale}`;
}
