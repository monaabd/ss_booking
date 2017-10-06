import React, { Component } from 'react';
import '../css/App.css';
import Calendar1_in_booking from './calendar1_in_booking';
import Calendar2_in_booking from './calendar2_in_booking';


class Booking extends Component {
	constructor(props){
    super(props);
    
    }

    render() {
    	return(
    		<div>
    			<h1>Booking pop-up</h1>
    			<Calendar1_in_booking />
    			<Calendar2_in_booking />
    		</div>	
    		);
    }
  
  }

  export default Booking;
