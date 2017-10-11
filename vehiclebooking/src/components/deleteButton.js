import React, { Component } from 'react';
import '../css/App.css';


class DeleteButton extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  this.clickDelete = this.clickDelete.bind(this);
}
clickDelete(){
    console.log(this.props.carId);
}
  render() {
    return (
      <button onClick={this.clickDelete}>DELETE</button>
    );
  }
}

export default DeleteButton;
