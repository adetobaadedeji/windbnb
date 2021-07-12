import React from 'react';
import { useState } from 'react';
import './filter.scss'
import Modal from "../modal/modal";

const FilterDashboard = ({availableCities,
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
    handleSearch
}) => {

    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => (
        setModalOpen(!modalOpen)  
    )

    return ( 
    <div>
        <Modal modalOpen={modalOpen} 
            toggleModal={toggleModal}  
            availableCities={availableCities}
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
        <div className='btn-group' onClick={toggleModal}>
            <button>{location ? location : 'Add Location'}</button>
            <button>{guests > 0 ?` ${guests} ${guests === 1 ? 'guest' : 'guests'} `: 'Add Guests'}</button>
            <button><span class="material-icons">search</span></button>
        </div>
    </div>);
    
}

export default FilterDashboard;