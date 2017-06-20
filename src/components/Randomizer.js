import React, { Component } from 'react';
import { Locations } from '../data/locationinfo';
import _ from 'lodash';

export default class Randomizer extends Component {
constructor(props) {
  super(props);

  const location = this.props.location.pathname.slice(1);
  const data = _.find(Locations, { name: location });


  this.state = {
    data,
    targets: data.targets,
  }
}

handleClick(e) {
  e.preventDefault();

const newState = Object.assign({}, this.state);
newState.data.targets = newState.data.targets.slice();
newState.data.targets.map(target =>
  target.killedWith = `${_.sample(newState.data.weapons)}`
 )
this.setState(newState);
}

renderTargets(targets) {
 return targets.map(target =>
   (
    <div style={{ borderRadius: "5px", border:"1px solid white", marginTop: "50px", height: "250px", color: "white", textAlign: "center"}} className="col-xs-12 col-lg-6" key={target.name}>
    <h3 style={{margin: "0 auto", width:"80%", paddingTop:"25px", paddingBottom: "4px", borderBottom: "1px solid white", letterSpacing: "10px"}}>{target.name.toUpperCase()}</h3>
    </div>
  ) );
}

render() {
console.log(this.state)
  return (
    <div>
    <div>
      {this.renderTargets(this.state.targets)}
    </div>
    <div style={{textAlign: "center"}}>
    <button style={{
        marginTop: "25px", marginBottom: "25px"}} className="btn btn-primary" onClick={this.handleClick.bind(this)}>RANDOMIZE</button>
    </div>
  </div>
  )

}

}
