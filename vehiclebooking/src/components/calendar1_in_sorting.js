import React, { Component } from 'react';
import '../css/App.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';




class Calendar1_in_sorting extends Component {
constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 
  render() {
    return (
      <DatePicker
        todayButton={"Today"}
        dateFormat="YYYY/MM/DD"
        selected={this.state.startDate}
        onChange={this.handleChange}
        withPortal
        showWeekNumbers
        monthsShown={1} />
    );
  }
}

export default Calendar1_in_sorting;