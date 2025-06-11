import { useState } from "react";
import "./tema.css";

function Tema() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  function alternarTema() {
    setTemaEscuro(!temaEscuro);
  }

  return (
    <div className={temaEscuro ? "dark" : "light"}>
      <button onClick={alternarTema}>Trocar tema</button>
      <h1>Bem-vindo!</h1>
      <p>Este é um exemplo de troca de tema com React.</p>
    </div>
  );
}

export default Tema;
