import React, {Component} from 'react';
import '../css/App.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class CalendarInSorting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(),
            endDate: moment()
        }; // end state
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }; // end constructor

    // changes state of date FROM in this component. Also passes along date to parent.
    handleChangeStart(date) {
        this.setState({
            startDate: date,
        });
        let thedate = JSON.stringify(date);
        thedate = thedate.slice(0, 11);
        this.props.ChangeFrom(thedate); // send date to parent DateSorting      
    }; // end handleChangeStart

    // changes state of date TO in this component. Also passes along date to parent.
    handleChangeEnd(date) {
        this.setState({
            endDate: date,
        });
        let thedate = JSON.stringify(date);
        thedate = thedate.slice(0, 11);
        this.props.ChangeTo(thedate); // send date to parent DateSorting
    }; // end handleChangeEnd

  render() {
    return (
     <div id="calendarBox">
      <p className="chooseDate">Pick-up date:</p>
      <DatePicker
        dateFormat="YYYY/MM/DD"
        showWeekNumbers
        openToDate={moment("2017-10-12")}
        monthsShown={1}
        minDate={this.state.startDate}
        selected={this.state.startDate}
        selectsStart
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onChange={this.handleChangeStart}
      />
      <p className="chooseDate">Drop-off date:</p>
      <DatePicker
        dateFormat="YYYY/MM/DD"
        showWeekNumbers
        openToDate={moment("2017-10-12")}
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
  }; //end render
}; //end component
export default CalendarInSorting;