import React, { Component } from 'react';
import '../css/App.css';


class Vehicles extends Component {
  constructor(props){
    super(props);
  this.apiRequest = this.apiRequest.bind(this);
  }
  apiRequest(){
  fetch('/vehicles')
    .then(res => res.json())
    .then(users => console.log( users ));
  }
  render() {
    return (
      <div>
        <h1>Vehicles view</h1>
        <button onClick={this.apiRequest}>Click to request db from API</button>
      </div>
    );
  }

}

export default Vehicles;