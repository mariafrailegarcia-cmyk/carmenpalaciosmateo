import Image from "next/image";
import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import { obras, obraId } from "@/lib/obras";

export default function Inicio() {
  return (
    <div className="pt-8 pb-16 md:pt-16">
      <header>
        <h1 className="max-w-2xl text-[clamp(2.125rem,4.5vw,3.375rem)] leading-[1.08] tracking-[-0.01em]">
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
        Banda de obras: tira continua a sangre completa, las seis piezas a la
        misma altura y pegadas entre sí (sin gutter), como una tira de
        archivo. La altura en desktop (15.4vw) hace que las seis proporciones
        actuales sumen ≈100vw; si al sustituir las fotos la tira excede el
        ancho, el contenedor permite scroll horizontal sin romper nada.
        En móvil la tira se conserva con scroll horizontal y snap suave.
      */}
      <div className="relative left-1/2 mt-16 w-screen -translate-x-1/2 overflow-x-auto md:mt-26">
        <ul className="mx-auto flex w-max snap-x snap-proximity">
          {obras.map((obra) => (
            <li key={obra.src} className="snap-start">
              <Link
                href={`/obras#${obraId(obra)}`}
                className="group block h-[52vw] sm:h-[34vw] lg:h-[15.4vw]"
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
