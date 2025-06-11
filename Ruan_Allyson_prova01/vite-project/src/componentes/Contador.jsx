import React, { useState } from 'react';

// Componente funcional que implementa um contador bidirecional
function Contador() {
  // Hook useState para armazenar o valor atual do contador, no caso 0
  const [contador, setContador] = useState(0);

  // Função que vai ser chamada ao clicar no botão de incrementar
  const incrementar = () => setContador(contador + 1);

  // Função que vai ser chamada ao clicar no botão de decrementar
  const decrementar = () => setContador(contador - 1);

  // O valor do contador é resetado sempre que a tela é renderizada,
  // porque o estado inicial sempre começa em 0 e voltara a ser 0 caso seja recarregada a pagina

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Contador: {contador}</h2>

      {/* Botão de incremento */}
      <button
        onClick={incrementar}
        style={{
          marginRight: '10px',
          padding: '10px 20px',
          // Muda o tamanho do botao se o contador for maior que 10, de 100px para 300
          height: contador > 10 ? 300 : 100,
        }}
      >
        Incrementar
      </button>

      {/* Botão de decremento */}
      <button
        onClick={decrementar}
        style={{
          padding: '10px 20px',
          // Muda o tamanho do botao se o contador for menor que 0, de 100px para 50
          height: contador < 0 ? 50 : 100,
        }}
      >
        Decrementar
      </button>
    </div>
  );
}

// exportar contador
export default Contador;
