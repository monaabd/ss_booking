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
    		<div>
    			<h1>Date sorting</h1>
    			<Calendar1_in_sorting />
    			<Calendar2_in_sorting />
    		</div>	
    		);
    }
  
  }

  export default DateSorting;

