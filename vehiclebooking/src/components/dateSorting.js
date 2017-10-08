import React, { Component } from 'react';
import '../css/App.css';
import Calendar_in_sorting from './calendar_in_sorting';

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
    this.setState({
      from: date
    });
  }

  changeTo(date) {
    this.setState({
      to: date
    });
  }

    render() {
    	return(
            <div id="datesorting">
            <p>From: {this.state.from}</p>
            <p>To: {this.state.to}</p>
            <Calendar_in_sorting changeFrom={this.changeFrom} changeTo= {this.changeTo} />  
            </div>
    		);
    }
  
  }

  export default DateSorting;

