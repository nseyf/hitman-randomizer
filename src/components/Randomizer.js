import React, { Component } from 'react';
import { Locations } from '../data/locationinfo';
import _ from 'lodash';


export default class Randomizer extends Component {

constructor(props) {
  super(props);

    const location = this.props.location.pathname.slice(1);
    // We search the data for the object that matches the location.
    const data = _.find(Locations, { name: location });

// State is initialised with the data object , the targets from the location
// specified as well as an active boolean
// that acts as a trigger for alternate CSS.
    this.state = {
    data,
    targets: data.targets,
    active: false
  }
}


// Ensures window scrolls to top when loading the randomizer component.
componentDidMount() {
  window.scrollTo(0, 0);
}

// handleClick generates the randomised win conditions. Each press of the Randomize
// button generates a unique combination of disguises and weapons for the game.

handleClick(e) {
  e.preventDefault();
    window.scrollTo(200,200);

      // We create a copy of the state. This allows us
      // to make several changes and then setState
      // with the single new object in one go.
      const newState = Object.assign({}, this.state);
      // We grab the targets array from the data object
      newState.data.targets = newState.data.targets.slice();
            // The targets sliced from the data object are then mapped over
            newState.data.targets.map(target =>
              // Each target has killedwith and whileWearing properties
              // that are initially blank.
              // _.sample is used to return a random element from the weapons
              // and disguises arrays.
              target.killedWith = `${_.sample(newState.data.weapons)}`
            );
            newState.data.targets.map(target =>
              target.whileWearing = `${_.sample(newState.data.disguises)}`);
              // Finally active is set to true, triggering a visual
              // change in the application.
              newState.active = true;

      // Last but not least we replace the state with the newState object.
      this.setState(newState);
        }


// renderTargets maps over each target in targets array to return a card block
// As initial values for killedWith and whileWearing are blank,
// Ternary operators are used to ensure the app does not try to
// render data that does not initially exist.

renderTargets(targets) {

    const taskStyle = { fontWeight: "600", color: "#151515"};
    const taskDescriptorStyle = {fontWeight: "100", color: "#151515"};

         return targets.map(target =>
           (
             <div
             style={{
               border: "none",
               background: "#151515"}}
             className="card"
             key={target.name}>
                <img
                style={{
                  border: "1px solid #f5f5f5"}}
                className=" img-responsive card-img-top"
                height="auto"
                width= "100%"
                src={target.image} alt=""/>
                   <div
                   className={this.state.active ? "card-block active" : "card-block"}
                   style={{height: "400px"}}>
                      <h3
                      style={{background: "#F5F5F5",
                      display: "inline-block",
                      padding: "25px",
                      fontWeight: "600",
                      color: "#151515"}}
                      className="card-title">
                      {target.name}
                         </h3>
                            <div
                            className="card-block">
                              <h4
                              className="card-text"
                              style={taskStyle}>
                              <span
                              style={taskDescriptorStyle}>
                              Eliminate Using:
                              </span>
                              <br />
                              { target.killedWith ? target.killedWith : ""}
                              </h4>

             <h4 className="card-text"
             style={taskStyle}>
                 <span
                 style={taskDescriptorStyle}>
                 Wear Disguise:
                 </span>
                 <br />
                 { target.whileWearing ? target.whileWearing : ""}
            </h4>
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
          borderRadius: "0",
          fontSize: "25px",
          fontWeight: "600",
          background: "#F5F5F5",
          color: "#151515",
          marginBottom: "25px",
          height: "75px",
          textAlign: "center"}}
          className="btn btn-primary"
          onClick={this.handleClick.bind(this)}
          >
          Randomize
          </button>
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
