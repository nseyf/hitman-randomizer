import React, { Component } from 'react';
import { Locations } from '../data/locationinfo';
import { Link } from 'react-router-dom';

export default class ShowLocations extends Component {

renderLocations(location){

const { name, backgroundImage } = location;
  return (
    <Link to={`/${location.name}`} key={location.name}>
    <div key={name} className="location-cell col-lg-4 col-xs-12 col-md-6" style={{ cursor: "pointer", textAlign: "center", height: "300px"}}>
      <h2 className="location-title">{name.toUpperCase()}</h2>
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
