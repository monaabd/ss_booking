import React, { Component } from 'react';
import './App.css';
import Carlist from './carlist';
import Start from './start';
import Navbar from './navbar';
import Admin from './admin';
import Vehicles from './vehicles';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: "start"   // change this to "vehicles" to render vehicles or "admin" to render admin
    }
    this.clickStart = this.clickStart.bind(this);
    this.clickVehicles = this.clickVehicles.bind(this);
    this.clickAdmin = this.clickAdmin.bind(this);
  }
  clickStart(){
    this.setState({
      view: "start"
    });
  }
  clickVehicles(){
    this.setState({
      view: "vehicles"
    });
  }
  clickAdmin(){
    this.setState({
      view: "admin"
    });
  }
  render() {
    if (this.state.view === "start"){
      return (
        <div className="App">
            <Navbar
              clickStart={this.clickStart}
              clickVehicles={this.clickVehicles}
              clickAdmin={this.clickAdmin}
            />
            <Start />
        </div>
      );
    }
    else if (this.state.view === "vehicles"){
      return (
        <div className="App">
            <Navbar
              clickStart={this.clickStart}
              clickVehicles={this.clickVehicles}
              clickAdmin={this.clickAdmin}
            />
            <Vehicles />
        </div>
      );
    }
    else if (this.state.view === "admin"){
      return (
        <div className="App">
            <Navbar
              clickStart={this.clickStart}
              clickVehicles={this.clickVehicles}
              clickAdmin={this.clickAdmin}
            />
            <Admin />
        </div>
      );
    }
  }
}

export default App;
