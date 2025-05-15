import { useState } from "react";

export default function Condicional() {
  // Inicializando os estados para controlar a troca entre as opções
  let [opcao1, setOpcao1] = useState(true);  // Representa a imagem 1
  let [opcao2, setOpcao2] = useState(false); // Representa a imagem 2

  // Função para alternar entre as opções
  const trocarImagem = () => {
    // Aqui estamos invertendo os valores das opções
    setOpcao1(!opcao1);  // Se estiver em 'true', muda para 'false' e vice-versa
    setOpcao2(!opcao2);  // Inverte o valor de 'opcao2' também
  };

  return (
    <>
      <div>
        {/* Exibindo a imagem com base no estado 'opcao1' ou 'opcao2' */}
        <img
          src={opcao1
            ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com.br%2FYERCHIC-Bandeira-Flamengo-Interior-Decora%25C3%25A7%25C3%25A3o%2Fdp%2FB0D22DWG1S&psig=AOvVaw2B-XamfhUe1-zkJ153Ctvr&ust=1747413364046000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDzxbT0pY0DFQAAAAAdAAAAABAE"
            : "https://via.placeholder.com/150"} // A imagem do Flamengo ou outra imagem com base no estado
          alt="Imagem Condicional"
        />
      </div>

      <div>
        <h1>Uma vez flamengo</h1>
        <button onClick={trocarImagem}>Trocar Imagem</button> {/* Botão para alternar entre as imagens */}
      </div>
    </>
  );
}
