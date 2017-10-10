import React, { Component } from 'react';
import '../css/App.css';
import DateSorting from './dateSorting';



class VehicleList extends Component {
	constructor(props){
    super(props);   
        this.state = {
              from: 'nothing',
              to: 'nothing'
        };
    this.changeFrom = this.changeFrom.bind(this);
    this.changeTo = this.changeTo.bind(this);
    }
  changeFrom(date) {
    this.setState({
      from: date
    });
    this.props.changeFrom(date);
  }

  changeTo(date) {
    this.setState({
      to: date
    });
    console.log('vehiclelist');
    this.props.changeTo(date);
  }

    render() {
          return (
            <div>
                <h1>Vehicles List</h1>
                <div><DateSorting changeFrom={this.changeFrom} changeTo={this.changeTo}/></div>
                <ul id="vehicles" className= "vehiclesContainer"></ul>
                <div>{this.props.apiRequest()}</div>
            </div>  
          );
        }
    }
  
  export default VehicleList;

