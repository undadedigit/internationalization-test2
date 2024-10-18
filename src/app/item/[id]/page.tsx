"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Item {
  id: string;
  name: string;
  data: {
    [key: string]: any;
  };
}

export default function ItemDetails({ params }: { params: { id: string } }) {
  const [item, setItem] = useState<Item | null>(null);
  const pathname = usePathname();
  const locale = pathname.startsWith("/fr")
    ? "fr"
    : pathname.startsWith("/es")
    ? "es"
    : "en-US";

  const t = require(`../../../../public/locales/${locale}.json`);

  useEffect(() => {
    fetch(`https://api.restful-api.dev/objects/${params.id}`)
      .then((response) => response.json())
      .then((data: Item) => setItem(data));
  }, [params.id]);

  if (!item) return <div>{t.loading}</div>;

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
      <pre className="bg-gray-100 p-4 rounded-lg">
        {JSON.stringify(item.data, null, 2)}
      </pre>
      <Link
        href="/"
        className="text-blue-500 hover:underline mt-4 inline-block"
      >
        {t.backToHome}
      </Link>
    </>
  );
}
