function Teste (){
    
    const [backgroundColor, setBackgroundColor] = useState('white');
    const handleClick = () => {
        setBackgroundColor(backgroundColor === 'white' ? 'lightblue' : 'white');
    };

    return(
        <>
        <div>
            <h2>Troca cor</h2>
        </div>
        <div>
            <button onClick={handleClick}>Clique para alterar o background</button>
        </div>
        </>
    )
}

export default Teste