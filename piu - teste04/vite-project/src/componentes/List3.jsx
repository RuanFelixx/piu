import { useState, useEffect } from 'react'

export default function List3() {
  const [albums, setAlbums] = useState([]) // Todos os álbuns
  const [filteredAlbums, setFilteredAlbums] = useState([]) // Álbuns filtrados
  const [searchTitle, setSearchTitle] = useState('') // Palavra digitada
  const [loading, setLoading] = useState(false)
  const [reloadTrigger, setReloadTrigger] = useState(0) // Para forçar novo fetch

  // Carrega álbuns da API toda vez que reloadTrigger mudar
  useEffect(() => {
    const fetchAlbums = async () => {
      setLoading(true)
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums')
        const data = await response.json()
        setAlbums(data)
        setFilteredAlbums(data) // Inicialmente exibe todos
      } catch (error) {
        console.error('Erro ao buscar álbuns:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchAlbums()
  }, [reloadTrigger])

  // Atualiza os resultados filtrados quando a busca muda
  useEffect(() => {
    const filtered = albums.filter(album =>
      album.title.toLowerCase().includes(searchTitle.toLowerCase())
    )
    setFilteredAlbums(filtered)
  }, [searchTitle, albums])

  // Envia o formulário
  const handleSubmit = (e) => {
    e.preventDefault()
    // A filtragem já acontece com o useEffect acima
  }

  // Força recarregamento dos dados da API
  const reloadData = () => {
    setReloadTrigger(prev => prev + 1)
    setSearchTitle('') // Limpa campo de busca
  }

  return (
    <div>
      <h1>Filtrar Álbuns por Título</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Palavra no título:
          <input
            type="text"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            placeholder="Ex: sunt, qui, et..."
          />
        </label>
        <button type="submit">Buscar</button>
        <button type="button" onClick={reloadData}>Recarregar Dados</button>
      </form>

      {loading && <p>Carregando álbuns...</p>}

      <p>Total de álbuns encontrados: {filteredAlbums.length}</p>

      <ul>
        {filteredAlbums.map(album => (
          <li key={album.id}>
            📘 <strong>{album.title}</strong> (UserID: {album.userId})
          </li>
        ))}
      </ul>
    </div>
  )
}
