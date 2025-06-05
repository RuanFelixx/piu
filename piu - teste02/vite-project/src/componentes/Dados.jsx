import './tema.css'

function Dados() {
    const lista =[
        {   id:1,
            nome:'maça'},
        {   id:2,
            nome:'pera'
        },
        {   id:3,
            nome:'goiaba'
        },
    ];
    

    const ListarItens = lista.map((fruta)=>
        <li key={fruta.id}>{fruta.nome}</li>
    );

    return(
        <ul>{ListarItens}</ul>
    );
    }

export default Dados;
