export default function Conteudo(props) {
  //Área declarativa

  return (
    <>
      {/* Área imperativa */}
      <section>
        {/* This is a comment */}
        <p>
          <a href="/">Home Page</a>
        </p>
        <button onClick={() => alert("Hello World!")}>Click Me!</button>
        <img src={props.reactLogoProps} alt={props.reactLogoAltProps} />
      </section>
    </>
  );
}
