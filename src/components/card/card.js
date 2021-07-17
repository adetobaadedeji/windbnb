import React from 'react';
import './card.scss';

const Card = ({superHost, title, rating, type, beds, photo}) => (
    <div className='card'>
        <img className='card-img' alt='room' src={photo}/>
        <div className='card-properties'>
           <div>
                {
                superHost 
                ?
                   <div className='card-superhost'>
                        SUPER HOST 
                    </div>
                :  
                    ''
               }
           </div> 
           <div className='card-apartment'>
                <span>{type} </span>
                <span> 
                    {
                        beds > 1 ? `. ${beds} beds` : beds === 1 ? `. ${beds} bed` : '' 
                    }
                </span>
           </div>
            <div className='card-rate'>
                <span class="material-icons">grade</span>
                <span className='card-rating'> {rating}</span>
            </div> 
        </div>
        <h3>{title}</h3>
    </div>
)

export default Card;