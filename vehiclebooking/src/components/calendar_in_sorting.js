import React, { Component } from 'react';
import '../css/App.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';




class Calendar_in_sorting extends Component {
constructor (props) {
    super(props)
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
    let thedate = JSON.stringify(date);;
    thedate = thedate.slice(0, 11);
    console.log(thedate);
    this.props.changeFrom(thedate);
  }
 
handleChangeEnd(date) {
    this.setState({
      endDate: date,
    });
    let thedate = JSON.stringify(date);;
    thedate = thedate.slice(0, 11);
    console.log(thedate);
    this.props.changeTo(thedate);

    /* I am trying to pick out all the dates that are selected so that we can 
    show that in the availability.
     I don't know why it's not working. I tried doing it with another class, the 
    'vehileBox' (that we declaired in the vehicle.js file) and it worked */
    var selectedDate = document.getElementsByClassName("react-datepicker__day--range-start");

    for (let key in selectedDate){
    console.log(selectedDate[0].innerHTML); //second console output
    }

  }

  render() {
    return (
     <div> 
      <DatePicker
        todayButton={"Today"}
        dateFormat="YYYY/MM/DD"
        showWeekNumbers
        monthsShown={1}
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

export default Calendar_in_sorting;