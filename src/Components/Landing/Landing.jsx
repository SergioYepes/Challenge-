import React from 'react'
import Navbar from '../Navbar/Navbar'
// import playa from "../../imagenes/playa.jpg"
import landing from "./landing.module.css"

function Landing() {
  return (
    <div className={landing.container}>
      <Navbar/>
      {/* <img src={playa} alt='not found'/> */}
      <h1 className={landing.textC}>ESTÁR CÓMODO NUNCA FUE TAN FÁCIL</h1>
      <button className={landing.shop} >SHOP</button>
      <div className={landing.changeCont}>   
        <button className={landing.button}>.</button>
        <button className={landing.button} >.</button>
        <button className={landing.button} >.</button>
      </div>
    </div>
  )
}

export default Landing
