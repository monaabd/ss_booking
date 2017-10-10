import React, { Component } from 'react';
import '../css/App.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';



class Calendar_in_booking extends Component {
constructor (props) {
    super(props)
    this.state = {
      startDateX: moment(),
      endDateX: moment()
    };
    this.handleChangeStartX = this.handleChangeStartX.bind(this);
    this.handleChangeEndX = this.handleChangeEndX.bind(this);
  }
 
  handleChangeStartX(date) {
    this.setState({
      startDateX: date,
    });
    let thedate = JSON.stringify(date);

    thedate = thedate.slice(0, 11);

  }
 
handleChangeEndX(date) {
    this.setState({
      endDateX: date,
    });
    let thedate = JSON.stringify(date);


    thedate = thedate.slice(0, 11);


    /* I am trying to pick out all the dates that are selected so that we can 
    show that in the availability.
     I don't know why it's not working. I tried doing it with another class, the 
    'vehileBox' (that we declaired in the vehicle.js file) and it worked */
   /* var selectedDate = document.getElementsByClassName("react-datepicker__day--range-start");
    for (let key in selectedDate){
    console.log(selectedDate[0].value); //second console output
    }  */

    // calculates the number of days between two dates.
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(2008,2,10);
    var secondDate = new Date(2008,2,22);

    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
  
  }

  render() {
    return (
     <div> 
      <p className="chooseDate">Pick-up date:</p>
      <DatePicker
        todayButton={"Today"}
        dateFormat="YYYY/MM/DD"
        showWeekNumbers
        monthsShown={1}
        minDate={this.state.startDateX}
        selected={this.state.startDateX}
        selectsStart
        startDate={this.state.startDateX}
        endDate={this.state.endDateX}
        onChange={this.handleChangeStartX}
      />
      <p className="chooseDate">Drop-off date:</p>
      <DatePicker 
        todayButton={"Today"}
        dateFormat="YYYY/MM/DD"
        openToDate={moment("2017-10-08")}
        showWeekNumbers
        monthsShown={1} 
        minDate={this.state.startDateX}
        selected={this.state.endDateX}
        selectsEnd
        startDate={this.state.startDateX}
        endDate={this.state.endDateX}
        onChange={this.handleChangeEndX}
      />
       </div> 
    );
  }
}

export default Calendar_in_booking;
