import { createElement } from "react";

export default function Rodape(props) {
  return (
    <>
      <footer>
        <ul>
          {props.listaProps.map( (li,index)=>{
            createElement('li', {key:index}, li);
              return li;
      })}
      </ul>

        <p>&copy; 2021, Vite.js and React.</p>
      </footer>
    </>
  );
}
