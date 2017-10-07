import React, { Component } from 'react';
import '../css/App.css';
import Calendar1_in_sorting from './calendar1_in_sorting';
import Calendar2_in_sorting from './calendar2_in_sorting';
import Calendar from 'react-input-calendar';

class DateSorting extends Component {
	constructor(props){
    super(props);
    
    }

    render() {
    	return(
            <Calendar format='DD/MM/YYYY' date='01/01/2016' />
            
    		);
    }
  
  }

  export default DateSorting;

