import Image from "next/image";
import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import { obras, obraId } from "@/lib/obras";

export default function Inicio() {
  return (
    <div className="pt-6 pb-16 md:pt-8">
      <header>
        <h1 className="text-[clamp(2.25rem,7vw,5.25rem)] leading-[1.04] tracking-[-0.03em]">
          Carmen Palacios Mateo
        </h1>
        <p className="mt-2 text-sm text-mist">Escultura</p>
        <nav aria-label="Principal" className="mt-6 text-xs">
          <NavLinks />
        </nav>
      </header>

      {/*
        Banda de obras: las seis esculturas en fila, apoyadas sobre una
        misma línea de base (object-contain + object-bottom: la pieza
        nunca se recorta). 2 columnas en móvil, 3 en tablet, 6 en desktop.
      */}
      <ul className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-26 md:grid-cols-3 md:gap-x-6 lg:grid-cols-6">
        {obras.map((obra) => (
          <li key={obra.src}>
            <Link
              href={`/obras#${obraId(obra)}`}
              className="group block"
              aria-label={`${obra.alt} — ver en Obras`}
            >
              <span className="flex h-[26vh] items-end md:h-[34vh] lg:h-[42vh]">
                <Image
                  src={obra.src}
                  alt={obra.alt}
                  width={obra.width}
                  height={obra.height}
                  priority
                  sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw"
                  className="h-full w-full object-contain object-bottom transition-opacity duration-300 group-hover:opacity-75"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
