import { useState, useEffect } from 'react';

export default function Tarefa04() {
  const [users, setUsers] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <h2>Lista de Usuários (API Externa)</h2>
      <input
        type="text"
        placeholder="Filtrar por nome..."
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}