import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biografía",
};

export default function Biografia() {
  return (
    <div className="grid gap-10 pb-16 md:grid-cols-12 md:gap-6">
      <h1 className="text-[0.9375rem] text-mist italic md:col-span-3">
        Biografía
      </h1>
      <div className="md:col-span-7 md:col-start-5">
        {/* Sustituir por el texto real; añadir más <p> si hace falta */}
        <p className="max-w-prose text-base leading-relaxed md:text-lg">
          [Biografía próximamente]
        </p>
      </div>
    </div>
  );
}
