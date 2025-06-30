import { useState } from "react"

export default function Form(){

    const[tarefa, setTarefa] = useState('');

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(tarefa);

    }

    return(
        <div>
            <h1>Listar Tarefa</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" >nome da tarefa:</label>
                <input type="text" name="tarefa" placeholder="Digite sua tarefa:"/>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
        
    )
}