import React from 'react'
import cart from "../../imagenes/cart.jpg"
import bolsas from "../../imagenes/bolsas.jpg"
import kart from "./pufiCart.module.css"

function PufiCart() {
  return (
    <div id="PufiCart" className={kart.container}>
        <div className={kart.containerImg}>

        </div>
        <div className={kart.containerCart}>
          <img src={bolsas} alt="" height="120px"/>
          <h2>Pufi BOLSAS</h2>
          <p className={kart.Text}>Bolsas muy resistentes, de faci manejo, con multiples diseños</p>
          <button className={kart.vermas}> → VER MAS</button>
        </div>
    </div>
  )
}

export default PufiCart