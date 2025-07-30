// AlbumList.jsx
import { useState, useEffect } from 'react';

export default function List() {
  // Estado para guardar todos os álbuns recebidos da API
  const [albums, setAlbums] = useState([]);

  // Estado para guardar os álbuns filtrados por userId
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  // Estado para controlar o valor digitado pelo usuário (userId entre 1 e 10)
  const [userId, setUserId] = useState('');

  // Estado para indicar se está carregando os dados
  const [loading, setLoading] = useState(false);

  // Estado para forçar um novo fetch quando clicarmos em "Recarregar Dados"
  const [trigger, setTrigger] = useState(0);

  // useEffect é executado sempre que o "trigger" mudar.
  // Isso serve para recarregar os dados ao clicar no botão.
  useEffect(() => {
    const fetchAlbums = async () => {
      setLoading(true); // Inicia o carregamento
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await response.json();
        setAlbums(data); // Guarda todos os álbuns
        setFilteredAlbums(data); // Mostra todos inicialmente
      } catch (error) {
        console.error('Erro ao buscar álbuns:', error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchAlbums(); // Chama a função de buscar os álbuns
  }, [trigger]);

  // useEffect executado sempre que userId ou albums mudar.
  // Ele atualiza a lista filtrada com base no userId.
  useEffect(() => {
    // Se tiver um userId válido, filtra os álbuns
    if (userId && userId >= 1 && userId <= 10) {
      const filtered = albums.filter(album => album.userId === Number(userId));
      setFilteredAlbums(filtered);
    } else {
      // Se não tiver userId válido, mostra todos
      setFilteredAlbums(albums);
    }
  }, [userId, albums]);

  // Função chamada ao clicar no botão de recarregar
  const reloadData = () => {
    setTrigger(prev => prev + 1); // Muda o trigger para forçar novo fetch
    setUserId(''); // Limpa o input e reseta filtro
  };

  return (
    <div >
      <h2> Álbuns por Usuário</h2>

      {/* Input e botão */}
      <div >
        <label htmlFor="userId">Filtrar por UserID (1-10): </label>
        <input
          id="userId"
          type="number"
          min="1"
          max="10"
          placeholder="Digite um número"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <button onClick={reloadData} >
           Recarregar Dados
        </button>
      </div>

      {/* Validação: mensagem de erro se userId for inválido */}
      {userId && (userId < 1 || userId > 10) && (
        <p >⚠️ Digite um número entre 1 e 10.</p>
      )}

      {/* Mensagem de carregamento */}
      {loading && <p>Carregando álbuns...</p>}

      {/* Lista de álbuns */}
      <ul >
        {filteredAlbums.map(album => (
          <li key={album.id} 
          >
            <strong> Álbum {album.id}:</strong> {album.title} <br />
            <em> UserID: {album.userId}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
