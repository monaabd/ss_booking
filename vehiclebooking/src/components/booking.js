import React, { Component } from 'react';
import '../css/App.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Calendar_in_booking from './calendar_in_booking';


class Booking extends Component {
	constructor(props){
    super(props);
        this.state = {
            startDate: moment(),
            endDate: moment()
        };
        this.checkDate = this.checkDate.bind(this);
    }

    checkDate(){

        console.log(this.props.to);
        console.log(this.props.from);
        /*
        if(this.props.from === '2017-10-10' || this.props.from === undefined){  // YYYY/MM/DD : today 
            console.log('From is today');
        }else{
            console.log('From is another day');
        }  
        */
    }

    render() {
    	return(
    		<div id="booking">
                <div>{this.checkDate()}</div>
    			<h1>Your booking information</h1>
                <div>{this.props.bookingid}</div> 
                <p>From:{this.props.from}</p>
                <p>To:{this.props.to}</p>
                <Calendar_in_booking />
                <button>Confirm</button>
    		</div>	
    		);
    }
  
  }

  export default Booking;
