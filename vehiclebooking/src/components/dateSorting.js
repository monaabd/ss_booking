import React, { Component } from 'react';
import '../css/App.css';
import CalendarInSorting from './calendar_in_sorting';

class DateSorting extends Component {
	constructor(props){
    super(props);
      this.state = {
      from: 'nothing',
      to: 'nothing'
    }; //end state
    this.changeFrom = this.changeFrom.bind(this);
    this.changeTo = this.changeTo.bind(this);
    }; // end constructor

  // sets state of FROM date in this component and parent.
  changeFrom(date) {
    this.setState({
      from: date
    });
    this.props.changeFrom(date); // send date to parent VehicleList 
  }; //end changeFrom

  // sets state of TO date in this component and parent.
  changeTo(date) {
    this.setState({
      to: date
    });
    this.props.changeTo(date); // send date to parent VehicleList
  }; // end changeTo

    render() {
    	return(
            <div id="datesorting">
            <CalendarInSorting ChangeFrom={this.changeFrom} ChangeTo= {this.changeTo} />  
            </div>
    		);
    }; //end render
  }; //end component
  export default DateSorting;