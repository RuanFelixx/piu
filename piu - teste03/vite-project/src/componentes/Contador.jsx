import React, { useState } from 'react';

// Componente funcional que implementa um contador bidirecional
function Contador() {
  // Hook useState para armazenar o valor atual do contador
  const [contador, setContador] = useState(0);

  // Função chamada ao clicar no botão de incrementar
  const incrementar = () => setContador(contador + 1);

  // Função chamada ao clicar no botão de decrementar
  const decrementar = () => setContador(contador - 1);

  // O valor do contador é resetado sempre que a tela é renderizada,
  // porque o estado inicial sempre começa em 0

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Contador: {contador}</h2>

      {/* Botão de incremento */}
      <button
        onClick={incrementar}
        style={{
          marginRight: '10px',
          padding: '10px 20px',
          // Muda a cor de fundo se o contador for maior que 10
          backgroundColor: contador > 10 ? 'green' : 'lightgray',
        }}
      >
        Incrementar
      </button>

      {/* Botão de decremento */}
      <button
        onClick={decrementar}
        style={{
          padding: '10px 20px',
          // Muda a cor de fundo se o contador for negativo
          backgroundColor: contador < 0 ? 'red' : 'lightgray',
        }}
      >
        Decrementar
      </button>
    </div>
  );
}

export default Contador;
