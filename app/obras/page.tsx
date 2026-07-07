import type { Metadata } from "next";
import Image from "next/image";
import { obras } from "@/lib/obras";

export const metadata: Metadata = {
  title: "Obras",
};

export default function Obras() {
  return (
    <div className="pb-16">
      <h1 className="sr-only">Obras</h1>
      {/* Scroll vertical: una obra por pantalla aprox., alineación alternada */}
      <ul className="space-y-26 md:space-y-42">
        {obras.map((obra, i) => (
          <li
            key={obra.src}
            className={`flex ${i % 2 === 1 ? "justify-end" : "justify-start"}`}
          >
            <Image
              src={obra.src}
              alt={obra.alt}
              width={obra.width}
              height={obra.height}
              sizes="(min-width: 768px) 56rem, 100vw"
              className="h-auto w-full max-w-4xl"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
