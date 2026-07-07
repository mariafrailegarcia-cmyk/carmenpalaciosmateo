import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
};

export default function Contacto() {
  return (
    <div className="grid gap-10 pb-16 md:grid-cols-12 md:gap-6">
      <h1 className="text-sm text-mist md:col-span-3">Contacto</h1>
      <dl className="md:col-span-7 md:col-start-5">
        <div className="grid gap-2 border-t border-line py-5 sm:grid-cols-3">
          <dt className="text-xs text-mist">Email</dt>
          <dd className="sm:col-span-2">
            <a
              href={`mailto:${site.email}`}
              className="text-base transition-colors duration-300 hover:text-mist md:text-lg"
            >
              {site.email}
            </a>
          </dd>
        </div>
        <div className="grid gap-2 border-t border-b border-line py-5 sm:grid-cols-3">
          <dt className="text-xs text-mist">Redes</dt>
          <dd className="flex flex-col gap-1 sm:col-span-2">
            {site.socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base transition-colors duration-300 hover:text-mist md:text-lg"
              >
                {label}
              </a>
            ))}
          </dd>
        </div>
      </dl>
    </div>
  );
}
