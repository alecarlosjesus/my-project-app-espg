import { useState,useEffect } from "react";
import "./Login.scss"

export default function Login() {

    const [msgstatus, setMsgstatus] = useState("");
    const [classStatus, setClassStatus] = useState("");
    

  //Vai receber os dados do FORMULÁRIO!!!
  //É um OBJETO!!!
  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });

  const handleChange = async (e) => {
    //Destructuring
    const { name, value } = e.target;
    //Preenchendo o Objeto através do
    //useState utilizando o evento OnCHange e
    //Operador SPREAD(...)
    setUsuario({ ...usuario, [name]: value });
  };

    
    useEffect(() => {

        if(msgstatus == "Login realizado com SUCESSO!!"){
            setClassStatus("login-sucesso");
        }else if(msgstatus == "Usuário e ou Senha incorretos!"){
          setClassStatus("login-erro");
        }else{
          setClassStatus("login");
        }


    }, [msgstatus])
    

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Esta variável vai se transformar em um objeto que será retornado junto com o
    // token do usuário, para que dos dados pertinentes sejam apresentados na tela.
    let user;

    try {
      const response = await fetch("http://localhost:5000/usuarios");
      if (response.ok) {
        const users = await response.json();
        // console.log(users);
        for (let x = 0; x < users.length; x++) {
          const u = users[x];

          //Realizando a validação de fato;
          if (u.email == usuario.email && u.senha == usuario.senha) {
            user = u;
            break;
          }
        }
        if (user) {

          //Redirecionando o usuário para HOME!
          setMsgstatus("Login realizado com SUCESSO!!");
          
          //Gerar o token do usuário na sessionStorage.
          //Vamos utilizar Math.Randon com uma string alfanúmerica.
          const token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);

          //Armazenar o token na sessionStorage
          //Para isso vamos utilizar o método setItem(chave, valor).
          //Precisamos lembrar que tudo o que adicionamos na sessionStorage e ou localStorage deve ser do tipo String. Neste caso o token é uma String então não existe a necessidade de realizar uma conversão por exemplo utilizando a função JSON.stringify(objeto).
          sessionStorage.setItem("token-user", token);

          //Adicionando o objeto do usuário na sessionStorage.
          sessionStorage.setItem("user-obj", JSON.stringify(user));

          setTimeout(()=>{
              window.location = "/";
            },5000);
          
        } else {
          //Limpando o form caso a validação falhe!

          setMsgstatus("Usuário e ou Senha incorretos!");
            
          setTimeout(()=>{

            setMsgstatus("");

            setUsuario({
                email: "",
                senha: "",
              });

              window.location = "/login";
            },5000);
          
        }
      } else {
        //Limpando o form caso a validação falhe!
        setUsuario({
          email: "",
          senha: "",
        });
        window.location = "/login";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login - Informações do Usuário</h1>

            <h2 className={classStatus}>{msgstatus}</h2>
            
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados de Acesso:</legend>
            <div>
              <label htmlFor="idEmail">Email:</label>
              <input
                type="email"
                name="email"
                id="idEmail"
                placeholder="Digite o seu Email."
                value={usuario.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idSenha">Senha:</label>
              <input
                type="password"
                name="senha"
                id="idSenha"
                placeholder="Digite a sua Senha."
                value={usuario.senha}
                onChange={handleChange}
              />
            </div>
            <div>
              <button>LOGIN</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
