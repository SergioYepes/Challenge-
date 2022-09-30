import React from 'react'
import nap from "../../imagenes/nap.jpg"
import naps from "../../imagenes/naps.jpg"
import puffNap from "./pufiNap.module.css"
function PufiNap() {
  return (
    <div id="PufiNap" className={puffNap.container}>
       <div className={puffNap.containerNap}>
          <img src={naps} alt="" height="120px"/>
          <h2>Pufi BOLSAS</h2>
          <p className={puffNap.Text}>Bolsas muy resistentes, de facil manejo, con multiples diseños</p>
          <button className={puffNap.vermas}> → VER MAS</button>
        </div>
        <div className={puffNap.containerShop}>

        </div>
    </div>
  )
}

export default PufiNap