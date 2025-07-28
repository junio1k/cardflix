import InfoCards from '../Cards';
import './card.css';

const Card = (props) => {
    
    return(
       props.colaboradores.length > 0 && <div className='card' style={{backgroundColor:"#E0AA53"}}>
            <h3>{props.time}</h3>
            {props.colaboradores.map(info => <InfoCards 
            key={info.id}
            nome={info.nome} 
            data={info.data} 
            foto={info.foto}
            onDelete={props.onDelete}
            />)} 
        </div>
    );
}

export default Card;