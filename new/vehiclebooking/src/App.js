import React, { Component } from 'react';
import './App.css';
import Carlist from './carlist';


class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
            <img src="logo.gif" />
            <ul>
              <li><a href="#news">Admin login</a></li>
              <li><a className="active" href="#home">Vehicles</a></li>
            </ul>
          </div>
          <div id="bgcar">
            <Carlist />
          </div>
      </div>
    );
  }
}

export default App;
