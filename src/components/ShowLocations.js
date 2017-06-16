import React, { Component } from 'react';
import { Locations } from '../data/locationinfo';

export default class ShowLocations extends Component {

renderLocations(location){

const { name, backgroundImage } = location;

  return (
    <div className="card card-inverse" style={{display: "inline-block", margin:"15px"}}>
      <img className="card-img" src="https://psmedia.playstation.com/is/image/psmedia/hitman-screen-06-ps4-eu-22mar16?$TwoColumn_Media$" alt="" />
      <div className="card-img-overlay">
        <h3 className="card-title" style={{fontWeight: "bold", letterSpacing: "1px"}}>{name}</h3>
      </div>
    </div>
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
