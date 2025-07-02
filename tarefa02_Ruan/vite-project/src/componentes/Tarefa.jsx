import { useState } from "react";

function Tarefa() {
  const [tarefas, setTarefas] = useState([
    { id: 1, nome: "Estudar React", status: "pendente" },
    { id: 2, nome: "Fazer exercício", status: "pendente" },
    { id: 3, nome: "Ler artigo", status: "pendente" }
  ]);

  const mudarStatus = (id, novoStatus) => {
    const atualizadas = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, status: novoStatus } : tarefa
    );
    setTarefas(atualizadas);
  };

  const moverTarefa = (index, direcao) => {
    const novaLista = [...tarefas];
    const novaPosicao = index + direcao;

    if (novaPosicao >= 0 && novaPosicao < tarefas.length) {
      [novaLista[index], novaLista[novaPosicao]] = [
        novaLista[novaPosicao],
        novaLista[index]
      ];
      setTarefas(novaLista);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>📝 Gerenciador de Tarefas</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tarefas.map((tarefa, index) => (
          <li
            key={tarefa.id}
            style={{
              marginBottom: "15px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              background: "#f9f9f9"
            }}
          >
            <div>
              <strong>{tarefa.nome}</strong> <br />
              <em>Status: {tarefa.status}</em>
            </div>
            <div style={{ marginTop: "8px" }}>
              <button onClick={() => mudarStatus(tarefa.id, "realizada")}>
                ✅ Realizada
              </button>{" "}
              <button onClick={() => mudarStatus(tarefa.id, "nao realizada")}>
                ❌ Não realizada
              </button>{" "}
              <button onClick={() => mudarStatus(tarefa.id, "pendente")}>
                ⏳ Pendente
              </button>{" "}
              <button onClick={() => moverTarefa(index, -1)}>🔼 Subir</button>{" "}
              <button onClick={() => moverTarefa(index, 1)}>🔽 Descer</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tarefa;
