import { useEffect, useState } from "react";

export default function Produtos() {

    //Estrutura de declaração do useState.
    const[counter,setCounter] = useState(0);

    document.title = "Lista de Produtos";

    //Estrutura de declaração do useEffect que sempre executa.
    useEffect(()=>{
      console.log("Este useEffect renderiza sempre que ocorrer uma atualização neste componente ou em um elemento filho.");
    });
    
    //Estrutura de declaração do useEffect que executa uma única vez
    useEffect(()=>{
      console.log("Este useEffect renderiza renderiza apenas uma vez, no carregamento do componente!");
    },[]);

    //Estrutura de declaração do useState.
    const[counter2,setCounter2] = useState(0);

        //Estrutura de declaração do useEffect que executa sempre baseado em um determinado elemento. Este elemento pode ser:
        //Uma constante, um componente, um objeto e ou uma variável. Que deve ser monitorados no array de dependências. [ ]
        useEffect(()=>{
          console.log("Este useEffect renderiza apenas quando o objeto monitorado sofre atualização.");
        },[counter2]);

    // const handleUseState = ()=>{
    //   setCounter(1);
    // }

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <div>
        <button onClick={()=> setCounter(counter + 1)}>COUNTER - {counter}</button>
      </div>
      <div>
        <button onClick={()=> setCounter2(counter2 + 1)}>COUNTER2 - {counter2}</button>
      </div>
    </div>
  )
}
