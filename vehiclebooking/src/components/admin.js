import React, { Component } from 'react';
import '../css/Admin.css';
import UpdateCar from '../components/updateCar';

  class Admin extends Component {
     constructor(props){
      super(props);
       this.state= {
          cars: [],
          chosenCar: null,
          msgClass: "adminHide",
          msgText: "Error"
        };
  this.printCars = this.printCars.bind(this);
  this.chooseCar = this.chooseCar.bind(this);
  this.updateCar = this.updateCar.bind(this);
  this.printMsg = this.printMsg.bind(this);
  }
  componentDidMount() {
    fetch('/vehicles')
      .then(res => res.json())
      .then(cars => {
        this.setState({ cars });
      });
    }
    printMsg(text){
      console.log(text);
      this.componentDidMount();
      this.setState({
        msgClass: "adminShow",
        msgText: text
      });

      setTimeout(function() {
        this.setState({msgClass: "adminHide"});
      }.bind(this), 4000);
    }
    chooseCar(event){
      console.log(event.target)
      let clickedCar = this.state.cars.find(car => {
        return car._id === event.target.id;
      });
      console.log(clickedCar);
      this.setState({
        chosenCar: clickedCar
      });
    }
    updateCar(event){
      let newCar = this.state.chosenCar;
      if (event.target.id === "i_id") newCar.car._id = event.target.value;
      else if (event.target.id === "itype") newCar.fordonstyp = event.target.value;
      else if (event.target.id === "ilicense") newCar.requiredDrivingLicense = event.target.value;
      else if (event.target.id === "ibrand") newCar.brand = event.target.value;
      else if (event.target.id === "igear") newCar.gearbox = event.target.value;
      else if (event.target.id === "imodel") newCar.model = event.target.value;
      else if (event.target.id === "iyear") newCar.year = event.target.value;
      else if (event.target.id === "irent") newCar.dagshyra = event.target.value;
      else if (event.target.id === "iphoto") newCar.imgLink = event.target.value;
      else if (event.target.id === "ifuel") newCar.fuel = event.target.value;
      this.setState({
        chosenCar: newCar
      });
    }
    printCars(){
      return this.state.cars.map(car =>
       <tr className="adminList" key={car._id}>
        <td>Id: <b>{car._id}</b></td>
        <td>Brand: <b>{car.brand}</b></td>
        <td>Model: <b>{car.model}</b></td>
        <td>Year: <b>{car.year}</b></td>
        <td><button id={car._id} onClick={this.chooseCar}>Edit</button></td>
       </tr>
     )
    }
  render() {
    if (this.state.cars.length <= 0){
    return (
      <div>
        <h1>Admin view</h1>
        <p>Loading cars...</p>
      </div>
    );
    }
    else return (
      <div>
      <div id="adminMsg" className={this.state.msgClass}>
      {this.state.msgText}
      </div>
      <div className="adminContainer">
        <h1>Vehicles view</h1>
        <table className="adminTable">
          <tbody>
            {this.printCars()}
          </tbody>
        </table>
        <table className="adminForm">
          <UpdateCar
              chosen={this.state.chosenCar}
              upCar={this.updateCar}
              printMsg={this.printMsg}
              />
        </table>
      </div>
      </div>
   );
  }
}

export default Admin;
