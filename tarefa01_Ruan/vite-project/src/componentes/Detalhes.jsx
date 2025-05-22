import './Desafio.css';

function Detalhes({ personagem }) {
  if (!personagem) return null;

  return (
    <div className="selecionado">
      <h3>{personagem.nome}</h3>
      <img src={personagem.img} alt={personagem.nome} />
      <p>{personagem.descricao}</p>
    </div>
  );
}

export default Detalhes;
