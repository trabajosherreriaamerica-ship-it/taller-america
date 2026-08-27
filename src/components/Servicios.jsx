import Arco from './Arco'

const servicios = [
  { titulo: 'Portones y puertas', texto: 'Corredizos, abatibles y automatizados. Refuerzo interno y acabado anticorrosivo para clima costero.' },
  { titulo: 'Barandales y escaleras', texto: 'Escaleras rectas, de caracol y marinas. Barandal en acero, tubular o combinado con cristal.' },
  { titulo: 'Estructura metálica', texto: 'Techumbres, entrepisos, mezanines y bases para equipo. Cálculo, fabricación y montaje.' },
  { titulo: 'Protecciones', texto: 'Rejas de ventana, cercas perimetrales y jaulas de seguridad para negocios y casa habitación.' },
  { titulo: 'Soldadura y reparación', texto: 'Soldadura MIG y electrodo en sitio. Reparamos lo que ya tienes en lugar de reponerlo.' },
  { titulo: 'Herrería a medida', texto: 'Muebles, letreros, racks y piezas especiales. Traes la idea o el plano y lo fabricamos.' },
  { titulo: 'Maquinaria pesada', texto: 'Soldadura y recuperación de piezas de excavadora, retro y equipo de obra: cucharones, dientes, brazos y bastidores. Vamos a tu obra o taller.' },
  { titulo: 'Acero inoxidable', texto: 'Barras, mesas de trabajo, campanas y pasamanos para cocina, hotel y restaurante. Acabado sanitario y pulido.' },
]

export default function Servicios() {
  return (
    <section id="servicios" className="bloque bloque--grafito">
      <div className="contenedor">
        <p className="etiqueta">Qué hacemos</p>
        <h2 className="titulo">Servicios del taller</h2>
        <Arco ancho="120px" />

        <div className="rejilla">
          {servicios.map((s) => (
            <article key={s.titulo} className="tarjeta">
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}