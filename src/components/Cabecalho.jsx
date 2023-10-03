import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css";

export default function Cabecalho() {

  
  return (
    <>
        <header className={styles.cabecalho}>
          
          <img src="/img/produtos.png" alt="Mãos segurando caixas." /> 

          {/* Crie uma lista com 5 links para as nossas rotas:
          Obs: Utilize o componente Link do router-dom */}

          <nav>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/produtos">PRODUTOS</Link> </li>
            </ul>
          </nav>

        </header> 
    </>
  )
}

