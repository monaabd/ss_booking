import React, { Component } from 'react';
import '../css/App.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';



class Calendar_in_booking extends Component {
	constructor(props){
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment()
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }
 
  handleChangeStart(date) {
    this.setState({
      startDate: date,
    });
    let thedate = JSON.stringify(date);

    this.props.changeFrom(thedate); // send date to parent DateSorting

    thedate = thedate.slice(0, 11);

  }
 
handleChangeEnd(date) {
    this.setState({
      endDate: date,
    });
    let thedate = JSON.stringify(date);

    this.props.changeTo(thedate); // send date to parent DateSorting

    thedate = thedate.slice(0, 11);  
  }


    render() {
    	return(
    	  <div> 
             <DatePicker
               todayButton={"Today"}
               dateFormat="YYYY/MM/DD"
               showWeekNumbers
               monthsShown={1}
               minDate={this.state.startDate}
               selected={this.state.startDate}
               selectsStart
               startDate={this.state.startDate}
               endDate={this.state.endDate}
               onChange={this.handleChangeStart}
              />
             <DatePicker 
               todayButton={"Today"}
               dateFormat="YYYY/MM/DD"
               openToDate={moment("2017-10-08")}
               showWeekNumbers
               monthsShown={1} 
               minDate={this.state.startDate}
               selected={this.state.endDate}
               selectsEnd
               startDate={this.state.startDate}
               endDate={this.state.endDate}
               onChange={this.handleChangeEnd}
             />
           </div> 	
    	);
    }
  
  }

  export default Calendar_in_booking;
