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
        <div className="page-title">
        <Link to='/'><h3 className="page-title-text" style={{
            marginTop: "10px",
            marginBottom: "100px",
          color: "#F5F5F5",
          padding:"25px",
          letterSpacing: "10px",
          display:"inline-block",
          textAlign: "center",
          border: "5px solid #F5F5F5"
          }}>
            HITMAN RANDOMIZER</h3></Link>
        </div>
        <Switch>
      <Route path='/:location' component={Randomizer} />
            <Route path='/' component= {ShowLocations} />
      </Switch>
      <a rel="noopener noreferrer" target= "_blank" href="https://github.com/nseyf/hitman-randomizer"><i style={{cursor: "pointer", marginTop: "50px", width: "100%", textAlign: "center", color: "#f5f5f5"}} className="fa fa-3x fa-github" aria-hidden="true"></i></a>
      </div>
    </BrowserRouter>

    );
  }
}

export default App;
