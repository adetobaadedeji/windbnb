// import React, { useEffect } from 'react';
// import { useState } from 'react';
import React from 'react';
import './modal.scss'


const Modal = ({modalOpen, 
    toggleModal, 
    availableCities,
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
    const displayModalHideModal = modalOpen ? "modal modal-display" : "modal modal-hide";

    const handleClick = () => {
        toggleModal();
        handleSearch();
    }    

    return(
        <div className={displayModalHideModal}>
            <div className='modal-main'>
                <div className='modal-btn-group'>
                        <div className={`btn ${locationActive ? 'active' : ''}`} onClick={()=>{ setLocationActive(true); setGuestActive(false); }}>
                            <h6>LOCATION</h6>
                            <span>{location ? location : 'Add Location'}</span>
                        </div>
                        <div className={`btn ${guestsActive ? 'active' : ''}`} onClick={()=>{setGuestActive(true); setLocationActive(false)}}>
                            <h6>GUESTS</h6>
                            <span>{guests > 0 ?` ${guests} ${guests === 1 ? 'guest' : 'guests'} `: 'Add Guests'}</span>
                        </div>
                        <div className='btn' id='search' >
                            <span class="material-icons" onClick={handleClick}>search </span>
                        </div>
                </div>
                { locationActive &&
                <div>
                    <ul>
                        {availableCities.map((city, index) => (
                                <li key={index} onClick={() => setLocation(`${city}, Finland`)}>{city}, Finland</li>
                        ))}
                    </ul>
                </div>
                }
                { guestsActive &&
                <div className='guest-filter'>
                    <div className='guest-count'>
                        <div className='guest-title'>Adults</div>
                        <div className='guest-age'>Ages 13 or above</div>
                        <div className='guest-counter'>
                            <button className='decrease'onClick={() => `${adults > 0 && setAdults(adults - 1)}`}> - </button>
                            <span>{adults}</span>
                            <button className='increase'onClick={() => setAdults(adults + 1)}> + </button>
                        </div>
                    </div>
                    <div className='guest-count'>
                        <div className='guest-title'>Children</div>
                        <div className='guest-age'>Ages 2 - 12</div>
                        <div className='guest-counter'>
                            <button className='decrease' onClick={() => `${children > 0 && setChildren(children - 1)}`}> - </button>
                            <span>{children}</span>
                            <button className='increase' onClick={() => setChildren(children + 1)}> + </button>
                        </div>
                    </div>
                </div>   
                }
            </div>
        </div>
)}

export default Modal;