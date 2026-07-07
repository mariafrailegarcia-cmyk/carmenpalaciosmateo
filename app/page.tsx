import Image from "next/image";
import Link from "next/link";
import { obraDestacada } from "@/lib/obras";

export default function Inicio() {
  return (
    <div className="pb-16">
      <h1 className="text-2xl leading-snug font-normal tracking-tight md:text-3xl">
        Carmen Palacios Mateo
      </h1>
      <p className="mt-1 text-sm text-mist">Pintura</p>

      {/* Una sola obra destacada, con aire */}
      <div className="mt-16 md:mt-26">
        <Link href="/obras" className="group block max-w-3xl">
          <Image
            src={obraDestacada.src}
            alt={obraDestacada.alt}
            width={obraDestacada.width}
            height={obraDestacada.height}
            priority
            sizes="(min-width: 768px) 48rem, 100vw"
            className="h-auto w-full"
          />
          <span className="mt-3 block text-xs text-mist transition-colors duration-300 group-hover:text-ink">
            Ver obras →
          </span>
        </Link>
      </div>
    </div>
  );
}
