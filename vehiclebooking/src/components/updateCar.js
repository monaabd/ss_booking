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
        <tr><td>Id:</td>
          <td><span id="i_id">
          {(this.props.chosen === null) ? "" : this.props.chosen._id}</span></td></tr>
        <tr><td>Vehicle type:</td>
          <td><input id="itype"
          onChange={this.props.upCar}
          defaultValue={(this.props.chosen === null) ? "" : this.props.chosen.fordonstyp}  /></td></tr>
        <tr><td>Driving License: </td>
          <td><input id="ilicense"
          onChange={this.props.upCar}
          defaultValue={(this.props.chosen === null) ? "" : this.props.chosen.requiredDrivingLicense} /></td></tr>
        <tr><td>Brand:</td>
          <td><input id="ibrand"
          onChange={this.props.upCar}
          defaultValue={(this.props.chosen === null) ? "" : this.props.chosen.brand} /></td></tr>
        <tr><td>Gearbox:</td>
          <td><input id="igear"
          onChange={this.props.upCar}
          defaultValue={(this.props.chosen === null) ? "" : this.props.chosen.gearbox} /></td></tr>
        <tr><td>Model:</td>
          <td><input id="imodel"
          onChange={this.props.upCar}
          defaultValue={(this.props.chosen === null) ? "" : this.props.chosen.model} /></td></tr>
        <tr><td>Year:</td>
          <td><input id="iyear"
          onChange={this.props.upCar}
          defaultValue={(this.props.chosen === null) ? "" : this.props.chosen.year} /></td></tr>
        <tr><td>Rent / day:</td>
          <td><input id="irent"
          onChange={this.props.upCar}
          defaultValue={(this.props.chosen === null) ? "" : this.props.chosen.dagshyra} /></td></tr>
        <tr><td>Photo:</td>
          <td><input id="iphoto"
          onChange={this.props.upCar}
          defaultValue={(this.props.chosen === null) ? "" : this.props.chosen.imgLink} /></td></tr>
        <tr><td>Fuel:</td>
          <td><input id="ifuel"
          onChange={this.props.upCar}
          defaultValue={(this.props.chosen === null) ? "" : this.props.chosen.fuel} /></td></tr>
          <tr><td><input type="checkbox"/>Availability</td></tr>
        <tr>
          <td><UpdateButton
            newCar={this.props.chosen}
            printMsg={this.props.printMsg}
          /></td>
          <td><DeleteButton
             carId={(this.props.chosen === null) ? "" : this.props.chosen._id}
             printMsg={this.props.printMsg}
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
