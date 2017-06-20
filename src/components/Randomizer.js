import React, { Component } from 'react';
import { Locations } from '../data/locationinfo';
import _ from 'lodash';

export default class Randomizer extends Component {
constructor(props) {
  super(props);

  const location = this.props.location.pathname.slice(1);
  const data = _.find(Locations, { name: location });


  this.state = {
    data: data,
    results: []
  }
}

handleClick(e) {
  e.preventDefault();
this.setState({
  results: this.state.results.concat({
    disguise: _.sample(this.state.data.disguises),
    weapon: _.sample(this.state.data.weapons)
  })
})

}

renderTargets(data) {
 return data.targets.map(target =>
   (
    <div style={{ marginTop: "50px", height: "250px", color: "white", textAlign: "center"}} className="col-xs-12 col-lg-6" key={target.name}>
    <h3 style={{letterSpacing: "10px"}}>{target.name.toUpperCase()}</h3>
      <button style={{marginTop: "25px"}} className="btn btn-primary" onClick={this.handleClick.bind(this)}>RANDOMIZE</button>
    </div>
  ) );
}

render() {

  return (
    <div>

      {this.renderTargets(this.state.data)}

    </div>
  )

}

}

    /*  {data.targets.map(this.renderTarget)} */
