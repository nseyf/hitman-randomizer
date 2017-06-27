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

componentDidMount() {
  window.scrollTo(0, 0);
}

handleClick(e) {
  e.preventDefault();
window.scrollTo(200,200);

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

const taskStyle = { fontWeight: "600", color: "#151515"};
const taskDescriptorStyle = {fontWeight: "100", color: "#151515"};

// #F5F5F5, #151515

 return targets.map(target =>
   (
     <div className="card" style={{ border: "none", background: "#151515"}} key={target.name}>
       <img style={{ border: "1px solid #f5f5f5"}}className=" img-responsive card-img-top" height="auto" width= "100%" src={target.image} alt=""/>
       <div className={this.state.active ? "card-block active" : "card-block"} style={{height: "400px"}}>
          <h3 style={{background: "#F5F5F5", display: "inline-block", padding: "25px", fontWeight: "600", color: "#151515"}} className="card-title">{target.name}</h3>

<div className="card-block">
  <h4 className="card-text" style={taskStyle}><span style={taskDescriptorStyle}>Eliminate Using: </span> <br />{target.killedWith ? target.killedWith : ""}</h4>

  <h4 className="card-text" style={taskStyle}><span style={taskDescriptorStyle}>Wear Disguise: </span> <br />{target.whileWearing ? target.whileWearing : ""}</h4>
</div>
     </div>
   </div>
  ) );
}

render() {

  return (
  <div className="container">
    <div className="row">
    <button style={{
      borderRadius: "0",  fontSize: "25px", fontWeight: "600", background: "#F5F5F5", color: "#151515", marginBottom: "25px", height: "75px", textAlign: "center"}} className="btn btn-primary" onClick={this.handleClick.bind(this)}>Randomize</button>
    </div>
    <div className="row">
    <div className="card-group">
      {this.renderTargets(this.state.targets)}
    </div>
  </div>
  </div>
  )

}

}
