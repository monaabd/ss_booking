import React, { Component } from 'react';
import '../css/App.css';
import Calendar1_in_sorting from './calendar1_in_sorting';
import Calendar2_in_sorting from './calendar2_in_sorting';

class DateSorting extends Component {
	constructor(props){
    super(props);
    
    }

    render() {
    	return(
            <Calendar1_in_sorting />
            
    		);
    }
  
  }

  export default DateSorting;

