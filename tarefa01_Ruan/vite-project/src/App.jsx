import { useState } from 'react';
import './App.css';
import Tema from './componentes/Tema.jsx';
import Galeria from './componentes/Galeria.jsx';
import Detalhes from './componentes/Detalhes.jsx';
import personagens from './componentes/Personagem.jsx';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [selecionado, setSelecionado] = useState(null);

  function handleTemaClick() {
    const novaCor = backgroundColor === 'white' ? 'black' : 'white';
    setBackgroundColor(novaCor);
    document.body.style.backgroundColor = novaCor;
    document.body.style.color = novaCor === 'white' ? 'black' : 'white';
  }

  return (
    <div className="conteudo">
      <Tema onClick={handleTemaClick} />
      <h2>Escolha seu personagem do elenco das estrelas</h2>
      <Galeria personagens={personagens} onSelecionar={setSelecionado} />
      <Detalhes personagem={selecionado} />
    </div>
  );
}

export default App;
