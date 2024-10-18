"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ItemList from "./components/ItemList";

// Define the shape of an item
interface Item {
  id: string;
  name: string;
  // Add other properties as needed
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const pathname = usePathname();

  // This is a simple way to get the locale, you might want to implement a more robust solution
  const locale = pathname.startsWith("/fr")
    ? "fr"
    : pathname.startsWith("/es")
    ? "es"
    : "en-US";

  const t = require(`../../public/locales/${locale}.json`);

  useEffect(() => {
    fetch("https://api.restful-api.dev/objects")
      .then((response) => response.json())
      .then((data: Item[]) => setItems(data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <ItemList />
      </main>
    </div>
  );
}
