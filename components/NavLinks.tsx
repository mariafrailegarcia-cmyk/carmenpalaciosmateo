"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
  { href: "/obras", label: "Obras" },
  { href: "/biografia", label: "Biografía" },
  { href: "/contacto", label: "Contacto" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
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
  );
}
