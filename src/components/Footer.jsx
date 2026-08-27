export default function Footer() {
  return (
    <footer className="pie">
      <div className="contenedor pie__fila">
        <img src="/logo.png" alt="Taller de herrería América" className="pie__logo" />
        <p>Taller de herrería América · Cancún, Quintana Roo · Servicio en toda la Península de Yucatán</p>
        <p className="pie__firma">© {new Date().getFullYear()} Taller de herrería América</p>
      </div>
    </footer>
  )
}
