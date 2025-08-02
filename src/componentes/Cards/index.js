import StarRating from "../StarRating";
import "./cards.css"; 

const InfoCards = ({nome, data, foto, onDelete}) => {
    return(
        <div className="card" >
            <div className="img-cards"><img className="img-card" src={foto} alt={nome} style={{width:"200px", borderRadius:'20px'}}></img>
            </div>
            <h4>{nome}</h4>
            <h5>{data}</h5>
            <button onClick={()=> onDelete(nome)}>Excluir</button>
            <StarRating />
        </div>
    );
}

export default InfoCards;