const valores = [
    {title: 'Goku', ehhumano:false, id:1},
    {title: 'Android17', ehhumano:false, id:2},
    {title: 'Kuririn angolano', ehhumano:true, id:3},
];

export default function Lista(){
    const lista_valores = valores.map(valor =>
        <li
        key={valor.id}
        style={{
            color: valor.ehhumano ? 'black' : 'red'
        }}
        >
        {valor.title}
        </li>
    );
    return(
        <ul>{lista_valores}</ul>
    );
}