import React, { Component } from 'react';
import '../css/Admin.css';


class UpdateButton extends Component {
  constructor(props){
   super(props);
   this.apiUpdate = this.apiUpdate.bind(this);
  }
  /* When clicking on the update button this function will make a request to the REST API.
     when clicking on the Edit button it saves the id for that vehicle and you can then update one or more properties
     at the same time using the input fields.
  */
  apiUpdate(){
    var updateComponent = this;
    let car = this.props.newCar;
    car.dates.availability = document.getElementById("iavailable").checked;
    car = JSON.stringify(car);
    fetch('/vehicles/'+car._id, {
      method: "PUT",
      body: car,
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     }
    }).then(function(response){
      updateComponent.props.printMsg("Vehicle changes successfully been saved to Database!");
    }).catch(function(error) {
      updateComponent.props.printMsg('Error updating vehicle:' + error.message);
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.apiUpdate}>UPDATE</button>
      </div>
    );
  }
}

export default UpdateButton;
