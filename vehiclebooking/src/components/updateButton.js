import React, { Component } from 'react';
import '../css/Admin.css';


class UpdateButton extends Component {
  constructor(props){
   super(props);
   this.apiUpdate = this.apiUpdate.bind(this);
  }
  apiUpdate(){
    var updateComponent = this;
    let car = JSON.stringify(this.props.newCar);
    fetch('/vehicles/'+car._id, {
      method: "PUT",
      body: car,
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     }
    }).then(function(response){
       updateComponent.props.printMsg("Changes saved to database");
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
