import React from 'react';
import { useState, useEffect } from 'react';
import {STAYS} from './stays'
import CardList from './components/card-list/card-list';
import Header from './components/header/header';
// import Location from './components/location/location';
import './App.css';


const App = () => {
  
  const [stays, setStays] = useState(STAYS);
  const [filteredStays, setFilteredStays] = useState(stays);
  const [locationActive, setLocationActive] = useState(false);
  const [guestsActive, setGuestActive] = useState(false);
  const [location, setLocation] = useState(null);
  const [guests, setGuests] = useState(0);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  
 useEffect(()=>{
     setGuests(adults + children);
 }, [adults, children])

const handleSearch = () => {
  setFilteredStays(stays.filter((stay) => (
    location ? stay.maxGuests >= guests && stay.city === location.split(",")[0] : stay.maxGuests >= guests
  )));
}

  const availableCities = [...new Set(stays.map(stay => stay.city))];

    return (
      <div className="App">
        <Header availableCities={availableCities}
          location ={location}
          setLocation ={setLocation}
          locationActive ={locationActive}
          setLocationActive ={setLocationActive}
          guestsActive ={guestsActive}
          setGuestActive ={setGuestActive}
          guests ={guests}
          setGuests ={setGuests}
          adults ={adults}
          setAdults ={setAdults}
          children={children}
          setChildren ={setChildren}
          handleSearch = {handleSearch}
        />
        <CardList filteredStays = {filteredStays}/>
        {/* <Location availableCities = {availableCities} /> */}
       
      </div>
    );
}

export default App;
