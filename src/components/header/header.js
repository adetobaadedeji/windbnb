import React from 'react';
import './header.scss'
import { ReactComponent as Logo } from '../../assests/logo.svg';

const Header = () => (
    <div className='header'>
        <Logo className='logo' />
        <div className='btn-group'>
            <button>Helsinki, Finland</button>
            <button>Add guests</button>
            <button><span class="material-icons">search</span></button>
        </div>
    </div>
)

export default Header;