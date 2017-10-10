import React, { Component } from 'react';
import '../css/App.css';


class Navbar extends Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li><button onClick={this.props.clickStart}>Start</button></li>
            <li><button onClick={this.props.clickVehicles}>Vehicles</button></li>
            <li><button onClick={this.props.clickAdmin}>Admin login</button></li>
          </ul>
        </header>
      </div>
    );
  }

}

export default Navbar;
