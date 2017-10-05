import React, { Component } from 'react';
import './App.css';


class Vehicles extends Component {
  constructor(props){
    super(props);
  this.apiRequest = this.apiRequest.bind(this);
  this.handleRespone = this.handleRespone.bind(this);
  }
  apiRequest(){
      let fullUrl = `localhost:4000/vehicles`;

      return new Promise(function(resolve, reject){
        let req = new XMLHttpRequest();
        req.open('GET', fullUrl);
        req.onload = function(){
          let reqJson = JSON.parse(req.response);
          if (req.status == 200 && reqJson.status == "success"){
            resolve(reqJson);
          }
        }
        req.onerror = function() {
          if (req.status == 0)
            reject(console.log("No connection to internet"));
          else
            reject(console.log(`Something went wrong! Server status: ${req.status} Readystate: ${req.readyState} Message: ${req.responseText}`));
        }
        if (navigator.onLine) req.send();
      });
  }
  handleRespone(){
    this.apiRequest().then(function(response){
      console.log(response);
      }, function(error){
        error;
    });
  }
  render() {
    return (
      <div>
        <h1>Vehicles view</h1>
        <button onClick={this.handleRespone}>Click to request db from API</button>
      </div>
    );
  }

}

export default Vehicles;
