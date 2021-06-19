import React from 'react';
import Card from '../card/card';
import './card-list.scss';

const CardList = (props) => (
    <div className='card-list'>
         {
          props.stays.map(({...allStayProps}, index) => (
            <Card key ={index} {...allStayProps}/>
          ))
        }
    </div>     
)

export default CardList;