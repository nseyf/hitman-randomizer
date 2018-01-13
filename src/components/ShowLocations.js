import React, { Component } from 'react';
import { Locations } from '../data/locationinfo';
import { Link } from 'react-router-dom';

export default class ShowLocations extends Component {

// For each element in the location array the app
// returns a link to the Randomizer page and a div with the
// location title on it the user can click on.

renderLocations(location){
  // Grabbing name from the location object using ES6 destructuring.
const { name } = location;
  return (
    <Link
    to={`/${location.name}`}
    key={location.name}>
       <div
       key={name}
       className="location-cell col-lg-4 col-xs-12 col-md-6"
       style={{
         cursor: "pointer",
         textAlign: "center",
         height: "300px"}}>
      <h2
      className="location-title">
      {name.toUpperCase()}
      </h2>
    </div>
  </Link>
  )
}


  render() {

    return (
    <div>
{Locations.map(this.renderLocations)}
    </div>
    )
  }
}
