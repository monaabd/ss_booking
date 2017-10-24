import React, { Component } from 'react';
import '../css/Admin.css';

class DeleteButton extends Component {
  constructor(props){
    super(props);
  this.clickDelete = this.clickDelete.bind(this);
}
/* The vehichles id is passed down to this component from the Admin component
   cliking on the Delete button will make a DELETE request to the REST API passing the id as a parameter
*/
 clickDelete() {
    var DelComponent = this;
    let item = JSON.stringify(this.props.carId);
    fetch("/vehicles/" + item, {
    method: "DELETE"
    }).then(response =>{
     DelComponent.props.printMsg("Vehicle with Id: "+item+" successfully deleted")
    }).catch(function(error) {
     DelComponent.props.printMsg('Error deleting vehicle:' + error.message);
   });
}
  render() {
    return (
      <button onClick={this.clickDelete}>DELETE</button>
    );
  }
}

export default DeleteButton;
