import React, { Component } from 'react';
import { Locations } from '../data/locationinfo';
import _ from 'lodash';

export default class Randomizer extends Component {

/*
randomizer(location) {
  const { disguises, weapons } = location;
return  (
  <div>
    <h3>{_.sample(disguises)}</h3>
    <h3>{_.sample(weapons)}</h3>
  </div>
)
}
*/

renderTarget(target) {
  const { name } = target;
  return (
    <div style={{ marginTop: "50px", height: "250px", color: "white", textAlign: "center"}} className="col-xs-12 col-lg-6" key={name}>
    <h3 style={{letterSpacing: "10px"}}>{name.toUpperCase()}</h3>
    </div>
  )
}

render() {

 const location = this.props.location.pathname.slice(1);
 const data = _.find(Locations, { name: location });


  return (
    <div>
      {data.targets.map(this.renderTarget)}
      <button className="btn btn-primary" onClick={this.randomizer}>Randomize</button>
    </div>
  )

}
}
