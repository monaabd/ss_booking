import React, { Component } from 'react';
import '../css/App.css';


class Vehicles extends Component {

  constructor(props){
    super(props);
    this.state = {
      vehicles : []
    };
  this.apiRequest = this.apiRequest.bind(this);
  this.update = this.update.bind(this);
  }

  apiRequest(){
  const _this = this;
  fetch('/vehicles')
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        _this.update(data);

    for (var i = 0; i < data.length; i++) {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(' id: ' + data[i]._id );
        node.appendChild(textnode);
        document.getElementById("vehicles").appendChild(node);
    } //end for loop
    }) //end data function
    } // end apiRequest

update(data){
this.setState({
vehicles : [data]
});
console.log('vehicles:');
console.log(this.state.vehicles);
}

  render() {
    return (
      <div>
        <h1>Vehicles view</h1>
        <ul id="vehicles"></ul>
        <button onClick={this.apiRequest}>Click to request db from API</button>
      </div>
    );
  }

}

export default Vehicles;
