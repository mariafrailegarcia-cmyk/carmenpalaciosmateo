"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/MobileMenu";
import NavLinks from "@/components/NavLinks";
import { site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();

  /* El inicio compone su propia cabecera (nombre grande + navegación) */
  if (pathname === "/") return null;

  return (
    <header className="mx-auto w-full max-w-7xl px-6 pt-6 pb-16 md:px-10 md:pt-8">
      <div className="flex items-center justify-between gap-6 border-b border-line pb-3 text-[0.8125rem]">
        <Link
          href="/"
          className="transition-colors duration-300 hover:text-mist"
        >
          {site.name}
        </Link>
        <nav aria-label="Principal" className="hidden sm:block">
          <NavLinks />
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
