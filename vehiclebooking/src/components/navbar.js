import React, { Component } from 'react';
import '../css/App.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li style={{float:'left'}}><a id="logoText">Olssons fordon AB</a></li>
            <li><button onClick={this.props.clickStart}>Start</button></li>
            <li><button onClick={this.props.clickVehicles}>Vehicles</button></li>
            <li><button onClick={this.props.clickAdmin}>Admin login</button></li>
          </ul>
        </header>
      </div>
    );
  }; // end render
}; // end component
export default Navbar;