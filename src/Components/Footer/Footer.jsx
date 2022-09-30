import React from 'react'
import compra from "../../imagenes/compra.jpg"
import { AiFillFacebook } from "react-icons/ai";
import {AiOutlineTwitter} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import footer from "./footer.module.css"

function Footer() {
  return (
    <div className={footer.container}>
        <div className={footer.logo}>
            <h1>Pufi</h1>
            <p>&copy;</p>
        </div>
          <div>
              <a href="#PufiRain"><p>PUFI RAIN</p></a>
              <a href="#PufiPuff"><p>PUFI PUFF</p></a>
              <a href="#PufiCart"><p>PUFI CART</p></a>
              <a href="#PufiNap"><p>PUFI NAP</p></a>
          </div>
          <div>
              <a href="#Home"><p>CONTACTO</p></a>
              <a href="#Home"><p>AYUDA</p></a>
              <a href="#Home"><p>COMO COMPRAR</p></a>
              <a href="#Home"><p>TERMINOS & CONDICIONES</p></a>
          </div>
          <div>
              <p>COMPRA 100% SEGURA</p>
              <div>
                <img src={compra} alt="" height="120px"/>
                <p>COMPRA CON LA GARANTIA DE PUFI</p>
              </div>
          </div>
          <div className={footer.links}>
            <div>
              <p>SIGUENOS EN </p>
            </div>
            <div className={footer.lonks}>
              <a
                href="#Home"
                target="_blank"
                rel="noreferrer"
                >
                <AiFillFacebook />
              </a>
              <a
                href="#Home"
                target="_blank"
                rel="noreferrer"
                >
                <AiOutlineTwitter />
              </a>
              <a
                href="#Home"
                target="_blank"
                rel="noreferrer"
                >
                <AiOutlineInstagram />
              </a>
            </div>

          </div>
        
    </div>
  )
}

export default Footer