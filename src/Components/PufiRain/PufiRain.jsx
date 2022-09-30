import React from 'react'
import sombrilla from "../../imagenes/sombrillas.jpg"
import umbrella from "../../imagenes/umbrella.png"
import pufiRain from "./pufiRain.module.css"

function PufiRain() {
  return (
    <div id="PufiRain" className={pufiRain.container}>
      <div className={pufiRain.containerShop}>
        <button className={pufiRain.button}>SHOP</button>
      </div>
      <div className={pufiRain.containerRain}> 
        <img src={umbrella} alt="" height="120px"/>
        <h2>Pufi RAIN</h2>
        <p className={pufiRain.Text}>sombrillas hechas de materiales reutilizables, muy  confortables y resistentes</p>
        <button className={pufiRain.vermas}> → VER MAS</button>
      </div>
    </div>
  )
}

export default PufiRain
