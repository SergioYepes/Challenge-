import React from 'react'
import sombrillas from "../../imagenes/sombrillas.jpg"
import nap from "../../imagenes/nap.jpg"
import puff from "../../imagenes/puff.jpg"
import playa from "../../imagenes/playa.jpg"
import img from "../../imagenes/img.jpg"
import img2 from "../../imagenes/img2.jpg"

function Gallery() {
  return (
    <div>
      <div>
        <h1>Instagram</h1>
        <h3>#ESPUFI</h3>
        <div>
          <div>
            <img src={sombrillas} alt="not found" height="200px" width="200px"/>
            <img src={nap} alt="not found" height="200px" width="200px"/>
            <img src={puff} alt="not found" height="200px" width="200px"/>
          </div>
          <div>
            <img src={playa} alt="not found" height="200px" width="200px"/>
            <img src={img} alt="not found" height="200px" width="200px"/>
            <img src={img2} alt="not found" height="200px" width="200px"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
