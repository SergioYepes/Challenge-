import React from 'react'
import ContactForm from '../Form/Form'
import Landing from '../Landing/Landing'
import PufiRain from '../PufiRain/PufiRain'
import PufiPuff from '../PufiPuff/PufiPuff'
import PufiCart from '../PufiCart/PufiCart'
import PufiNap from '../PufiNap/PufiNap'
import Gallery from '../Gallery/Gallery'
import Footer from '../Footer/Footer'
import Sponsors from '../Sponsors/Sponsors'

function Home() {
  return (
    <div>
        <Landing/>
        <PufiRain/>
        <PufiPuff/>
        <PufiCart/>
        <PufiNap/>
        <Gallery/>
        <ContactForm/>
        <Footer/>
        <Sponsors/>
    </div>
  )
}

export default Home
