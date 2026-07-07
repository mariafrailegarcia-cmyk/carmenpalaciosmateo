import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biografía",
};

export default function Biografia() {
  return (
    <div className="grid gap-10 pb-16 md:grid-cols-12 md:gap-6">
      <h1 className="font-serif text-4xl font-light italic md:col-span-4 md:text-5xl">
        Biografía
      </h1>
      <div className="md:col-span-7 md:col-start-6">
        {/* Sustituir por el texto real; añadir más <p> si hace falta */}
        <p className="max-w-prose font-serif text-xl leading-relaxed font-light text-mist md:text-2xl">
          [Biografía próximamente]
        </p>
      </div>
    </div>
  );
}
