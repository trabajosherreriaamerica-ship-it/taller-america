/*
  ─────────────────────────────────────────────────────────────
  PLACEHOLDER de React Bits.

  Este archivo imita a GradientWaves con CSS para que el sitio
  corra desde ahora. Cuando quieras el original:

    1) npm install ogl
    2) Copia el código de https://reactbits.dev/backgrounds/gradient-waves
    3) Borra TODO este archivo y pega el código encima.

  Los props que usa el sitio son los mismos, así que el hero
  sigue funcionando sin tocar nada más.
  ─────────────────────────────────────────────────────────────
*/
import './GradientWaves.css'

export default function GradientWaves({
  horizonColor = '#7a0f14',
  waveColor = '#d7262d',
  crestColor = '#ffffff',
  speed = 0.4,
  opacity = 1,
  grain = true,
}) {
  const duracion = `${Math.max(6, 26 / (speed || 0.4))}s`

  return (
    <div
      className={`gw ${grain ? 'gw--grano' : ''}`}
      style={{
        opacity,
        '--gw-horizonte': horizonColor,
        '--gw-onda': waveColor,
        '--gw-cresta': crestColor,
        '--gw-duracion': duracion,
      }}
      aria-hidden="true"
    >
      <div className="gw__capa gw__capa--1" />
      <div className="gw__capa gw__capa--2" />
      <div className="gw__horizonte" />
    </div>
  )
}
