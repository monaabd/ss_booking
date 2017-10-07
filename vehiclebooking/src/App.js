import React, { Component } from 'react';
import './css/App.css';
import Start from './components/start';
import Navbar from './components/navbar';
import Admin from './components/admin';
import Vehicles from './components/vehicles';
import Footer from './components/footer';



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
            <Footer />
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
            <Footer />
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
            <Footer />
        </div>
      );
    }
  }
}

export default App;
