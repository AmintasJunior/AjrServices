'use client'

import Image from "next/image"
import { FaLink } from "react-icons/fa";
import { FcSurvey } from "react-icons/fc";
import styles from "./style.module.css";


export function CardsServices() {
  return(
    <>
      <div className={styles.CxContainer}>
        <div className={styles.ContainerCard}>
          <div className={styles.CxCabecalhoCards}>
          <FcSurvey className={styles.IconCards}/>
          <div className={styles.TxtCabecalhoCards}>Apontamentos</div>
          </div>
          <div>
            <div>Controle de Apontamentos da Plataforma AC.</div>
          </div>
          <div className={styles.CxButtons}>
            <button className={styles.Button}>Acessar</button>
            <FaLink />
          </div>
        </div>
      </div>
    </>
  )
}