import { useState, useEffect } from 'react';

export default function Comment() {
  const [comments, setComments] = useState([]); // Todos os comentários da API
  const [filteredComments, setFilteredComments] = useState([]); // Comentários filtrados
  const [postId, setPostId] = useState(''); // Valor digitado pelo usuário
  const [loading, setLoading] = useState(false); // Indicador de carregamento
  const [trigger, setTrigger] = useState(0); // Gatilho para forçar novo fetch

  // Carrega os comentários sempre que "trigger" mudar
  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        setComments(data);
        setFilteredComments(data); // Mostra todos inicialmente
      } catch (error) {
        console.error('Erro ao carregar comentários:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [trigger]);

  // Filtra os comentários quando postId ou comments mudar
  useEffect(() => {
    if (postId && postId >= 1 && postId <= 100) {
      const filtered = comments.filter(comment => comment.postId === Number(postId));
      setFilteredComments(filtered);
    } else {
      setFilteredComments(comments);
    }
  }, [postId, comments]);

  // Botão de recarregar
  const reloadComments = () => {
    setTrigger(prev => prev + 1);
    setPostId('');
  };

  return (
    <div>
      <h2>Comentários por Post</h2>

      <div>
        <label htmlFor="postId">Filtrar por PostID (1-100): </label>
        <input
          id="postId"
          type="number"
          min="1"
          max="100"
          placeholder="Digite o postId"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
        />

        <button onClick={reloadComments}>
          Atualizar Comentários
        </button>
      </div>

      {/* Validação do postId */}
      {postId && (postId < 1 || postId > 100) && (
        <p>Digite um número entre 1 e 100.</p>
      )}

      {/* Carregando... */}
      {loading && <p>Carregando comentários...</p>}

      {/* Lista de comentários */}
      <ul>
        {filteredComments.map(comment => (
          <li key={comment.id}>
            <p><strong>{comment.name}</strong></p>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
            <p>PostID: {comment.postId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
