/*
  Catálogo de obras.

  Para sustituir una obra: reemplaza el archivo en /public/obras/
  (mismo nombre) y actualiza width/height con las dimensiones reales
  de la nueva imagen. El `alt` describe la obra para lectores de pantalla.

  Cuando haya fichas de texto, añade aquí los campos (título, año, técnica…)
  y las páginas los recogerán de este único archivo.
*/

export type Obra = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const obras: Obra[] = [
  { src: "/obras/obra-01.jpg", alt: "Obra 1", width: 1200, height: 1500 },
  { src: "/obras/obra-02.jpg", alt: "Obra 2", width: 1600, height: 1200 },
  { src: "/obras/obra-03.jpg", alt: "Obra 3", width: 1200, height: 1500 },
  { src: "/obras/obra-04.jpg", alt: "Obra 4", width: 1500, height: 1200 },
  { src: "/obras/obra-05.jpg", alt: "Obra 5", width: 1200, height: 1600 },
  { src: "/obras/obra-06.jpg", alt: "Obra 6", width: 1600, height: 1100 },
];

/* Obra que aparece destacada en la página de inicio */
export const obraDestacada = obras[0];
