import React from 'react'
import puff from "../../imagenes/bean-bag.png"
import Rain from "../../imagenes/protection.png"
import Cart from "../../imagenes/shopping-bag.png"
import Nap from "../../imagenes/sleep.png"
import navbar from "./navbar.module.css"

function Navbar() {
  return (
    <div className={navbar.container}>
        <div className={navbar.logo}>
          <h1>Pufi</h1>
          <p>&copy;</p>
        </div>
        <div className={navbar.buttons}>
          <div className={navbar.link}>
            <a href="#PufiPuff"><img src={puff} alt="not found" height="50px"/></a>
            <p>PUFI PUFF</p>
          </div>
          <div className={navbar.links}>
            <a href="#PufiRain"><img src={Rain} alt="not found" height="50px"/></a>
            <p className={navbar.pufi}>PUFI RAIN</p>
          </div>
          <div className={navbar.links}>
            <a href="#PufiCart"><img src={Cart} alt="not found" height="50px"/></a>
            <p>PUFI CART</p>
          </div>
          <div id="last" className={navbar.links}>
            <a href="#PufiNap"><img src={Nap} alt="not found" height="50px"/></a>
            <p>PUFI NAP</p>
          </div>
        </div>
        <div className={navbar.account}>
          <p className={navbar.conts}> Mi cuenta ↓</p>
          <p className={navbar.cont}> Mi compra</p>
        </div>
    </div>
  )
}

export default Navbar
