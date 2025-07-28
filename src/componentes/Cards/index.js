import StarRating from "../StarRating";
import "./cards.css"; 

const InfoCards = ({nome, data, foto, onDelete}) => {
    return(
        <div className="imagem">
            <img src={foto} alt=""></img>
            <h4>{nome}</h4>
            <h5>{data}</h5>
            <button onClick={()=> onDelete(nome)}>Excluir</button>
            <StarRating />
        </div>
    );
}

export default InfoCards;