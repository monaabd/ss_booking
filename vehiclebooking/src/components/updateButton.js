import React, { Component } from 'react';
import '../css/App.css';


class UpdateButton extends Component {
  constructor(props){
   super(props);
   this.apiUpdate = this.apiUpdate.bind(this);
  }
  apiUpdate(){
    let car = this.props.newCar;
    console.log(car);
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
