import React, { Component } from 'react';
import '../css/App.css';


class Navbar extends Component {
  /*constructor(props){
    super(props);
  }*/
  render() {
    return (
      <div>
        <ul>
          <li><button onClick={this.props.clickStart}>Start</button></li>
          <li><button onClick={this.props.clickVehicles}>Vehicles</button></li>
          <li><button onClick={this.props.clickAdmin}>Admin login</button></li>
        </ul>
      </div>
    );
  }

}

export default Navbar;
