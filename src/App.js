import React from 'react';
import {STAYS} from './stays'
import CardList from './components/card-list/card-list';
import './App.css';

class App extends React.Component{
  constructor(){
    super();

    this.state ={
      stays: STAYS
    }
  }

  render(){
    // const {stays} = this.state;

    return (
      <div className="App">
        <CardList stays = {this.state.stays}/>
      </div>
    );
  }
  
}

export default App;
