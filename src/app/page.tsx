import type { Metadata } from "next";
import Site from "@/components/Site";
import { HREFLANG_LANGUAGES } from "@/lib/dict";

export const metadata: Metadata = {
  alternates: { canonical: "/", languages: HREFLANG_LANGUAGES },
};

export default function Home() {
  return <Site locale="ro" />;
}
