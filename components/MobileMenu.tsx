"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/components/NavLinks";

/* Menú desplegable solo para móvil: botón hamburguesa a la derecha */
export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative sm:hidden">
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
      >
        <span
          className={`h-[2px] w-6 bg-ink transition-transform duration-300 ${
            open ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-[2px] w-6 bg-ink transition-opacity duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-[2px] w-6 bg-ink transition-transform duration-300 ${
            open ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        />
      </button>
      {open && (
        <nav
          aria-label="Principal"
          className="absolute top-full right-0 z-10 mt-2 min-w-44 border border-line bg-paper px-6 py-5"
        >
          <ul className="flex flex-col gap-4 text-sm">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={
                    pathname.startsWith(href) ? "text-ink" : "text-mist"
                  }
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
