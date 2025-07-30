import { useState, useEffect } from 'react';

export default function Cordoinput() {
  const [text, setText] = useState('');
  const [bgColor, setBgColor] = useState('white'); // Inicia com branco

  // Array com nomes das cores
  const colors = ['green', 'blue', 'black', 'purple', 'pink'];

  useEffect(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  }, [text]);

  return (
    <div style={{ 
      backgroundColor: bgColor,
      padding: '20px',
      minHeight: '20vh',
      color: bgColor === 'black' ? 'white' : 'black' // Contraste para fundo preto
    }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite algo..."
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <p>Cor atual: {bgColor}</p>
    </div>
  );
}