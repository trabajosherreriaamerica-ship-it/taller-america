import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Carrusel from './components/Carrusel'
import Servicios from './components/Servicios'
import Taller from './components/Taller'
import Cobertura from './components/Cobertura'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Carrusel />
        <Servicios />
        <Taller />
        <Cobertura />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
