import React, { Component } from 'react';
import '../css/App.css';


class Navbar extends Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li style={{float:'left'}}><a id="logoText">Olssons fordon AB</a></li>
            <li onClick={this.props.clickStart}>Start</li>
            <li onClick={this.props.clickVehicles}>Vehicles</li>
            <li onClick={this.props.clickAdmin}>Admin login</li>
          </ul>
        </header>
      </div>
    );
  }

}

export default Navbar;
