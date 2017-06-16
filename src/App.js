import React, { Component } from 'react';
import './App.css';
import ShowLocations from './components/ShowLocations'

class App extends Component {
  render() {

    return (
      <div className="container-fluid">
        <div>
        <h3 style={{color: "white", padding:"25px", letterSpacing: "10px", display:"inline-block", border: "5px solid white"}}>HITMAN SELECTOR</h3>
        </div>
        <ShowLocations />
      </div>
    );
  }
}

export default App;
