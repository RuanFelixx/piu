import React from 'react';
import { carros } from './dados_carros'; // Importa a lista de carros

// Componente que renderiza listas com base nos dados importados
function ListaCarros() {
  // Filtra apenas os carros com cor vermelha
  const carrosVermelhos = carros.filter(carro => carro.cor === 'vermelha');

  return (
    <div style={{ padding: '20px' }}>
      <h2>Todos os carros:</h2>
      <ul>
        {/* Utiliza a função map para renderizar modelo e ano de cada carro */}
        {carros.map((carro, index) => (
          <li key={index}>
            Modelo: {carro.modelo} | Ano: {carro.ano}
          </li>
        ))}
      </ul>

      <h2>Carros vermelhos:</h2>
      <ul>
        {/* Aplica filter para selecionar apenas carros vermelhos e usa map para exibir modelo */}
        {carrosVermelhos.map((carro, index) => (
          <li key={index}>
            Modelo: {carro.modelo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCarros;
