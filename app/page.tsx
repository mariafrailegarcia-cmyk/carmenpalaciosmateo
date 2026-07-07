import Image from "next/image";
import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import { obras, obraId } from "@/lib/obras";

export default function Inicio() {
  return (
    <div className="pt-8 pb-16 md:pt-16">
      <header>
        <h1 className="max-w-2xl text-[clamp(2rem,4.25vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.025em]">
          Carmen Palacios Mateo
        </h1>
        <nav
          aria-label="Principal"
          className="mt-10 border-b border-line pb-3 text-[0.8125rem]"
        >
          <NavLinks />
        </nav>
      </header>

      {/*
        Banda de obras: tira continua con las seis piezas a la misma altura
        y pegadas entre sí (sin gutter), dentro del contenedor para dejar
        margen lateral. La altura en desktop se calcula para que las seis
        proporciones actuales quepan en el ancho útil (suman ≈6.4×altura);
        si al sustituir las fotos la tira excede el ancho, el contenedor
        permite scroll horizontal sin romper nada. En móvil la tira se
        conserva con scroll horizontal y snap suave.
      */}
      <div className="mt-16 overflow-x-auto md:mt-26">
        <ul className="mx-auto flex w-max snap-x snap-proximity">
          {obras.map((obra) => (
            <li key={obra.src} className="snap-start">
              <Link
                href={`/obras#${obraId(obra)}`}
                className="group block h-[48vw] sm:h-[32vw] lg:h-[calc((100vw-8rem)/6.5)] lg:max-h-[11rem]"
                aria-label={`${obra.alt} — ver en Obras`}
              >
                <Image
                  src={obra.src}
                  alt={obra.alt}
                  width={obra.width}
                  height={obra.height}
                  priority
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 60vw"
                  className="h-full w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
