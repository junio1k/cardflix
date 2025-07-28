import { useState } from 'react';
import './starRating.css';

/*const StarRating = ({ totalStar = 5, onRate }) => {
    const [rating, setRating] = useState(0);
    const [hovered, setHovered] = useState(0);

    const handleClick = (star) => {
        setRating(star);
        if (onRate) onRate(star);
    };

    return (
        <div className="star">
            {[...Array(totalStar)].map((_, i) => {
                const starValue = i + 1;
                return (
                    <span
                        key={starValue}
                        className={`star ${starValue <= (hovered || rating) ? 'filled' : ''}`}
                        onClick={() => handleClick(starValue)}
                        onMouseEnter={() => setHovered(starValue)}
                        onMouseLeave={() => setHovered(0)}
                    >
                        ★
                    </span>
                );
            })}
            <p>Avaliação: {rating} estrela{rating !== 1 ? 's' : ''}</p>
        </div>
    );
};*/

const StarRating = ({totalStar = 5, onRate}) => {
        const [rating , setRating] = useState();
        const [hovered, setHovered] = useState(0);
    
        const HandleClick = (star) => {
            setRating(star);
            //if(onRate) onRate(star); 
    }
    return(
        <div className='star'>
            {[...Array(totalStar)].map ((_, i) => {
                const starValue = i + 1;
                return(
                    <span 
                    key={starValue} 
                    className={`star ${starValue <= (hovered || rating) ? 'filled' : ''}`}
                    onClick={() => HandleClick(starValue)}
                    onMouseEnter={() => setHovered(starValue)}
                    onMouseLeave={() => setHovered(0)}
                    >
                        ★
                    </span>
                );
            })}
        </div>

    )

}

export default StarRating;