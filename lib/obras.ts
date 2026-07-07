/*
  Catálogo de obras (esculturas).

  Para sustituir una obra: reemplaza el archivo en /public/obras/
  (mismo nombre) y actualiza width/height con las dimensiones reales
  de la nueva imagen. El `alt` describe la escultura para lectores
  de pantalla.

  Cuando haya fichas de texto, añade aquí los campos (título, año,
  materiales…) y las páginas los recogerán de este único archivo.
*/

export type Obra = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const obras: Obra[] = [
  { src: "/obras/obra-01.jpg", alt: "Escultura 1", width: 1200, height: 1500 },
  { src: "/obras/obra-02.jpg", alt: "Escultura 2", width: 1600, height: 1200 },
  { src: "/obras/obra-03.jpg", alt: "Escultura 3", width: 1200, height: 1500 },
  { src: "/obras/obra-04.jpg", alt: "Escultura 4", width: 1500, height: 1200 },
  { src: "/obras/obra-05.jpg", alt: "Escultura 5", width: 1200, height: 1600 },
  { src: "/obras/obra-06.jpg", alt: "Escultura 6", width: 1600, height: 1100 },
];

/* Ancla estable por obra ("obra-01"…), usada para enlazar inicio → /obras */
export function obraId(obra: Obra): string {
  return obra.src.split("/").pop()!.replace(/\.\w+$/, "");
}
