# Carmen Palacios Mateo — sitio personal

Web personal de artista construida con **Next.js (App Router) + Tailwind CSS v4**, pensada para desplegarse en **Vercel**.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Despliegue en Vercel

El repositorio está listo para desplegar tal cual (build estática verificada, sin variables de entorno ni configuración extra). Falta únicamente **importarlo una vez** en una cuenta de Vercel — hasta que se haga, los push a GitHub no publican nada:

1. Entra en [vercel.com/new](https://vercel.com/new) con tu cuenta (créala con "Continue with GitHub" si no la tienes).
2. Autoriza a Vercel el acceso a GitHub cuando lo pida y elige el repositorio `carmenpalaciosmateo` en la lista → **Import**.
3. No cambies nada en la pantalla de configuración (detecta Next.js automáticamente) → **Deploy**.
4. En ~1 minuto tendrás la URL pública (`carmenpalaciosmateo.vercel.app` o similar).

Desde ese momento, **cada push a `main` despliega automáticamente**. El dominio propio (p. ej. `carmenpalaciosmateo.com`) se añade después en *Project → Settings → Domains*.

Si el proyecto ya estuviera importado y aun así no se actualiza: comprueba en *Project → Settings → Git* que la rama de producción es `main`, y mira el estado del último deploy en la pestaña *Deployments*.

## Dónde sustituir contenidos

| Contenido | Archivo |
|---|---|
| Imágenes de obras | `public/obras/obra-01.jpg` … `obra-06.jpg` (mismo nombre) + dimensiones en `lib/obras.ts` |
| Email y redes sociales | `lib/site.ts` |
| Texto de biografía | `app/biografia/page.tsx` |

Las imágenes actuales son **placeholders** (siluetas neutras sobre fondo claro). Al sustituirlas, actualiza `width`/`height` en `lib/obras.ts` con las dimensiones reales para que `next/image` reserve el espacio correcto. Las obras son esculturas: las imágenes se muestran siempre **enteras** (`object-contain` en la banda del inicio, tamaño natural en Obras) — nunca se recortan con `cover`.

## Sistema de diseño

- **Tipografía**: stack de sistema tipo Helvetica (`-apple-system` / `Helvetica Neue` / `Arial`) — sans recta y neutra, sin webfonts. **Todo el sitio en negrita** (700, definido en `body`); el nombre y los títulos con tracking negativo (letras compactas); sin cursivas en ninguna parte.
- **Paleta** (tokens en `app/globals.css`), neutra e institucional: `paper` #faf9f6 (blanco crudo), `ink` #2b2b2b (negro apagado), `mist` #6f6f6f (texto secundario), `line` #e6e4df (filetes).
- **Espaciado**: escala única de 8 pasos — 4 / 8 / 16 / 24 / 40 / 64 / 104 / 168 px (Tailwind `1 / 2 / 4 / 6 / 10 / 16 / 26 / 42`). No usar valores fuera de la escala en layouts.
- **Movimiento**: solo un fundido de entrada por página (`app/template.tsx`) y transiciones de color/opacidad en enlaces. Respeta `prefers-reduced-motion`.

## Estructura

```
app/
  layout.tsx        # fuentes, header, footer, metadatos
  template.tsx      # transición de entrada de página
  globals.css       # tokens de diseño (colores, tipografías)
  page.tsx          # Inicio (nombre + banda continua con las 6 obras)
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
