import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
};

export default function Contacto() {
  return (
    <div className="grid gap-10 pb-16 md:grid-cols-12 md:gap-6">
      <h1 className="font-serif text-4xl font-light italic md:col-span-4 md:text-5xl">
        Contacto
      </h1>
      <dl className="md:col-span-7 md:col-start-6">
        <div className="grid gap-2 border-t border-line py-6 sm:grid-cols-3">
          <dt className="text-[0.6875rem] tracking-[0.18em] text-mist uppercase">
            Email
          </dt>
          <dd className="sm:col-span-2">
            <a
              href={`mailto:${site.email}`}
              className="font-serif text-xl font-light transition-opacity duration-300 hover:opacity-60 md:text-2xl"
            >
              {site.email}
            </a>
          </dd>
        </div>
        <div className="grid gap-2 border-t border-b border-line py-6 sm:grid-cols-3">
          <dt className="text-[0.6875rem] tracking-[0.18em] text-mist uppercase">
            Redes
          </dt>
          <dd className="flex flex-col gap-1 sm:col-span-2">
            {site.socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-xl font-light transition-opacity duration-300 hover:opacity-60 md:text-2xl"
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
