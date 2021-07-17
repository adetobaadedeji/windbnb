import React, { useState } from 'react';
import { useAppContext } from '../../App';
import Modal from "../modal/modal";
import './filter.scss';

const FilterDashboard = () => {
    const { location, guests } = useAppContext();

    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => (
        setModalOpen(!modalOpen)  
    )

    return ( 
    <div>
        <Modal modalOpen={modalOpen} toggleModal={toggleModal}/>
        <div className='btn-group' onClick={toggleModal}>
            <button>{location ? location : 'Add Location'}</button>
            <button>{guests > 0 ?` ${guests} ${guests === 1 ? 'guest' : 'guests'} `: 'Add Guests'}</button>
            <button><span class="material-icons">search</span></button>
        </div>
    </div>);
    
}

export default FilterDashboard;