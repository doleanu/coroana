"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { LOCALES } from "@/lib/dict";

/**
 * Romanian lives at the root (outside [locale]), so only the root layout
 * renders <html>. This syncs the lang attribute client-side on route change
 * since a single server-rendered layout can't know the locale ahead of time
 * without restructuring routing.
 */
export default function LangSync() {
  const pathname = usePathname();

  useEffect(() => {
    const first = pathname.split("/")[1];
    const locale = (LOCALES as readonly string[]).includes(first) ? first : "ro";
    document.documentElement.lang = locale;
  }, [pathname]);

  return null;
}
