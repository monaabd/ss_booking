import React, { Component } from 'react';
import '../css/App.css';


class AddButton extends Component {
  constructor(props){
   super(props);
   this.apiAdd = this.apiAdd.bind(this);
  }
  apiAdd(){
    let car = JSON.stringify(this.props.newCar);
    fetch("/vehicles", {
      method: "POST",
      body: car,
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     }
    }).then(function(response){
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
