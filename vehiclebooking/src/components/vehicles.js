import React, { Component } from 'react';
import '../css/App.css';


class Vehicles extends Component {
  constructor(props){
    super(props);
    this.state= {cars: []};
  this.apiRequest = this.apiRequest.bind(this);
  }
  apiRequest(){
  fetch('/vehicles')
    .then(res => res.json())
    .then(cars => this.setState({ cars }));
  }
  componentDidMount() {
    fetch('/vehicles')
      .then(res => res.json())
      .then(cars => this.setState({ cars }));
    }
  render() {
    if (this.state.cars.length <= 0){
    return (
      <div>
        <h1>Vehicles view</h1>
        <button onClick={this.apiRequest}>Click to request db from API</button>
        <div>
        <h1>Cars</h1>
          </div>
      </div>
    );
    }
    else return (
      <div>
        <h1>Vehicles view</h1>
        <button onClick={this.apiRequest}>Click to request db from API</button>
        <div>
        <h1>Cars</h1>
        <div key={this.state.cars[0]._id}>{this.state.cars[0].brand}{this.state.cars[0].fordonstyp}</div>
      </div>
      </div>
    );
  }

}

export default Vehicles;
