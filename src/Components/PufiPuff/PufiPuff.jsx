import React from 'react'
import puff from "../../imagenes/puff.jpg"
import peff from "../../imagenes/peff.jpg"
import pufiPuff from "./pufiPuff.module.css"

function PufiPuff() {
  return (
    <div id="PufiPuff" className={pufiPuff.container}>
      <div className={pufiPuff.containerPuff}>
        <img src={peff} alt="" height="120px"/>
        <h2>Pufi PUFF</h2>
        <p className={pufiPuff.Text}>Puffs muy  confortables y resistentes, faciles de limpiar y mover</p>
        <button className={pufiPuff.vermas}> → VER MAS</button>
      </div>
      <div className={pufiPuff.containerImg}>
        {/* <img src={puff} alt=""/> */}
      </div>
    </div>
  )
}

export default PufiPuff
