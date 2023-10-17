import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import styles from "./Produtos.module.css";
import { AiFillEdit as Editar } from "react-icons/ai";
import { MdDeleteForever as Excluir } from "react-icons/md";
import ModalAction from "../components/ModalAction/ModalAction";

export default function Produtos() {
  document.title = "Lista de Produtos";

  const [listaProdutosLocal, setListaProdutosLocal] = useState([{}]);

  //Estrutura que recebe a lista de produtos externa e repassa para uma lista local.
  useEffect(() => {
    fetch("http://localhost:5000/produtos")
      .then((response) => response.json())
      .then((response) => setListaProdutosLocal(response))
      .catch((error) => console.log(error));
  }, []);

  const [open, setOpen] = useState(false);


  return (
    <div>
      <h1>Lista de Produtos</h1>

      <ModalAction open={open} setClose={setOpen}/>

      <button onClick={()=> setOpen(true)}>OPEN-MODAL</button>
      
      <div>
        <table className={styles.tblEstilo}>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>PREÇO</th>
              <th>EDITAR / EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
            {listaProdutosLocal.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td>{item.preco}</td>
                <td>
                  {" "}
                  <Link to={`/editar/produtos/${item.id}`}>
                    {" "}
                    <Editar />{" "}
                  </Link>{" "}
                  |{" "}
                  <Link to={`/excluir/produtos/${item.id}`}>
                    <Excluir />
                  </Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5}>
                PRODUTOS INFORMÁTICOS - QTD = {listaProdutosLocal.length}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

// <div>
// <button onClick={()=> setCounter(counter + 1)}>COUNTER - {counter}</button>
// </div>
// <div>
// <button onClick={()=> setCounter2(counter2 + 1)}>COUNTER2 - {counter2}</button>
// </div>

// //Estrutura de declaração do useEffect que executa uma única vez
// useEffect(()=>{
//   console.log("Este useEffect renderiza renderiza apenas uma vez, no carregamento do componente!");
// },[]);

// //Estrutura de declaração do useState.
// const[counter,setCounter] = useState(0);

// //Estrutura de declaração do useEffect que sempre executa.
// useEffect(()=>{
//   console.log("Este useEffect renderiza sempre que ocorrer uma atualização neste componente ou em um elemento filho.");
// });

// //Estrutura de declaração do useState.
// const[counter2,setCounter2] = useState(0);

//     //Estrutura de declaração do useEffect que executa sempre baseado em um determinado elemento. Este elemento pode ser:
//     //Uma constante, um componente, um objeto e ou uma variável. Que deve ser monitorados no array de dependências. [ ]
//     useEffect(()=>{
//       console.log("Este useEffect renderiza apenas quando o objeto monitorado sofre atualização.");
//     },[counter2]);

// // const handleUseState = ()=>{
// //   setCounter(1);
// // }
