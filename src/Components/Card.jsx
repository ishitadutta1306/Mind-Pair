import React from 'react';
import './Card.css';

const Card=({card,handleChoice,flipped,disabled})=>{ //props 'card' & 'handleChoice' need to be destructured: {card,handleChoice} in the function parameter to work
    const handleClick=()=>{
        if (!disabled){
            handleChoice(card);
        }
    }

    return (
        <div className="card">
            <div className={flipped?"flipped":""}>
                <img 
                    className="front" 
                    src={card.src} 
                    alt="card-front"
                />

                <img 
                    className="back" 
                    src="/images/cover-7.jpg" 
                    onClick={handleClick} 
                    alt="card-back"
                />

            </div>
        </div>
    )
}

export default Card;
