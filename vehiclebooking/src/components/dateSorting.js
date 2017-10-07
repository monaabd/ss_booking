import React, { Component } from 'react';
import '../css/App.css';
import Calendar1_in_sorting from './calendar1_in_sorting';
import Calendar2_in_sorting from './calendar2_in_sorting';

class DateSorting extends Component {
	constructor(props){
    super(props);
      this.state = {
      from: 'nothing'
    };
    this.change = this.change.bind(this);
    }

  change(date) {
    this.setState({
      from: date
    });
  }
    render() {
    	return(
            <div>
            <p>From: {this.state.from}</p>
            <Calendar1_in_sorting change={this.change}/>  
            </div>
    		);
    }
  
  }

  export default DateSorting;

