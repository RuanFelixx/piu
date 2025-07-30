
import { useState, useEffect } from 'react';

export default function List() {
  
  const [users, setusers] = useState([]);
  const [filterusers, setFilterusers] = useState([]);
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const fetchusers = async () => {
      setLoading(true); 
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const user = await response.json();
        setusers(user); 
        setFilterusers(user); 
      } catch (error) {
        console.error('Erro ao buscar álbuns:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchusers(); 
  }, [trigger]);

 
  useEffect(() => {
    
    if (userId && userId >= 1 && userId <= 10) {
      const filtered = users.filter(user => user.userId === Number(userId));
      setFilterusers(filtered);
    } else {
      
      setFilterusers(users);
    }
  }, [userId, users]);

  
  const reloadUser = () => {
    setTrigger(prev => prev + 1); 
    setUserId(''); 
  };

  return (
    <div >

      <div >
        <label htmlFor="userId">Filtrar por ID (1-10): </label>
        <input
          id="userId"
          type="number"
          min="1"
          max="10"
          placeholder="Digite um número"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <button onClick={reloadUser} >
           Recarregar Dados
        </button>
      </div>

      {userId && (userId < 1 || userId > 10) && (
        <p >Digite um número entre 1 e 10.</p>
      )}

      {loading && <p>Carregando ...</p>}

      <ul >
        {filterusers.map(user => (
          <li key={user.id} 
          >
            <strong> titulo {user.id}:</strong> {user.title} <br />
            <em> UserID: {user.userId}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
