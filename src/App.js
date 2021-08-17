import React, { createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import CardPage from './components/card-page/card-page';
import Header from './components/header/header';
import { STAYS } from './stays';

const AppContext = createContext();

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
     setGuests(guests => guests = adults + children);
 }, [adults, children])

const handleSearch = () => {
  setFilteredStays(stays.filter((stay) => (
    location ? stay.maxGuests >= guests && stay.city === location.split(",")[0] : stay.maxGuests >= guests
  )));
}

 const availableCities = [...new Set(stays.map(stay => stay.city))];

 const value ={
    stays,
    setStays,
    filteredStays,
    setFilteredStays,
    locationActive,
    setLocationActive,
    guestsActive,
    setGuestActive,
    location,
    setLocation,
    guests,
    setGuests,
    adults,
    setAdults,
    children,
    setChildren,
    handleSearch,
    availableCities
  };

  return (
      <div className="App">
        <AppContext.Provider value={value}>
            <Header/>
            <CardPage/>
        </AppContext.Provider>
    </div>
  );
}

export const useAppContext = () => useContext(AppContext);

export default App;
