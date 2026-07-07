import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import NavLinks from "@/components/NavLinks";
import { obras, obraId } from "@/lib/obras";

export default function Inicio() {
  return (
    <div className="pt-8 pb-16 md:pt-16">
      <header>
        <div className="flex items-start justify-between gap-4">
          <h1 className="max-w-2xl text-[clamp(1.75rem,2.8vw,2.5rem)] leading-[1.1] font-bold tracking-[-0.02em]">
            Carmen Palacios Mateo
          </h1>
          <MobileMenu />
        </div>
        <nav
          aria-label="Principal"
          className="mt-10 hidden border-b border-line pb-3 text-[0.8125rem] sm:block"
        >
          <NavLinks />
        </nav>
      </header>

      {/*
        Banda de obras: las seis piezas a la misma altura y pegadas entre sí
        (sin gutter), dentro del contenedor para dejar margen lateral.
        En desktop/tablet, tira continua con la pieza entera (object-contain);
        la altura en desktop se calcula para que las seis proporciones
        actuales quepan en el ancho útil (suman ≈6.4×altura) y, si al
        sustituir las fotos la tira excede el ancho, hay scroll horizontal.
        En móvil, mosaico de tiras verticales en una sola fila: las seis
        visibles a la vez, cada foto recortada a lo ancho (object-cover)
        hasta quedar en franja; al pinchar se llega a la obra entera
        en /obras.
      */}
      <div className="mt-10 overflow-x-auto sm:mt-16 md:mt-26">
        <ul className="grid grid-cols-6 sm:mx-auto sm:flex sm:w-max sm:snap-x sm:snap-proximity">
          {obras.map((obra) => (
            <li key={obra.src} className="sm:snap-start">
              <Link
                href={`/obras#${obraId(obra)}`}
                className="group block h-[112vw] sm:h-[32vw] lg:h-[calc((100vw-8rem)/6.5)] lg:max-h-[11rem]"
                aria-label={`${obra.alt} — ver entera en Obras`}
              >
                <Image
                  src={obra.src}
                  alt={obra.alt}
                  width={obra.width}
                  height={obra.height}
                  priority
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 17vw"
                  className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-80 sm:w-auto sm:object-contain"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
