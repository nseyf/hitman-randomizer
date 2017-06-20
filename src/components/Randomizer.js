import React, { Component } from 'react';
import { Locations } from '../data/locationinfo';
import _ from 'lodash';

export default class Randomizer extends Component {
constructor(props) {
  super(props);

  const location = this.props.location.pathname.slice(1);
  const data = _.find(Locations, { name: location });

// Need Icons fa-crosshairs(weapon) + fa-user-secret(disguise);
  this.state = {
    data,
    targets: data.targets,
    active: false
  }
}

handleClick(e) {
  e.preventDefault();

const newState = Object.assign({}, this.state);
newState.data.targets = newState.data.targets.slice();
newState.data.targets.map(target =>
  target.killedWith = `${_.sample(newState.data.weapons)}`
 )
newState.active = true;

this.setState(newState);
}

renderTargets(targets) {
 return targets.map(target =>
   (
    <div style={{ marginTop: "50px", height: "250px", color: "white", textAlign: "center"}} className={this.state.active ? "col-xs-12 col-lg-6 active" : "col-xs-12 col-lg-6"} key={target.name}>
    <h3 style={{fontWeight: "600", margin: "0 auto", width:"80%", paddingTop:"25px", paddingBottom: "4px", borderBottom: "1px solid white"}}>{target.name}</h3>

  <h4 style={{marginLeft: "10px", fontSize: "25px", fontWeight: "600", margin: "0 auto", paddingTop: "20px", width: "80%", textAlign: "left", color: "#151515"}}>
    <span style={{ fontSize:"20px", fontWeight:"100", marginBottom: "10px"}}>Eliminate Using:</span><br />
      {target.killedWith ? target.killedWith : ""}
    </h4>

    </div>
  ) );
}

render() {
console.log(this.state);
  return (
    <div>
    <div>
      {this.renderTargets(this.state.targets)}
    </div>
    <div style={{textAlign: "center"}}>
    <button style={{
        marginTop: "25px", paddingRight: "5px", marginBottom: "25px", height: "75px", textAlign: "center", letterSpacing: "10px"}} className="btn btn-primary" onClick={this.handleClick.bind(this)}>RANDOMIZE</button>
    </div>
  </div>
  )

}

}
