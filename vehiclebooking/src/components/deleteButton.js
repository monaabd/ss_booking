import React, { Component } from 'react';
import '../css/App.css';


class DeleteButton extends Component {
  constructor(props){
    super(props);

  this.clickDelete = this.clickDelete.bind(this);
}


 clickDelete() {
    let item = JSON.stringify(this.props.carId);
    return fetch("/vehicles" + '/' + item, {
    method: "DELETE",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());
     console.log(this.props.carId);
     this.props.printMsg(""+this.props.carId);

}
  render() {
    return (
      <button onClick={this.clickDelete}>DELETE</button>
    );
  }
}

export default DeleteButton;
