import "./listaSuspensa.css";

const ListaSuspensa = (props) => {
    return(
        <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor} required={props.obrigatorio} >
            {props.categorias.map(categoria => {return <option key={categoria}>{categoria}</option>})}
        </select>

    )
}

export default ListaSuspensa;