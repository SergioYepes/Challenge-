import React from 'react'
import { FaGithub } from "react-icons/fa";
import sponsors from "./Sponsors.module.css"

function Sponsors() {
  return (
    <div className={sponsors.container}>
        <div className={sponsors.Terms}>
            <p>&copy;{new Date().getFullYear()}Pufi</p>
        </div>
        <div className={sponsors.cntBtn}>
            <a
                href='https://github.com/SergioYepes'
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub className={sponsors.Icono} />
            </a>
        </div>
    </div>
  )
}

export default Sponsors
