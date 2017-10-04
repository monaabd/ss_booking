import React, { Component } from 'react';
import './App.css';
import Carlist from './carlist';
import Navigation from './navigation';
import Footer from './footer';


class App extends Component {
  render() {
    return (
      <div className="container">
          <Navigation />
          <div id="bgcar">
            <Carlist />
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;