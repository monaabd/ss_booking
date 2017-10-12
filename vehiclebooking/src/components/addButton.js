import React, { Component } from 'react';
import '../css/Admin.css';


class AddButton extends Component {
  constructor(props){
   super(props);
   this.apiAdd = this.apiAdd.bind(this);
  }
  apiAdd(){
    var addComponent = this;
    let car = JSON.stringify(this.props.newCar);
    fetch("/vehicles", {
      method: "POST",
      body: car,
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     }
    }).then(function(response){
      addComponent.props.printMsg("New vehicle has successfully been added to Database!");
    }).catch(function(error) {
      addComponent.props.printMsg('Error adding vehicle:' + error.message);
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.apiAdd}>ADD</button>
      </div>
    );
  }
}

export default AddButton;
