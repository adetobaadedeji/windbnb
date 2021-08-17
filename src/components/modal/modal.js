// import React, { useEffect } from 'react';
// import { useState } from 'react';
import React from 'react';
import './modal.scss';
import { useAppContext } from '../../App';


const Modal = ({modalOpen, toggleModal}) => {
    const {
        locationActive,
        setLocationActive,
        guestsActive,
        setGuestActive,
        location,
        setLocation,
        guests,
        adults,
        setAdults,
        children,
        setChildren,
        handleSearch,
        availableCities
    } = useAppContext();

    return(
        <div className={`modal ${modalOpen ? 'modal-display' : 'modal-hide'}`} >  
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
                            <span class="material-icons" onClick={() => {toggleModal(); handleSearch();}}>search </span>
                        </div>
                </div>
                { locationActive &&
                <div className='location-options'>
                    <ul className='location-options-list'>
                        {availableCities.map((city, index) => (
                                <li className={`location-options-list-item ${location?.split(',')[0] === city ? 'active': ''}`}
                                    key={index} onClick={() => setLocation(`${city}, Finland`)}>
                                    <span class="material-icons">place</span>
                                    {city}, Finland
                                </li>
                        ))}
                    </ul>
                </div>
                }
                { guestsActive &&
                <div className='guest-filter'>
                    <div className='guest-count'>
                        <div className='guest-count-title'>Adults</div>
                        <div className='guest-count-age'>Ages 13 or above</div>
                        <div className='guest-count-counter'>
                            <button className='guest-count-counter-decrease'onClick={() => `${adults > 0 && setAdults(adults => adults - 1)}`}> - </button>
                            <span>{adults}</span>
                            <button className='guest-count-counter-increase'onClick={() => setAdults(adults => adults + 1)}> + </button>
                        </div>
                    </div>
                    <div className='guest-count'>
                        <div className='guest-count-title'>Children</div>
                        <div className='guest-count-age'>Ages 2 - 12</div>
                        <div className='guest-count-counter'>
                            <button className='guest-count-counter-decrease' onClick={() => `${children > 0 && setChildren(children => children - 1)}`}> - </button>
                            <span>{children}</span>
                            <button className='guest-count-counter-increase' onClick={() => setChildren(children => children + 1)}> + </button>
                        </div>
                    </div>
                </div>   
                }
            </div>
        </div>
)}

export default Modal;