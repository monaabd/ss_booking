import React, { Component } from 'react';
import '../css/App.css';
import UpdateButton from '../components/updateButton';
import DeleteButton from '../components/deleteButton';
import AddButton from '../components/addButton';


class UpdateCar extends Component {
  constructor(props){
    super(props);
  }
  render() {

      return (
        <tbody key={(this.props.chosen === null) ? 0 : this.props.chosen._id}>
        <tr><td>Vehicle type:</td>
          <td><input id="i1"
          onChange={this.props.upCar}
          defaultValue={(this.props.chosen === null) ? "" : this.props.chosen.fordonstyp}  /></td></tr>
        <tr><td>Driving License: </td>
          <td><input id="i2"
          onChange={this.props.upCar}
          defaultValue={(this.props.chosen === null) ? "" : this.props.chosen.requiredDrivingLicense} /></td></tr>
        <tr><td>Brand:</td>
          <td><input id="i3"
          onChange={this.props.upCar}
          defaultValue={(this.props.chosen === null) ? "" : this.props.chosen.brand} /></td></tr>
        <tr><td>Model:</td>
          <td><input id="i4"
          onChange={this.props.upCar}
          defaultValue={(this.props.chosen === null) ? "" : this.props.chosen.gearbox} /></td></tr>
        <tr><td>Year:</td>
          <td><input id="i5"
          onChange={this.props.upCar}
          defaultValue={(this.props.chosen === null) ? "" : this.props.chosen.model} /></td></tr>
        <tr><td>Gearbox:</td>
          <td><input id="i6"
          onChange={this.props.upCar}
          defaultValue={(this.props.chosen === null) ? "" : this.props.chosen.year} /></td></tr>
        <tr><td>Rent:</td>
          <td><input id="i7"
          onChange={this.props.upCar}
          defaultValue={(this.props.chosen === null) ? "" : this.props.chosen.dagshyra} /></td></tr>
        <tr><td>Photo:</td>
          <td><input id="i8"
          onChange={this.props.upCar}
          defaultValue={(this.props.chosen === null) ? "" : this.props.chosen.imgLink} /></td></tr>
        <tr><td>Fuel:</td>
          <td><input id="i9"
          onChange={this.props.upCar}
          defaultValue={(this.props.chosen === null) ? "" : this.props.chosen.fuel} /></td></tr>
        <tr>
          <td><UpdateButton
            newCar={this.props.chosen}
          /></td>
          <td><DeleteButton
             carId={(this.props.chosen === null) ? "" : this.props.chosen._id}
           /></td>
          <td><AddButton
            newCar={this.props.chosen}
          /></td>
        </tr>
        </tbody>
      );
  }
}

export default UpdateCar;
