
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function EditarProdutos() {

    //Recuperando o parâmetro ID com o HOOK useParams();
    document.title = "EDITAR PRODUTOS";
    const {id} = useParams();
    
    useEffect(() => {

      fetch(`http://localhost:5000/produtos/${id}`)
        .then((response)=> response.json())
        .then((response)=> console.log(response))
        .catch(error=> console.log(error))

    }, [id])
    
  return (
    <div>
      <h1>EDITAR PRODUTOS</h1>

      <div>
        <form>
          <fieldset>
            <legend>Produto Selecionado</legend>
            <div>
              <label htmlFor="idNome">Nome</label>
              <input type="text" name="nome" id="idNome" placeholder="Digite o nome do produto"/>
            </div>
            <div>
              <label htmlFor="idDesc">Descrição</label>
              <input type="text" name="desc" id="idDesc" placeholder="Digite a descrição do produto"/>
            </div>
            <div>
              <label htmlFor="idPreco">Valor</label>
              <input type="number" name="preco" id="idPreco" placeholder="Digite o valor do produto"/>
            </div>
            <div>
              <button>EDITAR</button>
            </div>
          </fieldset>
        </form>
      </div>

    </div>
  )
}
