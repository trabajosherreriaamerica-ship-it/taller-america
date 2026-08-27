import { useState } from 'react'

/* Cambia estos datos por los reales del taller */
const WHATSAPP = '5219981552737' // 52 + 1 + número, sin espacios
const TELEFONO = '998 155 2737'
const CORREO = 'trabajosherreriaamerica@gmail.com'

export default function Contacto() {
  const [nombre, setNombre] = useState('')
  const [trabajo, setTrabajo] = useState('')
  const [lugar, setLugar] = useState('')

  const enviar = () => {
    const texto = `Hola, soy ${nombre || 'un cliente'}. Necesito: ${trabajo || 'un trabajo de herrería'}. Obra en: ${lugar || 'Cancún'}.`
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank')
  }

  return (
    <section id="contacto" className="bloque contacto">
      <div className="contenedor contacto__fila">
        <div>
          <p className="etiqueta">Cotiza tu trabajo</p>
          <h2 className="titulo">Dinos qué necesitas<br />y te contestamos hoy.</h2>
          <p className="parrafo">
            Cuéntanos el trabajo y dónde está la obra. Si tienes foto o plano, mándalo por
            WhatsApp y te damos precio y fecha.
          </p>

          <ul className="datos">
            <li><span>Teléfono</span><a href={`tel:+52${TELEFONO.replace(/\s/g, '')}`}>{TELEFONO}</a></li>
            <li><span>Correo</span><a href={`mailto:${CORREO}`}>{CORREO}</a></li>
            <li><span>Horario</span>Lunes a viernes 8:00 a 18:00 · Sábado 8:00 a 14:00</li>
            <li><span>Taller</span>Cancún, Quintana Roo</li>
          </ul>
        </div>

        <div className="formulario">
          <label>
            Tu nombre
            <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Juan Pérez" />
          </label>
          <label>
            Qué necesitas
            <textarea
              value={trabajo}
              onChange={(e) => setTrabajo(e.target.value)}
              rows={4}
              placeholder="Portón corredizo de 4 metros, con motor"
            />
          </label>
          <label>
            Dónde está la obra
            <input value={lugar} onChange={(e) => setLugar(e.target.value)} placeholder="Cancún, Región 500" />
          </label>
          <button className="boton" onClick={enviar}>
            Enviar por WhatsApp
          </button>
          <p className="formulario__nota">Se abre WhatsApp con tu mensaje ya escrito. Ahí puedes agregar fotos.</p>
        </div>
      </div>
    </section>
  )
}