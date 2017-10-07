import React, { Component } from 'react';
import '../css/App.css';
import UpdateButton from '../components/updateButton';
import DeleteButton from '../components/deleteButton';
import AddButton from '../components/addButton';


class UpdateCar extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValues: {}
    }
  this.updateFordonstyp = this.updateFordonstyp.bind(this);
  }
  updateFordonstyp(event){
    this.setState({
      inputValues.fordonstyp: event.target.value;
    });
  }
  render() {
    if (this.props.chosen === null || this.props.chosen === "" || this.props.chosen === undefined)
      return (
        <p>No car chosen</p>
    );
    else return (
      <input onChange={this.updateFordonstyp}>{this.props.chosen.fordonstyp} />
      <button onClick={this.update}>Update values</button>
      <UpdateButton
        values={this.state.inputValues}
      /> //this.props.values.fordontyp
      <DeleteButton
         carId={this.props.chosen._id}
       />
      <AddButton
        values={this.state.inputValues}
      />
    );
  }
}

export default UpdateCar;
