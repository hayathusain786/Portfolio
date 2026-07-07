import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavComponent from './components/NavComponent'
import Hero from './pages/Hero'
import Carousel from './components/Carousel'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="bg-[#141628] min-h-screen text-slate-50 relative">
      <NavComponent />
      <Hero/>
      <Carousel />
      <About />
      <Contact />
      <Footer />

    </section>
  )
}

export default App
