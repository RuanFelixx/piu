import { useState } from "react"


export default function change(){
    let [valor, setValor] = useState(0)
    
    return(
        <div>
            <button onClick={() =>(setValor(valor+1))}>{valor}clique </button>
        </div>
    )
}