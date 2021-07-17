import React from 'react';
import { useAppContext } from '../../App';
import { ReactComponent as Logo } from '../../assests/logo.svg';
import FilterDashboard from '../filter/filter';
import './header.scss';

const Header = () => {
    const {
        stays,
        setFilteredStays,
        setLocation,
        setLocationActive,
        setGuestActive,
        setGuests,
        setAdults,
        setChildren
    } = useAppContext();
    
    return  (
        <div className='header'>
            <Logo className='logo' 
             onClick={() => {setFilteredStays(stays); 
                setLocation(null); 
                setGuests(0); 
                setChildren(0);
                setAdults(0); 
                setLocationActive(false);
                setGuestActive(false);
                }} 
            />
            <FilterDashboard />
        </div>
    );
};

export default Header;