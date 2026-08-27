# Taller de herrería América — sitio web

## Para correrlo
```
npm install
npm run dev
```
Abre la dirección que te muestre la terminal (normalmente http://localhost:5173).

## Lo que tienes que cambiar

1. **Teléfono y WhatsApp** → `src/components/Contacto.jsx`, arriba del archivo:
   `WHATSAPP`, `TELEFONO` y `CORREO`. El WhatsApp va sin espacios ni signos: 52 + 1 + los 10 dígitos.
2. **Fotos del carrusel** → mete las imágenes en `public/fotos/` con los nombres
   `trabajo-1.jpg` … `trabajo-5.jpg`. Si quieres otros nombres o más fotos, edita la
   lista `fotos` al inicio de `src/components/Carrusel.jsx`.
3. **Textos de servicios y plazas** → `src/components/Servicios.jsx` y `Cobertura.jsx`.

## El fondo del hero (React Bits)

`src/components/GradientWaves.jsx` es un sustituto hecho con CSS para que el sitio
corra desde ya. Para poner el original de React Bits:

1. `npm install ogl`
2. Copia el código de https://reactbits.dev/backgrounds/gradient-waves
3. Borra todo el contenido de `src/components/GradientWaves.jsx` y pega el código copiado.

No hay que tocar nada más: el hero ya le pasa los mismos props, en rojo y negro.
