import React from 'react';
import Card from '../card/card';
import './card-list.scss';
import { useAppContext } from '../../App';

const CardList = () => {
  const { filteredStays } = useAppContext();
  return(
    <div className='card-list'>
         {
          filteredStays.map(({...allStayProps}, index) => (
            <Card key ={index} {...allStayProps}/>
          )) 
        }
    </div>     
)}

export default CardList;