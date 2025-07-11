import React from 'react'
import Header from './components/header/Header'
import Programs from './components/programs/Programs'
import Gallery from './components/gallery/Gallery'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    <Header />
    <Hero />
    <Programs />

    <About />
    <Gallery />
    <Testimonial />
    <Contact  />
    <Footer />
      
    </>
  )
}

export default App
