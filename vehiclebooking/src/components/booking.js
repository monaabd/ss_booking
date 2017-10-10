import React, { Component } from 'react';
import '../css/App.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';


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
        console.log('booking');
        console.log(this.props.from);
        if(this.props.from === '2017-10-10' || this.props.from === undefined){  // YYYY/MM/DD : today
            console.log(this.props.from);
            console.log('From is today');


        }else{
            console.log('From is another day');
            console.log(this.props.from); 
   
        }  
    }

    render() {
    	return(
    		<div>
                <div>{this.checkDate()}</div>
    			<h1>Booking pop-up</h1>
                <div>{this.props.bookingid}</div> 
    			<DatePicker
                todayButton={"Today"}
                dateFormat="YYYY/MM/DD"
                openToDate={this.state.startDate}
                showWeekNumbers
                monthsShown={1}
                minDate={this.state.startDate}
                selected={this.state.startDate}
                selectsStart
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onChange={this.handleChangeStart}
              />
    		</div>	
    		);
    }
  
  }

  export default Booking;
