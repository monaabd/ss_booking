import React, { Component } from 'react';
import '../css/App.css';
import CalendarInSorting from './calendar_in_sorting';

class DateSorting extends Component {
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
   // console.log('Fire changeFrom in datesorting.js');
    this.setState({
      from: date
    });

    this.props.changeFrom(date); // send date to parent VehicleList 
  }

  changeTo(date) {
   // console.log('Fire changeTo in datesorting.js');
    this.setState({
      to: date
    });
    this.props.changeTo(date); // send date to parent VehicleList

  
  }

    render() {
    	return(
            <div id="datesorting">
            <CalendarInSorting ChangeFrom={this.changeFrom} ChangeTo= {this.changeTo} />  
            </div>
    		);
    }
  
  }

  export default DateSorting;

