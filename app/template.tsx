"use client";

/* Envuelve cada página para aplicar la transición de entrada (ver globals.css) */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-page">{children}</div>;
}
