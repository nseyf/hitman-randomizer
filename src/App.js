import React, { Component } from 'react';
import './App.css';
import ShowLocations from './components/ShowLocations';
import Randomizer from './components/Randomizer';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
<BrowserRouter>
      <div className="container-fluid">
        <div>
        <Link to='/'><h3 className="title" style={{
            marginBottom: "25px",
            color: "white",
            padding:"25px",
            letterSpacing: "10px",
            display:"inline-block",
            border: "5px solid white"}}>
            HITMAN RANDOMIZER</h3></Link>
        </div>
        <Switch>
      <Route path='/:location' component={Randomizer} />
            <Route path='/' component= {ShowLocations} />
      </Switch>
      </div>
    </BrowserRouter>

    );
  }
}

export default App;
