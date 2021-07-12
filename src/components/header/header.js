import React from 'react';
import './header.scss'
import { ReactComponent as Logo } from '../../assests/logo.svg';
import FilterDashboard from '../filter/filter';

const Header = ({availableCities, 
    location, 
    setLocation,
    locationActive,
    setLocationActive,
    guestsActive,
    setGuestActive,
    guests,
    setGuests,
    adults,
    setAdults,
    children,
    setChildren,
    handleSearch,
    FilteredStays,
    setFilteredStays,
    stays
    }) => (
    <div className='header'>
        <Logo className='logo' onClick={() => {setFilteredStays(stays); setLocation(null); setGuests(0); setChildren(0); setAdults(0); }} />
        <FilterDashboard availableCities={availableCities}
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
    </div>
)

export default Header;