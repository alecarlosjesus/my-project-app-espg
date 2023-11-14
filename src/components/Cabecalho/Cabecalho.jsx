import { Link, useLocation } from "react-router-dom";
import "./Cabecalho.scss";
import styles from "./Cabecalho.module.css";
import { useState } from "react";
import { useEffect } from "react";

export default function Cabecalho() {

    const rotaAtual = useLocation();
    const [userLogado] = useState(JSON.parse(sessionStorage.getItem("userLogged")));


    const handleLogout = () => {
        sessionStorage.removeItem("userLogged");
        window.location.reload();
    }


if(sessionStorage.getItem("token-user")){
  return (
    <>
        <header className={styles.cabecalho}>

            <div style={userLogado == null ? {display:"none"}:{display:"block"}}>
              <p className="usuario">{userLogado != null ? `Nome: ${userLogado.name}`: ""}</p>
              <p className="usuario">{userLogado != null ? `Email: ${userLogado.email}`: ""}</p>
              <button onClick={handleLogout}>Logout</button>
            </div>

          <img src="/img/produtos.png" alt="Mãos segurando caixas." /> 

          {/* Crie uma lista com 5 links para as nossas rotas:
          Obs: Utilize o componente Link do router-dom */}

          <nav>
            <ul>
              <li><Link to="/" className={rotaAtual.pathname == "/" ? "active" : "" }>HOME</Link></li>
              <li><Link to="/login" className={rotaAtual.pathname == "/login" ? "active" : "" }>LOGIN</Link></li>
              <li><Link to="/produtos" className={rotaAtual.pathname == "/produtos" ? "active" : "" }>PRODUTOS</Link> </li>
            </ul>
          </nav>

        </header> 
    </>
  )}else{
    return (
      <>
          <header className={styles.cabecalho}>
            
            <img src="/img/produtos.png" alt="Mãos segurando caixas." /> 
  
            {/* Crie uma lista com 5 links para as nossas rotas:
            Obs: Utilize o componente Link do router-dom */}
  
            <nav>
              <ul>
                <li><Link to="/" className={rotaAtual.pathname == "/" ? "active" : "" }>HOME</Link></li>
                <li><Link to="/login" className={rotaAtual.pathname == "/login" ? "active" : "" }>LOGIN</Link></li>
              </ul>
            </nav>
  
          </header> 
      </>
    )
  }
}

