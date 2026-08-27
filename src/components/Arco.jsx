/* Elemento firma: la línea de corte que termina en chispa, como el logo. */
export default function Arco({ ancho = '100%' }) {
  return (
    <div className="arco" style={{ width: ancho }} aria-hidden="true">
      <span className="arco__linea" />
      <svg className="arco__chispa" viewBox="0 0 40 40" width="34" height="34">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 12
          const r1 = i % 2 === 0 ? 5 : 4
          const r2 = i % 2 === 0 ? 18 : 12
          return (
            <line
              key={i}
              x1={20 + Math.cos(a) * r1}
              y1={20 + Math.sin(a) * r1}
              x2={20 + Math.cos(a) * r2}
              y2={20 + Math.sin(a) * r2}
              stroke="currentColor"
              strokeWidth="1.2"
            />
          )
        })}
        <circle cx="20" cy="20" r="2.6" fill="currentColor" />
      </svg>
    </div>
  )
}
