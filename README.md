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
| Email y redes sociales | `lib/site.ts` |
| Texto de biografía | `app/biografia/page.tsx` |

Las imágenes actuales son **placeholders** (siluetas neutras sobre fondo claro). Al sustituirlas, actualiza `width`/`height` en `lib/obras.ts` con las dimensiones reales para que `next/image` reserve el espacio correcto. Las obras son esculturas: las imágenes se muestran siempre **enteras** (`object-contain` en la banda del inicio, tamaño natural en Obras) — nunca se recortan con `cover`.

## Sistema de diseño

- **Tipografía** (vía `next/font`): una sola familia, [Inter](https://fonts.google.com/specimen/Inter), en pesos regulares — sin display ni cursivas.
- **Paleta** (tokens en `app/globals.css`): `paper` #ffffff (fondo), `ink` #111111 (texto), `mist` #737373 (texto secundario), `line` #e5e5e5 (filetes).
- **Espaciado**: escala única de 8 pasos — 4 / 8 / 16 / 24 / 40 / 64 / 104 / 168 px (Tailwind `1 / 2 / 4 / 6 / 10 / 16 / 26 / 42`). No usar valores fuera de la escala en layouts.
- **Movimiento**: solo un fundido de entrada por página (`app/template.tsx`) y transiciones de color/opacidad en enlaces. Respeta `prefers-reduced-motion`.

## Estructura

```
app/
  layout.tsx        # fuentes, header, footer, metadatos
  template.tsx      # transición de entrada de página
  globals.css       # tokens de diseño (colores, tipografías)
  page.tsx          # Inicio (nombre + banda con las 6 obras)
  obras/page.tsx    # Galería
  biografia/page.tsx
  contacto/page.tsx
components/
  Header.tsx        # navegación superior (oculta en el inicio)
  NavLinks.tsx      # enlaces de navegación compartidos
  Footer.tsx
lib/
  site.ts           # nombre, email, redes (placeholders)
  obras.ts          # catálogo de obras
public/obras/       # imágenes (placeholders)
```
