import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import LangSync from "@/components/LangSync";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hotel & Restaurant Coroana — Războieni, Iași | Cazare, Restaurant & Coroana Events",
  description:
    "Hotel & Restaurant Coroana, la km 31 pe șoseaua Iași – Târgu Frumos: 43 de camere moderne, restaurant cu preparate savuroase și Coroana Events — cea mai mare locație de evenimente din Moldova, până la 1.000 de invitați.",
  metadataBase: new URL("https://hotelcoroana.ro"),
  alternates: {
    languages: {
      ro: "/",
      en: "/en",
      it: "/it",
      es: "/es",
      de: "/de",
    },
  },
  openGraph: {
    title: "Hotel & Restaurant Coroana — Războieni, Iași",
    description:
      "Hotel, restaurant și cea mai mare locație de evenimente din Moldova — la km 31, între Iași și Târgu Frumos.",
    locale: "ro_RO",
    type: "website",
    images: ["/photos/venue-pano.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-paper font-sans text-charcoal antialiased">
        <LangSync />
        {children}
      </body>
    </html>
  );
}
