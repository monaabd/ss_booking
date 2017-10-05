import React, { Component } from 'react';
import './App.css';
import Carlist from './carlist';


class Start extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div id="bgcar">
        <Carlist />
      </div>
    );
  }

}

export default Start;
