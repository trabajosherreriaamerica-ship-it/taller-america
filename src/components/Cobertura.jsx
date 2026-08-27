const plazas = ['Cancún', 'Puerto Morelos', 'Playa del Carmen', 'Tulum', 'Chetumal', 'Mérida', 'Valladolid', 'Cozumel']

export default function Cobertura() {
  return (
    <section id="cobertura" className="bloque bloque--grafito">
      <div className="contenedor cobertura">
        <div>
          <p className="etiqueta">Dónde trabajamos</p>
          <h2 className="titulo">Taller en Cancún,<br />obra en toda la Península.</h2>
          <p className="parrafo">
            Salimos a tomar medidas y a montar en Quintana Roo y Yucatán. Si tu obra está
            fuera de Cancún, dinos dónde y te decimos el costo de traslado antes de cotizar.
          </p>
        </div>
        <ul className="plazas">
          {plazas.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
