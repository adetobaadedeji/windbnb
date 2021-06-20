import React, {Component} from 'react';
import Modal from "./modal";

class ModalDashboard extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            modalOpen: false
        }
        
    }

    toggleModal = () => (
        this.setState({modalOpen: !this.state.modalOpen})
    )

    render(){
      return ( 
        <div>
            <Modal modalOpen={this.state.modalOpen} toggleModal={this.toggleModal}/>
            <button type='button' onClick={this.toggleModal}>Open</button>
        </div>);
    }
}

export default ModalDashboard;