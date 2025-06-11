import React from 'react';
import { carros } from './dados_carro'; // Importa a lista de carros fornecida por Iuri 

// esse Componente renderiza as listas com base nos dados importados
function ListaCarros() {
  // filtra todos os carros que tem acima do ano de 2019
  const carrosacima2019 = carros.filter(carro => carro.ano > 2019);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Todos os carros:</h2>
      <ul>
        {/* Utiliza a função map para renderizar modelo e a cor de cada carro */}
        {carros.map((carro, index) => (
          <li key={index}>
            Modelo: {carro.modelo} | cor: {carro.cor}
          </li>
        ))}
      </ul>

      <h2>Carros depois de 2019:</h2>
      <ul>
        {/* Aplica filter para selecionar apenas carros com anos acima de 2019 e usa map para exibir modelo */}
        {carrosacima2019.map((carro, index) => (
          <li key={index}>
            Modelo: {carro.modelo}
          </li>
        ))}
      </ul>
    </div>
  );
}
// exportar Listar carros
export default ListaCarros;
