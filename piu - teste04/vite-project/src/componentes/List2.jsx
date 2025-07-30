import { useState, useEffect } from 'react';

export default function List2() {
  const [albumId, setAlbumId] = useState('');
  const [album, setAlbum] = useState(null);
  const [error, setError] = useState('');
  const [trigger, setTrigger] = useState(0);

  // useEffect roda quando clicamos em "Buscar Álbum"
  useEffect(() => {
    if (!albumId) return;

    const fetchAlbum = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
        if (!response.ok) {
          setAlbum(null);
          setError('Álbum não encontrado');
        } else {
          const data = await response.json();
          setAlbum(data);
          setError('');
        }
      } catch (err) {
        setError('Erro ao buscar álbum');
        setAlbum(null);
      }
    };

    fetchAlbum();
  }, [trigger]);

  // Ao submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    if (albumId < 1 || albumId > 100) {
      setError('Digite um número entre 1 e 100');
      setAlbum(null);
      return;
    }
    setTrigger(prev => prev + 1);
  };

  // Limpa tudo
  const clear = () => {
    setAlbumId('');
    setAlbum(null);
    setError('');
  };

  return (
    <div>
      <h2>Buscar Álbum por ID</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="albumId">ID do Álbum (1-100): </label>
        <input
          id="albumId"
          type="number"
          value={albumId}
          onChange={(e) => setAlbumId(e.target.value)}
        />
        <button type="submit">Buscar Álbum</button>
        <button type="button" onClick={clear}>Limpar</button>
      </form>

      {error && <p>{error}</p>}

      {album && (
        <div>
          <p><strong>Título:</strong> {album.title}</p>
          <p><strong>UserID:</strong> {album.userId}</p>
        </div>
      )}
    </div>
  );
}
