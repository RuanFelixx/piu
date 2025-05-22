import './Desafio.css';

function Galeria({ personagens, onSelecionar }) {
  return (
    <div className="personagens">
      {personagens.map((p, index) => (
        <img
          key={index}
          src={p.img}
          alt={p.nome}
          onClick={() => onSelecionar(p)}
        />
      ))}
    </div>
  );
}

export default Galeria;
