import InfoCards from '../Cards';
import './card.css';

const Card = (props) => {
    
    return(
       props.colaboradores.length > 0 && <section className='card' style={{background: props.corPrimaria}}>
                <h3>{props.time}</h3>
            <div className='colaborador' style={{background:props.corSecundaria}}>
                {props.colaboradores.map(info => <InfoCards
                key={info.id}
                nome={info.nome}
                data={info.data}
                foto={info.foto}
                onDelete={props.onDelete}
                />)}
            </div>
        </section>
    );
}

export default Card;