import React, { Component } from 'react';
import { Locations } from '../data/locationinfo';
import _ from 'lodash';

export default class Randomizer extends Component {


randomizer(location) {
  const { disguises, weapons } = location;
return  (
  <div>
    <h3>{_.sample(disguises)}</h3>
    <h3>{_.sample(weapons)}</h3>
  </div>
)
}

renderTarget(target) {
  const { name } = target
  return (
    <div style={{textAlign: "center"}} className="col-xs-12 col-lg-6" key={name}>
    <h3>{name.toUpperCase()}</h3>
    <button className="btn btn-primary">Randomize!</button>
    </div>
  )
}

render() {
  return (
    <div>
      {Locations[0].targets.map(this.renderTarget)}
    </div>
  )
}

}
