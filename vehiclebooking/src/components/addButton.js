import React, { Component } from 'react';
import '../css/App.css';


class AddButton extends Component {
  constructor(props){
   super(props);
   this.apiAdd = this.apiAdd.bind(this);
  }
  apiAdd(){
    let car = this.props.newCar;
    console.log(car);
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