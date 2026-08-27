import Arco from './Arco'

export default function Taller() {
  return (
    <section id="taller" className="bloque">
      <div className="contenedor taller">
        <div className="taller__intro">
          <p className="etiqueta">El taller</p>
          <h2 className="titulo">Fierro, medida exacta<br />y palabra cumplida.</h2>
          <p className="parrafo">
            América es un taller de herrería en Cancún. Trabajamos con obra residencial,
            hotelera y comercial: llegamos a tomar medidas, fabricamos en nuestro taller
            y montamos en sitio, sin subcontratar el corte ni la soldadura.
          </p>
          <p className="parrafo">
            En la costa el acero sufre. Por eso cada pieza sale con limpieza, primario
            anticorrosivo y acabado que aguanta sal y humedad, no solo pintura encima.
          </p>
          <Arco ancho="140px" />
        </div>

        <div className="taller__cuadros">
          <article className="cuadro">
            <span className="cuadro__marca" />
            <h3>Misión</h3>
            <p>
              Fabricar e instalar herrería que resista el clima y el uso diario de la
              Península, con medidas exactas, tiempos cumplidos y precio claro desde la
              cotización, para que el cliente no tenga que volver a mandar hacer lo mismo.
            </p>
          </article>

          <article className="cuadro">
            <span className="cuadro__marca" />
            <h3>Visión</h3>
            <p>
              Ser el taller de referencia en la Península de Yucatán para obra residencial
              y comercial: crecer en capacidad y equipo sin perder el acabado a mano ni el
              trato directo con quien manda hacer el trabajo.
            </p>
          </article>

          <ul className="valores">
            <li><strong>Medida en sitio.</strong> Nada se fabrica a ojo.</li>
            <li><strong>Precio cerrado.</strong> Lo cotizado es lo que se cobra.</li>
            <li><strong>Fecha real.</strong> Te damos la que sí podemos cumplir.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
