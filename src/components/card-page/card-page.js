import React from 'react';
import Card from '../card/card';
import './card-page.scss';
import { useAppContext } from '../../App';

const CardPage = () => {
  const { filteredStays } = useAppContext();

  return(
    <div className='card-page'>
      <div className="card-page-header">
        <div className="card-page-header-heading">
          Stays in Finland
        </div>
        <div className="card-page-header-count">
          {` ${filteredStays.length} ${filteredStays.length > 2 ? 'stays': 'stay'} `}
        </div>
      </div>
      <div className='card-page-list'>
        {
          filteredStays.map(({...allStayProps}, index) => (
            <Card key ={index} {...allStayProps}/>
          )) 
        }
      </div>
      <div className='card-page-footer'>
        created by <a href='https://github.com/adetobaadedeji/windbnb'>Adetoba</a> at <a href='https://devchallenges.io/challenges/3JFYedSOZqAxYuOCNmYD'>devChallenge.io</a>
      </div>  
    </div>
      
)}

export default CardPage;