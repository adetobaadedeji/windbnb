import React from 'react';
import './modal.scss'

const Modal = ({modalOpen, toggleModal}) => {
    const displayModalHideModal = modalOpen ? "modal modal-display" : "modal modal-hide";
   
    return(
        <div className={displayModalHideModal}>
            <div className='modal-main'>
                <h1>Welcome, this is a modal. </h1>
                <button type='button' onClick={toggleModal}>Close</button>
            </div>
        </div>
)}

export default Modal;