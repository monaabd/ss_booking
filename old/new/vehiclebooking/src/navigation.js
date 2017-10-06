import React, { Component } from 'react';
import './App.css';

class Navigation extends Component {
    render() {
        return (
            <div className="App">
                <img src="logo.gif" />
                 <ul>
                    <li style={{float:'left'}}><a id="logoText" href= "#">Olssons fordon AB</a></li>
                    <li><a href="#news">Admin login</a></li>
                    <li><a className="active" href="#home">Vehicles</a></li>
                  </ul>
              </div>
          );
       }
}

export default Navigation;