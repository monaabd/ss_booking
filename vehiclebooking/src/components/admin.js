import React, { Component } from 'react';
import '../css/App.css';
import UpdateCar from '../components/updateCar';


class Admin extends Component {
  constructor(props){
    super(props);
    this.state= {
      cars: [],
      chosenCar: null
    };
  this.printCars = this.printCars.bind(this);
  this.chooseCar = this.chooseCar.bind(this);
  }
  componentDidMount() {
    fetch('/vehicles')
      .then(res => res.json())
      .then(cars => this.setState({ cars }));
    }
    chooseCar(event){
      let clickedCar = this.state.cars.find(car => {
        return car._id === event.target.parentNode.id;
      });
      console.log(clickedCar);
      this.setState({
        chosenCar: clickedCar
      });
    }
    printCars(){
      return this.state.cars.map(car =>
       <tr onClick={this.chooseCar} className="adminList" key={car._id} id={car._id}>
        <td>Id: <b>{car._id}</b></td>
        <td>Brand: <b>{car.brand}</b></td>
        <td>Model: <b>{car.model}</b></td>
        <td>Year: <b>{car.year}</b></td>
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
        <h1>Vehicles view</h1>
        <table>
          <tbody>
            {this.printCars()}
          </tbody>
        </table>
        <UpdateCar
          chosen={this.state.chosenCar}
        />
      </div>
    );
  }
}

export default Admin;
