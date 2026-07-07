"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLinks from "@/components/NavLinks";
import { site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();

  /* El inicio compone su propia cabecera (nombre grande + navegación) */
  if (pathname === "/") return null;

  return (
    <header className="mx-auto w-full max-w-7xl px-6 pt-6 pb-16 md:px-10 md:pt-8">
      <nav
        aria-label="Principal"
        className="flex items-baseline justify-between gap-6 text-xs"
      >
        <Link
          href="/"
          className="transition-colors duration-300 hover:text-mist"
        >
          {site.name}
        </Link>
        <NavLinks />
      </nav>
    </header>
  );
}
