import React, { Component } from 'react';
import './App.css';
import ShowLocations from './components/ShowLocations';
import Randomizer from './components/Randomizer';
import { Link, HashRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
<HashRouter>
      <div className="container-fluid">
        <div className="page-title">
        <Link to='/'><h3 style={{
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
      <a><i style={{cursor: "pointer", marginBottom: "20px", marginTop: "40px", width: "100%", textAlign: "center", color: "#f5f5f5"}} className="fa fa-3x fa-github" aria-hidden="true"></i></a>
      </div>
    </HashRouter>

    );
  }
}

export default App;
