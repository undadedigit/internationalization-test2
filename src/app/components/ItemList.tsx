"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Item {
  id: string;
  name: string;
}

export default function ItemList() {
  const [items, setItems] = useState<Item[]>([]);
  const pathname = usePathname();
  const locale = pathname.startsWith("/fr")
    ? "fr"
    : pathname.startsWith("/es")
    ? "es"
    : "en-US";

  const t = require(`../../../public/locales/${locale}.json`);

  useEffect(() => {
    fetch("https://api.restful-api.dev/objects")
      .then((response) => response.json())
      .then((data: Item[]) => setItems(data));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{t.itemList}</h1>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <Link
              href={`/item/${item.id}`}
              className="text-blue-500 hover:underline"
            >
              {t.viewDetails}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
