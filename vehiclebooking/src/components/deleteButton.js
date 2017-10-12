import React, { Component } from 'react';
import '../css/App.css';


class DeleteButton extends Component {
  constructor(props){
    super(props);
  this.clickDelete = this.clickDelete.bind(this);
}
 clickDelete() {
    var DelComponent = this;
    let item = JSON.stringify(this.props.carId);
    console.log(item);
    fetch("/vehicles" + '/' + item, {
    method: "DELETE"
    }).then(response =>{
     DelComponent.props.printMsg("Vehicle with Id: "+item+" successfully deleted")
   });
}
  render() {
    return (
      <button onClick={this.clickDelete}>DELETE</button>
    );
  }
}

export default DeleteButton;
