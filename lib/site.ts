/*
  Datos generales del sitio.
  Sustituye aquí el email y las redes cuando estén disponibles:
  este archivo es la única fuente de esos datos.
*/

export const site = {
  name: "Carmen Palacios Mateo",
  description:
    "Sitio personal de la artista Carmen Palacios Mateo. Escultura: obra, biografía y contacto.",
  // PLACEHOLDER — sustituir por el email real
  email: "hola@carmenpalaciosmateo.com",
  // PLACEHOLDER — sustituir por los perfiles reales (o eliminar entradas)
  socials: [
    { label: "Instagram", href: "https://instagram.com/usuario" },
    { label: "Vimeo", href: "https://vimeo.com/usuario" },
  ],
} as const;
