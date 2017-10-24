import React, { Component } from 'react';
import '../css/Admin.css';
import UpdateCar from '../components/updateCar';

  class Admin extends Component {
     constructor(props){
      super(props);
       this.state= {
          cars: [],           // This will be replaced with the db list after GET request
          chosenCar: null,    // This will be replaced with the vehicle object when clicking the corresponding Edit button.
          msgClass: "adminHide",  // Used to hide and show the confirmation/error messages
          msgText: "Error"        // The pop-up message that will be showed
        };
  this.printCars = this.printCars.bind(this);
  this.chooseCar = this.chooseCar.bind(this);
  this.updateCar = this.updateCar.bind(this);
  this.printMsg = this.printMsg.bind(this);
  }
  // Load all the vehicles from the database when react has finished rendering.
  componentDidMount() {
    fetch('/vehicles')
      .then(res => res.json())
      .then(cars => {
        this.setState({ cars });
      });
    }
    // Creates a pop-up div that display a message when changing in the database
    printMsg(text){
      this.componentDidMount();
      this.setState({
        msgClass: "adminShow",
        msgText: text
      });
      setTimeout(function() {
        this.setState({msgClass: "adminHide"});
      }.bind(this) /* Binds this as this component, or this.setState will not work */
      , 4000); /* Millisecond the pop-up will be shown */
    }
    // Saves the vehicle object in this components state when clicking on it in the list
    chooseCar(event){
      let clickedCar = this.state.cars.find(car => {
        return car._id === event.target.id;
      });
      this.setState({
        chosenCar: clickedCar
      });
    }
    // This handles all the changes in the input fields (The edit form) and saves the changes in this components state.
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
      else if (event.target.id === "iavailable") newCar.dates.availability = event.target.checked;
      this.setState({
        chosenCar: newCar
      });
    }
    // Displays all the vehicles that is in the database as a table
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
    // The carlist will be empty until we get a response from the GET request
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
