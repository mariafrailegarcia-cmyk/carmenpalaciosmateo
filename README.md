# Carmen Palacios Mateo — sitio personal

Web personal de artista construida con **Next.js (App Router) + Tailwind CSS v4**, pensada para desplegarse en **Vercel**.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Despliegue en Vercel

Importa el repositorio en Vercel: detecta Next.js automáticamente, sin configuración extra.

## Dónde sustituir contenidos

| Contenido | Archivo |
|---|---|
| Imágenes de obras | `public/obras/obra-01.jpg` … `obra-06.jpg` (mismo nombre) + dimensiones en `lib/obras.ts` |
| Obra destacada del inicio | `obraDestacada` en `lib/obras.ts` |
| Email y redes sociales | `lib/site.ts` |
| Texto de biografía | `app/biografia/page.tsx` |

Las imágenes actuales son **placeholders** (gradientes de gris). Al sustituirlas, actualiza `width`/`height` en `lib/obras.ts` con las dimensiones reales para que `next/image` reserve el espacio correcto.

## Sistema de diseño

- **Tipografías** (vía `next/font`): [Newsreader](https://fonts.google.com/specimen/Newsreader) para títulos (serif editorial con tamaños ópticos) e [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) para texto y navegación.
- **Paleta** (tokens en `app/globals.css`): `paper` #fbfaf7 (fondo), `ink` #191817 (texto), `mist` #706c66 (texto secundario), `line` #e6e3dd (filetes).
- **Espaciado**: escala única de 8 pasos — 4 / 8 / 16 / 24 / 40 / 64 / 104 / 168 px (Tailwind `1 / 2 / 4 / 6 / 10 / 16 / 26 / 42`). No usar valores fuera de la escala en layouts.
- **Movimiento**: solo un fundido de entrada por página (`app/template.tsx`) y transiciones de color/opacidad en enlaces. Respeta `prefers-reduced-motion`.

## Estructura

```
app/
  layout.tsx        # fuentes, header, footer, metadatos
  template.tsx      # transición de entrada de página
  globals.css       # tokens de diseño (colores, tipografías)
  page.tsx          # Inicio
  obras/page.tsx    # Galería
  biografia/page.tsx
  contacto/page.tsx
components/
  Header.tsx        # navegación superior
  Footer.tsx
lib/
  site.ts           # nombre, email, redes (placeholders)
  obras.ts          # catálogo de obras
public/obras/       # imágenes (placeholders)
```
