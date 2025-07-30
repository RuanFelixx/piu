from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict

app = FastAPI()

# Configura CORS para permitir requests do React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Porta padrão do React
    allow_methods=["*"],
    allow_headers=["*"],
)

# "Banco de dados" temporário (em memória)
tasks_db = []

# Rota GET para buscar todas as tarefas
@app.get("/tasks")
async def get_tasks():
    return tasks_db  # Retorna a lista de tarefas

# Rota POST para salvar tarefas
@app.post("/tasks")
async def create_tasks(tasks: List[Dict]):
    tasks_db.clear()  # Limpa as tarefas antigas
    tasks_db.extend(tasks)  # Adiciona as novas
    print("Tarefas recebidas:", tasks_db)  # Log no terminal
    return {"message": "Tarefas salvas com sucesso!"}