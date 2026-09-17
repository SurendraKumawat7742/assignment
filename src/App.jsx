import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import FocusAreas from './components/FocusAreas'
import Approach from './components/Approach'
import Office from './components/Office'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FocusAreas />
      <Approach />
      <Office />
      <CTA />
      <Footer />

    </>
  )
}

export default App