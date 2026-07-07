"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const links = [
  { href: "/obras", label: "Obras" },
  { href: "/biografia", label: "Biografía" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="mx-auto w-full max-w-7xl px-6 pt-6 pb-16 md:px-10 md:pt-8">
      <nav
        aria-label="Principal"
        className="flex items-baseline justify-between gap-6 text-xs"
      >
        {/* En el inicio el nombre ya está en la página: la marca se omite */}
        <Link
          href="/"
          className={`transition-colors duration-300 hover:text-mist ${
            isHome ? "invisible" : ""
          }`}
        >
          {site.name}
        </Link>
        <ul className="flex gap-5 md:gap-8">
          {links.map(({ href, label }) => {
            const active = pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition-colors duration-300 ${
                    active ? "text-ink" : "text-mist hover:text-ink"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
