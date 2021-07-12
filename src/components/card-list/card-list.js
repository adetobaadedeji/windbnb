import React from 'react';
import Card from '../card/card';
import './card-list.scss';
// import Modal from '../modal/modal';

const CardList = (props) => (
    <div className='card-list'>
         {
          props.filteredStays.map(({...allStayProps}, index) => (
            <Card key ={index} {...allStayProps}/>
          )) 
        }
    </div>     
)

export default CardList;