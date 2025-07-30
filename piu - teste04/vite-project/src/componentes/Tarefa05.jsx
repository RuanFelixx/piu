import { useState, useEffect } from 'react';

export default function Tarefa05() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Busca tarefas do backend ao carregar
  useEffect(() => {
    fetch('http://localhost:8000/tasks')
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const saveTasks = () => {
    fetch('http://localhost:8000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tasks),
    })
      .then((res) => res.json())
      .then((data) => console.log("Sucesso:", data));
  };

  return (
    <div>
      <h2>Gerenciador de Tarefas (FastAPI)</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nova tarefa..."
      />
      <button onClick={addTask}>Adicionar</button>
      <button onClick={saveTasks}>Salvar no Backend</button>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}