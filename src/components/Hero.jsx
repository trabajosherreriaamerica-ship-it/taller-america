import LiquidEther from './LiquidEther'

// Fuera del componente a propósito: si se declara adentro, el efecto
// se reconstruye en cada dibujado y la página se traba.
const COLORES = ['#3a3d42', '#8c8f94', '#d7262d']

// ¿El navegador puede dibujar WebGL? Si no puede, no montamos el efecto:
// sin esta comprobación, el error tumba toda la página.
function soportaWebGL() {
  if (typeof window === 'undefined') return false
  try {
    const lienzo = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext &&
      (lienzo.getContext('webgl2') || lienzo.getContext('webgl'))
    )
  } catch {
    return false
  }
}

// Quien pidió menos animación en su sistema no ve el efecto:
// queda el negro con el degradado rojo.
function prefiereQuieto() {
  if (typeof window === 'undefined') return true
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// En celular sí se dibuja, pero en calidad reducida para no calentar
// el teléfono ni retrasar la carga.
const enCelular =
  typeof window !== 'undefined' && window.matchMedia('(max-width: 820px)').matches

const mostrarFluido = soportaWebGL() && !prefiereQuieto()

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__fondo">
        {mostrarFluido && (
          <LiquidEther
            colors={COLORES}
            mouseForce={18}
            cursorSize={100}
            isViscous={!enCelular}
            viscous={30}
            iterationsViscous={enCelular ? 16 : 32}
            iterationsPoisson={enCelular ? 16 : 32}
            resolution={enCelular ? 0.22 : 0.4}
            isBounce={false}
            autoDemo
            autoSpeed={0.4}
            autoIntensity={2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        )}
      </div>

      <div className="contenedor hero__contenido">
        <p className="etiqueta">Cancún · Península de Yucatán</p>
        <h1 className="hero__titulo">
          Acero cortado, soldado<br />y montado <span className="rojo">a tu medida.</span>
        </h1>
        <p className="hero__texto">
          Portones, barandales, escaleras y estructura metálica hechos en taller propio.
          Tomamos medidas en tu obra y lo entregamos instalado.
        </p>
        <div className="hero__botones">
          <a className="boton" href="#contacto">Pedir cotización</a>
          <a className="boton boton-linea" href="#trabajos">Ver trabajos</a>
        </div>
      </div>

      <a className="hero__baja" href="#trabajos" aria-label="Bajar a trabajos">
        <span />
      </a>
    </section>
  )
}