import Image from "next/image";
import Link from "next/link";
import { obraDestacada } from "@/lib/obras";

export default function Inicio() {
  return (
    <div className="pb-16">
      {/* Nombre en escalera: tres líneas con sangría progresiva */}
      <h1 className="font-serif text-[clamp(3.25rem,11vw,9.5rem)] leading-[0.98] font-light tracking-[-0.02em]">
        <span className="block">Carmen</span>
        <span className="ml-[10vw] block italic md:ml-[8vw]">Palacios</span>
        <span className="ml-[24vw] block md:ml-[19vw]">Mateo</span>
      </h1>

      <p className="mt-10 text-[0.6875rem] tracking-[0.18em] text-mist uppercase">
        Obra · Pintura
      </p>

      {/* Obra destacada, desplazada del eje hacia la derecha */}
      <div className="mt-16 flex justify-end md:mt-26">
        <Link
          href="/obras"
          className="group block w-full max-w-md md:mr-[6vw] md:max-w-lg"
        >
          <Image
            src={obraDestacada.src}
            alt={obraDestacada.alt}
            width={obraDestacada.width}
            height={obraDestacada.height}
            priority
            sizes="(min-width: 768px) 32rem, 100vw"
            className="h-auto w-full"
          />
          <span className="mt-4 block text-[0.6875rem] tracking-[0.18em] text-mist uppercase transition-colors duration-300 group-hover:text-ink">
            Ver obras →
          </span>
        </Link>
      </div>
    </div>
  );
}
