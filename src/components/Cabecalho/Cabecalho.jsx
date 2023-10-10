import { Link, useLocation } from "react-router-dom";
import "./Cabecalho.scss";
import styles from "./Cabecalho.module.css";


export default function Cabecalho() {
  
    const rotaAtual = useLocation();

  return (
    <>
        <header className={styles.cabecalho}>
          
          <img src="/img/produtos.png" alt="Mãos segurando caixas." /> 

          {/* Crie uma lista com 5 links para as nossas rotas:
          Obs: Utilize o componente Link do router-dom */}

          <nav>
            <ul>
              <li><Link to="/" className={rotaAtual.pathname == "/" ? "active" : "" }>HOME</Link></li>
              <li><Link to="/produtos" className={rotaAtual.pathname == "/produtos" ? "active" : "" }>PRODUTOS</Link> </li>
            </ul>
          </nav>

        </header> 
    </>
  )
}

