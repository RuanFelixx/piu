import { useState } from 'react';

function Teste () {
  const [backgroundColor, setBackgroundColor] = useState('white');

  function handleClick  ()  {
    setBackgroundColor(backgroundColor === 'white' ? 'blue' : 'white');
  };

  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <h2>Troca cor</h2>
      <button onClick={handleClick}>Clique para alterar o background</button>
    </div>
  );
}

export default Teste;
