"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { obras } from "@/lib/obras";

/*
  Banda de obras del inicio + visor (lightbox) en la misma página.

  La banda: las seis piezas a la misma altura y pegadas entre sí (sin
  gutter). En desktop/tablet, tira continua con la pieza entera
  (object-contain); la altura en desktop se calcula para que las seis
  proporciones actuales quepan en el ancho útil (suman ≈6.4×altura).
  En móvil, mosaico de tiras verticales con todas visibles a la vez
  (recorte a lo ancho con object-cover).

  Al pinchar una obra se abre el visor sobre fondo oscuro con la foto
  completa; se pasa de obra con las miniaturas de abajo, las flechas,
  deslizando el dedo o con el teclado (← → y Escape para cerrar).
*/
export default function BandaObras() {
  const [active, setActive] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const move = useCallback((delta: number) => {
    setActive((i) =>
      i === null ? i : (i + delta + obras.length) % obras.length
    );
  }, []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") move(-1);
      if (e.key === "ArrowRight") move(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, move]);

  return (
    <>
      <div className="mt-10 overflow-x-auto sm:mt-16 md:mt-26">
        <ul className="grid grid-cols-6 sm:mx-auto sm:flex sm:w-max">
          {obras.map((obra, i) => (
            <li key={obra.src}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Ver ${obra.alt} completa`}
                className="group block h-[112vw] w-full cursor-pointer sm:h-[32vw] sm:w-auto lg:h-[calc((100vw-8rem)/6.5)] lg:max-h-[11rem]"
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
              </button>
            </li>
          ))}
        </ul>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={obras[active].alt}
          onClick={close}
          className="animate-fade fixed inset-0 z-50 flex flex-col bg-[#161616]/97"
        >
          <div className="flex justify-end p-4 md:p-6">
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar"
              className="p-2 text-2xl leading-none text-white/80 transition-colors duration-300 hover:text-white"
            >
              ×
            </button>
          </div>

          <div
            className="flex min-h-0 flex-1 items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const d = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(d) > 40) move(d < 0 ? 1 : -1);
              touchX.current = null;
            }}
          >
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Anterior"
              className="hidden px-4 py-8 text-2xl text-white/60 transition-colors duration-300 hover:text-white sm:block md:px-6"
            >
              ‹
            </button>
            <Image
              key={obras[active].src}
              src={obras[active].src}
              alt={obras[active].alt}
              width={obras[active].width}
              height={obras[active].height}
              sizes="92vw"
              className="animate-fade max-h-full w-auto max-w-[calc(100vw-3rem)] object-contain sm:max-w-[min(80vw,56rem)]"
            />
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Siguiente"
              className="hidden px-4 py-8 text-2xl text-white/60 transition-colors duration-300 hover:text-white sm:block md:px-6"
            >
              ›
            </button>
          </div>

          <ul
            className="flex justify-center gap-2 overflow-x-auto p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {obras.map((obra, i) => (
              <li key={obra.src} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Ver ${obra.alt}`}
                  aria-current={i === active}
                  className={`block transition-opacity duration-300 ${
                    i === active ? "opacity-100" : "opacity-45 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={obra.src}
                    alt=""
                    width={obra.width}
                    height={obra.height}
                    sizes="56px"
                    className="h-12 w-12 object-cover md:h-14 md:w-14"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
