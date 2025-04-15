'use client'

import Image from "next/image";
import { MdOutlinePix } from "react-icons/md";
import { RiBarChartFill } from "react-icons/ri";
import { BiSolidSpreadsheet } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import styles from "./style.module.css";

export function CardsServices() {
  return(
    <>
    <div className={styles.Container}>
      <div className={styles.TitlePlataforma}>Plataforma Internas</div>
      <div className={styles.CxContainer}>
        <div className={styles.ContainerCard}>
          <div className={styles.CxCabecalhoCards}>
          <RiBarChartFill className={styles.IconCards}/>
          <div className={styles.TxtCabecalhoCards}>Controle de apontamentos</div>
          </div>
          <div>
            <div className={styles.TxtCard}>Controle de Apontamentos da Plataforma AC.</div>
          </div>
          <div className={styles.CxButtons}>
            <a href="https://apontamentosac.vercel.app/login" target="_blank">
              <button className={styles.Button}>Acessar</button>
            </a>
            <a href=""></a>
          </div>
        </div>

        <div className={styles.ContainerCard}>
          <div className={styles.CxCabecalhoCards}>
          <MdOutlinePix  className={styles.IconCards}/>
          <div className={styles.TxtCabecalhoCards}>Transferências Especiais</div>
          </div>
          <div>
            <div className={styles.TxtCard}>Relatório das Transferências especiais dados Tgov</div>
          </div>
          <div className={styles.CxButtons}>
            <a href="https://ajrespeciais.vercel.app/" target="_blank">
              <button className={styles.Button}>Acessar</button>
            </a>
          </div>
        </div>

        <div className={styles.ContainerCard}>
          <div className={styles.CxCabecalhoCards}>
          <BiSolidSpreadsheet className={styles.IconCards}/>
          <div className={styles.TxtCabecalhoCards}>Envio de PO para VRPL</div>
          </div>
          <div>
            <div className={styles.TxtCard}>Envio automátivo de Planilha Orçamentária para VRPL no Tgov</div>
          </div>
          <div className={styles.CxButtons}>
            <a href="https://vrpltgov.vercel.app/" target="_blank">
              <button className={styles.Button}>Acessar</button>
            </a>
          </div>
        </div>

        <div className={styles.ContainerCard}>
          <div className={styles.CxCabecalhoCards}>
          <MdDateRange className={styles.IconCards}/>
          <div className={styles.TxtCabecalhoCards}>Controle de Prazos</div>
          </div>
          <div>
            <div className={styles.TxtCard}>Controle de prazo em produção para fazer a gestão dos prazos</div>
          </div>
          <div className={styles.CxButtons}>
            <a href="#" target="_blank">
              <button className={styles.Button}>Acessar</button>
            </a>
          </div>
        </div>

      </div>


      <div className={styles.TitlePlataforma}>Plataforma Externas</div>
      <div className={styles.CxContainer}>
        <div className={styles.ContainerCard}>
          <div className={styles.CxCabecalhoCards}>
          <Image className={styles.LogoSistemaExterno} src='/Logo-AC.png' alt="Logo AC" width={40} height={40}></Image>
          <div className={styles.TxtCabecalhoCards}>Plataforma AC</div>
          </div>
          <div>
            <div className={styles.TxtCard}>Plataforma de Gerenciamento de instrumentos de repasse.</div>
          </div>
          <div className={styles.CxButtons}>
            <a href="https://acconsultoriase.com.br/login" target="_blank">
              <button className={styles.Button}>Acessar</button>
            </a>
          </div>
        </div>

        <div className={styles.ContainerCard}>
          <div className={styles.CxCabecalhoCards}>
          <Image className={styles.LogoSistemaExterno} src='/Logo-Tgov.png' alt="Logo TGOV" width={40} height={40}></Image>
          <div className={styles.TxtCabecalhoCards}>TransfereGov</div>
          </div>
          <div>
            <div className={styles.TxtCard}>Tgov é usado para operacionalização dos Instrumentos de Repasse</div>
          </div>
          <div className={styles.CxButtons}>
            <a href="https://portal.transferegov.sistema.gov.br/portal/home" target="_blank">
              <button className={styles.Button}>Acessar</button>
            </a>
          </div>
        </div>

        <div className={styles.ContainerCard}>
          <div className={styles.CxCabecalhoCards}>
          <Image className={styles.LogoSistemaExterno} src='/logo-sismob.png' alt="Logo SISMOB" width={35} height={35}></Image>
          <div className={styles.TxtCabecalhoCards}>SISMOB</div>
          </div>
          <div>
            <div className={styles.TxtCard}>Sistema de Monitoramento de Obras da Saúde.</div>
          </div>
          <div className={styles.CxButtons}>
            <a href="https://sismob.saude.gov.br/sismob2/#" target="_blank">
              <button className={styles.Button}>Acessar</button>
            </a>
          </div>
        </div>

        <div className={styles.ContainerCard}>
          <div className={styles.CxCabecalhoCards}>
          <Image className={styles.LogoSistemaExterno} src='/Logo-SIMEC.png' alt="Logo SIMEC" width={35} height={35}></Image>
          <div className={styles.TxtCabecalhoCards}>SIMEC Obras 2.0</div>
          </div>
          <div>
            <div className={styles.TxtCard}>Sistema de Monitoramento de Obras da Educação</div>
          </div>
          <div className={styles.CxButtons}>
            <a href="https://simec.mec.gov.br/login.php" target="_blank">
              <button className={styles.Button}>Acessar</button>
            </a>
          </div>
        </div>

      </div>
 
      </div>
    </>
  )
}