import { useState } from "react";
import './Desafio.css';
import arlon from "../assets/arlon.jpeg";
import hiandro from "../assets/hiandro.jpeg";
import teo from "../assets/teo.jpeg";
import brian from "../assets/brian.jpeg";
import dudu from "../assets/dudu.jpeg";
import hugo from "../assets/hugo.jpeg";

function Desafio() {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [selecionado, setSelecionado] = useState(null);

  function handleClick() {
    const newColor = backgroundColor === 'white' ? 'black' : 'white';
    setBackgroundColor(newColor);
    document.body.style.backgroundColor = newColor;
    document.body.style.color = newColor === 'white' ? 'black' : 'white';
  }

  const personagens = [
    {
      nome: "Arlon",
      img: arlon,
      descricao: "Arlon chico pleto, promessa de jardin de piranhas e assasino da altinha.",
    },
    {
      nome: "Hiandro",
      img: hiandro,
      descricao: "Hiandro 14 polegadas, seria da 2v e programador nato",
    },
    {
      nome: "Teo",
      img: teo,
      descricao: 'Teo o "homem" que criou o chatgpt',
    },
    {
      nome: "Brian",
      img: brian,
      descricao: 'Brian o peladeiro, inimigo das aulas e comparsa de Ayslan',
    },
    {
      nome: "Dudu",
      img: dudu,
      descricao: 'Dudu o "homem" mais manicaca do if',
    },
    {
      nome: "Hugo",
      img: hugo,
      descricao: 'hugo o cordenador de curso de info, ai pai para',
    },
  ];

  return (
    <div className="conteudo">
      <button onClick={handleClick}>Altere o tema</button>
      <h2>Escolha seu personagem do elenco das estrelas</h2>
      <div className="personagens">
        {personagens.map((p, index) => (
          <img
            key={index}
            src={p.img}
            alt={p.nome}
            onClick={() => setSelecionado(p)}
          />
        ))}
      </div>

      {selecionado && (
        <div className="selecionado">
          <h3>{selecionado.nome}</h3>
          <img
            src={selecionado.img}
            alt={selecionado.nome}
          />
          <p>{selecionado.descricao}</p>
        </div>
      )}
    </div>
  );
}

export default Desafio;
