"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const locale = pathname.split("/")[1] || "en-US";

  const t = require(`../../../public/locales/${locale}.json`);

  return (
    <header className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">{t.title}</h1>
      <div>
        <button onClick={() => router.push(pathname, { locale: "en-US" })}>
          English
        </button>
        <button onClick={() => router.push(pathname, { locale: "fr" })}>
          Français
        </button>
        <button onClick={() => router.push(pathname, { locale: "es" })}>
          Español
        </button>
      </div>
    </header>
  );
}
