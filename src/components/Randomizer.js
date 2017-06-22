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
);

newState.data.targets.map(target =>
target.whileWearing = `${_.sample(newState.data.disguises)}`);

newState.active = true;

this.setState(newState);

}

renderTargets(targets) {

const taskStyle = { fontWeight: "600", color: "#151515"}

// #F5F5F5, #151515

 return targets.map(target =>
   (
     <div className="card" style={{border: "none", background: "#151515"}} key={target.name}>
       <img className="thumbnail card-img-top" width="100%"  src={target.image} alt=""/>
       <div className={this.state.active ? "card-block active" : "card-block"} style={{height: "400px"}}>
<div className="card-block">
       <h3 style={{fontWeight: "600", color: "#F5F5F5", fontSize: "25px", textAlign: "center"}} className="card-title">{target.name}</h3>
</div>
<div className="card-block">
  <h4 className="card-title" style={taskStyle}>{target.killedWith ? target.killedWith : ""}</h4>
</div>
<div className="card-block">
  <h4 className="card-title" style={taskStyle}>{target.whileWearing ? target.whileWearing : ""}</h4>
</div>
     </div>
   </div>
  ) );
}

render() {

  return (
  <div className="container">
    <div className="card-deck">
      {this.renderTargets(this.state.targets)}
    </div>
    <div style={{textAlign: "center"}}>
    <button style={{
        fontWeight: "bold", background: "#F5F5F5", marginTop: "25px", color: "#151515", marginBottom: "25px", height: "75px", textAlign: "center", letterSpacing: "10px"}} className="btn btn-primary" onClick={this.handleClick.bind(this)}>RANDOMIZE</button>
    </div>
  </div>
  )

}

}
