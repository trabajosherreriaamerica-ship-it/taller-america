import { useEffect, useRef, useState } from 'react'

/* Las fotos viven en public/fotos/. Cada número es un archivo
   trabajo-N.jpeg. Borra el número de la foto que no quieras mostrar. */
const fotos = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
].map((n) => ({ n, src: `/fotos/trabajo-${n}.jpeg` }))

export default function Carrusel() {
  const [activa, setActiva] = useState(0)
  const pausa = useRef(false)

  useEffect(() => {
    const t = setInterval(() => {
      if (!pausa.current) setActiva((i) => (i + 1) % fotos.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  const mover = (paso) => setActiva((i) => (i + paso + fotos.length) % fotos.length)

  return (
    <section id="trabajos" className="bloque">
      <div className="contenedor">
        <p className="etiqueta">Trabajos entregados</p>
        <h2 className="titulo">Lo que sale del taller</h2>
      </div>

      <div
        className="carrusel"
        onMouseEnter={() => (pausa.current = true)}
        onMouseLeave={() => (pausa.current = false)}
      >
        <div className="carrusel__marco">
          {fotos.map((f, i) => (
            <figure key={f.n} className={`carrusel__foto ${i === activa ? 'es-activa' : ''}`}>
              <img
                src={f.src}
                alt={`Trabajo de herrería del Taller América en Cancún`}
                loading="lazy"
                onError={(e) => { e.currentTarget.style.visibility = 'hidden' }}
              />
            </figure>
          ))}

          <button className="carrusel__flecha carrusel__flecha--izq" onClick={() => mover(-1)} aria-label="Foto anterior">‹</button>
          <button className="carrusel__flecha carrusel__flecha--der" onClick={() => mover(1)} aria-label="Foto siguiente">›</button>
        </div>

        <div className="carrusel__marcas">
          {fotos.map((f, i) => (
            <button
              key={f.n}
              className={i === activa ? 'es-activa' : ''}
              onClick={() => setActiva(i)}
              aria-label={`Ver foto ${f.n}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}