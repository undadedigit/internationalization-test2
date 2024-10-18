"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/fr")
    ? "fr"
    : pathname.startsWith("/es")
    ? "es"
    : "en-US";

  const t = require(`../../../public/locales/${locale}.json`);

  return (
    <footer className="bg-gray-200 p-4 text-center">
      <p>{t.footerText}</p>
    </footer>
  );
}
