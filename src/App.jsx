import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import { Outlet } from "react-router-dom";
import styles from "./App.module.css";

export default function App() {
  //Lista de links redes sociais

  let listaLinks = [<li>Github</li>, <li>X</li>, <li>Reddit</li>];

  return (
    <>
      <div className="container">
        <Cabecalho />
        <Outlet />
        <Rodape listaProps={listaLinks} />
      </div>
    </>
  );
}
