import './tema.css'
import { useState, useEffect } from 'react';

export default function Tema() {
  // Estado para controlar o tema (inicia como 'light')
  const [theme, setTheme] = useState('light');

  // useEffect para aplicar o tema no body da página
  useEffect(() => {
    document.body.className = theme; // Altera a classe do body
  }, [theme]); // Executa sempre que 'theme' mudar

  // Função para alternar entre temas
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>
        Mudar para {theme === 'light' ? '🌙 Dark' : '☀️ Light'} Mode
      </button>
      <h4>Modo atual: {theme}</h4>
    </div>
  );
}