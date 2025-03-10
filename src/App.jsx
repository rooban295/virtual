import './App.css'
import { Feature } from './components/Feature'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Pricing } from './components/Pricing'
import { Testimonial } from './components/Testimonial'
import { Workflow } from './components/Workflow'

function App() {
  

  return (
    <>
    <Nav/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <Hero/>  
    <Feature/>
    <Workflow/>
    <Pricing/>
    <Testimonial/>
    <Footer/>
    </div>
    </>
  )
}

export default App
