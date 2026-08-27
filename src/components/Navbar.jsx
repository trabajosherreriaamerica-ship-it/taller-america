import { useEffect, useState } from 'react'

const enlaces = [
  { texto: 'Trabajos', destino: '#trabajos' },
  { texto: 'Servicios', destino: '#servicios' },
  { texto: 'El taller', destino: '#taller' },
  { texto: 'Cobertura', destino: '#cobertura' },
]

export default function Navbar() {
  const [solido, setSolido] = useState(false)
  const [abierto, setAbierto] = useState(false)

  useEffect(() => {
    const alScroll = () => setSolido(window.scrollY > 40)
    window.addEventListener('scroll', alScroll)
    return () => window.removeEventListener('scroll', alScroll)
  }, [])

  return (
    <header className={`nav ${solido ? 'nav--solido' : ''}`}>
      <div className="contenedor nav__fila">
        <a href="#inicio" className="nav__marca">
          <img src="/logo.png" alt="Taller de herrería América" />
        </a>

        <nav className={`nav__enlaces ${abierto ? 'nav__enlaces--abierto' : ''}`}>
          {enlaces.map((e) => (
            <a key={e.destino} href={e.destino} onClick={() => setAbierto(false)}>
              {e.texto}
            </a>
          ))}
          <a className="boton nav__cta" href="#contacto" onClick={() => setAbierto(false)}>
            Pedir cotización
          </a>
        </nav>

        <button
          className="nav__menu"
          onClick={() => setAbierto((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={abierto}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
