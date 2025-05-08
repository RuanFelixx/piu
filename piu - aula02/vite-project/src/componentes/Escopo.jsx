import "./Escopo.css"

function Escopo (){
    const label = 'clique aqui'
    function handleClick(){
        return(
            alert("Alerta")
        )
    }
    return(
        <>
        <div>
            <h2>Teste de componemte</h2>
            <p>Show papai</p>
        </div>
        <div>
            <button onClick={()=>console.log('Você clicou aqui')}>{label}</button>
        </div>
        <div>
            <button onClick={handleClick}>{label}</button>
        </div>
        </>
    )
}

export default Escopo