import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ComfyPlay from './components/ComfyPlay'
import ComfyClean from './components/ComfyClean'
import CSFragrances from './components/CSFragrances'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ComfyPlay />
      <ComfyClean />
      <CSFragrances />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
