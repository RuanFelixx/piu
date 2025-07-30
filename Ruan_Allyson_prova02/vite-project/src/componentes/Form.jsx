import { useState, useEffect } from 'react';

export default function Form() {
  const [text, setText] = useState('');
  const [bgColor, setBgColor] = useState('white'); 

  const num = [1, 2, 3 , 4 ,5 ,6, 7, 8, 9 ,]
  const colors = ['green', 'blue', 'black',  'purple', 'pink'];

  useEffect(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  }, [text]);

  return (
    <form action="">
        <div style={{ 
        backgroundColor: bgColor,
        padding: '20px',
        minHeight: '20vh',
        color: bgColor === 'black' ? 'white' : 'black' 
        }}>
        <input
            type="text"
            placeholder="Digite o seu e-mail"
        />
        <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Digite um numero"
        />
        <button type="submit">Entrar</button>
        <p>Cor atual: {bgColor}</p>
        </div>
    </form>
    
  );
}