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

    if (this.props.chosen === null || this.props.chosen === "" || this.props.chosen === undefined)
      return (
        <p>No car chosen</p>
    );
    else {
      return (
        <div>
          <span>Vehicle type: </span><input id="i1" onChange={this.props.upCar} defaultValue={this.props.chosen.fordonstyp}  /><br/>
          <span>Driving License: </span><input id="i2" onChange={this.props.upCar} defaultValue={this.props.chosen.requiredDrivingLicense} /><br/>
          <span>Brand: </span><input id="i3" onChange={this.props.upCar} defaultValue={this.props.chosen.brand} /><br/>
          <span>Model: </span><input id="i4" onChange={this.props.upCar} defaultValue={this.props.chosen.gearbox} /><br/>
          <span>Year: </span><input id="i5" onChange={this.props.upCar} defaultValue={this.props.chosen.model} /><br/>
          <span>Gearbox: </span><input id="i6" onChange={this.props.upCar} defaultValue={this.props.chosen.year} /><br/>
          <span>Rent: </span><input id="i7" onChange={this.props.upCar} defaultValue={this.props.chosen.dagshyra} /><br/>
          <span>Photo: </span><input id="i8" onChange={this.props.upCar} defaultValue={this.props.chosen.imgLink} /><br/>
          <span>Fuel: </span><input id="i9" onChange={this.props.upCar} defaultValue={this.props.chosen.fuel} /><br/>

          <UpdateButton
            newCar={this.props.chosen}
          />
          <DeleteButton
             carId={this.props.chosen._id}
           />
        /*  <AddButton
            newCar={this.props.chosen}
          />*/
        </div>
      );
    }
  }
}

export default UpdateCar;
